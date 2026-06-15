import { useLanguage } from "./LanguageContext"
import { translations } from "./translations"

// Looks up a nested value by dot path, e.g. "alternance.modal.title"
function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function useTranslation() {
  const { lang } = useLanguage()

  function t(path: string): string {
    const value = getByPath(translations[lang], path)
    if (value === undefined) {
      // Fallback to French if a key is missing in the current language
      const fallback = getByPath(translations.fr, path)
      if (typeof fallback === "string") return fallback
      console.warn(`Missing translation for key: ${path}`)
      return path
    }
    if (typeof value === "string") return value
    console.warn(`Translation key "${path}" does not resolve to a string`)
    return path
  }

  // For arrays (e.g. lists of features)
  function tList(path: string): string[] {
    const value = getByPath(translations[lang], path)
    if (Array.isArray(value)) return value as string[]
    const fallback = getByPath(translations.fr, path)
    if (Array.isArray(fallback)) return fallback as string[]
    return []
  }

  return { t, tList, lang }
}
