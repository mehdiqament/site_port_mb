import { FadeUp, SectionHeader, timeline } from "../app/shared"

export default function Parcours() {
  return (
    <section style={{ padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "68rem", margin: "0 auto" }}>
        <SectionHeader label="Formation" title="Parcours" />

        <div style={{ position: "relative" }}>
          {/* Vertical gradient line */}
          <div
            style={{
              position: "absolute",
              left: "5.25rem",
              top: "10px",
              bottom: "10px",
              width: "0.5px",
              background:
                "linear-gradient(to bottom,rgba(0,0,0,0.06),rgba(59,130,246,0.3) 80%,rgba(59,130,246,0.6))",
            }}
          />

          {timeline.map((item, i) => (
            <FadeUp key={i} delay={i * 130}>
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  marginBottom: i < timeline.length - 1 ? "4.5rem" : 0,
                  position: "relative",
                  alignItems: "flex-start",
                }}
              >
                {/* Year */}
                <div
                  style={{
                    width: "4.5rem",
                    flexShrink: 0,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#9ca3af",
                    paddingTop: "3px",
                    textAlign: "right",
                  }}
                >
                  {item.year}
                </div>

                {/* Dot */}
                <div
                  style={{
                    width: "1.5rem",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "4px",
                  }}
                >
                  <div
                    style={{
                      width: item.active ? "10px" : "8px",
                      height: item.active ? "10px" : "8px",
                      borderRadius: "50%",
                      background: item.active ? "#3B82F6" : "#e5e7eb",
                      border: item.active ? "2px solid #3B82F6" : "1.5px solid #d1d5db",
                      boxShadow: item.active ? "0 0 0 4px rgba(59,130,246,0.12)" : "none",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingLeft: "1.5rem" }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#0D0D0D",
                      marginBottom: "0.2rem",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#3B82F6",
                      marginBottom: "0.6rem",
                      fontWeight: 400,
                    }}
                  >
                    {item.sub}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#6b7280",
                      lineHeight: "1.65",
                      maxWidth: "36rem",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
