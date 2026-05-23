const translations = {
  en: {
    navPlatform: "Platform",
    navPrivacy: "Privacy",
    navRepository: "Repository",
    eyebrow: "Public, privacy-safe edition",
    heroTitle: "A clearer bridge between students and real opportunities.",
    heroText: "CONAEMPLEO connects students, graduates, companies, and coordinators through a guided employability workflow. This public version shows the idea without exposing private records.",
    seePlatform: "See platform map",
    seeRepo: "Review safe repo",
    nodeStudent: "Student",
    nodeMatch: "Matching",
    nodeCompany: "Company",
    nodeAdmin: "Admin",
    metricModules: "mapped workflows",
    metricPrivate: "private files published",
    metricRoles: "core user roles",
    metricMock: "mock data only",
    platformEyebrow: "Platform map",
    platformTitle: "One product, different responsibilities.",
    platformText: "The private platform can keep operational complexity. The public repo explains the structure with safe samples and a clean interaction model.",
    tabStudents: "Students",
    tabCompanies: "Companies",
    tabAdmins: "Admins",
    flowProfile: "Profile quality",
    flowMatch: "Match readiness",
    flowReview: "Coordinator review",
    privacyEyebrow: "Publication boundary",
    privacyTitle: "Public on GitHub, private where it matters.",
    stepAuditTitle: "Audit the original",
    stepAuditText: "Identify credentials, exports, uploads, and operational scripts before anything reaches Git.",
    stepRebuildTitle: "Rebuild the public view",
    stepRebuildText: "Use mock data, docs, and recreated screens instead of production files.",
    stepVerifyTitle: "Verify the tree",
    stepVerifyText: "Run a safety script that blocks obvious secrets and risky file types.",
    repoEyebrow: "Repository package",
    repoTitle: "Built to be reviewed without fear.",
    repoText: "This public edition includes a web showcase, architecture docs, privacy notes, fake records, and a safety check command.",
    terminalSafe: "Safe public tree verified",
    footerText: "CONAEMPLEO Showcase - public portfolio edition with no production records."
  },
  es: {
    navPlatform: "Plataforma",
    navPrivacy: "Privacidad",
    navRepository: "Repositorio",
    eyebrow: "Edicion publica y segura",
    heroTitle: "Un puente mas claro entre estudiantes y oportunidades reales.",
    heroText: "CONAEMPLEO conecta estudiantes, egresados, empresas y coordinadores con un flujo guiado de empleabilidad. Esta version publica muestra la idea sin exponer registros privados.",
    seePlatform: "Ver mapa",
    seeRepo: "Revisar repo seguro",
    nodeStudent: "Alumno",
    nodeMatch: "Matching",
    nodeCompany: "Empresa",
    nodeAdmin: "Admin",
    metricModules: "flujos mapeados",
    metricPrivate: "archivos privados publicados",
    metricRoles: "roles principales",
    metricMock: "solo datos mock",
    platformEyebrow: "Mapa de plataforma",
    platformTitle: "Un producto, distintas responsabilidades.",
    platformText: "La plataforma privada puede conservar la complejidad operativa. El repo publico explica la estructura con ejemplos seguros y una experiencia limpia.",
    tabStudents: "Alumnos",
    tabCompanies: "Empresas",
    tabAdmins: "Admins",
    flowProfile: "Calidad del perfil",
    flowMatch: "Preparacion de match",
    flowReview: "Revision coordinador",
    privacyEyebrow: "Limite de publicacion",
    privacyTitle: "Publico en GitHub, privado donde importa.",
    stepAuditTitle: "Auditar original",
    stepAuditText: "Detectar credenciales, exports, uploads y scripts operativos antes de tocar Git.",
    stepRebuildTitle: "Reconstruir vista publica",
    stepRebuildText: "Usar datos mock, documentacion y pantallas recreadas en vez de archivos productivos.",
    stepVerifyTitle: "Verificar arbol",
    stepVerifyText: "Ejecutar un script de seguridad que bloquea secretos y tipos de archivo riesgosos.",
    repoEyebrow: "Paquete del repositorio",
    repoTitle: "Hecho para revisarse sin miedo.",
    repoText: "Esta edicion publica incluye showcase web, arquitectura, notas de privacidad, registros ficticios y comando de verificacion.",
    terminalSafe: "Arbol publico seguro verificado",
    footerText: "CONAEMPLEO Showcase - edicion publica de portafolio sin registros productivos."
  }
};

const roles = {
  en: {
    students: {
      title: "Student journey",
      text: "A guided profile helps students turn school experience into readable skills, CV sections, and application readiness.",
      score: 84,
      tags: ["CV builder", "Skill map", "Applications", "Progress"],
      features: [
        "Profile checklist with missing-data guidance",
        "CV sections designed for first-job candidates",
        "Vacancy suggestions based on interests and skills",
        "Application status without exposing private documents"
      ]
    },
    companies: {
      title: "Company workspace",
      text: "Companies can publish opportunities, review candidate fit, and keep communication organized through a verified channel.",
      score: 76,
      tags: ["Vacancies", "Candidate fit", "Review", "Messaging"],
      features: [
        "Vacancy creation with clear requirements",
        "Candidate lists grouped by fit signals",
        "Communication workflow for next steps",
        "Public showcase uses fictional company data only"
      ]
    },
    admins: {
      title: "Coordinator control",
      text: "Coordinators keep the platform healthy through verification queues, reports, and privacy-aware moderation.",
      score: 91,
      tags: ["Verification", "Reports", "Privacy", "Moderation"],
      features: [
        "Role-based overview for students and companies",
        "Verification queue for new records",
        "Privacy-first publication boundary",
        "Operational scripts excluded from the public repo"
      ]
    }
  },
  es: {
    students: {
      title: "Ruta del alumno",
      text: "Un perfil guiado ayuda al alumno a convertir experiencia escolar en habilidades claras, secciones de CV y preparacion para aplicar.",
      score: 84,
      tags: ["CV", "Habilidades", "Postulaciones", "Avance"],
      features: [
        "Checklist de perfil con campos faltantes",
        "Secciones de CV pensadas para primer empleo",
        "Vacantes sugeridas por intereses y habilidades",
        "Estados de postulacion sin exponer documentos privados"
      ]
    },
    companies: {
      title: "Panel de empresa",
      text: "Las empresas pueden publicar oportunidades, revisar compatibilidad y ordenar la comunicacion mediante un canal verificado.",
      score: 76,
      tags: ["Vacantes", "Candidatos", "Revision", "Mensajes"],
      features: [
        "Creacion de vacantes con requisitos claros",
        "Listas de candidatos agrupadas por senales de match",
        "Flujo de comunicacion para siguientes pasos",
        "El showcase usa solo empresas ficticias"
      ]
    },
    admins: {
      title: "Control coordinador",
      text: "Los coordinadores mantienen la plataforma sana con colas de verificacion, reportes y moderacion cuidando la privacidad.",
      score: 91,
      tags: ["Verificacion", "Reportes", "Privacidad", "Moderacion"],
      features: [
        "Vista por roles para alumnos y empresas",
        "Cola de verificacion de nuevos registros",
        "Limite de publicacion centrado en privacidad",
        "Scripts operativos excluidos del repo publico"
      ]
    }
  }
};

const rolePanel = document.querySelector("#role-panel");
const switcher = document.querySelector(".language-switch");
const tabs = Array.from(document.querySelectorAll(".role-tabs button"));
let language = "en";
let activeRole = "students";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.body.dataset.lang = language;
  document.documentElement.lang = language;
  switcher.setAttribute("aria-pressed", String(language === "es"));

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key] || element.textContent;
  });

  renderRole(activeRole);
}

function renderRole(roleKey) {
  activeRole = roleKey;
  const role = roles[language][roleKey];
  rolePanel.innerHTML = `
    <div class="panel-main">
      <h3>${role.title}</h3>
      <p>${role.text}</p>
      <ul class="feature-list">
        ${role.features.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <aside class="match-board">
      <small>${language === "es" ? "Indice de preparacion" : "Readiness index"}</small>
      <strong>${role.score}%</strong>
      <div class="meter" style="--score: ${role.score}%"><span></span></div>
      <div class="tag-cloud">
        ${role.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </aside>
  `;
}

switcher.addEventListener("click", () => {
  applyLanguage(language === "en" ? "es" : "en");
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderRole(tab.dataset.role);
  });
});

applyLanguage("en");
