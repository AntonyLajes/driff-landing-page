import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react'
import { ArrowDown, Bug, CircleCheck, Sparkles, Tag, Zap, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { AppPreview } from './AppPreview'
import { AskLauncher } from './AskLauncher'
import { BrandIcon } from './BrandIcon'
import { DriffMark } from './DriffMark'
import { Section, SectionHead } from './primitives'

const STAT_VALUES = [
  { value: '49', delta: '+13' },
  { value: '18', delta: '+5' },
  { value: '31', delta: '+8' },
  { value: '12.5h', delta: '+3.2h' },
]

export function FeatureShowcase() {
  const { features } = useCopy()

  const rows = [
    {
      title: features.featuredTitle,
      desc: features.featuredDesc,
      visual: <AppPreview />,
      extra: <Stats labels={features.stats.map((s) => s.label)} />,
    },
    {
      title: features.cards[0].title,
      desc: features.cards[0].desc,
      visual: <AskLauncher />,
    },
    {
      title: features.cards[1].title,
      desc: features.cards[1].desc,
      visual: <SummaryMock />,
    },
    {
      title: features.cards[2].title,
      desc: features.cards[2].desc,
      visual: <ChangelogMock />,
    },
  ]

  return (
    <Section id="features">
      <SectionHead eyebrow={features.eyebrow} title={features.title} />

      <div className="mt-16 flex flex-col gap-20 sm:gap-24">
        {rows.map((r, i) => (
          <FeatureRow key={r.title} index={i} reverse={i % 2 === 1} {...r} />
        ))}
      </div>
    </Section>
  )
}

function FeatureRow({
  title,
  desc,
  visual,
  extra,
  reverse,
  index,
}: {
  title: string
  desc: string
  visual: ReactNode
  extra?: ReactNode
  reverse: boolean
  index: number
}) {
  return (
    <div
      className="assemble grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
      style={{ '--seq': index + 1 } as CSSProperties}
    >
      <div className={`flex flex-col gap-4 ${reverse ? 'lg:order-2' : ''}`}>
        <h3 className="text-balance text-2xl font-bold leading-[1.15] text-foreground sm:text-[30px]">
          {title}
        </h3>
        <p className="max-w-[460px] text-lg leading-relaxed text-muted-foreground">{desc}</p>
        {extra}
      </div>
      <div className={`min-w-0 ${reverse ? 'lg:order-1' : ''}`}>{visual}</div>
    </div>
  )
}

/** Compact productivity numbers, count up on view. */
function Stats({ labels }: { labels: string[] }) {
  return (
    <div className="mt-2 grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
      {labels.map((label, i) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="flex items-baseline gap-1">
            <span className="text-2xl font-bold leading-none tracking-tight text-foreground">
              <CountUp value={STAT_VALUES[i].value} />
            </span>
            <span className="text-[11px] font-semibold text-success">{STAT_VALUES[i].delta}</span>
          </span>
          <span className="text-[11px] leading-tight text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  )
}

/** Raw commit → clear Driff summary. */
function SummaryMock() {
  const { beforeAfter } = useCopy()
  return (
    <div className="shadow-window flex flex-col gap-4 rounded-card border border-line bg-card p-5 sm:p-6">
      <div className="rounded-xl border border-line/60 bg-[#0b0b0e] p-3.5 font-mono text-[12px] leading-relaxed">
        <p className="text-[#6b6b73]">$ git push origin main</p>
        <p className="mt-1.5 text-[#e4e4e7]">fix: streak reset at tz boundary</p>
        <p className="text-[#6b6b73]">{beforeAfter.commitStat}</p>
      </div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <span className="h-px w-8 bg-line" />
        <ArrowDown size={16} className="text-primary" />
        <span className="h-px w-8 bg-line" />
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-primary/30 bg-background p-4">
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-md bg-primary">
            <DriffMark size={11} className="text-on-primary" />
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
            {beforeAfter.badge}
          </span>
        </div>
        <h4 className="text-sm font-bold text-foreground">{beforeAfter.afterTitle}</h4>
        <p className="line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
          {beforeAfter.afterBody}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <CircleCheck size={12} className="text-success" />
          <BrandIcon name="slack" size={12} />
          Slack
        </span>
      </div>
    </div>
  )
}

const GROUP_ICONS: LucideIcon[] = [Sparkles, Zap, Bug]

/** A version turned into a grouped, ready-to-share changelog. */
function ChangelogMock() {
  const { changelog } = useCopy()
  return (
    <div className="shadow-window overflow-hidden rounded-card border border-line bg-card">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary-soft">
            <Tag size={14} className="text-primary" />
          </span>
          <span className="text-sm font-bold text-foreground">{changelog.version}</span>
        </div>
        <span className="rounded-pill border border-line bg-canvas px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {changelog.autoTag}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-5">
        {changelog.groups.map((g, i) => {
          const Icon = GROUP_ICONS[i]
          return (
            <div key={g.label} className="flex flex-col gap-1.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Icon size={12} className="text-foreground" />
                {g.label}
              </span>
              <ul className="flex flex-col gap-1 pl-0.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13px] text-foreground">
                    <span className="mt-[7px] size-1 shrink-0 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-1.5 border-t border-line px-5 py-3 text-[11px] text-muted-foreground">
        {changelog.publishedTo}
        <BrandIcon name="notion" size={13} />
        <BrandIcon name="slack" size={13} />
        <CircleCheck size={12} className="text-success" />
      </div>
    </div>
  )
}

/** Counts up to a value the first time it scrolls into view. */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  const parsed = value.match(/^([\d.]+)(.*)$/)
  const suffix = parsed ? parsed[2] : ''
  const decimals = parsed && parsed[1].includes('.') ? 1 : 0

  useEffect(() => {
    const el = ref.current
    const m = value.match(/^([\d.]+)(.*)$/)
    if (!el || !m) return
    const target = parseFloat(m[1])

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }

    let raf = 0
    let start = 0
    let started = false
    const animate = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 900, 1)
      setDisplay(target * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(animate)
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((e) => e.isIntersecting)) return
        started = true
        observer.disconnect()
        raf = requestAnimationFrame(animate)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
