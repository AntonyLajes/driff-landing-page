import { useEffect, useState } from 'react'
import { GitMerge } from 'lucide-react'

const LINKS = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Integrações', href: '#integracoes' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding,background-color,border-color] duration-300 ${
        scrolled
          ? 'border-b border-line/0 bg-background/0 pt-3'
          : 'border-b border-line/50 bg-background/70 pt-0 backdrop-blur-md'
      }`}
    >
      <nav
        className={`flex items-center justify-between transition-[max-width,padding] duration-300 ${
          scrolled
            ? 'nav-pill-in w-[calc(100%-1.5rem)] max-w-[960px] rounded-pill border border-line/70 bg-background/75 px-5 py-2.5 shadow-card backdrop-blur-xl'
            : 'w-full max-w-[1140px] border border-line/0 px-6 py-4 sm:px-8'
        }`}
      >
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="flex size-[30px] items-center justify-center rounded-lg bg-primary">
            <GitMerge size={18} className="text-on-primary" />
          </span>
          <span className="text-xl font-bold text-foreground">driff</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#whitelist"
          className="rounded-pill bg-primary px-[18px] py-2.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 hover:shadow-[0_8px_24px_-8px_var(--primary)]"
        >
          Entrar na whitelist
        </a>
      </nav>
    </header>
  )
}
