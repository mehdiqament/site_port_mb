import { Link } from "react-router"
import { ArrowUpRight } from "lucide-react"
import { FadeUp, SectionHeader } from "../app/shared"
import { useTranslation } from "./useTranslation" // Ajuste le chemin selon ton projet

const TAG_STYLE: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  letterSpacing: "0.08em",
  padding: "0.25rem 0.625rem",
  border: "0.5px solid rgba(0,0,0,0.12)",
  color: "#6b7280",
}

const TAG_MUTED_STYLE: React.CSSProperties = {
  ...TAG_STYLE,
  border: "0.5px solid rgba(0,0,0,0.07)",
  color: "#9ca3af",
}

// ─── Reusable active project card ─────────────────────────────────────────────
function ProjectCard({
  to,
  title,
  desc,
  tags,
  badge,
}: {
  to: string
  title: string
  desc: string
  tags: string[]
  badge?: string
}) {
  return (
    <Link to={to} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          border: "0.5px solid rgba(0,0,0,0.1)",
          padding: "2rem",
          background: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          transition: "border-color 0.2s, box-shadow 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#3B82F6"
          e.currentTarget.style.boxShadow = "0 2px 20px rgba(59,130,246,0.09)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ flex: 1 }}>
            {badge && (
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#3B82F6", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                {badge}
              </div>
            )}
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#0D0D0D", letterSpacing: "-0.005em", lineHeight: 1.4, margin: 0 }}>
              {title}
            </h3>
          </div>
          <ArrowUpRight size={16} strokeWidth={1.5} style={{ color: "#9ca3af", flexShrink: 0, marginTop: "2px" }} />
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#6b7280", lineHeight: "1.65", margin: 0, flex: 1 }}>
          {desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {tags.map((t) => <span key={t} style={TAG_STYLE}>{t}</span>)}
        </div>
      </div>
    </Link>
  )
}

// ─── Coming-soon card ─────────────────────────────────────────────────────────
function ComingSoonCard({ badge }: { badge: string }) {
  const { t } = useTranslation()

  return (
    <div
      style={{
        border: "0.5px dashed rgba(0,0,0,0.1)",
        padding: "2rem",
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.4rem" }}>
            {badge}
          </div>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#9ca3af", letterSpacing: "-0.005em", lineHeight: 1.4, margin: 0 }}>
            {t("projets.comingSoon.title")}
          </h3>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#9ca3af", border: "0.5px solid rgba(0,0,0,0.1)", padding: "0.2rem 0.6rem", flexShrink: 0, textTransform: "uppercase" }}>
          {t("projets.comingSoon.badge")}
        </span>
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#9ca3af", lineHeight: "1.65", margin: 0, flex: 1 }}>
        {t("projets.comingSoon.desc")}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {["-", "-", "-"].map((t, i) => <span key={i} style={TAG_MUTED_STYLE}>{t}</span>)}
      </div>
    </div>
  )
}

// ─── Year section header ──────────────────────────────────────────────────────
function YearSection({ year, sub, children }: { year: string; sub: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid rgba(0,0,0,0.07)" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", fontWeight: 400, color: "#0D0D0D", letterSpacing: "0.02em" }}>
            {year}
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#9ca3af" }}>
            {sub}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))", gap: "1rem" }}>
          {children}
        </div>
      </div>
    </FadeUp>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Projets() {
  const { t } = useTranslation()

  return (
    <section style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "68rem", margin: "0 auto" }}>
        <SectionHeader label={t("projets.label")} title={t("projets.title")} />

        {/* 2025-2026 */}
        <YearSection year="2025 - 2026" sub={t("projets.years.y1")}>
          <ProjectCard
            to="/projets/fromagerie"
            title={t("fromagerie.titleCard")}
            desc={t("fromagerie.descCard")}
            tags={["Java", "Swing", "JSON"]}
            badge="SAÉ"
          />
          <ProjectCard
            to="/projets/gps-nmea"
            title={t("gpsNmea.titleCard")}
            desc={t("gpsNmea.descCard")}
            tags={["C", "Shell", "Makefile"]}
            badge="SAÉ"
          />
        </YearSection>

        {/* 2026-2027 */}
        <YearSection year="2026 - 2027" sub={t("projets.years.y2")}>
          <ComingSoonCard badge={t("projets.semesters.s1")} />
          <ComingSoonCard badge={t("projets.semesters.s2")} />
        </YearSection>
      </div>
    </section>
  )
}
