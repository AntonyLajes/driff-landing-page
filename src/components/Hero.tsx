import { useCopy } from '@/i18n'
import { HeroFlow } from './HeroFlow'
import { HeroNetwork } from './HeroNetwork'
import { MarkerText } from './MarkerText'
import { ScrollHint } from './ScrollHint'
import { WaitlistForm } from './WaitlistForm'

export function Hero() {
  const { hero } = useCopy()
  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* Interactive "connections" backdrop (reacts to the mouse). */}
      <HeroNetwork />

      {/* First screen — the hero owns the fold; the product window sits below it. */}
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1280px] flex-col px-6 pt-24 sm:px-8">
        <div className="my-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          {/* Left — copy */}
          <div className="flex flex-col items-start gap-6 text-left">
            <span
              className="enter inline-flex items-center gap-2 rounded-pill bg-primary-soft px-3.5 py-1.5 text-[13px] font-semibold text-primary"
              style={{ animationDelay: '0ms' }}
            >
              <span className="pulse-dot size-1.5 rounded-full bg-primary" />
              {hero.badge}
            </span>

            <h1
              className="enter max-w-[560px] text-[34px] font-bold leading-[1.07] text-foreground sm:text-5xl"
              style={{ animationDelay: '70ms' }}
            >
              {hero.titlePre}
              <span className="text-shine-primary">{hero.titleShine}</span>
              {hero.titleMid}
              <MarkerText>{hero.titleMarker}</MarkerText>
              {hero.titlePost}
            </h1>

            <p
              className="enter max-w-[540px] text-pretty text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: '140ms' }}
            >
              {hero.subtitle}
            </p>

            <div className="enter w-full" style={{ animationDelay: '210ms' }}>
              <WaitlistForm compact />
            </div>

            <div
              className="enter flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-muted-foreground"
              style={{ animationDelay: '280ms' }}
            >
              <span>{hero.microcopy}</span>
              <a
                href="#how-it-works"
                className="font-semibold text-primary transition-colors hover:underline"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right — animated "how it works" diagram */}
          <div
            className="enter flex justify-center lg:justify-end"
            style={{ animationDelay: '340ms' }}
          >
            <HeroFlow />
          </div>
        </div>

        <div className="flex justify-center pb-8">
          <ScrollHint label="scroll" />
        </div>
      </div>
    </section>
  )
}
