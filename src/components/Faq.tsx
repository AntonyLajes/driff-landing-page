import { useState } from 'react'
import { Plus } from 'lucide-react'

import { Section, SectionHead } from './primitives'

const FAQS = [
  {
    q: 'Meus dados e meu código estão seguros?',
    a: 'O Driff só lê os metadados e diffs necessários para gerar os resumos, com permissões mínimas. Não armazenamos seu código-fonte.',
  },
  {
    q: 'Preciso mudar meu fluxo de trabalho?',
    a: 'Não. Você continua usando as ferramentas que já usa — o Driff trabalha em segundo plano, sem atrapalhar.',
  },
  {
    q: 'Com quais ferramentas o Driff integra?',
    a: 'Buscamos o que muda em diversas origens de código (GitHub disponível hoje; GitLab, Bitbucket e outras chegando) e publicamos em vários destinos (Notion disponível; Slack, Discord, Teams e mais a caminho).',
  },
  {
    q: 'Quanto vai custar?',
    a: 'Durante o beta é totalmente gratuito. Os planos pagos virão depois, com base no uso — projetos, destinos e volume de resumos.',
  },
  {
    q: 'Em que idioma os resumos são escritos?',
    a: 'Português fluente e profissional por padrão. Customização de tom, tamanho e idioma está chegando.',
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" tone="background">
      <SectionHead eyebrow="PERGUNTAS FREQUENTES" title="Tudo que você quer saber antes de entrar." />
      <div className="mx-auto mt-10 flex max-w-[780px] flex-col gap-3.5">
        {FAQS.map((item, i) => {
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
