import { ArrowUp } from 'lucide-react'

import { useCopy } from '@/i18n'
import { DriffMark } from './DriffMark'
import { Section, SectionHead } from './primitives'

function UserBubble({ text }: { text: string }) {
  return (
    <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-muted px-4 py-2.5 text-sm text-foreground">
      {text}
    </div>
  )
}

function DriffBubble({ text, sources }: { text: string; sources?: string[] }) {
  return (
    <div className="flex max-w-[88%] items-start gap-2.5 self-start">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
        <DriffMark size={18} className="text-on-primary" />
      </span>
      <div className="flex flex-col gap-2 rounded-2xl rounded-tl-md border border-line bg-background px-4 py-3">
        <p className="text-sm leading-relaxed text-foreground">{text}</p>
        {sources && sources.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {sources.map((s) => (
              <span
                key={s}
                className="rounded-pill border border-line bg-canvas px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function AskDriff() {
  const { ask } = useCopy()
  const sources = ask.a1sources.split(' · ')

  return (
    <Section id="ask" tone="canvas">
      <SectionHead
        eyebrow={ask.eyebrow}
        eyebrowTone="primary"
        title={ask.title}
        subtitle={ask.subtitle}
      />

      <div className="mx-auto mt-12 w-full max-w-[640px]">
        <div className="shadow-window flex flex-col overflow-hidden rounded-card border border-line bg-card">
          <div className="flex flex-col gap-4 p-5 sm:p-6">
            <UserBubble text={ask.q1} />
            <DriffBubble text={ask.a1} sources={sources} />
            <UserBubble text={ask.q2} />
            <DriffBubble text={ask.a2} />
          </div>

          {/* Decorative input bar (showcase only). */}
          <div className="flex items-center gap-2 border-t border-line p-3">
            <span className="flex flex-1 items-center rounded-pill bg-muted px-4 py-2.5 text-sm text-muted-foreground">
              {ask.inputPlaceholder}
            </span>
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-primary text-on-primary"
            >
              <ArrowUp size={18} />
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}
