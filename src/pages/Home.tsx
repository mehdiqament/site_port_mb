import { Link } from "react-router"
import { FadeUp, CODE_TEXTURE } from "../app/shared"
import { useTranslation } from "./useTranslation" // Ajuste le chemin selon ta structure

const HERO_ENTRY = 120 // ms after page mount before fade-ups start

export default function Home() {
  const { t } = useTranslation()

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - 52px)",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(158deg,#ffffff 60%,#f0f6ff 100%)",
      }}
    >
      {/* Code texture */}
      <pre
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          fontSize: "0.6875rem",
          lineHeight: "1.85",
          color: "#000",
          opacity: 0.042,
          fontFamily: "'JetBrains Mono', monospace",
          padding: "3rem 2rem",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {CODE_TEXTURE + CODE_TEXTURE + CODE_TEXTURE}
      </pre>

      <div
        style={{
          maxWidth: "68rem",
          margin: "0 auto",
          padding: "6rem 2rem 7rem",
          position: "relative",
          width: "100%",
        }}
      >
        <FadeUp delay={0} entryDelay={HERO_ENTRY}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              color: "#9ca3af",
              marginBottom: "1.75rem",
            }}
          >
            {t("home.subtitle")}
          </div>
        </FadeUp>

        <FadeUp delay={80} entryDelay={HERO_ENTRY}>
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(5rem,14vw,10.5rem)",
              fontWeight: 200,
              letterSpacing: "-0.025em",
              color: "#0D0D0D",
              lineHeight: 0.92,
              margin: "0 0 2.25rem",
            }}
          >
            Mehdi
          </h1>
        </FadeUp>

        <FadeUp delay={160} entryDelay={HERO_ENTRY}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.0625rem",
              color: "#4b5563",
              fontWeight: 400,
              marginBottom: "0.75rem",
              letterSpacing: "0.01em",
            }}
          >
            {t("home.role.prefix")}{" "}
            <span style={{ color: "#3B82F6", fontWeight: 500 }}>{t("home.role.specialty")}</span>
          </div>
        </FadeUp>

        <FadeUp delay={240} entryDelay={HERO_ENTRY}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#6b7280",
              maxWidth: "38rem",
              lineHeight: "1.75",
              margin: "0 0 3.25rem",
            }}
          >
            {t("home.description")}
          </p>
        </FadeUp>

        <FadeUp delay={320} entryDelay={HERO_ENTRY}>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-primary">
              {t("home.buttons.contact")}
            </Link>
            <Link to="/competences" className="btn-ghost">
              {t("home.buttons.skills")}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
