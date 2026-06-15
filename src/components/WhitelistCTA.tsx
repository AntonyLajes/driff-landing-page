import { type FormEvent, useState } from 'react'
import { ArrowRight, CircleCheck, ShieldCheck } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

const TEAM_SIZES = ['1–5', '6–15', '16–30', '30+']
const ROLES = ['Founder / CTO', 'Eng. Lead', 'Product Manager', 'Desenvolvedor', 'Outro']

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function WhitelistCTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError(null)

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch(`${API_BASE}/api/whitelist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    }
  }

  return (
    <section id="whitelist" className="w-full bg-ink">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center gap-10 px-6 py-24 sm:px-8">
        <div className="flex max-w-[680px] flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-pill bg-primary/15 px-3.5 py-1.5 text-[13px] font-semibold text-[#F06A44]">
            <span className="size-1.5 rounded-full bg-primary" />
            Vagas limitadas · 8 a 15 times
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.08] text-[#FAFAFA] sm:text-[44px]">
            Entre no beta fechado do Driff.
          </h2>
          <p className="max-w-[560px] text-pretty text-lg leading-relaxed text-[#A1A1AA]">
            Acesso gratuito durante o beta, suporte direto com a gente e influência real no produto.
            Deixe seus dados e entramos em contato.
          </p>
        </div>

        {status === 'success' ? (
          <div className="flex w-full max-w-[560px] flex-col items-center gap-3 rounded-card bg-card p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-pill bg-success-soft">
              <CircleCheck size={28} className="text-success" />
            </span>
            <h3 className="text-xl font-bold text-foreground">Você está na lista! 🎉</h3>
            <p className="text-[15px] text-muted-foreground">
              Recebemos seus dados. Assim que sua vaga abrir, mandamos um convite no seu e-mail.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[560px] flex-col gap-[18px] rounded-card bg-card p-8"
          >
            <Field name="name" label="Seu nome" placeholder="Ex: Antony Lajes" required />
            <Field
              name="email"
              type="email"
              label="E-mail"
              placeholder="voce@email.com"
              required
            />
            <Field name="team" label="Time / empresa" placeholder="Nome do seu time" required />
            <div className="flex flex-col gap-[18px] sm:flex-row sm:gap-3.5">
              <Select name="teamSize" label="Quantidade de devs" options={TEAM_SIZES} required />
              <Select name="role" label="Seu cargo" options={ROLES} required />
            </div>
            <Field
              name="githubOrg"
              label="Organização no GitHub (opcional)"
              placeholder="github.com/sua-org"
            />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3.5 text-[15px] font-bold text-on-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Enviando…' : 'Quero entrar na whitelist'}
              {status !== 'submitting' && <ArrowRight size={17} />}
            </button>

            {status === 'error' && (
              <p className="text-center text-[13px] text-primary">
                Não foi possível enviar agora{error ? ` (${error})` : ''}. Tente novamente.
              </p>
            )}

            <p className="inline-flex items-center justify-center gap-1.5 text-[13px] text-muted-foreground">
              <ShieldCheck size={14} />
              Sem spam. Só te avisamos quando sua vaga abrir.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({
  name,
  label,
  placeholder,
  type = 'text',
  required,
}: {
  name: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-input border border-line bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
    </label>
  )
}

function Select({
  name,
  label,
  options,
  required,
}: {
  name: string
  label: string
  options: string[]
  required?: boolean
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-foreground">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-input border border-line bg-background px-3.5 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
      >
        <option value="" disabled>
          Selecione…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
