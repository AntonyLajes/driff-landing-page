import type { OverridedMixpanel } from 'mixpanel-browser'

const TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN
const EU = import.meta.env.VITE_MIXPANEL_EU === 'true'

type Props = Record<string, string | number | boolean | undefined>

let mp: OverridedMixpanel | null = null
let ready = false
const queue: Array<[string, Props?]> = []

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref']

/** Read UTM/ref params from the current URL so we can attribute traffic by source. */
function readUtmParams(): Props {
  const params = new URLSearchParams(window.location.search)
  const out: Props = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) out[key] = value
  }
  return out
}

/** Initialize Mixpanel once. No-op without a token. Mixpanel is loaded as a
 *  separate async chunk so it never bloats the initial bundle. */
export async function initAnalytics(): Promise<void> {
  if (ready || !TOKEN) return
  const mod = await import('mixpanel-browser')
  mp = mod.default
  mp.init(TOKEN, {
    api_host: EU ? 'https://api-eu.mixpanel.com' : 'https://api.mixpanel.com',
    persistence: 'localStorage',
    // Explicit events only (no autocapture). IP-based geolocation stays ON so
    // Mixpanel derives approximate location ($city / $region / mp_country_code).
    track_pageview: false,
  })
  // Attach UTM/ref as super properties so every event (incl. queued ones)
  // carries the traffic source for per-channel attribution.
  const utm = readUtmParams()
  if (Object.keys(utm).length > 0) mp.register(utm)
  ready = true
  for (const [event, props] of queue) mp.track(event, props)
  queue.length = 0
}

export function track(event: string, props?: Props): void {
  if (!TOKEN) return
  if (ready && mp) mp.track(event, props)
  else queue.push([event, props]) // flushed once Mixpanel finishes loading
}

/** Landing analytics events (no PII — never sends name/email). */
export const analytics = {
  pageViewed: () => track('landing_viewed', { lang: document.documentElement.lang }),
  ctaClicked: (location: 'nav' | 'hero' | 'footer') => track('cta_clicked', { location }),
  waitlistStarted: () => track('waitlist_started'),
  languageChanged: (lang: string) => track('language_changed', { lang }),
  faqOpened: (index: number) => track('faq_opened', { index }),
  waitlistSubmitted: (teamSize?: string, role?: string) =>
    track('waitlist_submitted', { teamSize, role }),
  waitlistFailed: () => track('waitlist_submit_failed'),
}
