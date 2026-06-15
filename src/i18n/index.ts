import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next, useTranslation } from 'react-i18next'

import { de } from './locales/de'
import { en, type Resources } from './locales/en'
import { es } from './locales/es'
import { pt } from './locales/pt'
import { zh } from './locales/zh'

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
] as const

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]['code']

const COPY: Record<LanguageCode, Resources> = { en, pt, es, de, zh }

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      de: { translation: de },
      zh: { translation: zh },
    },
    // Default is English; detection only overrides it when a supported match is found.
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'es', 'de', 'zh'],
    // Map regional tags (pt-BR, zh-CN, …) down to the base language.
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'driff_lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

const applyHtmlLang = (lng: string) => {
  document.documentElement.lang = (lng || 'en').split('-')[0]
}
applyHtmlLang(i18n.resolvedLanguage ?? 'en')
i18n.on('languageChanged', applyHtmlLang)

const resolveCode = (lng: string | undefined): LanguageCode => {
  const base = (lng ?? 'en').split('-')[0] as LanguageCode
  return base in COPY ? base : 'en'
}

/** Typed copy for the active language (re-renders on language change). */
export function useCopy(): Resources {
  const { i18n: instance } = useTranslation()
  return COPY[resolveCode(instance.resolvedLanguage)]
}

/** Currently active supported language code. */
export function useActiveLanguage(): LanguageCode {
  const { i18n: instance } = useTranslation()
  return resolveCode(instance.resolvedLanguage)
}

export function changeLanguage(code: LanguageCode): void {
  void i18n.changeLanguage(code)
}

export default i18n
