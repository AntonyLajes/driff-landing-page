# Driff — Landing Page

Landing page do beta fechado do Driff. Projeto Vite + React + TypeScript + Tailwind v4,
independente do `front-end` (app) e do `back-end` (API). Usa o mesmo design system
**Halo Mono** (laranja `#E4572E`, Inter, cards radius 20, pills).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (tokens em `src/index.css`)
- `lucide-react` para ícones

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # tsc -b && vite build → dist/
npm run preview    # serve o build localmente
```

## Configuração

Copie `.env.example` para `.env`:

| Variável            | Descrição                                                              |
| ------------------- | ---------------------------------------------------------------------- |
| `VITE_API_BASE_URL` | Base da API do Driff. Vazio = mesma origem. Form envia em `/api/whitelist`. |

## Estrutura

```
src/
  App.tsx                 # compõe as seções
  index.css               # tokens Halo Mono + utilitários
  components/
    primitives.tsx        # Section, SectionHead, IconChip, PillButton
    Nav.tsx
    Hero.tsx · AppPreview.tsx
    Problem.tsx · HowItWorks.tsx · Features.tsx
    BeforeAfter.tsx · Personas.tsx
    WhitelistCTA.tsx      # formulário da whitelist (POST /api/whitelist)
    Faq.tsx · Footer.tsx
```

O formulário de whitelist faz `POST {VITE_API_BASE_URL}/api/whitelist`. O endpoint é
implementado no `back-end` (Fastify + Postgres + Resend).
