import { useLanguage } from "./LanguageContext"
import { translations } from "../translations"

type Lang = "fr" | "en"

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key]
    return undefined
  }, obj as unknown) as string ?? path
}

export function useTranslation() {
  const { lang } = useLanguage()

  const t = (key: string): string => {
    return getNestedValue(translations[lang] as unknown as Record<string, unknown>, key)
  }

  return { t, lang }
}
