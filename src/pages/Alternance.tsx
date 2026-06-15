import { useState } from "react"
import { X, Download, Send, Lock, Mail } from "lucide-react"
import { FadeUp, SectionHeader } from "../app/shared"
import { useTranslation } from "./useTranslation" // Ajuste le chemin si nécessaire
import cvUrl from "../imports/CV_Bouin_Mehdi.pdf"

// ─── CV Modal ─────────────────────────────────────────────────────────────────
type ModalTab = "code" | "request"

function CvModal({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation()
  const [tab, setTab] = useState<ModalTab>("code")
  const [password, setPassword] = useState("")
  const [pwError, setPwError] = useState("")
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState("")

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "AZEF5QS468941E5ZA") {
      const link = document.createElement("a")
      link.href = cvUrl
      link.download = "CV_Bouin_Mehdi.pdf"
      link.click()
      setPwError("")
    } else {
      setPwError(t("alternance.modal.accessCodeError"))
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) {
      setEmailError(t("alternance.modal.emailError"))
      return
    }
    setEmailError("")
    setEmailSent(true)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(3px)",
          zIndex: 200,
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Modal box */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 201,
          background: "#fff",
          border: "0.5px solid rgba(0,0,0,0.12)",
          boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
          width: "min(90vw, 28rem)",
          padding: "2.25rem",
          animation: "slideUp 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.75rem" }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.14em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.375rem" }}>
              {t("alternance.modal.documentLabel")}
            </div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", fontWeight: 500, color: "#0D0D0D", margin: 0, letterSpacing: "-0.01em" }}>
              {t("alternance.modal.title")}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: "2px", display: "flex", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.375rem", marginBottom: "1.75rem", background: "#f9fafb", padding: "3px", border: "0.5px solid rgba(0,0,0,0.07)" }}>
          {([["code", t("alternance.modal.tabCode")], ["request", t("alternance.modal.tabRequest")]] as [ModalTab, string][]).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                padding: "0.5rem",
                border: "none",
                cursor: "pointer",
                background: tab === id ? "#fff" : "transparent",
                color: tab === id ? "#0D0D0D" : "#9ca3af",
                boxShadow: tab === id ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                transition: "background 0.15s, color 0.15s",
                letterSpacing: "0.01em",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab: code */}
        {tab === "code" && (
          <form onSubmit={handlePasswordSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#374151", fontWeight: 500 }}>
              {t("alternance.modal.accessCodeLabel")}
            </label>
            <div style={{ position: "relative" }}>
              <Lock size={14} strokeWidth={1.5} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none" }} />
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setPwError("") }}
                placeholder={t("alternance.modal.accessCodePlaceholder")}
                style={{
                  width: "100%",
                  padding: "0.65rem 0.875rem 0.65rem 2.25rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  border: pwError ? "0.5px solid #f87171" : "0.5px solid rgba(0,0,0,0.14)",
                  background: "#fafafa",
                  color: "#0D0D0D",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3B82F6")}
                onBlur={(e) => (e.target.style.borderColor = pwError ? "#f87171" : "rgba(0,0,0,0.14)")}
              />
            </div>
            {pwError && (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#ef4444", margin: 0 }}>{pwError}</p>
            )}
            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.7rem",
                background: "#3B82F6",
                color: "#fff",
                border: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3B82F6")}
            >
              <Download size={14} strokeWidth={1.5} />
              {t("alternance.modal.downloadCv")}
            </button>
          </form>
        )}

        {/* Tab: request */}
        {tab === "request" && (
          emailSent ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.5rem", marginBottom: "0.875rem" }}>✓</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#0D0D0D", marginBottom: "0.5rem" }}>
                {t("alternance.modal.sentTitle")}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#6b7280", lineHeight: "1.6", margin: 0 }}>
                {t("alternance.modal.sentDesc")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#374151", fontWeight: 500 }}>
                {t("alternance.modal.emailLabel")}
              </label>
              <div style={{ position: "relative" }}>
                <Mail size={14} strokeWidth={1.5} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError("") }}
                  placeholder={t("alternance.modal.emailPlaceholder")}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.875rem 0.65rem 2.25rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    border: emailError ? "0.5px solid #f87171" : "0.5px solid rgba(0,0,0,0.14)",
                    background: "#fafafa",
                    color: "#0D0D0D",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3B82F6")}
                  onBlur={(e) => (e.target.style.borderColor = emailError ? "#f87171" : "rgba(0,0,0,0.14)")}
                />
              </div>
              {emailError && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#ef4444", margin: 0 }}>{emailError}</p>
              )}
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.7rem",
                  background: "#3B82F6",
                  color: "#fff",
                  border: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2563EB")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#3B82F6")}
              >
                <Send size={14} strokeWidth={1.5} />
                {t("alternance.modal.sendRequest")}
              </button>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#9ca3af", lineHeight: "1.55", margin: 0 }}>
                {t("alternance.modal.notice1")}{" "}
                <span style={{ color: "#6b7280" }}>mehdi@mehdiqament.dev</span>{" "}
                {t("alternance.modal.notice2")}
              </p>
            </form>
          )
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%,-48%); } to { opacity: 1; transform: translate(-50%,-50%); } }
      `}</style>
    </>
  )
}

// ─── Info card ────────────────────────────────────────────────────────────────
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border: "0.5px solid rgba(0,0,0,0.09)", padding: "1.25rem 1.5rem", background: "#fff" }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.14em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        {label}
      </div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#0D0D0D", letterSpacing: "-0.005em" }}>
        {value}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Alternance() {
  const { t } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "68rem", margin: "0 auto" }}>
        <SectionHeader label={t("alternance.label")} title={t("alternance.title")} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "start",
          }}
          className="alternance-grid"
        >
          {/* Left — main text */}
          <FadeUp delay={80}>
            <div style={{ borderLeft: "3px solid #3B82F6", paddingLeft: "2rem" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 400,
                  color: "#1f2937",
                  lineHeight: "1.8",
                  margin: "0 0 2.25rem",
                }}
              >
                {t("alternance.intro1")}{" "}
                <strong style={{ fontWeight: 600, color: "#0D0D0D" }}>{t("alternance.introHighlight1")}</strong>{" "}
                {t("alternance.introMid")}{" "}
                <strong style={{ fontWeight: 600, color: "#0D0D0D" }}>{t("alternance.introHighlight2")}</strong>.
                {" "}{t("alternance.introEnd1")}{" "}
                <strong style={{ fontWeight: 600, color: "#0D0D0D" }}>{t("alternance.introHighlight3")}</strong>{" "}
                {t("alternance.introEnd2")}
              </p>

              <button
                onClick={() => setModalOpen(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.8rem 1.75rem",
                  background: "#3B82F6",
                  color: "#fff",
                  border: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2563EB"
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(59,130,246,0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#3B82F6"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <Download size={16} strokeWidth={1.5} />
                {t("alternance.downloadCv")}
              </button>
            </div>
          </FadeUp>

          {/* Right — info cards */}
          <FadeUp delay={160}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", minWidth: "14rem" }}>
              <InfoCard label={t("alternance.infoCards.duration.label")} value={t("alternance.infoCards.duration.value")} />
              <InfoCard label={t("alternance.infoCards.domain.label")} value={t("alternance.infoCards.domain.value")} />
              <InfoCard label={t("alternance.infoCards.location.label")} value={t("alternance.infoCards.location.value")} />
              <InfoCard label={t("alternance.infoCards.availability.label")} value={t("alternance.infoCards.availability.value")} />
            </div>
          </FadeUp>
        </div>
      </div>

      {modalOpen && <CvModal onClose={() => setModalOpen(false)} />}

      <style>{`
        @media (max-width: 700px) {
          .alternance-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
