import { useEffect } from 'react'

import { analytics, initAnalytics } from './lib/analytics'
import { BeforeAfter } from './components/BeforeAfter'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Integrations } from './components/Integrations'
import { Nav } from './components/Nav'
import { Personas } from './components/Personas'
import { Problem } from './components/Problem'
import { Reveal } from './components/Reveal'
import { ScrollProgress } from './components/ScrollProgress'
import { WhitelistCTA } from './components/WhitelistCTA'

export default function App() {
  useEffect(() => {
    initAnalytics()
    analytics.pageViewed()
  }, [])

  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Problem />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Integrations />
        </Reveal>
        <Reveal>
          <BeforeAfter />
        </Reveal>
        <Reveal>
          <Personas />
        </Reveal>
        <Reveal>
          <WhitelistCTA />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}
