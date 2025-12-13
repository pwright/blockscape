# BS File Opener

Configure Linux (GNOME/Wayland) or macOS Finder to open `.bs` files with `encode-bs-share.py`, which builds a share URL and launches your browser.

## Prerequisites

- Python 3 installed
- This repository cloned locally (run the commands from the folder that contains `encode-bs-share.py`)

The helper opens the share URL in your default browser automatically.

## Linux (Fedora / GNOME)

```bash
# 1) Make the script executable
chmod +x encode-bs-share.py

# 2) Register the MIME type
mkdir -p ~/.local/share/mime/packages
cat <<EOF > ~/.local/share/mime/packages/application-x-bs-file.xml
<?xml version="1.0" encoding="UTF-8"?>
<mime-info xmlns="http://www.freedesktop.org/standards/shared-mime-info">
  <mime-type type="application/x-bs-file">
    <comment>BS Script File</comment>
    <glob pattern="*.bs"/>
  </mime-type>
</mime-info>
EOF

# 3) Create the desktop entry pointing at the absolute path of this repo
mkdir -p ~/.local/share/applications
cat <<EOF > ~/.local/share/applications/bs-opener.desktop
[Desktop Entry]
Type=Application
Name=BS Encoder Share
Comment=Process .bs files with encode-bs-share.py
Exec=$PWD/encode-bs-share.py %f
Icon=text-x-script
Terminal=true
MimeType=application/x-bs-file;
EOF

# 4) Update system databases and set the default handler
update-mime-database ~/.local/share/mime
update-desktop-database ~/.local/share/applications
xdg-mime default bs-opener.desktop application/x-bs-file

echo "Fedora setup complete. You can now double-click .bs files."
```

## macOS (Finder association)

This creates an idempotent AppleScript app at `~/Applications/Blockscape BS Opener.app` that forwards `.bs` files to `encode-bs-share.py` and registers `.bs` with Launch Services. Re-run any time you move the repo.

```bash
# 1) Make the script executable
chmod +x encode-bs-share.py

# 2) Recreate the app bundle (safe to re-run any time)
APP="$HOME/Applications/Blockscape BS Opener.app"
SCRIPT_PATH="$PWD/encode-bs-share.py"
LSREG="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"

rm -rf "$APP"
cat > /tmp/bs-opener.applescript <<EOF
on open droppedFiles
  set scriptPath to "$SCRIPT_PATH"
  repeat with f in droppedFiles
    set p to POSIX path of f
    do shell script "/usr/bin/env python3 " & quoted form of scriptPath & " " & quoted form of p
  end repeat
end open
EOF
osacompile -o "$APP" /tmp/bs-opener.applescript
rm -f /tmp/bs-opener.applescript

# 3) Register with Launch Services and bounce Finder
"$LSREG" -f "$APP"
killall Finder 2>/dev/null || true

echo "macOS setup complete. In Finder: Get Info on any .bs file -> Open with -> Blockscape BS Opener -> Change All."
```

If you move the repository, just rerun the block above; it deletes and recreates the app with the new absolute path.

If your shell still complains about heredoc parsing, create a one-off helper script instead:

```bash
cat > /tmp/setup-bs-opener.sh <<'SH'
#!/bin/bash
set -euo pipefail
APP="$HOME/Applications/Blockscape BS Opener.app"
SCRIPT_PATH="$PWD/encode-bs-share.py"
LSREG="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"

rm -rf "$APP"
cat > /tmp/bs-opener.applescript <<'APPLESCRIPT'
on open droppedFiles
  set scriptPath to "__SCRIPT_PATH__"
  repeat with f in droppedFiles
    set p to POSIX path of f
    do shell script "/usr/bin/env python3 " & quoted form of scriptPath & " " & quoted form of p
  end repeat
end open
APPLESCRIPT

perl -pi -e "s|__SCRIPT_PATH__|$SCRIPT_PATH|g" /tmp/bs-opener.applescript
osacompile -o "$APP" /tmp/bs-opener.applescript
rm -f /tmp/bs-opener.applescript

# Ensure the bundle advertises it owns .bs files (match executable name "droplet")
cat > "$APP/Contents/Info.plist" <<'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleExecutable</key><string>droplet</string>
  <key>CFBundleIdentifier</key><string>com.blockscape.bs-opener</string>
  <key>CFBundleName</key><string>Blockscape BS Opener</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleShortVersionString</key><string>1.0</string>
  <key>CFBundleVersion</key><string>1.0</string>
  <key>LSMinimumSystemVersion</key><string>10.15</string>
  <key>CFBundleDocumentTypes</key>
  <array>
    <dict>
      <key>CFBundleTypeName</key><string>Blockscape Script</string>
      <key>CFBundleTypeRole</key><string>Viewer</string>
      <key>LSHandlerRank</key><string>Owner</string>
      <key>CFBundleTypeExtensions</key>
      <array><string>bs</string></array>
    </dict>
  </array>
</dict>
</plist>
PLIST
"$LSREG" -f "$APP"
killall Finder 2>/dev/null || true

echo "macOS setup complete. In Finder: Get Info on any .bs file -> Open with -> Blockscape BS Opener -> Change All."
SH

bash /tmp/setup-bs-opener.sh
```
