import { useState } from 'react'
import { Plus } from 'lucide-react'

import { useCopy } from '@/i18n'
import { Section, SectionHead } from './primitives'

export function Faq() {
  const { faq } = useCopy()
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" tone="background">
      <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mx-auto mt-10 flex max-w-[780px] flex-col gap-3.5">
        {faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="rounded-[14px] border border-line bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-[22px] text-left"
              >
                <span className="text-base font-semibold text-foreground">{item.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-[22px] pb-[22px] text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
