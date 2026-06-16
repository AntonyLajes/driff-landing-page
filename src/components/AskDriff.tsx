import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Check, CheckCheck, Download, Globe, Loader2, Tag } from 'lucide-react'

import { useCopy } from '@/i18n'
import { BrandIcon } from './BrandIcon'
import { DriffMark } from './DriffMark'
import { Section, SectionHead } from './primitives'

type Card =
  | { kind: 'version'; title: string; meta: string }
  | { kind: 'file'; title: string; meta: string }

type Message = {
  role: 'user' | 'driff'
  text: string
  time: string
  status?: 'sent' | 'seen'
  card?: Card
}

const fmtTime = () =>
  new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' }).format(new Date())

function VersionCard({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="mt-1 flex items-center gap-3 rounded-xl border border-line bg-canvas px-3.5 py-2.5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-primary-soft">
        <Tag size={17} className="text-primary" />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {meta && <span className="truncate font-mono text-xs text-muted-foreground">{meta}</span>}
      </div>
    </div>
  )
}

function FileCard({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="mt-1 flex items-center gap-3 rounded-xl border border-line bg-canvas px-3.5 py-2.5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-card">
        <BrandIcon name="word" size={22} />
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-semibold text-foreground">{title}</span>
        {meta && <span className="truncate text-xs text-muted-foreground">{meta}</span>}
      </div>
      <Download size={16} className="shrink-0 text-muted-foreground" />
    </div>
  )
}

function Card({ card }: { card: Card }) {
  return card.kind === 'version' ? (
    <VersionCard title={card.title} meta={card.meta} />
  ) : (
    <FileCard title={card.title} meta={card.meta} />
  )
}

function MessageRow({ message }: { message: Message }) {
  if (message.role === 'user') {
    return (
      <div className="msg-in flex flex-col items-end gap-1 self-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm font-medium text-on-primary sm:max-w-[58%]">
          {message.text}
        </div>
        <span className="flex items-center gap-1 pr-1 text-[11px] text-muted-foreground">
          {message.time}
          {message.status === 'seen' ? (
            <CheckCheck size={13} className="text-primary" />
          ) : (
            <Check size={13} />
          )}
        </span>
      </div>
    )
  }
  return (
    <div className="msg-in flex max-w-[88%] items-start gap-2.5 self-start sm:max-w-[64%]">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
        <DriffMark size={18} className="text-on-primary" />
      </span>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 rounded-2xl rounded-tl-md border border-line bg-background px-4 py-3">
          <p className="text-sm leading-relaxed text-foreground">{message.text}</p>
          {message.card && <Card card={message.card} />}
        </div>
        <span className="pl-1 text-[11px] text-muted-foreground">{message.time}</span>
      </div>
    </div>
  )
}

export function AskDriff() {
  const { ask } = useCopy()
  const src = ask.a1sources.split(' · ')

  const convo: { q: string; a: string; card?: Card }[] = [
    { q: ask.q1, a: ask.a1, card: { kind: 'version', title: src[0] ?? '', meta: src.slice(1).join(' · ') } },
    { q: ask.q2, a: ask.a2 },
    { q: ask.q3, a: ask.a3, card: { kind: 'file', title: ask.reportTitle, meta: ask.reportMeta } },
  ]

  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [indicator, setIndicator] = useState<null | 'typing' | 'generating'>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const all: Message[] = []
      const t = fmtTime()
      for (const ex of convo) {
        all.push({ role: 'user', text: ex.q, time: t, status: 'seen' })
        all.push({ role: 'driff', text: ex.a, time: t, card: ex.card })
      }
      setMessages(all)
      return
    }

    let cancelled = false
    const timers: number[] = []
    const sleep = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)))

    void (async () => {
      for (const ex of convo) {
        for (let k = 1; k <= ex.q.length; k++) {
          if (cancelled) return
          setInputText(ex.q.slice(0, k))
          await sleep(14)
        }
        await sleep(280)
        if (cancelled) return
        setInputText('')
        setMessages((m) => [...m, { role: 'user', text: ex.q, time: fmtTime(), status: 'sent' }])
        await sleep(450)
        if (cancelled) return
        setMessages((m) => {
          const copy = [...m]
          for (let i = copy.length - 1; i >= 0; i--) {
            if (copy[i].role === 'user') {
              copy[i] = { ...copy[i], status: 'seen' }
              break
            }
          }
          return copy
        })
        setIndicator(ex.card?.kind === 'file' ? 'generating' : 'typing')
        await sleep(ex.card?.kind === 'file' ? 1500 : 1050)
        if (cancelled) return
        setIndicator(null)
        setMessages((m) => [...m, { role: 'driff', text: ex.a, time: fmtTime(), card: ex.card }])
        await sleep(750)
      }
    })()

    return () => {
      cancelled = true
      timers.forEach((t) => clearTimeout(t))
    }
  }, [started])

  return (
    <Section id="ask" tone="canvas">
      <SectionHead
        eyebrow={ask.eyebrow}
        eyebrowTone="primary"
        title={ask.title}
        subtitle={ask.subtitle}
      />

      <div
        ref={ref}
        className="shadow-window mt-12 flex flex-col overflow-hidden rounded-card border border-line bg-card"
      >
        <div className="flex min-h-[300px] flex-col gap-4 p-5 sm:min-h-[380px] sm:p-8">
          {messages.map((m, i) => (
            <MessageRow key={i} message={m} />
          ))}

          {indicator === 'typing' && (
            <div className="msg-in flex items-center gap-2.5 self-start">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
                <DriffMark size={18} className="text-on-primary" />
              </span>
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-line bg-background px-4 py-3.5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="typing-dot size-1.5 rounded-full bg-muted-foreground"
                    style={{ animationDelay: `${d * 0.18}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {indicator === 'generating' && (
            <div className="msg-in flex items-center gap-2.5 self-start">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
                <DriffMark size={18} className="text-on-primary" />
              </span>
              <div className="flex items-center gap-2 rounded-2xl rounded-tl-md border border-line bg-background px-4 py-3 text-sm text-muted-foreground">
                <Loader2 size={15} className="animate-spin text-primary" />
                {ask.generating}
              </div>
            </div>
          )}
        </div>

        {/* Suggestion chips + rich input (decorative showcase). */}
        <div className="border-t border-line p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {[ask.suggest1, ask.suggest2].map((s) => (
              <span
                key={s}
                className="rounded-pill border border-line bg-background px-3 py-1.5 text-[13px] font-medium text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-background p-3.5">
            <span className="min-h-[20px] text-sm text-foreground">
              {inputText ? (
                <>
                  {inputText}
                  <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-primary" />
                </>
              ) : (
                <span className="text-muted-foreground">{ask.inputPlaceholder}</span>
              )}
            </span>
            <div className="flex items-center justify-between">
              <Globe size={18} className="text-muted-foreground" />
              <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-primary text-on-primary"
              >
                <ArrowUp size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
