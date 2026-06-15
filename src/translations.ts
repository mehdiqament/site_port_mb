// ─── Translation dictionary ────────────────────────────────────────────────
// All user-facing text lives here, keyed by a dot-path string, e.g. t("home.title")

export const translations = {
  fr: {
    // ── Nav ──────────────────────────────────────────────────────────────
    nav: {
      home: "Accueil",
      competences: "Compétences",
      parcours: "Parcours",
      projets: "Projets",
      alternance: "Alternance",
      contact: "Contact",
    },

    // ── Layout (loading screen + footer) ────────────────────────────────
    layout: {
      enter: "[ Entrer ]",
      footer: "mehdiqament.dev · 2026",
    },

    // ── Home ─────────────────────────────────────────────────────────────
    home: {
      kicker: "portfolio · 2025–2026",
      role: "Étudiant BUT Informatique",
      specialization: "Données & IA",
      tagline: "Curieux et touche-à-tout, je construis mes compétences en data et développement.",
      ctaContact: "Me contacter",
      ctaSkills: "Voir mes compétences",
    },

    // ── Compétences ──────────────────────────────────────────────────────
    competences: {
      label: "Stack technique",
      title: "Compétences",
    },

    // ── Parcours ─────────────────────────────────────────────────────────
    parcours: {
      label: "Formation",
      title: "Parcours",
    },

    // ── Projets ──────────────────────────────────────────────────────────
    projets: {
      label: "Réalisations",
      title: "Projets",
      year1: "2025 - 2026",
      year1sub: "BUT Informatique - 1ère année",
      year2: "2026 - 2027",
      year2sub: "BUT Informatique - 2ème année · Données & IA",
      comingSoonTitle: "Prochain projet",
      comingSoonBadge: "À venir",
      comingSoonDesc: "Un nouveau projet arrivera lors de mon entrée en spécialisation Données & IA.",
      sem1: "1er semestre",
      sem2: "2ème semestre",
      fromagerie: {
        title: "Application de vente - Fromagerie 🧀",
        desc: "Application Java Swing simulant un site de vente de fromages : gestion du stock, panier, filtres, génération de facture.",
        badge: "SAÉ",
      },
      gpsNmea: {
        title: "Analyseur de trames GPS NMEA 🛰️",
        desc: "Parseur en langage C de trames GPS NMEA : vérification, extraction des champs, conversion de coordonnées et formatage de l'heure.",
        badge: "SAÉ",
      },
    },

    // ── Détail projet : Fromagerie ───────────────────────────────────────
    fromagerie: {
      back: "Projets",
      kicker: "SAÉ · Projet scolaire",
      titleLine1: "Application de vente",
      titleLine2: "Fromagerie 🧀",
      sectionProject: "Le projet",
      projectDesc1: "Réalisée dans le cadre d'une SAÉ (Situation d'Apprentissage et d'Évaluation), cette application simule une boutique en ligne de fromages. Développée entièrement en Java avec l'interface graphique Swing, elle repose sur une architecture multi-fenêtres utilisant des",
      projectDescHighlight: "JDialog",
      projectDesc2: "imbriquées pour chaque étape du parcours client - navigation du catalogue, gestion du panier, saisie des informations et édition de la facture.",
      sectionFeatures: "Fonctionnalités",
      features: [
        "Catalogue de fromages avec filtres par type de lait et format (demi / entier)",
        "Panier d'achat avec respect des limites de stock et options de modification ou vidage",
        "Formulaire de saisie des informations client",
        "Génération de facture récapitulative avec option d'impression",
      ],
      sectionStack: "Stack technique",
      sectionDemo: "Démonstration",
      demoDesc: "Vidéo de présentation montrant le parcours utilisateur complet : navigation du catalogue, gestion du panier, mise à jour du stock et facturation.",
    },

    // ── Détail projet : GPS NMEA ─────────────────────────────────────────
    gpsNmea: {
      back: "Projets",
      kicker: "R2.04 · Projet scolaire",
      titleLine1: "Analyseur de trames",
      titleLine2: "GPS NMEA",
      sectionProject: "Le projet",
      projectDesc1: "Réalisé dans le cadre de la ressource R2.04, ce projet implémente un parseur de trames GPS NMEA en langage C. Il lit des trames issues d'un récepteur GPS, vérifie leur intégrité par checksum, puis extrait et met en forme les données de position et de temps contenues dans les formats",
      projectDescAnd: "et",
      sectionFeatures: "Fonctionnalités",
      features: [
        "Vérification de la validité des trames NMEA (checksum, format)",
        "Extraction et décodage des champs des trames $GPRMC et $GPGGA",
        "Conversion des coordonnées GPS du format NMEA (degrés-minutes) vers les degrés décimaux",
        "Formatage et affichage de l'heure UTC",
      ],
      sectionStack: "Stack technique",
    },

    // ── Code button ──────────────────────────────────────────────────────
    codeButton: {
      label: "Voir le code",
    },

    // ── Alternance ───────────────────────────────────────────────────────
    alternance: {
      label: "Objectif",
      title: "Alternance",
      intro1: "Actuellement en BUT Informatique, je recherche une",
      introHighlight1: "alternance de 12 à 24 mois",
      introMid: "axée sur le",
      introHighlight2: "développement logiciel ou les Données & IA",
      introEnd1: "Mon objectif est d'intégrer mes compétences techniques au sein d'une équipe passionnée pour relever des défis concrets, avec l'ambition d'évoluer vers un",
      introHighlight3: "CDI",
      introEnd2: "à l'issue de ma formation.",
      downloadCv: "Télécharger mon CV",
      infoCards: {
        duration: { label: "Durée recherchée", value: "12 à 24 mois" },
        domain: { label: "Domaine", value: "Dév. logiciel · Données & IA" },
        location: { label: "Localisation", value: "Toulouse & région" },
        availability: { label: "Disponibilité", value: "Dès avril 2027" },
      },
      modal: {
        documentLabel: "Document",
        title: "Accéder au CV",
        tabCode: "J'ai un code",
        tabRequest: "Demander l'accès",
        accessCodeLabel: "Code d'accès",
        accessCodePlaceholder: "Entrez votre code",
        accessCodeError: "Code d'accès incorrect.",
        downloadCv: "Télécharger le CV",
        emailLabel: "Votre adresse email",
        emailPlaceholder: "vous@exemple.com",
        emailError: "Veuillez entrer une adresse email valide.",
        sendRequest: "Envoyer la demande",
        sentTitle: "Demande envoyée !",
        sentDesc: "Mehdi recevra votre demande et vous enverra un code d'accès par email sous 24h.",
        notice1: "Cela enverra instantanément une notification à",
        notice2: "pour me permettre de vous valider l'accès.",
      },
    },

    // ── Contact ──────────────────────────────────────────────────────────
    contact: {
      label: "Me rejoindre",
      title: "Contact",
    },

    // ── Skills (shared data) ────────────────────────────────────────────
    skills: [
      {
        name: "Java",
        abbr: "☕",
        pct: 85,
        desc: "Programmation orientée objet, applications Swing multi-fenêtres (JDialog), gestion de stock et panier, lecture/écriture JSON",
      },
      {
        name: "SQL",
        abbr: "⬡",
        pct: 75,
        desc: "Requêtes Oracle SQL, jointures, sous-requêtes, vues, séquences",
      },
      {
        name: "UML / Modélisation",
        abbr: "◈",
        pct: 80,
        desc: "Diagrammes de classes et de séquence, modélisation avec Modelio",
      },
      {
        name: "HTML / CSS",
        abbr: "<>",
        pct: 70,
        desc: "Mise en page, structure sémantique, mise en forme responsive de base",
      },
      {
        name: "Shell / Linux",
        abbr: "$_",
        pct: 65,
        desc: "Administration de VM Debian, configuration Apache2, SSH, scripts bash",
      },
      {
        name: "Gestion de projet",
        abbr: "▦",
        pct: 65,
        desc: "Planification Gantt, méthodologie SAÉ, coordination d'équipe",
      },
      {
        name: "Algorithmique & Graphes",
        abbr: "∞",
        pct: 55,
        desc: "Python, algorithmes de Dijkstra et Bellman-Ford, structures de données",
      },
      {
        name: "Python",
        abbr: "py",
        pct: 40,
        desc: "Scripts d'analyse de données avec numpy",
      },
      {
        name: "C",
        abbr: "©",
        pct: 55,
        desc: "Programmation bas niveau, parsing de fichiers (trames GPS NMEA)",
      },
    ],

    // ── Timeline (shared data) ───────────────────────────────────────────
    timeline: [
      {
        year: "2025",
        title: "Bac STI2D",
        sub: "Lycée",
        desc: "Mention Assez Bien - Sciences et Technologies de l'Industrie et du Développement Durable.",
        active: false,
      },
      {
        year: "2025–26",
        title: "BUT Informatique - 1ère année",
        sub: "Université Paul Sabatier, Toulouse",
        desc: "Fondamentaux du développement logiciel, algorithmique et bases de données relationnelles.",
        active: false,
      },
      {
        year: "2026–27",
        title: "BUT Informatique - 2ème année",
        sub: "Spécialisation Données & IA",
        desc: "Approfondissement en data engineering, machine learning et traitement de données massives.",
        active: true,
      },
    ],
  },

  en: {
    // ── Nav ──────────────────────────────────────────────────────────────
    nav: {
      home: "Home",
      competences: "Skills",
      parcours: "Journey",
      projets: "Projects",
      alternance: "Work-study",
      contact: "Contact",
    },

    // ── Layout (loading screen + footer) ────────────────────────────────
    layout: {
      enter: "[ Enter ]",
      footer: "mehdiqament.dev · 2026",
    },

    // ── Home ─────────────────────────────────────────────────────────────
    home: {
      kicker: "portfolio · 2025–2026",
      role: "Computer Science student (BUT)",
      specialization: "Data & AI",
      tagline: "Curious and versatile, I'm building my skills in data and software development.",
      ctaContact: "Get in touch",
      ctaSkills: "View my skills",
    },

    // ── Compétences ──────────────────────────────────────────────────────
    competences: {
      label: "Tech stack",
      title: "Skills",
    },

    // ── Parcours ─────────────────────────────────────────────────────────
    parcours: {
      label: "Education",
      title: "Journey",
    },

    // ── Projets ──────────────────────────────────────────────────────────
    projets: {
      label: "Work",
      title: "Projects",
      year1: "2025 - 2026",
      year1sub: "BUT Computer Science - 1st year",
      year2: "2026 - 2027",
      year2sub: "BUT Computer Science - 2nd year · Data & AI",
      comingSoonTitle: "Next project",
      comingSoonBadge: "Coming soon",
      comingSoonDesc: "A new project will arrive once I start my Data & AI specialization.",
      sem1: "1st semester",
      sem2: "2nd semester",
      fromagerie: {
        title: "Sales application - Cheese shop 🧀",
        desc: "Java Swing application simulating a cheese sales website: stock management, cart, filters, invoice generation.",
        badge: "SAÉ",
      },
      gpsNmea: {
        title: "GPS NMEA frame analyzer 🛰️",
        desc: "C parser for GPS NMEA frames: validation, field extraction, coordinate conversion and time formatting.",
        badge: "SAÉ",
      },
    },

    // ── Détail projet : Fromagerie ───────────────────────────────────────
    fromagerie: {
      back: "Projects",
      kicker: "SAÉ · School project",
      titleLine1: "Sales application",
      titleLine2: "Cheese shop 🧀",
      sectionProject: "The project",
      projectDesc1: "Built as part of a SAÉ (Learning and Assessment Situation), this application simulates an online cheese shop. Developed entirely in Java with a Swing graphical interface, it relies on a multi-window architecture using nested",
      projectDescHighlight: "JDialogs",
      projectDesc2: "for each step of the customer journey - browsing the catalog, managing the cart, entering information and editing the invoice.",
      sectionFeatures: "Features",
      features: [
        "Cheese catalog with filters by milk type and format (half / whole)",
        "Shopping cart respecting stock limits, with edit or clear options",
        "Customer information form",
        "Summary invoice generation with print option",
      ],
      sectionStack: "Tech stack",
      sectionDemo: "Demo",
      demoDesc: "Walkthrough video showing the full user journey: browsing the catalog, managing the cart, stock updates and invoicing.",
    },

    // ── Détail projet : GPS NMEA ─────────────────────────────────────────
    gpsNmea: {
      back: "Projects",
      kicker: "R2.04 · School project",
      titleLine1: "GPS NMEA frame",
      titleLine2: "analyzer",
      sectionProject: "The project",
      projectDesc1: "Built as part of the R2.04 module, this project implements a GPS NMEA frame parser in C. It reads frames from a GPS receiver, checks their integrity via checksum, then extracts and formats the position and time data contained in the",
      projectDescAnd: "and",
      sectionFeatures: "Features",
      features: [
        "Validation of NMEA frames (checksum, format)",
        "Extraction and decoding of fields from $GPRMC and $GPGGA frames",
        "Conversion of GPS coordinates from NMEA format (degrees-minutes) to decimal degrees",
        "Formatting and display of UTC time",
      ],
      sectionStack: "Tech stack",
    },

    // ── Code button ──────────────────────────────────────────────────────
    codeButton: {
      label: "View code",
    },

    // ── Alternance ───────────────────────────────────────────────────────
    alternance: {
      label: "Goal",
      title: "Work-study",
      intro1: "Currently studying for a BUT in Computer Science, I'm looking for a",
      introHighlight1: "12 to 24 month work-study program",
      introMid: "focused on",
      introHighlight2: "software development or Data & AI",
      introEnd1: "My goal is to bring my technical skills to a passionate team to tackle real challenges, with the ambition of moving into a",
      introHighlight3: "permanent role",
      introEnd2: "at the end of my studies.",
      downloadCv: "Download my CV",
      infoCards: {
        duration: { label: "Duration sought", value: "12 to 24 months" },
        domain: { label: "Field", value: "Software dev · Data & AI" },
        location: { label: "Location", value: "Toulouse & area" },
        availability: { label: "Availability", value: "From April 2027" },
      },
      modal: {
        documentLabel: "Document",
        title: "Access the CV",
        tabCode: "I have a code",
        tabRequest: "Request access",
        accessCodeLabel: "Access code",
        accessCodePlaceholder: "Enter your code",
        accessCodeError: "Incorrect access code.",
        downloadCv: "Download CV",
        emailLabel: "Your email address",
        emailPlaceholder: "you@example.com",
        emailError: "Please enter a valid email address.",
        sendRequest: "Send request",
        sentTitle: "Request sent!",
        sentDesc: "Mehdi will receive your request and send you an access code by email within 24h.",
        notice1: "This will instantly send a notification to",
        notice2: "so I can grant you access.",
      },
    },

    // ── Contact ──────────────────────────────────────────────────────────
    contact: {
      label: "Get in touch",
      title: "Contact",
    },

    // ── Skills (shared data) ────────────────────────────────────────────
    skills: [
      {
        name: "Java",
        abbr: "☕",
        pct: 85,
        desc: "Object-oriented programming, multi-window Swing applications (JDialog), stock and cart management, JSON reading/writing",
      },
      {
        name: "SQL",
        abbr: "⬡",
        pct: 75,
        desc: "Oracle SQL queries, joins, subqueries, views, sequences",
      },
      {
        name: "UML / Modeling",
        abbr: "◈",
        pct: 80,
        desc: "Class and sequence diagrams, modeling with Modelio",
      },
      {
        name: "HTML / CSS",
        abbr: "<>",
        pct: 70,
        desc: "Layout, semantic structure, basic responsive styling",
      },
      {
        name: "Shell / Linux",
        abbr: "$_",
        pct: 65,
        desc: "Debian VM administration, Apache2 configuration, SSH, bash scripts",
      },
      {
        name: "Project management",
        abbr: "▦",
        pct: 65,
        desc: "Gantt planning, SAÉ methodology, team coordination",
      },
      {
        name: "Algorithms & Graphs",
        abbr: "∞",
        pct: 55,
        desc: "Python, Dijkstra and Bellman-Ford algorithms, data structures",
      },
      {
        name: "Python",
        abbr: "py",
        pct: 40,
        desc: "Data analysis scripts with numpy",
      },
      {
        name: "C",
        abbr: "©",
        pct: 55,
        desc: "Low-level programming, file parsing (GPS NMEA frames)",
      },
    ],

    // ── Timeline (shared data) ───────────────────────────────────────────
    timeline: [
      {
        year: "2025",
        title: "Bac STI2D",
        sub: "High school",
        desc: "Distinction \"Assez Bien\" - Industrial Sciences and Sustainable Development.",
        active: false,
      },
      {
        year: "2025–26",
        title: "BUT Computer Science - 1st year",
        sub: "Université Paul Sabatier, Toulouse",
        desc: "Fundamentals of software development, algorithms and relational databases.",
        active: false,
      },
      {
        year: "2026–27",
        title: "BUT Computer Science - 2nd year",
        sub: "Data & AI specialization",
        desc: "Deeper focus on data engineering, machine learning and big data processing.",
        active: true,
      },
    ],
  },
} as const

export type TranslationKey = string
