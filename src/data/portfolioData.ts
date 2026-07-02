const createPreviewImage = (title: string, accent: string, subtitle: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
      <rect width="1200" height="720" rx="32" fill="#09090b" />
      <rect x="44" y="44" width="1112" height="632" rx="24" fill="#111827" stroke="${accent}" stroke-width="4" />
      <rect x="92" y="112" width="360" height="220" rx="20" fill="${accent}" opacity="0.28" />
      <rect x="92" y="372" width="520" height="34" rx="17" fill="#f4f4f5" opacity="0.9" />
      <rect x="92" y="430" width="432" height="26" rx="13" fill="#a1a1aa" opacity="0.85" />
      <rect x="92" y="478" width="380" height="26" rx="13" fill="#71717a" opacity="0.8" />
      <circle cx="960" cy="230" r="140" fill="${accent}" opacity="0.2" />
      <circle cx="960" cy="230" r="92" fill="#ffffff" opacity="0.16" />
      <text x="92" y="268" fill="${accent}" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="700">${title}</text>
      <text x="92" y="318" fill="#f4f4f5" font-family="Segoe UI, Arial, sans-serif" font-size="24" opacity="0.95">${subtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// Use Vite-friendly URL imports for local images so they're correctly
// processed and copied to the build output (works on Vercel production).
const valiantLanding = new URL('../assets/website-img/valiant/landingpage.png', import.meta.url).href;
const valiantLoginForm = new URL('../assets/website-img/valiant/loginform.png', import.meta.url).href;
const valiantRegistrarDashboard = new URL('../assets/website-img/valiant/registrardashboard.png', import.meta.url).href;
const valiantStudentDashboard = new URL('../assets/website-img/valiant/studentdashboard.png', import.meta.url).href;
const valiantTrainerDashboard = new URL('../assets/website-img/valiant/trainerdashboard.png', import.meta.url).href;

const oscaLanding = new URL('../assets/website-img/osca/landingpage.png', import.meta.url).href;
const oscaAdminDashboard = new URL('../assets/website-img/osca/admindashboard.png', import.meta.url).href;
const oscaDashboardV2 = new URL('../assets/website-img/osca/dashboardv2.png', import.meta.url).href;
const oscaStaff = new URL('../assets/website-img/osca/staff.png', import.meta.url).href;

const mhoersDiseaseForecast = new URL('../assets/website-img/mhoers/diseaseforecast.png', import.meta.url).href;

export const navItems = [
  { id: "01", label: "home.tsx", href: "#home", active: true },
  { id: "02", label: "about.tsx", href: "#about" },
  { id: "03", label: "expertise.tsx", href: "#expertise" },
  { id: "04", label: "work.tsx", href: "#work" },
  { id: "05", label: "projects.tsx", href: "#projects" },
  { id: "06", label: "contact.tsx", href: "#contact" }
];

export const projects = [
  {
    name: "Valiant Technology Tesda Management System",
    description:
      "A Web based school management system that uses Django, Bootstrap and PostgreSQL.",
    stack: "Python",
    type: "Private",
    updated: "Updated Jun 28, 2026",
    previewImages: [
      {
        src: valiantLanding,
        alt: "Landing page preview of Valiant Technology management system"
      },
      {
        src: valiantLoginForm,
        alt: "Preview of Valiant Technology management system"
      },
      {
        src: valiantRegistrarDashboard,
        alt: "Secondary preview of Valiant Technology management system"
      },
      {
        src: valiantStudentDashboard,
        alt: "Third preview of Valiant Technology management system"
      },
      {
        src: valiantTrainerDashboard,
        alt: "Fourth preview of Valiant Technology management system"
      },
    ]
  },
  {
    name: "Office of Senior Citizen Affairs (OSCA) Management System",
    description:
      "A Web based management system that uses Next.js, Tailwind and PostgreSQL.",
    stack: "Next.js",
    type: "Private",
    updated: "Updated May 28, 2026",
    previewImages: [
      {
        src: oscaLanding,
        alt: "Preview of OSCA management system"
      },
      {
        src: oscaAdminDashboard,
        alt: "Secondary preview of OSCA management system"
      },
      {
        src: oscaDashboardV2,
        alt: "Third preview of OSCA management system"
      },
      {
        src: oscaStaff,
        alt: "Fourth preview of OSCA management system"
      }
    ]
  },
  {
    name: "capstone-mhoers",
    description: "Capstone project repository.",
    stack: "HTML",
    type: "Private",
    updated: "Updated May 19",
    previewImages: [
      {
         src: mhoersDiseaseForecast,
        alt: "Preview of capstone mhoers project"
      },
     
    ]
  },
  {
    name: "rentalmanagementsystem",
    description:
      "Rental property management system project built with HTML, CSS, JS, PHP, and MySQL.",
    stack: "PHP",
    type: "Public",
    updated: "Updated Jun 7, 2024",
    previewImages: [
      {
        src: createPreviewImage("Rental", "#fb923c", "Property dashboard"),
        alt: "Preview of rental management system"
      },
      {
        src: createPreviewImage("Rental", "#10b981", "Bookings view"),
        alt: "Secondary preview of rental management system"
      },
      {
        src: createPreviewImage("Rental", "#f43f5e", "Ledger screen"),
        alt: "Third preview of rental management system"
      }
    ]
  },
  {
    name: "ironhorn",
    description:
      "My first student project website. I keep it here to show my growth journey.",
    stack: "HTML",
    type: "Public",
    updated: "Early student project",
    previewImages: [
      {
        src: createPreviewImage("Ironhorn", "#14b8a6", "Student portfolio"),
        alt: "Preview of ironhorn project"
      },
      {
        src: createPreviewImage("Ironhorn", "#a855f7", "Project timeline"),
        alt: "Secondary preview of ironhorn project"
      }
    ]
  }
];

export const lineNumbers = Array.from({ length: 29 }, (_, index) =>
  String(index + 1).padStart(2, "0")
);
