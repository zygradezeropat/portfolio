import { useState } from "react";

import { projects } from "../../data/portfolioData";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const hasMultipleImages = project.previewImages.length > 1;
  const currentImage = project.previewImages[activeImageIndex];

  const showPrevious = () => {
    setActiveImageIndex((prev) => (prev === 0 ? project.previewImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.previewImages.length);
  };

  return (
    <>
      <article className="rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-5 md:p-6">
      <div className="mb-3 flex items-center justify-between gap-4 font-mono text-xs">
        <span className="text-zinc-500">{project.type}</span>
        <span className="text-emerald-300">{project.updated}</span>
      </div>

      <div className="mb-4 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/70">
        <div className="relative aspect-video">
          <button
            className="block h-full w-full text-left"
            onClick={() => setIsLightboxOpen(true)}
            type="button"
          >
            <img
              alt={currentImage.alt}
              className="h-full w-full cursor-zoom-in object-cover transition hover:scale-[1.02]"
              src={currentImage.src}
            />
          </button>
          {hasMultipleImages && (
            <>
              <button
                aria-label="Show previous preview"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-950/70 px-2 py-1 text-sm text-zinc-100 transition hover:bg-zinc-800"
                onClick={showPrevious}
                type="button"
              >
                ←
              </button>
              <button
                aria-label="Show next preview"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-950/70 px-2 py-1 text-sm text-zinc-100 transition hover:bg-zinc-800"
                onClick={showNext}
                type="button"
              >
                →
              </button>
            </>
          )}
        </div>

        {hasMultipleImages && (
          <div className="flex items-center justify-center gap-2 border-t border-zinc-800/80 bg-zinc-950/60 px-3 py-2">
            {project.previewImages.map((image, index) => (
              <button
                aria-label={`Show preview ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeImageIndex ? "bg-sky-400" : "bg-zinc-700 hover:bg-zinc-500"
                }`}
                key={image.src}
                onClick={() => setActiveImageIndex(index)}
                type="button"
              />
            ))}
          </div>
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-zinc-100">{project.name}</h3>
      <p className="mb-4 leading-relaxed text-zinc-300/95">{project.description}</p>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 font-mono text-xs text-violet-200">
          {project.stack}
        </span>
        <span className="font-mono text-xs text-zinc-400">
          {hasMultipleImages ? "Click through previews" : "Preview available"}
        </span>
      </div>
    </article>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6">
          <div className="relative w-full max-w-5xl rounded-2xl border border-zinc-700/70 bg-zinc-950 p-3 shadow-2xl">
            <button
              aria-label="Close preview"
              className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-100 transition hover:bg-zinc-800"
              onClick={() => setIsLightboxOpen(false)}
              type="button"
            >
              ✕
            </button>
            <img
              alt={currentImage.alt}
              className="max-h-[80vh] w-full rounded-xl object-contain"
              src={currentImage.src}
            />
            {hasMultipleImages && (
              <div className="mt-3 flex items-center justify-center gap-2">
                <button
                  aria-label="Show previous preview"
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-100 transition hover:bg-zinc-800"
                  onClick={showPrevious}
                  type="button"
                >
                  ← Prev
                </button>
                <button
                  aria-label="Show next preview"
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-100 transition hover:bg-zinc-800"
                  onClick={showNext}
                  type="button"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

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
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <p className="font-mono text-xs text-zinc-600">{"</section>"}</p>
    </section>
  );
}
