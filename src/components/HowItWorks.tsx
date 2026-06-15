import { Section, SectionHead } from './primitives'

const STEPS = [
  {
    n: '1',
    title: 'Conecte',
    desc: 'Login com Google, ligue suas fontes de código em poucos cliques e escolha onde quer receber os resumos.',
  },
  {
    n: '2',
    title: 'Deixe rodar',
    desc: 'A cada PR mergeado, push direto ou nova versão, o Driff captura o que mudou e escreve um resumo narrativo.',
  },
  {
    n: '3',
    title: 'Tenha visibilidade',
    desc: 'Tudo aparece no seu feed e nos destinos escolhidos, automaticamente, com métricas de produtividade do time.',
  },
]

export function HowItWorks() {
  return (
    <Section id="como-funciona" tone="background">
      <SectionHead
        eyebrow="COMO FUNCIONA"
        eyebrowTone="primary"
        title="Conecte o repo. O resto é automático."
        subtitle="Três passos, uma vez só. Depois o Driff trabalha sozinho em segundo plano."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="flex flex-col gap-4">
            <span className="flex size-11 items-center justify-center rounded-pill bg-primary text-[19px] font-bold text-on-primary">
              {s.n}
            </span>
            <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
