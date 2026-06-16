import type { Resources } from './en'

export const pt: Resources = {
  nav: {
    howItWorks: 'Como funciona',
    features: 'Recursos',
    integrations: 'Integrações',
    faq: 'FAQ',
    cta: 'Entrar na whitelist',
  },
  hero: {
    badge: 'Beta fechado · Vagas limitadas',
    titlePre: 'O ',
    titleShine: 'progresso',
    titleMid: ' do seu time, ',
    titleMarker: 'escrito sozinho.',
    titlePost: '',
    subtitle:
      'Cada PR, push e release vira um resumo claro — e você pode perguntar qualquer coisa ao Driff sobre o que o time entregou.',
    ctaPrimary: 'Entrar na whitelist do Beta',
    ctaSecondary: 'Ver como funciona',
    microcopy: 'Grátis no beta · Setup em ~5 min · Entrada por convite',
  },
  preview: {
    title: 'Resumos recentes',
    live: 'Ao vivo',
    segAll: 'Todos',
    segPR: 'PRs',
    segPush: 'Pushes',
    segVersion: 'Versões',
    notion: 'Notion',
    rows: [
      {
        title: 'Correção no cálculo de paradas de combustível',
        meta: 'PR #15 · feature/fuel-stops → main  ·  +36 −0 · 2 arquivos',
        time: 'agora',
      },
      {
        title: 'Guarda contra ETA inválido em rotas longas',
        meta: 'Push · main · 711c745  ·  +4 −0 · 1 arquivo',
        time: '2h',
      },
      {
        title: 'Versão 1.3.2 — melhorias de estabilidade',
        meta: 'Release · main · 55f9054  ·  Changelog gerado',
        time: 'ontem',
      },
    ],
  },
  problem: {
    eyebrow: 'O PROBLEMA',
    title: 'Times que se movem rápido perdem o controle do que foi feito.',
    subtitle:
      'Quanto mais o time entrega, mais difícil fica saber o que aconteceu — e o custo é invisível.',
    cards: [
      {
        title: 'Devs perdem tempo escrevendo updates',
        desc: 'Toda sexta-feira, a mesma novela de montar o "o que eu fiz essa semana" em vez de escrever código.',
      },
      {
        title: 'Líderes e PMs ficam no escuro',
        desc: 'Commits e PRs não contam a história do que foi realmente entregue, nem do impacto pro negócio.',
      },
      {
        title: 'Retrospectivas viram arqueologia',
        desc: 'Alguém sempre precisa garimpar o histórico do Git pra lembrar o que mudou na última sprint.',
      },
    ],
  },
  how: {
    eyebrow: 'COMO FUNCIONA',
    title: 'Conecte o repo. O resto é automático.',
    subtitle: 'Três passos, uma vez só. Depois o Driff trabalha sozinho em segundo plano.',
    steps: [
      {
        title: 'Conecte',
        desc: 'Login com Google, ligue suas fontes de código em poucos cliques e escolha onde quer receber os resumos.',
      },
      {
        title: 'Deixe rodar',
        desc: 'A cada PR mergeado, push direto ou nova versão, o Driff captura o que mudou e escreve um resumo narrativo.',
      },
      {
        title: 'Tenha visibilidade',
        desc: 'Tudo aparece no seu feed e nos destinos escolhidos, automaticamente, com métricas de produtividade do time.',
      },
    ],
  },
  features: {
    eyebrow: 'RECURSOS',
    title: 'Tudo que muda no código vira narrativa.',
    featuredTitle: 'Feed unificado + Métricas de produtividade',
    featuredDesc:
      'Um único lugar com todo o progresso do time: filtros por tipo, busca e métricas que importam — PRs analisados, commits, linhas alteradas e tempo de review economizado.',
    stats: [
      { label: 'Resumos gerados' },
      { label: 'PRs analisados' },
      { label: 'Pushes resumidos' },
      { label: 'Tempo economizado' },
    ],
    cards: [
      {
        title: 'Ask Driff',
        desc: 'Pergunte sobre todo o histórico do time em linguagem natural — "quando a feature X foi lançada?" — e receba a resposta com as fontes.',
      },
      {
        title: 'Resumos automáticos',
        desc: 'Todo PR mergeado, push direto e release vira um resumo claro e profissional — com as estatísticas do diff.',
      },
      {
        title: 'Changelog de versões',
        desc: 'Bumpou a versão? O Driff gera um changelog pronto pra compartilhar com o time ou com clientes.',
      },
    ],
  },
  ask: {
    eyebrow: 'ASK DRIFF',
    title: 'Pergunte qualquer coisa sobre o que seu time entregou.',
    subtitle:
      'O Driff lembra de cada PR, push e release. Pergunte em linguagem natural e receba a resposta — com a versão e os PRs exatos.',
    inputPlaceholder: 'Pergunte qualquer coisa ao Driff…',
    q1: 'Quando lançamos o novo onboarding?',
    a1: 'O redesenho do onboarding saiu na v1.3.0. Veio nos PRs #142 e #147 e removeu o passo manual de criar workspace.',
    a1sources: 'v1.3.0 · PR #142 · PR #147',
    q2: 'O que mudou em pagamentos no último mês?',
    a2: 'Três mudanças: correção do ETA das paradas de combustível, um refactor de precificação e um guard de retry no webhook. Sem breaking changes.',
    suggest1: 'Resumir a última semana',
    suggest2: 'O que saiu na v1.3.0?',
    q3: 'Gere um doc sobre as principais mudanças de precificação dos últimos 3 meses.',
    a3: 'Pronto — reuni todas as mudanças relacionadas a precificação dos últimos 3 meses num documento, pronto pra baixar.',
    reportTitle: 'Mudanças de precificação — últimos 3 meses.docx',
    reportMeta: '12 mudanças · 4 PRs · 2 releases',
  },
  integrations: {
    eyebrow: 'INTEGRAÇÕES',
    title: 'Conecte suas origens. Entregue onde o time já trabalha.',
    subtitle:
      'O Driff busca o que muda em diversas fontes de código e publica os resumos em vários destinos — sem você trocar de ferramenta.',
    origins: 'ORIGENS',
    destinations: 'DESTINOS',
    available: 'Disponível',
    inDevelopment: 'em desenvolvimento',
    caption: '6 integrações disponíveis no beta · as demais em desenvolvimento ativo.',
  },
  beforeAfter: {
    eyebrow: 'O DIFERENCIAL',
    title: 'Do commit cru ao resumo que qualquer um entende.',
    subtitle:
      'Dashboards mostram números. O Driff conta a história: o que foi feito, por quê e qual o impacto.',
    before: 'ANTES',
    commitStat: '+36 −0 · 2 arquivos',
    note: 'Quem não escreveu isso não faz ideia do que aconteceu.',
    badge: 'COM DRIFF',
    afterTitle: 'Correção no cálculo de paradas de combustível',
    afterBody:
      'Resolvido um erro que quebrava a estimativa de chegada (ETA) quando uma parada não tinha horário definido. A lógica de precificação foi simplificada, reduzindo inconsistências em rotas longas.',
    impact: 'Impacto: usuários deixam de ver telas de erro ao planejar viagens com paradas.',
    meta: 'PR #15 · feature/fuel-stops → main',
  },
  personas: {
    eyebrow: 'PARA QUEM É',
    title: 'Feito para startups que entregam rápido demais pra documentar.',
    subtitle:
      'Do fundador solo ao time de 30 devs: se o código anda mais rápido que a comunicação, o Driff é pra você.',
    cards: [
      {
        title: 'Founders & CTOs',
        desc: 'Visibilidade do que o time entrega, sem precisar cobrar relatório de ninguém.',
      },
      {
        title: 'Product Managers',
        desc: 'Entenda o que foi feito e o impacto — sem precisar ler uma linha de código.',
      },
      {
        title: 'Desenvolvedores',
        desc: 'Pare de escrever update semanal. Seu trabalho se documenta sozinho.',
      },
    ],
  },
  whitelist: {
    badge: 'Vagas limitadas · 8 a 15 times',
    title: 'Entre no beta fechado do Driff.',
    subtitle:
      'Acesso gratuito durante o beta, suporte direto com a gente e influência real no produto. Deixe seus dados e entramos em contato.',
    name: 'Seu nome',
    namePh: 'Ex: Antony Lajes',
    email: 'E-mail',
    emailPh: 'voce@email.com',
    team: 'Time / empresa',
    teamPh: 'Nome do seu time',
    teamSize: 'Quantidade de devs',
    role: 'Seu cargo',
    githubOrg: 'Organização no GitHub (opcional)',
    githubOrgPh: 'github.com/sua-org',
    selectPlaceholder: 'Selecione…',
    roles: ['Founder / CTO', 'Eng. Lead', 'Product Manager', 'Desenvolvedor', 'Outro'],
    submit: 'Quero entrar na whitelist',
    submitting: 'Enviando…',
    successButton: 'Você entrou!',
    successTitle: 'Bem-vindo a bordo — obrigado! 🧡',
    successDesc:
      'A gente avalia cada time na mão e entra em contato em até 10 dias. Seu e-mail de confirmação já está a caminho — fica de olho na caixa de entrada.',
    error: 'Não foi possível enviar agora. Tente novamente.',
    microcopy: 'Sem spam. Só te avisamos quando sua vaga abrir.',
    consentPre: 'Ao entrar, você concorda com a nossa',
    consentLink: 'Política de Privacidade',
  },
  faq: {
    eyebrow: 'PERGUNTAS FREQUENTES',
    title: 'Tudo que você quer saber antes de entrar.',
    items: [
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
        a: 'Resumos fluentes e profissionais no seu idioma. Customização de tom, tamanho e idioma está chegando.',
      },
    ],
  },
  footer: {
    tagline: 'Gerenciamento automático de progresso para times de dev.',
    product: 'Produto',
    legal: 'Jurídico',
    privacy: 'Privacidade',
    terms: 'Termos',
    rights: 'Todos os direitos reservados.',
  },
}
