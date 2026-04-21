export function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.35em] text-zinc-500 md:flex">
      <div className="scroll-dot h-6 w-4 rounded-full border border-zinc-600/80 p-1">
        <span className="scroll-dot-inner block h-1 w-1 rounded-full bg-zinc-300/80" />
      </div>
      <span>SCROLL</span>
    </div>
  );
}
