import { type FormEvent, useRef, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Loader2, ShieldCheck } from 'lucide-react'

import { analytics } from '@/lib/analytics'
import { useActiveLanguage, useCopy } from '@/i18n'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

const TEAM_SIZES = ['1–5', '6–15', '16–30', '30+']

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function WhitelistCTA() {
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
    setStatus('submitting')

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch(`${API_BASE}/api/whitelist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale: lang }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      analytics.waitlistSubmitted(data.teamSize as string, data.role as string)
      form.reset()
    } catch {
      setStatus('error')
      analytics.waitlistFailed()
    }
  }

  return (
    <section id="whitelist" className="relative w-full overflow-hidden bg-ink">
      {/* Ambient orange glows over the black background */}
      <div
        aria-hidden
        className="glow-soft-orange pointer-events-none absolute -left-32 -top-28 h-[440px] w-[560px] opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="glow-soft-orange pointer-events-none absolute -bottom-32 -right-28 h-[440px] w-[560px] opacity-60 blur-3xl"
      />
      <div className="relative mx-auto flex w-full max-w-[1140px] flex-col items-center gap-10 px-6 py-24 sm:px-8">
        <div className="flex max-w-[680px] flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-pill bg-primary/15 px-3.5 py-1.5 text-[13px] font-semibold text-[#F06A44]">
            <span className="size-1.5 rounded-full bg-primary" />
            {whitelist.badge}
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.08] text-[#FAFAFA] sm:text-[44px]">
            {whitelist.title}
          </h2>
          <p className="max-w-[560px] text-pretty text-lg leading-relaxed text-[#A1A1AA]">
            {whitelist.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          onFocus={handleFirstFocus}
          className="flex w-full max-w-[560px] flex-col gap-[18px] rounded-card bg-card p-8"
        >
          {status === 'success' ? (
            <div className="enter flex flex-col items-center gap-2 py-2 text-center">
              <h3 className="text-xl font-bold text-foreground">{whitelist.successTitle}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {whitelist.successDesc}
              </p>
            </div>
          ) : (
            <>
              {/* Honeypot: hidden from humans; bots fill it and get silently dropped. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <Field name="name" label={whitelist.name} placeholder={whitelist.namePh} required />
              <Field
                name="email"
                type="email"
                label={whitelist.email}
                placeholder={whitelist.emailPh}
                required
              />
              <Field name="team" label={whitelist.team} placeholder={whitelist.teamPh} required />
              <div className="flex flex-col gap-[18px] sm:flex-row sm:gap-3.5">
                <Select
                  name="teamSize"
                  label={whitelist.teamSize}
                  placeholder={whitelist.selectPlaceholder}
                  options={TEAM_SIZES}
                  required
                />
                <Select
                  name="role"
                  label={whitelist.role}
                  placeholder={whitelist.selectPlaceholder}
                  options={whitelist.roles}
                  required
                />
              </div>
              <Field
                name="githubOrg"
                label={whitelist.githubOrg}
                placeholder={whitelist.githubOrgPh}
              />
            </>
          )}

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className={`mt-1 inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 text-[15px] font-bold transition-colors duration-300 disabled:cursor-default ${
              status === 'success'
                ? 'bg-success text-white'
                : 'bg-primary text-on-primary hover:opacity-90'
            }`}
          >
            {status === 'submitting' && (
              <>
                <Loader2 size={18} className="animate-spin" />
                {whitelist.submitting}
              </>
            )}
            {status === 'success' && (
              <>
                <Check size={18} className="check-pop" />
                {whitelist.successButton}
              </>
            )}
            {(status === 'idle' || status === 'error') && (
              <>
                {whitelist.submit}
                <ArrowRight size={17} />
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-center text-[13px] text-primary">{whitelist.error}</p>
          )}

          {status !== 'success' && (
            <>
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
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({
  name,
  label,
  placeholder,
  type = 'text',
  required,
}: {
  name: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-input border border-line bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
    </label>
  )
}

function Select({
  name,
  label,
  placeholder,
  options,
  required,
}: {
  name: string
  label: string
  placeholder: string
  options: readonly string[]
  required?: boolean
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-foreground">{label}</span>
      <div className="relative">
        <select
          name={name}
          required={required}
          defaultValue=""
          className="w-full appearance-none rounded-input border border-line bg-background px-3.5 py-3 pr-10 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      </div>
    </label>
  )
}
