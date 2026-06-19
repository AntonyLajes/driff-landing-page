import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { analytics } from '@/lib/analytics'
import { useCopy } from '@/i18n'
import { DriffMark } from './DriffMark'
import { LanguageSwitcher } from './LanguageSwitcher'

const HREFS = ['#how-it-works', '#features', '#integrations', '#faq']

export function Nav() {
  const copy = useCopy()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const links = [
    { label: copy.nav.howItWorks, href: HREFS[0] },
    { label: copy.nav.features, href: HREFS[1] },
    { label: copy.nav.integrations, href: HREFS[2] },
    { label: copy.nav.faq, href: HREFS[3] },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/0 bg-background/0 pt-3'
          : 'border-b border-line/50 bg-background/70 pt-0 backdrop-blur-md'
      }`}
    >
      <nav
        className={`relative flex items-center justify-between transition-[max-width,padding] duration-300 ${
          scrolled
            ? 'nav-pill-in w-[calc(100%-1.5rem)] max-w-[1080px] rounded-pill border border-line/70 bg-background/75 px-5 py-2.5 shadow-card backdrop-blur-xl'
            : 'w-full max-w-[1280px] border border-line/0 px-6 py-4 sm:px-8'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-[30px] items-center justify-center rounded-lg bg-primary">
            <DriffMark size={19} className="text-on-primary" />
          </span>
          <span className="text-xl font-bold text-foreground">driff</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="#whitelist"
            onClick={() => analytics.ctaClicked('nav')}
            className="hidden rounded-pill bg-primary px-[18px] py-2.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 hover:shadow-[0_8px_24px_-8px_var(--primary)] md:inline-flex"
          >
            {copy.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex size-9 items-center justify-center rounded-pill border border-line text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          aria-hidden={!menuOpen}
          className={`absolute inset-x-0 top-full mt-2 flex origin-top flex-col gap-1 rounded-card border border-line bg-background p-3 shadow-card transition-all duration-200 ease-out motion-reduce:transition-none md:hidden ${
            menuOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-1 scale-[0.98] opacity-0'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="rounded-input px-3 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#whitelist"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => {
              analytics.ctaClicked('nav')
              setMenuOpen(false)
            }}
            className="mt-1 rounded-pill bg-primary px-4 py-2.5 text-center text-[15px] font-semibold text-on-primary"
          >
            {copy.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  )
}
