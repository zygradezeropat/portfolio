import profilePlaceholder from "../../assets/patrick.jpg";

export function AboutSection() {
  return (
    <section className="space-y-8 pt-4" id="about">
      <div className="space-y-3">
        <p className="font-mono text-[1rem] leading-none md:text-[1.2rem]">
          <span className="text-sky-400">&lt;</span>
          <span className="text-violet-300">section</span>
          <span className="text-zinc-300"> id=</span>
          <span className="text-emerald-400">&quot;about&quot;</span>
          <span className="text-sky-400">&gt;</span>
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none md:pl-8 md:text-[1.15rem]">
          <span className="text-sky-400">&lt;</span>
          <span className="text-violet-300">h2</span>
          <span className="text-sky-400">&gt;</span>
        </p>
        <h2 className="pl-10 font-mono text-3xl font-bold tracking-tight text-zinc-100 md:pl-12 md:text-4xl">
          About me
        </h2>
        <p className="pl-10 font-mono text-[1.15rem] text-zinc-500 md:pl-12 md:text-[1.3rem]">
          // a bit about who I am
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none md:pl-8 md:text-[1.15rem]">
          <span className="text-sky-400">&lt;/</span>
          <span className="text-violet-300">h2</span>
          <span className="text-sky-400">&gt;</span>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-900/45 p-3">
            <div className="rounded-xl bg-black/50 p-4">
              <img
                alt="Profile placeholder"
                className="mx-auto h-64 w-64 rounded-xl border border-zinc-700/70 object-cover"
                src={profilePlaceholder}
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-zinc-700/60 bg-zinc-900/35 px-5 py-3 text-zinc-400">
            <a
              aria-label="GitHub"
              className="transition hover:text-zinc-200"
              href="https://github.com/zygradezeropat"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.682-.217.682-.482 0-.238-.009-.868-.014-1.703-2.776.603-3.363-1.338-3.363-1.338-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.893 1.53 2.343 1.088 2.913.832.091-.647.35-1.088.636-1.338-2.217-.252-4.549-1.109-4.549-4.936 0-1.09.39-1.981 1.03-2.679-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.023a9.55 9.55 0 0 1 5.006 0c1.91-1.292 2.748-1.023 2.748-1.023.546 1.377.203 2.394.1 2.647.641.698 1.028 1.59 1.028 2.679 0 3.837-2.336 4.681-4.56 4.928.359.309.679.919.679 1.852 0 1.337-.012 2.417-.012 2.746 0 .268.18.58.688.481A10.001 10.001 0 0 0 12 2Z" />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              className="transition hover:text-zinc-200"
              href="https://www.linkedin.com/in/patrick-dave-patana-166b65333/"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.9 1.96 1.96 0 0 0 5.25 3ZM20.44 13.41c0-3.17-1.69-4.64-3.95-4.64-1.82 0-2.64 1-3.09 1.7V8.5H10V20h3.38v-5.69c0-1.5.28-2.96 2.14-2.96 1.83 0 1.86 1.71 1.86 3.05V20h3.38v-6.59Z" />
              </svg>
            </a>
            <a
              aria-label="X"
              className="transition hover:text-zinc-200"
              href="https://x.com/Patana7112"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2H21l-6.41 7.326L22.13 22h-5.904l-4.62-6.036L6.333 22H3.576l6.856-7.834L2 2h6.054l4.174 5.504L18.244 2Zm-1.036 18h1.527L7.224 3.896H5.58L17.208 20Z" />
              </svg>
            </a>
            <a
              aria-label="Email"
              className="transition hover:text-zinc-200"
              href="mailto:patana.patrickdave@gmail.com"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v12H4z" strokeWidth="1.8" />
                <path d="m4 8 8 6 8-6" strokeWidth="1.8" />
              </svg>
            </a>
          </div>
        </aside>

        <div className="space-y-5">
          <article className="rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-6 text-[1.05rem] leading-relaxed text-zinc-300/95 md:p-8">
            BS Information Technology graduate with a passion for building and
            continuously improving my skills. I enjoy solving problems and
            learning from other developers. Outside coding, I spend time in the
            park, watch movies/documentaries, and play games.
            <p className="mt-6 font-mono text-sm text-zinc-400">
              &#9675; Based in Tagum City, Davao del Norte, Philippines
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            
            <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/35 p-5">
              <p className="font-mono text-3xl font-bold text-violet-300">6+</p>
              <p className="mt-1 font-mono text-xs tracking-[0.24em] text-zinc-500">
                PROJECTS BUILT
              </p>
            </div>
          </div>
          <p className="font-mono text-xs text-zinc-600">
            {"</section>"}
          </p>
        </div>
      </div>
    </section>
  );
}
