import { PillButton } from './primitives'
import { AppPreview } from './AppPreview'
import { HeroFlow } from './HeroFlow'

export function Hero() {
  return (
    <section id="topo" className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center gap-6 px-6 pb-12 pt-24 text-center sm:px-8 sm:pb-16 sm:pt-28">
        <HeroFlow />

        <span className="inline-flex items-center gap-2 rounded-pill bg-primary-soft px-3.5 py-1.5 text-[13px] font-semibold text-primary">
          <span className="pulse-dot size-1.5 rounded-full bg-primary" />
          Beta fechado · Vagas limitadas
        </span>

        <h1 className="max-w-[860px] text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-[58px]">
          O <span className="text-shine-primary">progresso</span> do seu time,{' '}
          <span className="hl-marker">escrito sozinho.</span>
        </h1>

        <p className="max-w-[640px] text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Cada PR, push e release vira um resumo claro — escrito em português e entregue onde seu
          time já trabalha.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#whitelist">
            <PillButton>Entrar na whitelist do Beta</PillButton>
          </a>
          <a href="#como-funciona">
            <PillButton variant="outline">Ver como funciona</PillButton>
          </a>
        </div>

        <p className="text-[13px] text-muted-foreground">
          Grátis no beta · Setup em ~5 min · Entrada por convite
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1140px] px-6 pb-20 sm:px-8 sm:pb-24">
        <div
          aria-hidden
          className="glow-soft-orange pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[520px] w-[820px] -translate-x-1/2 blur-2xl"
        />
        <div className="relative">
          <AppPreview />
        </div>
      </div>
    </section>
  )
}
