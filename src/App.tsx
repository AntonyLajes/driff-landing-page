import { type ReactNode, useEffect } from 'react'

import { analytics, initAnalytics } from './lib/analytics'
import { Faq } from './components/Faq'
import { FeatureShowcase } from './components/FeatureShowcase'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Integrations } from './components/Integrations'
import { Nav } from './components/Nav'
import { Panel } from './components/Panel'
import { Personas } from './components/Personas'
import { Problem } from './components/Problem'
import { ScrollProgress } from './components/ScrollProgress'
import { TechBackground } from './components/TechBackground'
import { WhitelistCTA } from './components/WhitelistCTA'

export default function App() {
  useEffect(() => {
    initAnalytics()
    analytics.pageViewed()
  }, [])

  // Narrative arc: hook → pain → solution → diagram → feature showcase → who → FAQ → CTA.
  const sections: ReactNode[] = [
    <Hero />,
    <Problem />,
    <HowItWorks />,
    <Integrations />,
    <FeatureShowcase />,
    <Personas />,
    <WhitelistCTA />,
    <Faq />,
  ]

  return (
    <div className="flex min-h-dvh flex-col">
      <TechBackground />
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        {sections.map((node, i) => (
          <Panel key={i}>{node}</Panel>
        ))}
      </main>
      <Footer />
    </div>
  )
}
