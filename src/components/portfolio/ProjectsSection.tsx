const projects = [
  {
    name: "Valiant Technology Tesda Management System",
    description:
      "A Web based school management system that uses Django, Bootstrap and PostgreSQL.",
    stack: "Python",
    type: "Private",
    updated: "Updated Jun 28, 2026",
    href: "//"
  },
   {
    name: "Office of Senior Citizen Affairs (OSCA) Management System",
    description:
      "A Web based management system that uses Next.js, Tailwind and PostgreSQL.",
    stack: "Next.js",
    type: "Private",
    updated: "Updated May 28, 2026",
    href: "//"
  },
  {
    name: "capstone-mhoers",
    description: "Capstone project repository.",
    stack: "HTML",
    type: "Public",
    updated: "Updated Feb 5",
    href: "https://github.com/zygradezeropat/capstone-mhoers"
  },
  {
    name: "rentalmanagementsystem",
    description:
      "Rental property management system project built with HTML, CSS, JS, PHP, and MySQL.",
    stack: "PHP",
    type: "Public",
    updated: "Updated Jun 7, 2024",
    href: "https://github.com/zygradezeropat/rentalmanagementsystem"
  },
  {
    name: "ironhorn",
    description:
      "My first student project website. I keep it here to show my growth journey.",
    stack: "HTML",
    type: "Public",
    updated: "Early student project",
    href: "https://github.com/zygradezeropat/ironhorn"
  }
  
];

export function ProjectsSection() {
  return (
    <section className="space-y-8 pt-4" id="projects">
      <div className="space-y-3">
        <p className="font-mono text-[1rem] leading-none text-sky-400 md:text-[1.2rem]">
          {"<section id=\"projects\">"}
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
          {"<h2>"}
        </p>
        <h2 className="pl-10 font-mono text-3xl font-bold tracking-tight text-zinc-100 md:pl-12 md:text-4xl">
          Projects
        </h2>
        <p className="pl-10 font-mono text-[1.05rem] text-zinc-500 md:pl-12 md:text-[1.15rem]">
          // selected repositories and builds
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
          {"</h2>"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-5 md:p-6"
            key={project.name}
          >
            <div className="mb-3 flex items-center justify-between gap-4 font-mono text-xs">
              <span className="text-zinc-500">{project.type}</span>
              <span className="text-emerald-300">{project.updated}</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-zinc-100">{project.name}</h3>
            <p className="mb-4 leading-relaxed text-zinc-300/95">{project.description}</p>
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 font-mono text-xs text-violet-200">
                {project.stack}
              </span>
              <a
                className="font-mono text-xs text-zinc-400 transition hover:text-zinc-100"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                View on GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="font-mono text-xs text-zinc-600">{"</section>"}</p>
    </section>
  );
}
