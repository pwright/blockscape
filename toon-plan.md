# TOON First-Class Citizen Implementation Plan

## Overview
This document outlines the plan to make TOON (Token-Oriented Object Notation) a first-class citizen in Blockscape, alongside JSON. Currently, TOON is only available as a view-only tab with conversion capabilities. This plan extends TOON support throughout the entire application.

## Goals
1. Users can work directly with TOON format as a primary format
2. All file operations (load, save, download) support TOON
3. URL sharing and loading support TOON
4. Clipboard operations handle TOON
5. Editor integration supports TOON
6. Apicurio integration supports TOON
7. Auto-detection of format (JSON vs TOON)
8. Backward compatibility with existing JSON workflows

---

## 1. File Operations

### 1.1 File Loading
**Current State:**
- `loadJsonFiles()` loads `.bs` files (which are JSON)
- `loadFromUrl()` loads JSON from URLs
- File input accepts `.bs`, `.json`, `.txt`
- `normalizeToModelsFromText()` only parses JSON

**Changes Needed:**
- Extend `normalizeToModelsFromText()` to detect and parse TOON format
- Add `.toon` extension to file input accept list
- Update `loadJsonFiles()` to also look for `.toon` files
- Add format detection logic (check for TOON syntax vs JSON syntax)
- Update `loadFromUrl()` to handle TOON format from URLs

**Implementation:**
```javascript
// Add TOON detection
function detectFormat(text) {
  const trimmed = text.trim();
  // TOON indicators: array syntax like items[5]{id,name}:
  if (/^\w+\[\d+\]\{[\w,]+}\s*:/.test(trimmed)) return 'toon';
  // JSON indicators: starts with { or [
  if (/^\s*[\{\[]/.test(trimmed)) return 'json';
  return 'unknown';
}

// Extend normalizeToModelsFromText
function normalizeToModelsFromText(txt, titleBase = "Pasted") {
  const format = detectFormat(txt);
  if (format === 'toon') {
    // Decode TOON, then process as JSON
    const jsonData = toonLib.decode(txt);
    return processAsJson(jsonData, titleBase);
  }
  // Existing JSON logic...
}
```

### 1.2 File Saving/Download
**Current State:**
- `downloadCurrentJson()` always saves as `.json`
- Filename hardcoded to `.json` extension
- Only saves from `jsonBox` (JSON format)

**Changes Needed:**
- Add format preference setting (user preference: JSON or TOON)
- Update `downloadCurrentJson()` to respect format preference
- Save from appropriate box (jsonBox or toonBox) based on preference
- Use `.toon` extension when saving TOON format
- Add "Download as TOON" and "Download as JSON" options

**Implementation:**
```javascript
// Add user preference
let preferredFormat = localStorage.getItem('blockscape:preferredFormat') || 'json';

// Update download function
function downloadCurrentModel(source = 'shortcut') {
  const format = preferredFormat;
  let text, extension, mimeType;
  
  if (format === 'toon') {
    const toonBox = document.getElementById('toonBox');
    text = toonBox?.value || '';
    extension = '.toon';
    mimeType = 'text/plain';
  } else {
    text = jsonBox.value || '';
    extension = '.json';
    mimeType = 'application/json';
  }
  
  if (!text.trim()) {
    console.warn("[Blockscape] download ignored: box is empty.");
    return false;
  }
  
  const title = getModelTitle(models[activeIndex], 'blockscape');
  const filename = `${makeDownloadName(title)}${extension}`;
  download(filename, text, mimeType);
  return true;
}
```

### 1.3 File Extensions
**Current State:**
- Files use `.bs` extension (but contain JSON)
- File input accepts `.bs`, `.json`, `.txt`

**Changes Needed:**
- Add `.toon` to accepted file extensions
- Consider renaming `.bs` files to `.json` or supporting both
- Update documentation about file extensions

---

## 2. URL Parameters & Sharing

### 2.1 Share Links
**Current State:**
- `updateShareHashForModel()` encodes JSON data in base64 URL
- Share links use `#share=<token>` format
- Token contains JSON payload

**Changes Needed:**
- Add format parameter to share links: `#share=<token>&format=toon` or `#share=<token>&format=json`
- Encode TOON format in share token when format is TOON
- Update `consumeShareLink()` to detect and decode TOON format
- Maintain backward compatibility (default to JSON if no format specified)

**Implementation:**
```javascript
function updateShareHashForModel(model, format = 'json') {
  let encoded;
  const payload = {
    title: getModelTitle(model, 'Shared Model'),
    data: model.data,
    format: format
  };
  
  if (format === 'toon') {
    const toonData = normalizeForToon(model.data);
    const toonText = toonLib.encode(toonData);
    payload.toon = toonText;
  } else {
    payload.data = model.data; // JSON
  }
  
  const json = JSON.stringify(payload);
  encoded = base64UrlEncode(json);
  // ... rest of share logic
}

function consumeShareLink() {
  // ... existing token extraction ...
  
  if (payload.format === 'toon' && payload.toon) {
    // Decode TOON
    const jsonData = toonLib.decode(payload.toon);
    payload.data = denormalizeFromToon(jsonData);
  }
  // ... rest of consumption logic
}
```

### 2.2 Load Parameter
**Current State:**
- `consumeLoadParam()` loads from URL via `#load=<url>` or `?load=<url>`
- `loadFromUrl()` fetches and parses as JSON

**Changes Needed:**
- Auto-detect format from URL response (Content-Type header or file extension)
- Support loading `.toon` files directly
- Update `loadFromUrl()` to handle TOON format

**Implementation:**
```javascript
async function loadFromUrl(url) {
  const response = await fetchTextWithCacheBypass(url);
  const text = response.text;
  
  // Detect format from URL or content
  let format = 'json';
  if (url.endsWith('.toon')) {
    format = 'toon';
  } else {
    format = detectFormat(text);
  }
  
  if (format === 'toon') {
    const jsonData = toonLib.decode(text);
    entries = normalizeToModelsFromText(JSON.stringify(jsonData), baseName);
  } else {
    entries = normalizeToModelsFromText(text, baseName);
  }
  // ... rest of logic
}
```

---

## 3. Clipboard Operations

### 3.1 Copy
**Current State:**
- `copyJsonButton` copies JSON from `jsonBox`
- `copyToonButton` copies TOON from `toonBox` (already implemented)

**Changes Needed:**
- Add format metadata to clipboard (optional, for paste detection)
- Consider adding "Copy as TOON" and "Copy as JSON" options to both tabs
- Update copy handlers to include format hint in clipboard

### 3.2 Paste - Comprehensive Affordance Analysis

**Current State:**
- Global paste handler (`handleClipboardPaste()`) detects JSON-like content when no input is focused
- `looksLikeModelJson()` checks for JSON patterns only
- `pasteJsonButton` explicitly pastes into `jsonBox`
- Native paste (Cmd/Ctrl+V) works in textareas but doesn't auto-convert
- No paste button in TOON panel
- Global paste only works when `shouldHandleGlobalPaste()` returns true (no input focused)

**All Paste Affordances Identified:**

1. **Global Paste Handler** (document-level)
   - Triggered when: No input/textarea is focused
   - Current: Only detects JSON, appends models
   - Needed: Detect TOON, convert and append

2. **Paste Button in JSON Panel** (`pasteJsonButton`)
   - Triggered when: User clicks "Paste" button
   - Current: Pastes clipboard into `jsonBox`
   - Needed: Detect format, convert TOON to JSON if needed

3. **Native Paste in jsonBox** (Cmd/Ctrl+V when focused)
   - Triggered when: User pastes while `jsonBox` has focus
   - Current: Browser default paste (no interception)
   - Needed: Optional format detection and conversion

4. **Native Paste in toonBox** (Cmd/Ctrl+V when focused)
   - Triggered when: User pastes while `toonBox` has focus
   - Current: Browser default paste (no interception)
   - Needed: Optional format detection and conversion

5. **Paste Button in TOON Panel** (missing)
   - Triggered when: User clicks "Paste" button (to be added)
   - Current: Doesn't exist
   - Needed: Add button, paste into `toonBox`, convert JSON to TOON if needed

6. **Paste in URL Input Field**
   - Triggered when: User pastes in URL input
   - Current: Browser default (should NOT be intercepted)
   - Needed: Leave as-is (don't interfere)

7. **Paste in Apicurio Input Fields**
   - Triggered when: User pastes in Apicurio form fields
   - Current: Browser default (should NOT be intercepted)
   - Needed: Leave as-is (don't interfere)

8. **Paste in Other Form Inputs**
   - Triggered when: User pastes in any other input/textarea
   - Current: Browser default (should NOT be intercepted)
   - Needed: Leave as-is (don't interfere)

9. **Context Menu Paste** (right-click → Paste)
   - Triggered when: User uses context menu
   - Current: Browser default (works in textareas)
   - Needed: Same behavior as native paste

10. **Drag and Drop** (potential)
    - Triggered when: User drags text and drops
    - Current: Not implemented
    - Needed: Consider for future enhancement

**Changes Needed:**

1. **Extend Format Detection:**
```javascript
function looksLikeModelData(text) {
  if (!text) return false;
  const start = text.trimStart();
  // Check for TOON format (array syntax: items[5]{id,name}:)
  if (/^\w+\[\d+\]\{[\w,]+}\s*:/.test(start)) return 'toon';
  // Check for JSON format (starts with { or [)
  if (/^\s*[\{\[]/.test(start)) return 'json';
  return false;
}
```

2. **Update Global Paste Handler:**
```javascript
function handleClipboardPaste(event) {
  if (!shouldHandleGlobalPaste()) return;
  
  const text = event.clipboardData?.getData('text/plain')
    || (window.clipboardData && window.clipboardData.getData('Text'))
    || '';
  
  const format = looksLikeModelData(text);
  if (!format) return; // Not JSON or TOON, ignore
  
  let entries = [];
  try {
    if (format === 'toon') {
      // Convert TOON to JSON for processing
      const jsonData = toonLib.decode(text);
      entries = normalizeToModelsFromText(JSON.stringify(jsonData), 'Clipboard');
    } else {
      entries = normalizeToModelsFromText(text, 'Clipboard');
    }
  } catch (err) {
    console.warn('[Blockscape] clipboard paste ignored (invalid format)', err);
    return;
  }
  
  if (!entries.length) return;
  event.preventDefault();
  const startIndex = models.length;
  models.push(...entries);
  console.log(`[Blockscape] pasted ${entries.length} model(s) from clipboard (${format})`);
  setActive(startIndex);
}
```

3. **Update JSON Paste Button:**
```javascript
if (pasteJsonButton) {
  pasteJsonButton.addEventListener('click', async () => {
    try {
      const text = await readTextFromClipboard();
      if (!text) {
        alert('Clipboard is empty.');
        return;
      }
      
      const format = looksLikeModelData(text);
      if (format === 'toon') {
        // Convert TOON to JSON
        const jsonData = toonLib.decode(text);
        jsonBox.value = JSON.stringify(jsonData, null, 2);
      } else if (format === 'json') {
        jsonBox.value = text;
      } else {
        // Not recognized format, paste as-is
        jsonBox.value = text;
      }
      jsonBox.focus();
    } catch (err) {
      console.warn('[Blockscape] clipboard read failed', err);
      alert('Unable to read from the clipboard. Use Cmd/Ctrl+V inside the editor instead.');
    }
  });
}
```

4. **Add TOON Paste Button:**
```javascript
// In TOON panel creation, add paste button
const toonPasteButton = document.createElement('button');
toonPasteButton.id = 'pasteToon';
toonPasteButton.className = 'pf-v5-c-button pf-m-tertiary';
toonPasteButton.textContent = 'Paste';
toonPasteButton.title = 'Paste clipboard TOON or JSON to replace the editor contents';

toonPasteButton.addEventListener('click', async () => {
  try {
    const text = await readTextFromClipboard();
    if (!text) {
      alert('Clipboard is empty.');
      return;
    }
    
    const format = looksLikeModelData(text);
    if (format === 'json') {
      // Convert JSON to TOON
      const jsonData = JSON.parse(text);
      const normalizedData = normalizeForToon(jsonData);
      const toonText = toonLib.encode(normalizedData);
      toonBox.value = toonText;
    } else if (format === 'toon') {
      // Paste TOON directly
      toonBox.value = text;
    } else {
      // Not recognized format, paste as-is
      toonBox.value = text;
    }
    toonBox.focus();
  } catch (err) {
    console.warn('[Blockscape] clipboard read failed', err);
    alert('Unable to read from the clipboard. Use Cmd/Ctrl+V inside the editor instead.');
  }
});
```

5. **Optional: Smart Paste in Textareas (Advanced):**
```javascript
// Add paste event listeners to textareas for format detection
[jsonBox, toonBox].forEach(box => {
  if (!box) return;
  box.addEventListener('paste', (e) => {
    // Don't prevent default - let browser paste first
    setTimeout(() => {
      const pastedText = box.value;
      const format = looksLikeModelData(pastedText);
      
      if (box === jsonBox && format === 'toon') {
        // User pasted TOON into JSON box - offer conversion
        if (confirm('Detected TOON format. Convert to JSON?')) {
          try {
            const jsonData = toonLib.decode(pastedText);
            box.value = JSON.stringify(jsonData, null, 2);
          } catch (err) {
            alert('Failed to convert TOON to JSON: ' + err.message);
          }
        }
      } else if (box === toonBox && format === 'json') {
        // User pasted JSON into TOON box - offer conversion
        if (confirm('Detected JSON format. Convert to TOON?')) {
          try {
            const jsonData = JSON.parse(pastedText);
            const normalizedData = normalizeForToon(jsonData);
            const toonText = toonLib.encode(normalizedData);
            box.value = toonText;
          } catch (err) {
            alert('Failed to convert JSON to TOON: ' + err.message);
          }
        }
      }
    }, 0);
  });
});
```

**Key Considerations:**
- **Don't interfere with normal paste in form inputs** - only intercept when appropriate
- **Respect user intent** - if they paste into a specific box, use that box's format
- **Provide conversion options** - when format mismatch detected, offer to convert
- **Maintain backward compatibility** - existing JSON paste behavior should continue
- **Handle errors gracefully** - invalid format should not break the app
- **Consider user preference** - maybe auto-convert based on preference setting

### 3.3 Append from Box
**Current State:**
- `appendFromBox` button only works with JSON from `jsonBox`
- `replaceActive` button only works with JSON from `jsonBox`

**Changes Needed:**
- Support appending from TOON box (convert to JSON internally)
- Support replacing active model from TOON box
- Add buttons to TOON panel: "Append model(s)" and "Replace active with TOON"

---

## 4. Editor Integration

### 4.1 Editor Payload
**Current State:**
- `consumeEditorPayload()` reads JSON from localStorage
- Editor stores JSON in `EDITOR_TRANSFER_KEY`
- Payload format: `{ source: 'editor', text: '<json>', title: '<title>' }`

**Changes Needed:**
- Add format field to editor payload: `{ source: 'editor', text: '<data>', format: 'json'|'toon', title: '<title>' }`
- Support sending TOON format to editor
- Support receiving TOON format from editor
- Update `openInEditor` button to respect format preference

**Implementation:**
```javascript
// Update editor button handler
editButton.addEventListener('click', () => {
  const format = preferredFormat;
  let text;
  
  if (format === 'toon') {
    const toonBox = document.getElementById('toonBox');
    text = toonBox?.value || '';
  } else {
    text = jsonBox.value || '';
  }
  
  const payload = {
    source: 'editor',
    text: text,
    format: format,
    title: getModelTitle(models[activeIndex])
  };
  
  localStorage.setItem(EDITOR_TRANSFER_KEY, JSON.stringify(payload));
  // ... open editor
});

// Update consumeEditorPayload
function consumeEditorPayload() {
  // ... existing payload extraction ...
  
  if (payload.format === 'toon') {
    // Convert TOON to JSON for internal processing
    const jsonData = toonLib.decode(payload.text);
    payload.text = JSON.stringify(jsonData, null, 2);
  }
  // ... rest of logic
}
```

### 4.2 Editor.html Updates
**Note:** This requires changes to `editor.html` as well (separate task)
- Editor should detect and handle TOON format
- Editor should allow switching between JSON and TOON views
- Editor should save in user's preferred format

---

## 5. Apicurio Integration

### 5.1 Push to Apicurio
**Current State:**
- Apicurio integration pushes JSON format
- Uses JSON schema for validation

**Changes Needed:**
- Add format option to Apicurio push (JSON or TOON)
- Convert TOON to JSON before pushing (Apicurio likely expects JSON)
- Or: Support TOON format in Apicurio if it supports it
- Store format preference in Apicurio metadata

### 5.2 Pull from Apicurio
**Current State:**
- Apicurio artifacts are fetched as JSON

**Changes Needed:**
- If Apicurio stores TOON format, detect and handle it
- Convert TOON to JSON for internal processing if needed
- Display format indicator in Apicurio UI

---

## 6. UI/UX Enhancements

### 6.1 Format Preference Setting
**Changes Needed:**
- Add format selector in header/settings: "Default Format: JSON | TOON"
- Persist preference in localStorage
- Apply preference to all operations (save, share, copy, etc.)

### 6.2 Tab Behavior
**Current State:**
- Source tab shows JSON
- TOON tab shows TOON (converted from JSON)
- Conversion happens on tab switch
- **Issue**: If user navigates directly to TOON tab (without visiting Source first), toonBox is empty
- **Issue**: If user starts on TOON tab, no conversion happens because `previousTabId !== 'source'`

**Changes Needed:**
- Add format indicator to tabs ("Source (JSON)" / "TOON")
- Consider making tabs equal (not "Source" as primary)
- Add "Format" dropdown or toggle in header
- Show active format in UI
- **Fix initial tab state**: Ensure TOON is populated when tab is first activated, regardless of previous tab
- **Fix direct navigation**: Handle case where user clicks TOON tab before Source tab

**Implementation:**
```javascript
// Track if TOON has been populated for current model
let toonPopulatedForModel = null;

// Update activateTab to handle initial state
const activateTab = (targetId) => {
  const previousTabId = currentTabId;
  const toonBox = document.getElementById('toonBox');
  
  // If activating TOON tab, ensure it's populated
  if (targetId === 'toon') {
    // Check if we need to populate TOON (either first time or model changed)
    const currentModelId = activeIndex >= 0 ? models[activeIndex]?.id : null;
    const needsPopulation = toonPopulatedForModel !== currentModelId || !toonBox?.value.trim();
    
    if (needsPopulation) {
      // Get JSON from jsonBox (should be populated by loadActiveIntoEditor)
      const jsonText = jsonBox.value || '';
      if (jsonText.trim()) {
        try {
          const jsonData = JSON.parse(jsonText);
          const normalizedData = normalizeForToon(jsonData);
          const toonLib = getToonLibrary();
          
          if (toonLib && toonLib.encode) {
            const toonText = toonLib.encode(normalizedData);
            if (toonBox) {
              toonBox.value = toonText;
              toonPopulatedForModel = currentModelId; // Mark as populated
            }
          } else {
            if (toonBox) toonBox.value = 'Error: TOON library not available.';
          }
        } catch (err) {
          console.error('[Blockscape] JSON to TOON conversion error:', err);
          if (toonBox) toonBox.value = `Error: ${err.message}`;
        }
      } else {
        // No JSON available - could be empty model
        if (toonBox) toonBox.value = '';
        toonPopulatedForModel = currentModelId;
      }
    }
  }
  
  // Handle conversion when switching between source and toon tabs
  if (previousTabId === 'source' && targetId === 'toon') {
    // Already handled above, but keep for explicit source->toon switch
    // (in case jsonBox was manually edited)
    // ... existing conversion logic ...
  } else if (previousTabId === 'toon' && targetId !== 'toon') {
    // ... existing TOON to JSON conversion ...
  }
  
  currentTabId = targetId;
  // ... rest of tab activation ...
};

// Update loadActiveIntoEditor to reset TOON population flag
function loadActiveIntoEditor() {
  if (activeIndex < 0) { 
    jsonBox.value = "";
    toonPopulatedForModel = null; // Reset when no model
    return; 
  }
  jsonBox.value = JSON.stringify(models[activeIndex].data, null, 2);
  // Reset flag so TOON will be repopulated when tab is activated
  toonPopulatedForModel = null;
}

// Also update when model changes
function setActive(index) {
  // ... existing setActive logic ...
  loadActiveIntoEditor();
  rebuildFromActive();
  // TOON will be populated when user switches to TOON tab
}
```

**Alternative Approach - Populate on Model Load:**
```javascript
// Populate TOON immediately when model is loaded (lazy but ensures it's ready)
function loadActiveIntoEditor() {
  if (activeIndex < 0) { 
    jsonBox.value = "";
    // Clear TOON box too
    const toonBox = document.getElementById('toonBox');
    if (toonBox) toonBox.value = '';
    return; 
  }
  const jsonData = models[activeIndex].data;
  jsonBox.value = JSON.stringify(jsonData, null, 2);
  
  // Pre-populate TOON box (even if tab not visible)
  const toonBox = document.getElementById('toonBox');
  if (toonBox) {
    try {
      const normalizedData = normalizeForToon(jsonData);
      const toonLib = getToonLibrary();
      if (toonLib && toonLib.encode) {
        toonBox.value = toonLib.encode(normalizedData);
      }
    } catch (err) {
      console.error('[Blockscape] Failed to pre-populate TOON:', err);
      toonBox.value = '';
    }
  }
}
```

**Recommendation:**
- Use the "populate on tab activation" approach (first implementation)
- It's more efficient (only converts when needed)
- Handles edge cases better (e.g., if jsonBox is manually edited)
- Can add a loading indicator if conversion takes time

### 6.3 Source Tab Updates
**Changes Needed:**
- Rename "Source" tab to "JSON" or "Source (JSON)"
- Or: Make it context-aware ("Source" when JSON, "Source (TOON)" when TOON)
- Add format switcher in source panel

### 6.4 TOON Tab Updates
**Changes Needed:**
- Add "Append model(s)" button (convert TOON to JSON internally)
- Add "Replace active with TOON" button
- Add "Paste" button for TOON
- Show format info more prominently

---

## 7. Data Normalization

### 7.1 Current Normalization
**Current State:**
- `normalizeForToon()` converts arrays to comma-separated strings
- `denormalizeFromToon()` converts back to arrays
- Applied only during tab conversion

**Changes Needed:**
- Ensure normalization is consistent across all TOON operations
- Handle edge cases (nested arrays, mixed types)
- Document normalization strategy
- Consider making normalization optional/configurable

### 7.2 Format Detection
**Changes Needed:**
- Robust format detection function
- Handle ambiguous cases (fallback to JSON)
- Provide user feedback when format is ambiguous
- Log format detection for debugging

---

## 8. Error Handling & Validation

### 8.1 TOON Parsing Errors
**Changes Needed:**
- Better error messages for TOON decode failures
- Show line numbers in TOON syntax errors
- Validate TOON format before operations
- Provide helpful error messages with suggestions

### 8.2 Format Mismatch
**Changes Needed:**
- Detect when user pastes wrong format into box
- Auto-convert with user confirmation
- Show format warnings
- Prevent data loss from format confusion

---

## 9. Backward Compatibility

### 9.1 Existing Workflows
**Changes Needed:**
- All existing JSON workflows must continue to work
- Default format should remain JSON (unless user changes preference)
- Existing share links should continue to work
- Existing file formats (.bs, .json) should continue to work

### 9.2 Migration Path
**Changes Needed:**
- No breaking changes required
- Users can opt-in to TOON format
- Gradual adoption path
- Documentation for both formats

---

## 10. Testing Considerations

### 10.1 Test Cases
- Load JSON file → verify works
- Load TOON file → verify works
- Save as JSON → verify format
- Save as TOON → verify format
- Share JSON link → verify works
- Share TOON link → verify works
- Paste JSON → verify works
- Paste TOON → verify works
- Convert JSON → TOON → JSON → verify round-trip
- Editor integration with both formats
- Apicurio with both formats

### 10.2 Edge Cases
- Empty files
- Invalid TOON syntax
- Mixed format files
- Very large files
- Special characters in TOON
- Unicode handling
- **User navigates directly to TOON tab** (before visiting Source tab) - TOON box would be empty
- **User starts on TOON tab** (via URL parameter or default) - no conversion happens
- **Model changes while TOON tab is active** - TOON box shows old data
- **jsonBox is manually edited while TOON tab is active** - TOON box out of sync
- **TOON tab activated before model is loaded** - should show empty/placeholder
- **User navigates directly to TOON tab** (before visiting Source tab) - TOON box would be empty
- **User starts on TOON tab** (via URL parameter or default) - no conversion happens
- **Model changes while TOON tab is active** - TOON box shows old data
- **jsonBox is manually edited while TOON tab is active** - TOON box out of sync
- **TOON tab activated before model is loaded** - should show empty/placeholder

---

## 11. Documentation Updates

### 11.1 User Documentation
- Explain TOON format benefits
- Show examples of both formats
- Document format preference setting
- Update file extension documentation
- Add TOON format examples

### 11.2 Developer Documentation
- Document normalization functions
- Document format detection logic
- Document API changes
- Update architecture docs

---

## 12. Implementation Priority

### Phase 1: Core Functionality (High Priority)
1. Format detection in `normalizeToModelsFromText()`
2. File loading support for TOON
3. File saving with format preference
4. Share links with format support
5. Clipboard paste detection for TOON
6. **Fix initial tab state** - Ensure TOON is populated when tab is first activated (regardless of previous tab)
7. **Handle direct navigation to TOON tab** - Populate TOON even if user hasn't visited Source tab first

### Phase 2: Enhanced Features (Medium Priority)
1. Format preference UI
2. Editor integration
3. Apicurio integration
4. Enhanced error handling
5. UI improvements (tab labels, format indicators)

### Phase 3: Polish (Low Priority)
1. Advanced format detection
2. Format conversion utilities
3. Documentation updates
4. Performance optimizations

---

## 13. Technical Notes

### 13.1 TOON Library
- Currently loaded via ES module: `@toon-format/toon@2.0.0`
- Exposed on `window.toonFormat` with `encode` and `decode`
- Ensure library is loaded before use
- Handle library loading errors gracefully

### 13.2 Normalization Strategy
- Arrays → comma-separated strings (for tabular format)
- Empty arrays → empty strings
- Objects → keep as-is (TOON handles nested objects)
- Primitives → keep as-is
- Denormalization reverses the process

### 13.3 Performance Considerations
- TOON encoding/decoding is synchronous
- Large files may need streaming (future enhancement)
- Format detection should be fast (regex-based)
- Cache format detection results when possible

---

## 14. Open Questions

1. Should `.bs` files be JSON or TOON? Or support both?
2. Should we add a format converter utility page?
3. Should TOON be the default format for new users?
4. How to handle format in Apicurio (JSON schema vs TOON)?
5. Should editor.html support TOON natively?
6. Should we support TOON in URL-encoded share links (currently base64)?

---

## 15. Success Metrics

- Users can load TOON files seamlessly
- Users can save in their preferred format
- Share links work with both formats
- No breaking changes to existing workflows
- Format detection accuracy > 95%
- User adoption of TOON format (track via analytics)

---

## Conclusion

Making TOON a first-class citizen requires changes across file operations, URL handling, clipboard operations, editor integration, and UI. The implementation should be phased, starting with core functionality and gradually adding enhanced features. Backward compatibility is critical to ensure existing workflows continue to function.

The plan maintains JSON as the default format while providing full TOON support, allowing users to choose their preferred format based on their needs (token efficiency for LLMs vs. human readability).

