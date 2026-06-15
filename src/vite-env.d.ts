/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the Driff API (e.g. https://api.driff.dev). Empty = same origin. */
  readonly VITE_API_BASE_URL?: string
  /** Mixpanel project token (browser SDK). Empty = analytics disabled (no-op). */
  readonly VITE_MIXPANEL_TOKEN?: string
  /** Set to "true" to use Mixpanel's EU data residency endpoint. */
  readonly VITE_MIXPANEL_EU?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
