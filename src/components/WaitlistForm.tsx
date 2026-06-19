import { type FormEvent, useRef, useState } from 'react'
import { ArrowRight, Check, Loader2, ShieldCheck } from 'lucide-react'

import { analytics } from '@/lib/analytics'
import { useActiveLanguage, useCopy } from '@/i18n'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

type Status = 'idle' | 'submitting' | 'success' | 'error'

/**
 * Email-only waitlist form, reused in the hero (`compact`) and the closing CTA.
 * `compact` drops the consent line to stay light in the hero; the full version
 * shows microcopy + consent. Honeypot-protected; posts { email, locale }.
 */
export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const { whitelist } = useCopy()
  const lang = useActiveLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const startedRef = useRef(false)

  function handleFirstFocus() {
    if (startedRef.current) return
    startedRef.current = true
    analytics.waitlistStarted()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    if (data.website) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(`${API_BASE}/api/early-access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, locale: lang }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      analytics.waitlistSubmitted()
      form.reset()
    } catch {
      setStatus('error')
      analytics.waitlistFailed()
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`enter flex flex-col items-center gap-2 rounded-card border border-line bg-card px-6 py-7 text-center ${
          compact ? 'w-full max-w-[580px]' : 'w-full max-w-[540px]'
        }`}
      >
        <span className="mb-1 flex size-10 items-center justify-center rounded-pill bg-success-soft">
          <Check size={20} className="check-pop text-success" />
        </span>
        <h3 className="text-lg font-bold text-foreground">{whitelist.successTitle}</h3>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{whitelist.successDesc}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFirstFocus}
      className={`flex w-full flex-col gap-3 ${compact ? 'max-w-[580px]' : 'max-w-[540px]'}`}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          placeholder={whitelist.emailPh}
          className="min-w-0 flex-1 rounded-pill border border-line bg-card px-5 py-3.5 text-sm text-foreground shadow-card outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3.5 text-[15px] font-bold text-on-primary shadow-[0_10px_28px_-8px_var(--primary)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_var(--primary)] disabled:cursor-default disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {whitelist.submitting}
            </>
          ) : (
            <>
              {whitelist.submit}
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </div>

      {status === 'error' && <p className="text-[13px] text-danger">{whitelist.error}</p>}

      {!compact && (
        <div className="flex flex-col items-center gap-1.5 pt-1">
          <p className="inline-flex items-center justify-center gap-1.5 text-[13px] text-muted-foreground">
            <ShieldCheck size={14} />
            {whitelist.microcopy}
          </p>
          <p className="text-center text-[12px] text-muted-foreground">
            {whitelist.consentPre}{' '}
            <a
              href="/privacy.html"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              {whitelist.consentLink}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  )
}
