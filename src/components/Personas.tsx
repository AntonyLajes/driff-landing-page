import { ClipboardList, Code, Rocket, type LucideIcon } from 'lucide-react'

import { IconChip, Section, SectionHead } from './primitives'

const PERSONAS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Rocket,
    title: 'Founders & CTOs',
    desc: 'Visibilidade do que o time entrega, sem precisar cobrar relatório de ninguém.',
  },
  {
    icon: ClipboardList,
    title: 'Product Managers',
    desc: 'Entenda o que foi feito e o impacto — sem precisar ler uma linha de código.',
  },
  {
    icon: Code,
    title: 'Desenvolvedores',
    desc: 'Pare de escrever update semanal. Seu trabalho se documenta sozinho.',
  },
]

export function Personas() {
  return (
    <Section id="para-quem" tone="canvas">
      <SectionHead
        eyebrow="PARA QUEM É"
        title="Feito para startups que entregam rápido demais pra documentar."
        subtitle="Do fundador solo ao time de 30 devs: se o código anda mais rápido que a comunicação, o Driff é pra você."
      />
      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
        {PERSONAS.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-3.5 rounded-card border border-line bg-card p-7"
          >
            <IconChip icon={p.icon} />
            <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
