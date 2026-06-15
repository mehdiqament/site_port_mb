import { FadeUp } from "../app/shared"

// Définition de la structure d'une compétence
interface Competence {
  name: string
  percentage: number
  description: string
  icon?: string // Si tu utilises des icônes spécifiques
}

export default function Competences() {
  // 1. Liste des compétences techniques triées du plus grand au plus petit
  const techSkills: Competence[] = [
    {
      name: "Java",
      percentage: 85,
      description: "Programmation orientée objet, applications Swing multi-fenêtres (JDialog), gestion de stock et panier, lecture/écriture JSON"
    },
    {
      name: "UML / Modélisation",
      percentage: 80,
      description: "Diagrammes de classes et de séquence, modélisation avec Modelio"
    },
    {
      name: "SQL",
      percentage: 75,
      description: "Requêtes Oracle SQL, jointures, sous-requêtes, vues, séquences"
    },
    {
      name: "HTML / CSS",
      percentage: 70,
      description: "Mise en page, structure sémantique, mise en forme responsive de base"
    },
    {
      name: "Shell / Linux",
      percentage: 65,
      description: "Administration de VM Debian, configuration Apache2, SSH, scripts bash"
    },
    {
      name: "Gestion de projet",
      percentage: 65,
      description: "Planification, suivi des tâches, gestion des livrables et méthodologies agiles"
    }
  ]

  // 2. Liste des langues demandées
  const languageSkills: Competence[] = [
    {
      name: "Français",
      percentage: 100,
      description: "Langue maternelle"
    },
    {
      name: "Anglais",
      percentage: 75,
      description: "Technique, lecture de documentations, communication professionnelle"
    }
  ]

  // Fonction d'affichage d'une ligne de compétence (pour éviter la répétition de code)
  const renderSkillRow = (skill: Competence, index: number) => (
    <div key={skill.name} style={{ marginBottom: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "0.5rem" }}>
        <span style={{ fontWeight: 600, color: "#0D0D0D", fontFamily: "'Inter', sans-serif" }}>
          {skill.name}
        </span>
        <span style={{ fontSize: "0.875rem", color: "#6b7280", marginLeft: "auto" }}>
          {skill.percentage}%
        </span>
      </div>
      
      {/* Barre de progression */}
      <div style={{ width: "100%", height: "4px", backgroundColor: "#f3f4f6", borderRadius: "2px", overflow: "hidden", marginBottom: "0.5rem" }}>
        <div 
          style={{ 
            width: `${skill.percentage}%`, 
            height: "100%", 
            backgroundColor: "#3B82F6", // Bleu identique à ton thème
            transition: "width 1s ease-in-out" 
          }} 
        />
      </div>
      
      <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>
        {skill.description}
      </p>
    </div>
  )

  return (
    <section style={{ maxWidth: "68rem", margin: "0 auto", padding: "6rem 2rem 7rem", width: "100%" }}>
      <FadeUp delay={0}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.14em", color: "#9ca3af", marginBottom: "1.75rem" }}>
          STACK TECHNIQUE
        </div>
      </FadeUp>

      <FadeUp delay={80}>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 300, color: "#0D0D0D", margin: "0 0 4rem" }}>
          Compétences
        </h1>
      </FadeUp>

      {/* Section des compétences techniques */}
      <FadeUp delay={160}>
        <div style={{ marginBottom: "4rem" }}>
          {techSkills.map((skill, index) => renderSkillRow(skill, index))}
        </div>
      </FadeUp>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "3rem 0" }} />

      {/* Section des langues rajoutée en bas */}
      <FadeUp delay={240}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.14em", color: "#9ca3af", marginBottom: "1.75rem" }}>
          LANGUES
        </div>
        <div>
          {languageSkills.map((skill, index) => renderSkillRow(skill, index))}
        </div>
      </FadeUp>
    </section>
  )
}
