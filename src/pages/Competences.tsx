import { useEffect, useRef, useState } from "react"
import { FadeUp, SectionHeader, skills } from "../app/shared"

// Animates a progress bar from 0 → target when it enters the viewport
function AnimatedBar({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          // Defer slightly so the parent FadeUp transition has started
          setTimeout(() => setWidth(pct), 80)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div
      ref={ref}
      style={{
        height: "2px",
        background: "rgba(0,0,0,0.06)",
        overflow: "hidden",
        borderRadius: "1px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: "#3B82F6",
          borderRadius: "1px",
          transition: "width 0.9s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  )
}

export default function Competences() {
  return (
    <section style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "68rem", margin: "0 auto" }}>
        <SectionHeader label="Stack technique" title="Compétences" />

        <div>
          {skills.map((skill, i) => (
            <FadeUp key={skill.name} delay={i * 45}>
              <div
                style={{
                  paddingTop: "1.625rem",
                  paddingBottom: "1.625rem",
                  borderBottom: "0.5px solid rgba(0,0,0,0.07)",
                  display: "grid",
                  gridTemplateColumns: "2rem 1fr auto",
                  gap: "0 1.25rem",
                  alignItems: "start",
                }}
              >
                {/* Icon */}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8125rem",
                    color: "#3B82F6",
                    fontWeight: 300,
                    paddingTop: "1px",
                    userSelect: "none",
                  }}
                >
                  {skill.abbr}
                </span>

                {/* Name + desc + bar */}
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#0D0D0D",
                      marginBottom: "0.3rem",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#9ca3af",
                      lineHeight: "1.55",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {skill.desc}
                  </div>
                  <AnimatedBar pct={skill.pct} />
                </div>

                {/* Percentage */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    letterSpacing: "0.04em",
                    paddingTop: "2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.pct}%
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
