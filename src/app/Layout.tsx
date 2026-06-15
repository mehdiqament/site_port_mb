import { useState, useEffect } from "react"
import { NavLink, Outlet, useLocation } from "react-router"
import { GLOBAL_CSS } from "./shared"

// ─── Typewriter (loading screen only) ────────────────────────────────────────
function useTypewriter(text: string, speed = 95, startDelay = 700) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(iv)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(iv)
    }, startDelay)
    return () => clearTimeout(t)
  }, [])

  return { displayed, done }
}

// ─── Nav link wrapper ─────────────────────────────────────────────────────────
function NavItem({ to, label, prefix }: { to: string; label: string; prefix?: boolean }) {
  return (
    <NavLink
      to={to}
      end={!prefix}
      className={({ isActive }) =>
        isActive ? "nav-link nav-link-active" : "nav-link"
      }
    >
      {label}
    </NavLink>
  )
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function Layout() {
  const location = useLocation()

  // Loading screen: only on first visit per session
  const [loadPhase, setLoadPhase] = useState<"loading" | "exiting" | "done">(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("mq-loaded")) {
      return "done"
    }
    return "loading"
  })

  const { displayed, done } = useTypewriter(
    "Mehdi",
    95,
    loadPhase === "loading" ? 700 : 99999 // skip animation if already loaded
  )

  const handleEnter = () => {
    sessionStorage.setItem("mq-loaded", "1")
    setLoadPhase("exiting")
    setTimeout(() => setLoadPhase("done"), 850)
  }

  // Page transition key — fade content on route change
  const [pageKey, setPageKey] = useState(location.pathname)
  const [pageVisible, setPageVisible] = useState(true)

  useEffect(() => {
    if (location.pathname !== pageKey) {
      setPageVisible(false)
      const t = setTimeout(() => {
        setPageKey(location.pathname)
        setPageVisible(true)
      }, 120)
      return () => clearTimeout(t)
    }
  }, [location.pathname])

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      {/* ── Loading Screen ───────────────────────────────────────────── */}
      {loadPhase !== "done" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#0D0D0D",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            opacity: loadPhase === "loading" ? 1 : 0,
            pointerEvents: loadPhase === "loading" ? "auto" : "none",
            transition: "opacity 0.85s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Subtle grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }}
          />

          {/* Typewriter name */}
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#fff",
              fontSize: "clamp(3.5rem,11vw,7rem)",
              fontWeight: 200,
              letterSpacing: "0.18em",
              display: "flex",
              alignItems: "center",
              lineHeight: 1,
              position: "relative",
            }}
          >
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "0.8em",
                background: "#3B82F6",
                marginLeft: "8px",
                animation: "cursor-blink 0.85s step-end infinite",
                opacity: done ? 0 : 1,
                transition: "opacity 0.4s ease 0.5s",
              }}
            />
          </div>

          {/* Enter button */}
          <button
            onClick={handleEnter}
            style={{
              marginTop: "4.5rem",
              border: "0.5px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.55)",
              background: "transparent",
              padding: "0.65rem 2.75rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              cursor: "pointer",
              opacity: done ? 1 : 0,
              transform: done ? "translateY(0)" : "translateY(10px)",
              transition:
                "opacity 0.55s ease 0.35s, transform 0.55s ease 0.35s, border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6"
              e.currentTarget.style.color = "#3B82F6"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"
              e.currentTarget.style.color = "rgba(255,255,255,0.55)"
            }}
          >
            [ Enter ]
          </button>
        </div>
      )}

      {/* ── Shell ────────────────────────────────────────────────────── */}
      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          opacity: loadPhase === "done" ? 1 : 0,
          transition: "opacity 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s",
          visibility: loadPhase === "loading" ? "hidden" : "visible",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "0.5px solid rgba(0,0,0,0.07)",
          }}
        >
          <div
            style={{
              maxWidth: "68rem",
              margin: "0 auto",
              padding: "0 2rem",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavLink
              to="/"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8125rem",
                fontWeight: 400,
                color: "#9ca3af",
                letterSpacing: "0.04em",
                textDecoration: "none",
              }}
            >
              mehdiqament.dev
            </NavLink>

            <div className="hide-sm" style={{ display: "flex", gap: "2.25rem" }}>
              <NavItem to="/" label="Accueil" />
              <NavItem to="/competences" label="Compétences" />
              <NavItem to="/parcours" label="Parcours" />
              <NavItem to="/projets" label="Projets" prefix />
              <NavItem to="/alternance" label="Alternance" />
              <NavItem to="/contact" label="Contact" />
            </div>
          </div>
        </nav>

        {/* Page content with cross-fade */}
        <main
          key={pageKey}
          style={{
            flex: 1,
            opacity: pageVisible ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <Outlet />
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: "0.5px solid rgba(0,0,0,0.07)",
            padding: "1.875rem 2rem",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "#9ca3af",
              letterSpacing: "0.06em",
            }}
          >
            mehdiqament.dev · 2026
          </span>
        </footer>
      </div>
    </>
  )
}
