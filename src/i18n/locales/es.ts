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
      'Cada PR, push y release se convierte en un resumen claro — y puedes preguntarle a Driff lo que sea sobre lo que tu equipo entregó.',
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
        title: 'Ask Driff',
        desc: 'Consulta todo el historial de tu equipo en lenguaje natural — "¿cuándo se lanzó la función X?" — y recibe una respuesta con las fuentes.',
      },
      {
        title: 'Resúmenes automáticos',
        desc: 'Cada PR fusionado, push directo y release se vuelve un resumen claro y profesional — con estadísticas del diff.',
      },
      {
        title: 'Changelogs de versiones',
        desc: '¿Subiste la versión? Driff genera un changelog listo para compartir con el equipo o los clientes.',
      },
    ],
  },
  ask: {
    eyebrow: 'ASK DRIFF',
    title: 'Pregunta lo que sea sobre lo que tu equipo entregó.',
    subtitle:
      'Driff recuerda cada PR, push y release. Pregunta en lenguaje natural y recibe la respuesta — con la versión y los PRs exactos.',
    inputPlaceholder: 'Pregúntale lo que sea a Driff…',
    q1: '¿Cuándo lanzamos el nuevo onboarding?',
    a1: 'El rediseño del onboarding salió en la v1.3.0. Llegó en los PR #142 y #147 y eliminó el paso manual de crear el workspace.',
    a1sources: 'v1.3.0 · PR #142 · PR #147',
    q2: '¿Qué cambió en pagos el último mes?',
    a2: 'Tres cambios: un arreglo del ETA de las paradas de combustible, un refactor de precios y un guard de reintento en el webhook. Sin breaking changes.',
    suggest1: 'Resumir la última semana',
    suggest2: '¿Qué salió en la v1.3.0?',
    q3: 'Genera un doc sobre los principales cambios de precios de los últimos 3 meses.',
    a3: 'Listo — reuní todos los cambios de precios de los últimos 3 meses en un documento, listo para descargar.',
    reportTitle: 'Cambios de precios — últimos 3 meses.docx',
    reportMeta: '12 cambios · 4 PRs · 2 releases',
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
    successButton: '¡Estás dentro!',
    successTitle: 'Bienvenido a bordo — ¡gracias! 🧡',
    successDesc:
      'Revisamos cada equipo a mano y te contactaremos en un plazo de 10 días. Tu correo de confirmación ya va en camino — revisa tu bandeja de entrada.',
    error: 'No se pudo enviar ahora. Inténtalo de nuevo.',
    microcopy: 'Sin spam. Solo te avisamos cuando se abra tu plaza.',
    consentPre: 'Al unirte, aceptas nuestra',
    consentLink: 'Política de Privacidad',
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
    product: 'Producto',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    rights: 'Todos los derechos reservados.',
  },
}
