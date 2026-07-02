const expertiseGroups = [
  {
    title: "Frontend",
    subtitle: "// UI technologies",
    items: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    title: "Backend",
    subtitle: "// server-side",
    items: [
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Frappe", icon: "https://avatars.githubusercontent.com/u/743242?s=200&v=4" },
      { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" }
    ]
  },
  {
    title: "Database",
    subtitle: "// data layer",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    title: "Tools & Design",
    subtitle: "// workflow",
    items: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Canva", icon: "https://static.canva.com/static/images/favicon.ico" }
    ]
  }
];

export function ExpertiseSection() {
  return (
    <section className="space-y-8 pt-4" id="expertise">
      <div className="space-y-3">
        <p className="font-mono text-[1rem] leading-none text-sky-400 md:text-[1.2rem]">
          {"<section id=\"expertise\">"}
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
          {"<h2>"}
        </p>
        <h2 className="pl-10 font-mono text-3xl font-bold tracking-tight text-zinc-100 md:pl-12 md:text-4xl">
          Expertise
        </h2>
        <p className="pl-10 font-mono text-[1.05rem] text-zinc-500 md:pl-12 md:text-[1.15rem]">
          // technologies & tools I work with
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
          {"</h2>"}
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-4 md:p-6">
        <div className="mb-4 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300/80" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {expertiseGroups.map((group) => (
            <article
              className="rounded-xl border border-zinc-700/60 bg-zinc-900/45 p-4"
              key={group.title}
            >
              <h3 className="font-mono text-base font-semibold text-zinc-100">
                {group.title}
              </h3>
              <p className="mb-3 font-mono text-xs text-zinc-500">{group.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    className="rounded-md border border-violet-400/30 bg-violet-500/10 p-2"
                    key={item.name}
                    title={item.name}
                  >
                    <img
                      alt={item.name}
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                      src={item.icon}
                    />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="font-mono text-xs text-zinc-600">{"</section>"}</p>
    </section>
  );
}
