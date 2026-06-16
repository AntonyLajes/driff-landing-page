import { ArrowUp, Globe, Tag } from 'lucide-react'

import { useCopy } from '@/i18n'
import { DriffMark } from './DriffMark'
import { Section, SectionHead } from './primitives'

function UserBubble({ text }: { text: string }) {
  return (
    <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm font-medium text-on-primary sm:max-w-[58%]">
      {text}
    </div>
  )
}

function ResultCard({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="mt-1 flex items-center gap-3 rounded-xl border border-line bg-canvas px-3.5 py-2.5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-primary-soft">
        <Tag size={17} className="text-primary" />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {meta && <span className="truncate font-mono text-xs text-muted-foreground">{meta}</span>}
      </div>
    </div>
  )
}

function DriffBubble({
  text,
  result,
}: {
  text: string
  result?: { title: string; meta: string }
}) {
  return (
    <div className="flex max-w-[88%] items-start gap-2.5 self-start sm:max-w-[62%]">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
        <DriffMark size={18} className="text-on-primary" />
      </span>
      <div className="flex flex-col gap-1 rounded-2xl rounded-tl-md border border-line bg-background px-4 py-3">
        <p className="text-sm leading-relaxed text-foreground">{text}</p>
        {result && <ResultCard title={result.title} meta={result.meta} />}
      </div>
    </div>
  )
}

export function AskDriff() {
  const { ask } = useCopy()
  const src = ask.a1sources.split(' · ')
  const result = { title: src[0] ?? '', meta: src.slice(1).join(' · ') }

  return (
    <Section id="ask" tone="canvas">
      <SectionHead
        eyebrow={ask.eyebrow}
        eyebrowTone="primary"
        title={ask.title}
        subtitle={ask.subtitle}
      />

      <div className="shadow-window mt-12 flex flex-col overflow-hidden rounded-card border border-line bg-card">
        <div className="flex flex-col gap-4 p-5 sm:p-8">
          <UserBubble text={ask.q1} />
          <DriffBubble text={ask.a1} result={result} />
          <UserBubble text={ask.q2} />
          <DriffBubble text={ask.a2} />
        </div>

        {/* Suggestion chips + rich input (decorative showcase). */}
        <div className="border-t border-line p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {[ask.suggest1, ask.suggest2].map((s) => (
              <span
                key={s}
                className="rounded-pill border border-line bg-background px-3 py-1.5 text-[13px] font-medium text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-background p-3.5">
            <span className="text-sm text-muted-foreground">{ask.inputPlaceholder}</span>
            <div className="flex items-center justify-between">
              <Globe size={18} className="text-muted-foreground" />
              <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-primary text-on-primary"
              >
                <ArrowUp size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
