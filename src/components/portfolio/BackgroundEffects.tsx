export function BackgroundEffects() {
  return (
    <>
      <div className="animated-aurora pointer-events-none absolute inset-0" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="scanline-overlay pointer-events-none absolute inset-0 opacity-20" />
    </>
  );
}
