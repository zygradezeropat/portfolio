export const navItems = [
  { id: "01", label: "home.tsx", href: "#home", active: true },
  { id: "02", label: "about.tsx", href: "#about" },
  { id: "03", label: "expertise.tsx", href: "#expertise" },
  { id: "04", label: "work.tsx", href: "#work" },
  { id: "05", label: "projects.tsx", href: "#projects" },
  { id: "06", label: "contact.tsx", href: "#contact" }
];

export const lineNumbers = Array.from({ length: 29 }, (_, index) =>
  String(index + 1).padStart(2, "0")
);
