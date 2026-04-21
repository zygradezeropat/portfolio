import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
  href?: string;
  active?: boolean;
};

type HeaderNavProps = {
  items: NavItem[];
};

export function HeaderNav({ items }: HeaderNavProps) {
  const [activeHash, setActiveHash] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
      setMobileMenuOpen(false);
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sectionHashes = items
      .map((item) => item.href)
      .filter((href): href is string => Boolean(href && href.startsWith("#")));

    const sections = sectionHashes
      .map((hash) => {
        const section = document.getElementById(hash.slice(1));
        return section ? { hash, section } : null;
      })
      .filter((entry): entry is { hash: string; section: HTMLElement } => Boolean(entry));

    if (!sections.length) return;

    let ticking = false;
    const updateActiveSection = () => {
      const markerY = 170;
      let currentHash = sections[0].hash;
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const entry of sections) {
        const rect = entry.section.getBoundingClientRect();
        const distance = Math.abs(rect.top - markerY);

        // Prefer sections that currently cross marker line.
        if (rect.top <= markerY && rect.bottom >= markerY) {
          currentHash = entry.hash;
          nearestDistance = -1;
          break;
        }

        // Otherwise pick nearest section to marker.
        if (distance < nearestDistance) {
          nearestDistance = distance;
          currentHash = entry.hash;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        currentHash = sections[sections.length - 1].hash;
      }

      setActiveHash(currentHash);
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [items]);

  return (
    <header className="sticky top-4 z-40 mb-12 -mx-6 md:-mx-10">
      <div className="relative flex w-full items-center justify-between rounded-full border border-zinc-700/60 bg-[#11182f]/70 px-3 py-3 shadow-[0_12px_40px_rgba(6,8,22,0.5)] backdrop-blur-xl md:px-5">
      <a
        className="font-mono text-sm tracking-wide text-violet-300 transition hover:text-violet-200"
        href="#home"
      >
        {"<ptrckdvptn />"}
      </a>

        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-md border border-zinc-700/70 bg-zinc-900/50 px-2 py-1 font-mono text-xs text-zinc-300 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          type="button"
        >
          {mobileMenuOpen ? "X" : "MENU"}
        </button>

        <nav className="hidden items-center gap-5 font-mono text-xs text-zinc-500 md:flex">
            {items.map((item) => (
              <a
                className={`group relative pb-1 transition ${
                  activeHash === item.href || (item.active && activeHash === "#home")
                    ? "text-zinc-200"
                    : "hover:text-zinc-300"
                }`}
                href={item.href ?? "#"}
                key={item.id}
                onClick={() => setActiveHash(item.href ?? "#home")}
              >
                <span className="text-zinc-600">{item.id}</span>
                <span className="mx-1 text-zinc-700">//</span>
                <span>{item.label}</span>
                {(activeHash === item.href || (item.active && activeHash === "#home")) && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-violet-400/90" />
                )}
              </a>
            ))}
        </nav>

        {mobileMenuOpen && (
          <nav className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border border-zinc-700/60 bg-[#11182f]/95 p-3 shadow-[0_16px_40px_rgba(6,8,22,0.6)] backdrop-blur-xl md:hidden">
            <div className="grid gap-2">
              {items.map((item) => (
                <a
                  className={`rounded-lg px-3 py-2 font-mono text-xs transition ${
                    activeHash === item.href || (item.active && activeHash === "#home")
                      ? "bg-violet-500/15 text-zinc-100"
                      : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"
                  }`}
                  href={item.href ?? "#"}
                  key={item.id}
                  onClick={() => {
                    setActiveHash(item.href ?? "#home");
                    setMobileMenuOpen(false);
                  }}
                >
                  <span className="text-zinc-500">{item.id}</span>
                  <span className="mx-1 text-zinc-600">//</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
