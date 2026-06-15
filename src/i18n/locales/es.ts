import type { Resources } from './en'

export const es: Resources = {
  nav: {
    howItWorks: 'Cómo funciona',
    features: 'Funciones',
    integrations: 'Integraciones',
    faq: 'FAQ',
    cta: 'Unirme a la lista',
  },
  hero: {
    badge: 'Beta cerrada · Plazas limitadas',
    titlePre: 'El ',
    titleShine: 'progreso',
    titleMid: ' de tu equipo, ',
    titleMarker: 'escrito solo.',
    titlePost: '',
    subtitle:
      'Cada PR, push y release se convierte en un resumen claro — escrito en tu idioma y entregado donde tu equipo ya trabaja.',
    ctaPrimary: 'Unirme a la lista del Beta',
    ctaSecondary: 'Ver cómo funciona',
    microcopy: 'Gratis en la beta · Configuración en ~5 min · Solo por invitación',
  },
  preview: {
    title: 'Resúmenes recientes',
    live: 'En vivo',
    segAll: 'Todos',
    segPR: 'PRs',
    segPush: 'Pushes',
    segVersion: 'Versiones',
    notion: 'Notion',
    rows: [
      {
        title: 'Corrección en el cálculo de paradas de combustible',
        meta: 'PR #15 · feature/fuel-stops → main  ·  +36 −0 · 2 archivos',
        time: 'ahora',
      },
      {
        title: 'Protección ante ETA inválido en rutas largas',
        meta: 'Push · main · 711c745  ·  +4 −0 · 1 archivo',
        time: '2h',
      },
      {
        title: 'Versión 1.3.2 — mejoras de estabilidad',
        meta: 'Release · main · 55f9054  ·  Changelog generado',
        time: 'ayer',
      },
    ],
  },
  problem: {
    eyebrow: 'EL PROBLEMA',
    title: 'Los equipos que van rápido pierden el control de lo que se entregó.',
    subtitle:
      'Cuanto más entrega el equipo, más difícil es saber qué pasó — y el costo es invisible.',
    cards: [
      {
        title: 'Los devs pierden tiempo escribiendo updates',
        desc: 'Cada viernes, la misma rutina de armar el "qué hice esta semana" en vez de escribir código.',
      },
      {
        title: 'Líderes y PMs quedan a oscuras',
        desc: 'Los commits y PRs no cuentan la historia de lo que realmente se entregó, ni su impacto.',
      },
      {
        title: 'Las retros se vuelven arqueología',
        desc: 'Siempre hay que rastrear el historial de Git para recordar qué cambió el último sprint.',
      },
    ],
  },
  how: {
    eyebrow: 'CÓMO FUNCIONA',
    title: 'Conecta el repo. El resto es automático.',
    subtitle: 'Tres pasos, una sola vez. Después Driff trabaja solo en segundo plano.',
    steps: [
      {
        title: 'Conecta',
        desc: 'Inicia sesión con Google, conecta tus fuentes de código en unos clics y elige dónde quieres los resúmenes.',
      },
      {
        title: 'Déjalo correr',
        desc: 'En cada PR fusionado, push directo o nueva versión, Driff captura lo que cambió y escribe un resumen narrativo.',
      },
      {
        title: 'Gana visibilidad',
        desc: 'Todo aparece en tu feed y en los destinos elegidos, automáticamente, con métricas de productividad del equipo.',
      },
    ],
  },
  features: {
    eyebrow: 'FUNCIONES',
    title: 'Todo lo que cambia en el código se vuelve narrativa.',
    featuredTitle: 'Feed unificado + métricas de productividad',
    featuredDesc:
      'Un solo lugar para todo el progreso del equipo: filtros por tipo, búsqueda y las métricas que importan — PRs analizados, commits, líneas cambiadas y tiempo de revisión ahorrado.',
    stats: [
      { label: 'Resúmenes generados' },
      { label: 'PRs analizados' },
      { label: 'Pushes resumidos' },
      { label: 'Tiempo ahorrado' },
    ],
    cards: [
      {
        title: 'Resúmenes de Pull Requests',
        desc: 'Cada PR fusionado se vuelve un resumen profesional, con estadísticas del diff. Reviewers y PMs lo entienden en segundos.',
      },
      {
        title: 'Resúmenes de pushes directos',
        desc: '¿Hotfix o equipo en una sola rama? Resume pushes directos con deduplicación — nunca lo mismo dos veces.',
      },
      {
        title: 'Resúmenes de releases',
        desc: '¿Subiste la versión? Genera un changelog automático, listo para compartir con el equipo o los clientes.',
      },
    ],
  },
  integrations: {
    eyebrow: 'INTEGRACIONES',
    title: 'Conecta tus fuentes. Entrega donde el equipo ya trabaja.',
    subtitle:
      'Driff toma lo que cambia en varias fuentes de código y publica los resúmenes en múltiples destinos — sin que cambies de herramienta.',
    origins: 'FUENTES',
    destinations: 'DESTINOS',
    available: 'Disponible',
    inDevelopment: 'en desarrollo',
    caption: '6 integraciones disponibles en la beta · el resto en desarrollo activo.',
  },
  beforeAfter: {
    eyebrow: 'LA DIFERENCIA',
    title: 'Del commit crudo a un resumen que cualquiera entiende.',
    subtitle:
      'Los dashboards muestran números. Driff cuenta la historia: qué se hizo, por qué y el impacto.',
    before: 'ANTES',
    commitStat: '+36 −0 · 2 archivos',
    note: 'Quien no lo escribió no tiene idea de qué pasó.',
    badge: 'CON DRIFF',
    afterTitle: 'Corrección en el cálculo de paradas de combustible',
    afterBody:
      'Se corrigió un error que rompía la estimación de llegada (ETA) cuando una parada no tenía horario definido. Se simplificó la lógica de precios, reduciendo inconsistencias en rutas largas.',
    impact: 'Impacto: los usuarios dejan de ver pantallas de error al planear viajes con paradas.',
    meta: 'PR #15 · feature/fuel-stops → main',
  },
  personas: {
    eyebrow: 'PARA QUIÉN ES',
    title: 'Hecho para startups que entregan demasiado rápido para documentar.',
    subtitle:
      'Del fundador en solitario al equipo de 30 devs: si el código va más rápido que la comunicación, Driff es para ti.',
    cards: [
      {
        title: 'Founders y CTOs',
        desc: 'Visibilidad de lo que entrega el equipo, sin perseguir a nadie por un reporte.',
      },
      {
        title: 'Product Managers',
        desc: 'Entiende qué se hizo y su impacto — sin leer una sola línea de código.',
      },
      {
        title: 'Desarrolladores',
        desc: 'Deja de escribir el update semanal. Tu trabajo se documenta solo.',
      },
    ],
  },
  whitelist: {
    badge: 'Plazas limitadas · 8 a 15 equipos',
    title: 'Únete a la beta cerrada de Driff.',
    subtitle:
      'Acceso gratuito durante la beta, soporte directo con nosotros e influencia real en el producto. Deja tus datos y te contactamos.',
    name: 'Tu nombre',
    namePh: 'Ej: Antony Lajes',
    email: 'Email',
    emailPh: 'tu@email.com',
    team: 'Equipo / empresa',
    teamPh: 'Nombre de tu equipo',
    teamSize: 'Cantidad de devs',
    role: 'Tu rol',
    githubOrg: 'Organización en GitHub (opcional)',
    githubOrgPh: 'github.com/tu-org',
    selectPlaceholder: 'Selecciona…',
    roles: ['Founder / CTO', 'Eng. Lead', 'Product Manager', 'Desarrollador', 'Otro'],
    submit: 'Quiero entrar a la lista',
    submitting: 'Enviando…',
    successTitle: '¡Estás en la lista! 🎉',
    successDesc:
      'Recibimos tus datos. En cuanto se abra tu plaza, te enviamos una invitación a tu email.',
    error: 'No se pudo enviar ahora. Inténtalo de nuevo.',
    microcopy: 'Sin spam. Solo te avisamos cuando se abra tu plaza.',
  },
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    title: 'Todo lo que quieres saber antes de unirte.',
    items: [
      {
        q: '¿Mis datos y mi código están seguros?',
        a: 'Driff solo lee los metadatos y diffs necesarios para generar los resúmenes, con permisos mínimos. No almacenamos tu código fuente.',
      },
      {
        q: '¿Tengo que cambiar mi flujo de trabajo?',
        a: 'No. Sigues usando las herramientas que ya usas — Driff trabaja en segundo plano, sin estorbar.',
      },
      {
        q: '¿Con qué herramientas se integra Driff?',
        a: 'Tomamos cambios de varias fuentes de código (GitHub disponible hoy; GitLab, Bitbucket y más en camino) y publicamos en múltiples destinos (Notion disponible; Slack, Discord, Teams y más por venir).',
      },
      {
        q: '¿Cuánto costará?',
        a: 'Durante la beta es totalmente gratis. Los planes de pago llegan después, según el uso — proyectos, destinos y volumen de resúmenes.',
      },
      {
        q: '¿En qué idioma se escriben los resúmenes?',
        a: 'Resúmenes fluidos y profesionales en tu idioma. La personalización de tono, longitud e idioma está por llegar.',
      },
    ],
  },
  footer: {
    tagline: 'Seguimiento automático del progreso para equipos de desarrollo.',
  },
}
