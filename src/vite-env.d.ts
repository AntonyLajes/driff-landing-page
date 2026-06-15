/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the Driff API (e.g. https://api.driff.dev). Empty = same origin. */
  readonly VITE_API_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
