import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"
import { useTranslation } from "./useTranslation"

// ─── Voir le code button ──────────────────────────────────────────────────────
export function CodeButton({ href }: { href: string }) {
  const { t } = useTranslation()
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
      <Github size={14} strokeWidth={1.5} />
      {t("codeButton.label")}
    </a>
  )
}

// ─── FadeUp ─────────────────────────────────────────────────────────────────
export function FadeUp({
  children,
  className = "",
  delay = 0,
  entryDelay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  entryDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const boot = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVis(true)
            obs.disconnect()
          }
        },
        { threshold: 0.08 }
      )
      if (ref.current) obs.observe(ref.current)
      return () => obs.disconnect()
    }, entryDelay)
    return () => clearTimeout(boot)
  }, [entryDelay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Section header ──────────────────────────────────────────────────────────
export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <FadeUp>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#9ca3af",
          textTransform: "uppercase",
          marginBottom: "0.875rem",
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 300,
          color: "#0D0D0D",
          marginBottom: "4.5rem",
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </h2>
    </FadeUp>
  )
}

// ─── Page wrapper (applies fade-in per page) ─────────────────────────────────
export function PageContent({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 30)
    return () => clearTimeout(t)
  }, [])
  return (
    <div
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ─── Shared data ─────────────────────────────────────────────────────────────
// `skills` and `timeline` contain translated text, so they are exposed as hooks
// that read from the current language.
export function useSkills() {
  const { lang } = useTranslation()
  return translations[lang].skills
}

export function useTimeline() {
  const { lang } = useTranslation()
  return translations[lang].timeline
}

// kept for the Fromagerie detail page
export const primarySkills = [
  { name: "Java", abbr: "☕" },
  { name: "SQL", abbr: "⬡" },
  { name: "Shell", abbr: "$_" },
]
export const secondarySkills = [
  { name: "HTML / CSS", abbr: "<>" },
  { name: "Python", abbr: "py" },
]

export const contacts = [
  { label: "Email", text: "mehdi@mehdiqament.dev", href: "mailto:mehdi@mehdiqament.dev" },
  { label: "GitHub", text: "mehdiqament", href: "https://github.com/mehdiqament" },
  { label: "Discord", text: "mehdiqament", href: "#" },
]

export const CODE_TEXTURE = `SELECT s.name, AVG(g.score) AS avg_score
FROM students s JOIN grades g ON s.id = g.student_id
WHERE s.year = 2 AND s.specialization = 'Données & IA'
GROUP BY s.name ORDER BY avg_score DESC;

public class DataPipeline implements Runnable {
    private final String name = "Mehdi";
    private List<String> skills = List.of("Java","SQL","Shell");
    public void run() { this.process(new Dataset("toulouse.csv")); }
    public Model train(Dataset d, int epochs) {
        for (int i = 0; i < epochs; i++) { model.fit(d.batch(32)); }
        return model; }
}

SELECT COUNT(*) FROM projects WHERE status = 'completed' AND owner = 'mehdiqament';
import java.util.stream.Collectors;
List<Skill> top = skills.stream().filter(s -> s.level > 3)
    .sorted(Comparator.comparing(Skill::getLevel).reversed())
    .collect(Collectors.toList());

SELECT domain, COUNT(*) FROM alternance
WHERE year = 2026 AND location = 'Toulouse'
GROUP BY domain HAVING COUNT(*) > 0;

#!/bin/bash
for f in data/*.csv; do python3 clean.py "$f" && echo "✓ $f"; done
`

// ─── Global CSS string (injected once by Layout) ─────────────────────────────
export const GLOBAL_CSS = `
  @keyframes cursor-blink {
    0%,49% { opacity:1; }
    50%,100% { opacity:0; }
  }
  html { scroll-behavior:smooth; font-family:'Inter',system-ui,sans-serif; }
  ::-webkit-scrollbar { width:3px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.12); border-radius:2px; }

  .nav-link {
    color:#6b7280; text-decoration:none; font-size:0.8125rem;
    letter-spacing:0.02em; transition:color 0.2s;
  }
  .nav-link:hover { color:#3B82F6; }
  .nav-link-active { color:#3B82F6 !important; }

  .btn-primary {
    background:#3B82F6; color:#fff; border:none;
    padding:0.75rem 2rem; font-family:inherit; font-size:0.875rem;
    letter-spacing:0.04em; cursor:pointer; text-decoration:none;
    display:inline-block; transition:background 0.2s;
  }
  .btn-primary:hover { background:#2563EB; }

  .btn-ghost {
    background:transparent; color:#374151;
    border:0.5px solid rgba(0,0,0,0.18); padding:0.75rem 2rem;
    font-family:inherit; font-size:0.875rem; letter-spacing:0.04em;
    cursor:pointer; text-decoration:none; display:inline-block;
    transition:border-color 0.2s, color 0.2s;
  }
  .btn-ghost:hover { border-color:#3B82F6; color:#3B82F6; }

  .skill-pill-lg {
    display:flex; align-items:center; gap:0.625rem;
    border:0.5px solid rgba(0,0,0,0.12); padding:0.625rem 1.375rem;
    font-size:0.9375rem; font-weight:500; color:#1f2937; cursor:default;
    transition:border-color 0.2s, color 0.2s;
  }
  .skill-pill-lg:hover { border-color:#3B82F6; color:#3B82F6; }

  .skill-pill-sm {
    display:flex; align-items:center; gap:0.5rem;
    border:0.5px solid rgba(0,0,0,0.08); padding:0.5rem 1rem;
    font-size:0.8125rem; font-weight:400; color:#6b7280; cursor:default;
    transition:border-color 0.2s, color 0.2s;
  }
  .skill-pill-sm:hover { border-color:#93c5fd; color:#3B82F6; }

  .contact-link {
    display:flex; align-items:center; gap:0.75rem;
    padding:0.875rem 1.5rem; border:0.5px solid rgba(0,0,0,0.1);
    text-decoration:none; color:#374151; font-size:0.875rem;
    background:#fff; box-shadow:0 1px 4px rgba(0,0,0,0.04);
    transition:border-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .contact-link:hover {
    border-color:#3B82F6; color:#3B82F6;
    box-shadow:0 2px 16px rgba(59,130,246,0.12);
  }

  .hamburger-btn {
    display:none;
    background:transparent;
    border:0.5px solid rgba(0,0,0,0.12);
    width:36px; height:36px;
    align-items:center; justify-content:center;
    cursor:pointer; padding:0;
    transition:border-color 0.2s;
  }
  .hamburger-btn:hover { border-color:#3B82F6; }
  .hamburger-btn span {
    display:block; width:16px; height:1.5px; background:#374151;
    position:relative; transition:background 0.2s;
  }
  .hamburger-btn span::before, .hamburger-btn span::after {
    content:''; position:absolute; left:0; width:16px; height:1.5px;
    background:#374151; transition:transform 0.25s, background 0.2s;
  }
  .hamburger-btn span::before { top:-5px; }
  .hamburger-btn span::after { top:5px; }
  .hamburger-btn.is-open span { background:transparent; }
  .hamburger-btn.is-open span::before { transform:translateY(5px) rotate(45deg); background:#3B82F6; }
  .hamburger-btn.is-open span::after { transform:translateY(-5px) rotate(-45deg); background:#3B82F6; }

  .mobile-menu {
    display:none;
    flex-direction:column;
    background:#fff;
    border-bottom:0.5px solid rgba(0,0,0,0.07);
    overflow:hidden;
    max-height:0;
    transition:max-height 0.3s ease;
  }
  .mobile-menu.is-open { max-height:400px; }
  .mobile-menu .nav-link {
    padding:0.875rem 2rem;
    font-size:0.9375rem;
    border-bottom:0.5px solid rgba(0,0,0,0.05);
  }

  @media (max-width:680px) {
    .hero-title { font-size:clamp(4rem,22vw,10rem) !important; }
    .hide-sm { display:none !important; }
    .show-sm { display:flex !important; }
    .contacts-row { flex-direction:column; }
    .hamburger-btn { display:flex; }
    .mobile-menu { display:flex; }
  }
`
