import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
import { FadeUp, CodeButton } from "../app/shared"
import { useTranslation } from "./useTranslation" // Ajuste le chemin si nécessaire

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

const techStack = [
  { name: "C", abbr: "©" },
  { name: "Shell", abbr: "$_" },
  { name: "Makefile", abbr: "mk" },
]

export default function GpsNmeaDetail() {
  const { t, tList } = useTranslation()

  // On extrait le tableau des fonctionnalités traduit dynamiquement
  const features = tList("gpsNmea.features")

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
            {t("gpsNmea.backToProjects")}
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
            {t("gpsNmea.context")}
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
            {t("gpsNmea.title")}
          </h1>
        </FadeUp>

        {/* Tag row */}
        <FadeUp delay={80} entryDelay={60}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
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
            <CodeButton href="https://github.com/mehdiqament/Sujet1_Yahyaoui-Benataya_Bouin/tree/master/projet_gps" label={t("gpsNmea.viewCode")} />
          </div>
        </FadeUp>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)", marginBottom: "4rem" }} />

        {/* Section - Le projet */}
        <FadeUp delay={0}>
          <SectionBlock label={t("gpsNmea.sections.project")}>
            <p
              style={{
                ...SANS,
                fontSize: "0.9375rem",
                color: "#4b5563",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              {t("gpsNmea.description")}
            </p>
          </SectionBlock>
        </FadeUp>

        {/* Section - Fonctionnalités */}
        <FadeUp delay={60}>
          <SectionBlock label={t("gpsNmea.sections.features")}>
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
          <SectionBlock label={t("gpsNmea.sections.tech")}>
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
