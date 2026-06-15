import { EyeOff, PenLine, Search, type LucideIcon } from 'lucide-react'

import { IconChip, Section, SectionHead } from './primitives'

const PAINS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: PenLine,
    title: 'Devs perdem tempo escrevendo updates',
    desc: 'Toda sexta-feira, a mesma novela de montar o "o que eu fiz essa semana" em vez de escrever código.',
  },
  {
    icon: EyeOff,
    title: 'Líderes e PMs ficam no escuro',
    desc: 'Commits e PRs não contam a história do que foi realmente entregue, nem do impacto pro negócio.',
  },
  {
    icon: Search,
    title: 'Retrospectivas viram arqueologia',
    desc: 'Alguém sempre precisa garimpar o histórico do Git pra lembrar o que mudou na última sprint.',
  },
]

export function Problem() {
  return (
    <Section tone="canvas">
      <SectionHead
        eyebrow="O PROBLEMA"
        title="Times que se movem rápido perdem o controle do que foi feito."
        subtitle="Quanto mais o time entrega, mais difícil fica saber o que aconteceu — e o custo é invisível."
      />
      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
        {PAINS.map((p) => (
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
