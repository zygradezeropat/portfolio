export function HeroSection() {
  return (
    <section className="relative space-y-8 pt-4" id="home">
      <p className="w-fit rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.26em] text-violet-200">
        Full-Stack Web Developer
      </p>

      <div className="font-mono">
        <h1 className="text-[clamp(3.2rem,8.2vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.02em] text-zinc-100">
          Patrick Dave
          <br />
          Patana
        </h1>
      </div>

      <p className="max-w-[620px] text-[1.9rem] leading-relaxed text-zinc-400/90 md:text-[2.1rem]">
        Full Stack Developer | Graduating BSIT Student - Davao del Norte State
        College
      </p>

      <div className="font-mono text-sm text-emerald-300/80">
        <p>$ npm run build</p>
        <p className="text-emerald-400/60">// Compiled successfully</p>
      </div>
    </section>
  );
}
