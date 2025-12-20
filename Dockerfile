FROM node:20-bookworm-slim AS build

WORKDIR /workspace

COPY package*.json ./
RUN npm ci

COPY svelte ./svelte
COPY scripts ./scripts
COPY vite.config.mjs svelte.config.mjs ./

RUN npm run build

FROM node:20-bookworm-slim AS runtime

WORKDIR /usr/src/app

ENV NODE_ENV=production \
    PORT=4173 \
    HOST=0.0.0.0 \
    BLOCKSCAPE_ROOT=/blockscape

COPY --from=build /workspace/docs ./docs
COPY server.js .

EXPOSE 4173

CMD ["node", "server.js"]
