import type { OverridedMixpanel } from 'mixpanel-browser'

const TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN
const EU = import.meta.env.VITE_MIXPANEL_EU === 'true'

type Props = Record<string, string | number | boolean | undefined>

let mp: OverridedMixpanel | null = null
let ready = false
const queue: Array<[string, Props?]> = []

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
