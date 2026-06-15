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

const techStack = [
  { name: "C", abbr: "©" },
  { name: "Shell", abbr: "$_" },
  { name: "Makefile", abbr: "mk" },
]

const features = [
  "Vérification de la validité des trames NMEA (checksum, format)",
  "Extraction et décodage des champs des trames $GPRMC et $GPGGA",
  "Conversion des coordonnées GPS du format NMEA (degrés-minutes) vers les degrés décimaux",
  "Formatage et affichage de l'heure UTC",
]

const demoFeatures = [
  "Lecture de trames GPS NMEA depuis un fichier d'entrée.",
  "Vérification du checksum pour chaque trame reçue.",
  "Extraction des champs de position depuis les trames $GPRMC et $GPGGA.",
  "Conversion des coordonnées du format degrés-minutes vers les degrés décimaux.",
  "Affichage formaté de l'heure UTC extraite des trames.",
]

export default function GpsNmeaDetail() {
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
          <div style={{ ...MONO, fontSize: "0.7rem", letterSpacing: "0.15em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "1rem" }}>
            R2.04 · Projet scolaire
          </div>
          <h1 style={{ ...SANS, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, color: "#0D0D0D", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 2rem" }}>
            Analyseur de trames<br />GPS NMEA
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

        {/* Boutons */}
<FadeUp delay={120} entryDelay={60}>
  <div style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
    <CodeButton href="https://github.com/mehdiqament/Sujet1_Yahyaoui-Benataya_Bouin/tree/master/projet_gps" />
    
    {/* ADD THE OPENING <a> TAG HERE */}
    <a
      href="#demo"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: "#374151",
        textDecoration: "none",
        border: "0.5px solid rgba(0,0,0,0.18)",
        padding: "0.55rem 1.125rem",
        letterSpacing: "0.02em",
        transition: "border-color 0.2s, color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#3B82F6"
        e.currentTarget.style.color = "#3B82F6"
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(59,130,246,0.1)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)"
        e.currentTarget.style.color = "#374151"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      Voir le test
    </a>
  </div>
</FadeUp>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)", marginBottom: "4rem" }} />

        {/* Section - Le projet */}
        <FadeUp delay={0}>
          <SectionBlock label="Le projet">
            <p style={{ ...SANS, fontSize: "0.9375rem", color: "#4b5563", lineHeight: "1.8", margin: 0 }}>
              Réalisée dans le cadre d'une SAÉ (Situation d'Apprentissage et d'Évaluation), ce projet implémente un parseur de trames GPS NMEA en langage C. Il lit des trames issues d'un récepteur GPS, vérifie leur intégrité par checksum, puis extrait et met en forme les données de position et de temps contenues dans les formats{" "}
              <span style={{ color: "#0D0D0D", fontWeight: 500 }}>$GPRMC</span> et{" "}
              <span style={{ color: "#0D0D0D", fontWeight: 500 }}>$GPGGA</span>.
            </p>
          </SectionBlock>
        </FadeUp>

        {/* Section - Fonctionnalités */}
        <FadeUp delay={60}>
          <SectionBlock label="Fonctionnalités">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {features.map((f, i) => (
                <li key={i} style={{ ...SANS, display: "flex", alignItems: "flex-start", gap: "0.875rem", fontSize: "0.9375rem", color: "#4b5563", lineHeight: "1.65" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3B82F6", flexShrink: 0, marginTop: "0.55em" }} />
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
                <div key={s.name} className="skill-pill-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8125rem", color: "#3B82F6", fontWeight: 300, minWidth: "1.5rem" }}>
                    {s.abbr}
                  </span>
                  {s.name}
                </div>
              ))}
            </div>
          </SectionBlock>
        </FadeUp>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)", marginBottom: "4rem" }} />

        {/* Section - Démonstration */}
        <FadeUp delay={0}>
          <SectionBlock label="Démonstration">
            <div id="demo">
              <div style={{ width: "100%", aspectRatio: "16/9", marginBottom: "0", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dk2iacpoa&public_id=rec_c_mqebm0&profile=cld-default"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <div style={{ background: "#f9fafb", border: "0.5px solid rgba(0,0,0,0.07)", borderTop: "none", padding: "1.25rem 1.5rem" }}>
                <p style={{ ...SANS, fontSize: "0.9375rem", color: "#4b5563", margin: 0, lineHeight: "1.6" }}>
                  Démonstration du parseur GPS NMEA en action : lecture de trames, vérification des checksums et extraction des données de position et d'heure.
                </p>
              </div>
            </div>
          </SectionBlock>
        </FadeUp>

        {/* Section - Ce que montre la vidéo */}
        <FadeUp delay={60}>
          <SectionBlock label="Ce que montre la vidéo">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {demoFeatures.map((f, i) => (
                <li key={i} style={{ ...SANS, display: "flex", alignItems: "flex-start", gap: "0.875rem", fontSize: "0.9375rem", color: "#4b5563", lineHeight: "1.65" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3B82F6", flexShrink: 0, marginTop: "0.55em" }} />
                  {f}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </FadeUp>

      </div>
    </article>
  )
}

function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.14em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "1.25rem" }}>
        {label}
      </div>
      {children}
    </div>
  )
}
