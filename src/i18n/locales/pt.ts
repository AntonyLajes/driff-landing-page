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
        title: 'Streak freeze: mantenha a sequência com 1 folga por semana',
        meta: 'PR #142 · feature/streak-freeze → main  ·  +210 −18 · 6 arquivos',
        time: 'agora',
      },
      {
        title: 'Corrige sequência zerando à meia-noite em outros fusos',
        meta: 'Push · main · a1b2c3d  ·  +12 −3 · 2 arquivos',
        time: '2h',
      },
      {
        title: 'Versão 2.4.0 — lembretes & insights',
        meta: 'Release · main · e5f6a7b  ·  Changelog gerado',
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
    q1: 'Quando lançamos o streak freeze?',
    a1: 'O streak freeze saiu na v2.4.0. Veio nos PRs #142 e #150 e deixa o usuário pular um dia por semana sem perder a sequência.',
    a1sources: 'v2.4.0 · PR #142 · PR #150',
    q2: 'O que mudou nos lembretes no último mês?',
    a2: 'Três mudanças: horário de lembrete mais inteligente com base no histórico do hábito, correção do reset à meia-noite por fuso e modo "não perturbe". Sem breaking changes.',
    suggest1: 'Resumir a última semana',
    suggest2: 'O que saiu na v2.4.0?',
    q3: 'Gere um doc sobre as principais mudanças de lembretes dos últimos 3 meses.',
    a3: 'Pronto — reuni todas as mudanças de lembrete e notificação dos últimos 3 meses num documento, pronto pra baixar.',
    reportTitle: 'Mudanças de lembretes — últimos 3 meses.docx',
    reportMeta: '9 mudanças · 5 PRs · 3 releases',
    generating: "Gerando documento…",
  },
  changelog: {
    eyebrow: 'CHANGELOG DE VERSÕES',
    title: 'Cada release vira um changelog.',
    subtitle:
      'Bumpou a versão e o Driff escreve um changelog limpo e agrupado — pronto pra compartilhar com o time ou com seus clientes.',
    version: 'Versão 2.4.0',
    date: 'Lançada em 12 de abr',
    autoTag: 'Gerado automaticamente',
    publishedTo: 'Publicado em',
    groups: [
      {
        label: 'Novidades',
        items: [
          'Streak freeze — pule um dia por semana sem perder a sequência',
          'Insights semanais: seus melhores hábitos e tendências num relance',
        ],
      },
      {
        label: 'Melhorias',
        items: [
          'Horário de lembrete mais inteligente com base no histórico de cada hábito',
          'Tela inicial mais rápida em contas com mais de 50 hábitos',
        ],
      },
      {
        label: 'Correções',
        items: [
          'Corrigida a sequência zerando à meia-noite em fusos fora do UTC',
          'Lembretes não disparam mais durante o modo "não perturbe"',
        ],
      },
    ],
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
    commitStat: '+48 −12 · 3 arquivos',
    note: 'Quem não escreveu isso não faz ideia do que aconteceu.',
    badge: 'COM DRIFF',
    afterTitle: 'Corrigida a sequência zerando à meia-noite em outros fusos',
    afterBody:
      'Resolvido um erro em que a sequência do usuário zerava às 00:00 UTC em vez da meia-noite local, quebrando a streak de quem está fora do UTC. O agendador de lembretes também foi simplificado.',
    impact: 'Impacto: usuários fora do UTC não perdem mais a sequência durante a noite.',
    meta: 'PR #148 · fix/tz-streak-reset → main',
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
