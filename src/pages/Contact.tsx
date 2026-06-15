import { Mail, Github, MessageSquare } from "lucide-react"
import { FadeUp, SectionHeader, contacts } from "../app/shared"
import { useTranslation } from "./useTranslation" // Ajuste le chemin si nécessaire

const ICONS: Record<string, React.ReactNode> = {
  Email: <Mail size={15} strokeWidth={1.5} />,
  GitHub: <Github size={15} strokeWidth={1.5} />,
  Discord: <MessageSquare size={15} strokeWidth={1.5} />,
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "68rem", margin: "0 auto" }}>
        {/* Titres traduits dynamiquement */}
        <SectionHeader label={t("contact.label")} title={t("contact.title")} />

        <FadeUp delay={80}>
          <div className="contacts-row" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {contacts.map(({ label, text, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span style={{ color: "#9ca3af", display: "flex", alignItems: "center" }}>
                  {ICONS[label]}
                </span>
                <span style={{ fontWeight: 500, letterSpacing: "0.01em" }}>{label}</span>
                <span style={{ color: "#9ca3af", fontSize: "0.8125rem" }}>- {text}</span>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
