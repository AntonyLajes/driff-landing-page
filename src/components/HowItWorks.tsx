import { useCopy } from '@/i18n'
import { Section, SectionHead } from './primitives'

export function HowItWorks() {
  const { how } = useCopy()
  return (
    <Section id="como-funciona" tone="background">
      <SectionHead
        eyebrow={how.eyebrow}
        eyebrowTone="primary"
        title={how.title}
        subtitle={how.subtitle}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {how.steps.map((s, i) => (
          <div key={s.title} className="flex flex-col gap-4">
            <span className="flex size-11 items-center justify-center rounded-pill bg-primary text-[19px] font-bold text-on-primary">
              {i + 1}
            </span>
            <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
