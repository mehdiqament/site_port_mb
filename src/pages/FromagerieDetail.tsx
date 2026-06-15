import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
import { FadeUp, CodeButton } from "../app/shared"

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" }
const SANS: React.CSSProperties = { fontFamily: "'Inter', sans-serif" }

const tagStyle: React.CSSProperties = {
  ...MONO,
  fontSize: "0.8125rem",
  fontWeight: 300,
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
  border: "0.5px solid rgba(0,0,0,0.12)",
  padding: "0.5rem 1.125rem",
  color: "#1f2937",
  transition: "border-color 0.2s, color 0.2s",
}

const features = [
  "Catalogue de fromages avec filtres par type de lait et format (demi / entier)",
  "Panier d'achat avec respect des limites de stock et options de modification ou vidage",
  "Formulaire de saisie des informations client",
  "Génération de facture récapitulative avec option d'impression",
]

const techStack = [
  { name: "Java", abbr: "☕" },
  { name: "Swing", abbr: "UI" },
  { name: "JSON", abbr: "{}" },
]

export default function FromagerieDetail() {
  return (
    <article style={{ padding: "5rem 2rem 7rem" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>

        {/* Back link */}
        <FadeUp entryDelay={60}>
          <Link
            to="/projets"
            style={{
              ...SANS,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8125rem",
              color: "#9ca3af",
              textDecoration: "none",
              marginBottom: "3.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Projets
          </Link>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={40} entryDelay={60}>
          <div
            style={{
              ...MONO,
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#9ca3af",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            SAÉ · Projet scolaire
          </div>
          <h1
            style={{
              ...SANS,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 300,
              color: "#0D0D0D",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: "0 0 2rem",
            }}
          >
            Application de vente<br />Fromagerie 🧀
          </h1>
        </FadeUp>

        {/* Tag row */}
        <FadeUp delay={80} entryDelay={60}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "4rem" }}>
            {techStack.map((s) => (
              <div key={s.name} style={tagStyle}>
                <span style={{ color: "#3B82F6" }}>{s.abbr}</span>
                {s.name}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Voir le code */}
        <FadeUp delay={120} entryDelay={60}>
          <div style={{ marginBottom: "3rem" }}>
            <CodeButton href="https://github.com/mehdiqament/sae-vente-fromages" />
          </div>
        </FadeUp>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)", marginBottom: "4rem" }} />

        {/* Section - Le projet */}
        <FadeUp delay={0}>
          <SectionBlock label="Le projet">
            <p
              style={{
                ...SANS,
                fontSize: "0.9375rem",
                color: "#4b5563",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Réalisée dans le cadre d'une SAÉ (Situation d'Apprentissage et d'Évaluation), cette application simule une boutique en ligne de fromages. Développée entièrement en Java avec l'interface graphique Swing, elle repose sur une architecture multi-fenêtres utilisant des{" "}
              <span style={{ color: "#0D0D0D", fontWeight: 500 }}>JDialog</span> imbriquées pour chaque étape du parcours client - navigation du catalogue, gestion du panier, saisie des informations et édition de la facture.
            </p>
          </SectionBlock>
        </FadeUp>

        {/* Section - Fonctionnalités */}
        <FadeUp delay={60}>
          <SectionBlock label="Fonctionnalités">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    ...SANS,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.875rem",
                    fontSize: "0.9375rem",
                    color: "#4b5563",
                    lineHeight: "1.65",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#3B82F6",
                      flexShrink: 0,
                      marginTop: "0.55em",
                    }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </FadeUp>

        {/* Section - Stack technique */}
        <FadeUp delay={120}>
          <SectionBlock label="Stack technique">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {techStack.map((s) => (
                <div
                  key={s.name}
                  className="skill-pill-lg"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8125rem", color: "#3B82F6", fontWeight: 300, minWidth: "1.5rem" }}>
                    {s.abbr}
                  </span>
                  {s.name}
                </div>
              ))}
            </div>
          </SectionBlock>
        </FadeUp>

      </div>
    </article>
  )
}

// ─── Local helper ─────────────────────────────────────────────────────────────
function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          color: "#9ca3af",
          textTransform: "uppercase",
          marginBottom: "1.25rem",
        }}
      >
        {label}
      </div>
      {children}
    </div>
  )
}
