import { createContext, useContext, useState, useEffect } from "react"

type Lang = "fr" | "en"

const LanguageContext = createContext<{
  lang: Lang
  toggleLang: () => void
}>({ lang: "fr", toggleLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) ?? "fr"
  })

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
