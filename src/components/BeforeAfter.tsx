import { ArrowRight, Sparkles, Zap } from 'lucide-react'

import { Section, SectionHead } from './primitives'

export function BeforeAfter() {
  return (
    <Section tone="background">
      <SectionHead
        eyebrow="O DIFERENCIAL"
        eyebrowTone="primary"
        title="Do commit cru ao resumo que qualquer um entende."
        subtitle="Dashboards mostram números. O Driff conta a história: o que foi feito, por quê e qual o impacto."
      />

      <div className="mt-12 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
        {/* Before */}
        <div className="flex flex-1 flex-col gap-4 rounded-card border border-line bg-canvas p-7">
          <span className="text-xs font-bold tracking-wider text-muted-foreground">ANTES</span>
          <div className="flex flex-col gap-2 rounded-xl bg-[#09090B] p-4">
            <code className="font-mono text-[13px] leading-relaxed text-[#E4E4E7]">
              fix: handle null ETA on fuel stops + refactor pricing calc
            </code>
            <span className="font-mono text-xs text-[#71717A]">+36 −0 · 2 arquivos</span>
          </div>
          <p className="text-sm italic text-muted-foreground">
            Quem não escreveu isso não faz ideia do que aconteceu.
          </p>
        </div>

        {/* Arrow */}
        <span className="mx-auto flex size-11 shrink-0 rotate-90 items-center justify-center rounded-pill bg-primary lg:rotate-0">
          <ArrowRight size={20} className="text-on-primary" />
        </span>

        {/* After */}
        <div className="flex flex-1 flex-col gap-3.5 rounded-card border-2 border-primary bg-card p-7">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-primary-soft px-2.5 py-1 text-[11px] font-bold tracking-wide text-primary">
            <Sparkles size={13} />
            COM DRIFF
          </span>
          <h3 className="text-lg font-bold text-foreground">
            Correção no cálculo de paradas de combustível
          </h3>
          <p className="text-sm leading-relaxed text-foreground">
            Resolvido um erro que quebrava a estimativa de chegada (ETA) quando uma parada não tinha
            horário definido. A lógica de precificação foi simplificada, reduzindo inconsistências
            em rotas longas.
          </p>
          <div className="flex items-start gap-2 rounded-[10px] bg-muted p-3">
            <Zap size={15} className="mt-0.5 shrink-0 text-primary" />
            <span className="text-[13px] font-medium leading-relaxed text-foreground">
              Impacto: usuários deixam de ver telas de erro ao planejar viagens com paradas.
            </span>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            PR #15 · feature/fuel-stops → main
          </span>
        </div>
      </div>
    </Section>
  )
}
