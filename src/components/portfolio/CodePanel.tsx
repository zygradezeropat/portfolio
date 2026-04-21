export function CodePanel() {
  return (
    <aside className="space-y-16 pt-2">
      <div className="floating-card rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-6 font-mono text-sm text-zinc-400 shadow-[0_0_60px_rgba(8,10,24,.65)] backdrop-blur-md">
        <div className="mb-4 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300/80" />
        </div>
        <p className="mb-3 text-zinc-300">{"const dev = {"}</p>
        <p className="pl-4">
          <span className="text-zinc-500">name:</span>{" "}
          <span className="text-emerald-300">"Patrick Dave Patana"</span>,
        </p>
        <p className="pl-4">
          <span className="text-zinc-500">role:</span>{" "}
          <span className="text-violet-300">"Full-Stack"</span>,
        </p>
        <p className="pl-4">
          <span className="text-zinc-500">passionate:</span>{" "}
          <span className="text-sky-300">true</span>,
        </p>
        <p className="pl-4">
          <span className="text-zinc-500">coffeeLover:</span>{" "}
          <span className="text-sky-300">true</span>,
        </p>
        <p className="pl-4">
          <span className="text-zinc-500">learning:</span>{" "}
          <span className="text-amber-300">"always"</span>
        </p>
        <p className="mt-3 text-zinc-300">{"};"}</p>
      </div>

      <p className="font-mono text-sm text-zinc-600">
        // TODO: be better than yesterday.
      </p>
    </aside>
  );
}
