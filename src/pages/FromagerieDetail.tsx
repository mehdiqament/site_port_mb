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

        {/* Boutons */}
        {/* Boutons */}
<FadeUp delay={120} entryDelay={60}>
  <div style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
    <CodeButton href="https://github.com/mehdiqament/sae-vente-fromages" />
    
    {/* Correction ici : Ajout de la balise ouvrante <a> */}
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
      {"▶"} Voir le test
    </a>
  </div>
</FadeUp>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)", marginBottom: "4rem" }} />

        {/* Section - Le projet */}
        <FadeUp delay={0}>
          <SectionBlock label="Le projet">
            <p style={{ ...SANS, fontSize: "0.9375rem", color: "#4b5563", lineHeight: "1.8", margin: 0 }}>
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
              {/* Vidéo */}
              <div style={{ width: "100%", aspectRatio: "16/9", marginBottom: "0" }}>
                <iframe
                  id="fromagerie-video"
                  src="https://player.cloudinary.com/embed/?cloud_name=dk2iacpoa&public_id=rec_java_bj1zz2&autoplay=false"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Sous-titres */}
              <div
                style={{
                  background: "#f9fafb",
                  border: "0.5px solid rgba(0,0,0,0.07)",
                  borderTop: "none",
                  padding: "1.25rem 1.5rem",
                  minHeight: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    ...SANS,
                    fontSize: "0.9375rem",
                    color: "#4b5563",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  Vidéo de présentation montrant le parcours utilisateur complet : navigation du catalogue, gestion du panier, mise à jour du stock et facturation.
                </p>
              </div>
            </div>
          </SectionBlock>
        </FadeUp>

        {/* Section - Fonctionnalités démontrées */}
<FadeUp delay={60}>
  <SectionBlock label="Ce que montre la vidéo">
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
      {[
        "Panier vide : un message s'affiche automatiquement si le panier est vide lors de la validation.",
        "Trois types de fromages disponibles : vache, chèvre et brebis.",
        "Stock limité : un message d'avertissement s'affiche si la quantité demandée dépasse le stock, et la mention « Rupture » apparaît lorsque le stock atteint zéro.",
        "Modification de quantité dans le panier : le stock du fromage correspondant se met à jour en temps réel.",
        "Frais de port : offerts pour toute commande supérieure à 120 €, sinon des frais s'appliquent.",
        "Trois expéditeurs disponibles : Chronorelais, Chronofresh et Colissimo.",
        "Formulaire client complet : nom, prénom, adresse, code postal, ville, téléphone, e-mail, mode de paiement et inscription à la newsletter.",
        "Fenêtre facture : récapitulatif complet avec coordonnées, contenu du panier, montant des fromages et frais de port si la commande est inférieure à 120 €.",
        "Interface responsive : toutes les fenêtres s'adaptent à la taille de l'écran.",
      ].map((f, i) => (
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
