import { type CSSProperties } from 'react'

import { useCopy } from '@/i18n'
import { MarkerText } from './MarkerText'
import { Section } from './primitives'

export function HowItWorks() {
  const { how } = useCopy()
  return (
    <Section id="how-it-works">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Intro */}
        <div className="assemble flex flex-col gap-4" style={{ '--seq': 0 } as CSSProperties}>
          <span className="text-[13px] font-bold tracking-wider text-primary">{how.eyebrow}</span>
          <h2 className="text-balance text-3xl font-bold leading-[1.12] text-foreground sm:text-[40px]">
            <MarkerText>{how.title}</MarkerText>
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{how.subtitle}</p>
        </div>

        {/* Steps as topics */}
        <div className="flex flex-col lg:pt-1">
          {how.steps.map((s, i) => (
            <div
              key={s.title}
              className={`assemble flex gap-5 py-6 ${i > 0 ? 'border-t border-line' : 'lg:pt-0'}`}
              style={{ '--seq': i + 1 } as CSSProperties}
            >
              <span className="font-mono text-2xl font-bold leading-none text-primary/40">
                0{i + 1}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
