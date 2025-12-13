#!/usr/bin/env python3
"""
encode_bs_share.py

Read a .bs file, wrap it in the Blockscape share payload, encode it as a
Base64 URL-safe token, build the share URL, print it, and open it in the
default browser.

Usage:
  ./encode_bs_share.py path/to/model.bs
  ./encode_bs_share.py path/to/model.bs --base-url https://pwright.github.io/blockscape/
  ./encode_bs_share.py path/to/model.bs --base-url https://example.com/
"""

import argparse
import base64
import json
import sys
import urllib.parse
import webbrowser
from datetime import datetime
from pathlib import Path
import subprocess
from typing import Optional


DEFAULT_BASE_URL = "https://pwright.github.io/blockscape/"
DEFAULT_LOG_PATH = Path(__file__).resolve().parent / "bs-opener.log"


def base64_url_encode(text: str) -> str:
    """Base64 URL-safe encode without padding."""
    raw = text.encode("utf-8")
    token = base64.urlsafe_b64encode(raw).decode("ascii")
    return token.rstrip("=")


def derive_title(data, fallback: str) -> str:
    """
    Derive a reasonable title from the payload:
      - For dicts: prefer its `title`
      - For lists: prefer the first element's `title`
      - Otherwise: fallback
    """
    if isinstance(data, dict):
        title = data.get("title")
        if isinstance(title, str) and title.strip():
            return title.strip()
    if isinstance(data, list):
        for item in data:
            if isinstance(item, dict):
                title = item.get("title")
                if isinstance(title, str) and title.strip():
                    return title.strip()
            break
    return fallback


def build_payload(content, title_hint: str) -> dict:
    """
    Normalize file content into the shape expected by Blockscape share links:
      {
        "title": "...",
        "data": <object or array>
      }
    If the file already has that shape, reuse it.
    """
    if isinstance(content, dict) and "data" in content:
        data = content["data"]
        title = content.get("title") or title_hint
        return {"title": title, "data": data}

    title = derive_title(content, title_hint)
    return {"title": title, "data": content}


def build_share_url(base_url: str, token: str) -> str:
    """Attach the share token to the provided base URL as a fragment."""
    parsed = urllib.parse.urlparse(base_url)
    if not parsed.scheme:
        raise ValueError("Base URL must include a scheme (e.g., https://...)")

    # Remove any existing ?share=... query param to avoid ambiguity.
    query_pairs = urllib.parse.parse_qsl(parsed.query, keep_blank_values=True)
    filtered_pairs = [(k, v) for (k, v) in query_pairs if k != "share"]
    new_query = urllib.parse.urlencode(filtered_pairs)

    return urllib.parse.urlunparse(
        parsed._replace(query=new_query, fragment=f"share={token}")
    )


def load_bs_file(path: Path):
    """Load JSON from a .bs file with a helpful error message."""
    try:
        text = path.read_text(encoding="utf-8")
    except FileNotFoundError as exc:
        raise SystemExit(f"[error] file not found: {path}") from exc
    except OSError as exc:
        raise SystemExit(f"[error] could not read file: {path} ({exc})") from exc

    try:
        return json.loads(text)
    except json.JSONDecodeError as exc:
        raise SystemExit(f"[error] invalid JSON in {path}: {exc}") from exc


def open_in_browser(url: str) -> tuple[bool, str]:
    """
    Try the standard webbrowser module first, then fall back to
    platform-specific launchers (macOS: open, Linux: xdg-open).
    Returns (opened, detail) for better error reporting.
    """
    attempts = []

    try:
        opened = webbrowser.open(url)
        attempts.append("webbrowser")
        if opened:
            return True, "webbrowser"
    except Exception as exc:  # pragma: no cover - defensive
        attempts.append(f"webbrowser failed: {exc}")

    fallback = None
    if sys.platform == "darwin":
        fallback = ["open", url]
    elif sys.platform.startswith("linux"):
        fallback = ["xdg-open", url]

    if fallback:
        try:
            subprocess.check_call(fallback)
            attempts.append("fallback")
            return True, "fallback"
        except (OSError, subprocess.CalledProcessError) as exc:
            attempts.append(f"fallback failed: {exc}")

    detail = "; ".join(attempts) if attempts else "no launch attempt"
    return False, detail


def append_log(log_path: Optional[Path], message: str) -> None:
    """Append a timestamped message to the log file, ignoring write failures."""
    if log_path is None:
        return

    try:
        timestamp = datetime.utcnow().isoformat() + "Z"
        log_path.parent.mkdir(parents=True, exist_ok=True)
        with log_path.open("a", encoding="utf-8") as handle:
            handle.write(f"[{timestamp}] {message}\n")
    except OSError:
        # Logging should never block the main flow.
        pass


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Encode a Blockscape .bs file into a share URL and open it."
    )
    parser.add_argument(
        "bs_file",
        help="Path to the .bs file (JSON).",
    )
    parser.add_argument(
        "--base-url",
        default=DEFAULT_BASE_URL,
        help=f"Base URL for Blockscape (default: {DEFAULT_BASE_URL})",
    )
    parser.add_argument(
        "--log-file",
        default=str(DEFAULT_LOG_PATH),
        help=f"Path to append debug logs (default: {DEFAULT_LOG_PATH})",
    )
    parser.add_argument(
        "--no-log",
        action="store_true",
        help="Disable writing debug logs to a file.",
    )

    args = parser.parse_args()

    bs_path = Path(args.bs_file).expanduser()
    log_path = None if args.no_log else Path(args.log_file).expanduser()
    append_log(log_path, f"started bs_file='{bs_path}' base_url='{args.base_url}'")

    payload = build_payload(load_bs_file(bs_path), title_hint=bs_path.stem)

    payload_json = json.dumps(payload, separators=(",", ":"), ensure_ascii=False)
    token = base64_url_encode(payload_json)
    share_url = build_share_url(args.base_url, token)

    print(share_url)

    opened, detail = open_in_browser(share_url)
    if not opened:
        print(
            f"[warn] could not open browser automatically ({detail}); URL printed above.",
            file=sys.stderr,
        )
    append_log(
        log_path,
        f"open result opened={opened} detail='{detail}' url='{share_url}'",
    )


if __name__ == "__main__":
    main()
