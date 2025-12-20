# Running Blockscape in a Container

The image exposes the static build and the optional local file API. It defaults to storing `.bs` files under `/blockscape` inside the container.

## Pull from Quay

```bash
docker pull quay.io/pwrightrd/blockscape:latest
```

## Run with Docker

```bash
docker run --rm -p 4173:4173 \
  -v "$PWD/blockscape-data:/blockscape" \
  quay.io/pwrightrd/blockscape:latest
```

* App opens at `http://localhost:4173/server`
* `BLOCKSCAPE_ROOT` is set to `/blockscape`; the bind mount keeps your `.bs` files outside the container

### Optional overrides

```bash
docker run --rm -p 8080:8080 \
  -e PORT=8080 -e HOST=0.0.0.0 -e BLOCKSCAPE_ROOT=/blockscape \
  -v "$PWD/blockscape-data:/blockscape" \
  quay.io/pwrightrd/blockscape:latest
```

## Run with Podman

```bash
podman run --rm -p 4173:4173 \
  -v "$PWD/blockscape-data:/blockscape:Z" \
  quay.io/pwrightrd/blockscape:latest
```

SELinux hosts may need the `:Z` suffix so Podman can relabel the mounted folder.

## Build locally (optional)

```bash
docker build -t quay.io/pwrightrd/blockscape:local .
docker run --rm -p 4173:4173 \
  -v "$PWD/blockscape-data:/blockscape" \
  quay.io/pwrightrd/blockscape:local
```

The image serves the built assets via `server.js` and listens on all interfaces by default. Mount a host directory at `/blockscape` if you want the file API to persist data across runs.
