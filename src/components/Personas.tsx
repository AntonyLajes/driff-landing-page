import { ClipboardList, Code, Rocket, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { IconChip, Section, SectionHead } from './primitives'

const ICONS: LucideIcon[] = [Rocket, ClipboardList, Code]

export function Personas() {
  const { personas } = useCopy()
  return (
    <Section id="para-quem" tone="canvas">
      <SectionHead
        eyebrow={personas.eyebrow}
        title={personas.title}
        subtitle={personas.subtitle}
      />
      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
        {personas.cards.map((p, i) => (
          <div
            key={p.title}
            className="flex flex-col gap-3.5 rounded-card border border-line bg-card p-7"
          >
            <IconChip icon={ICONS[i]} />
            <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
