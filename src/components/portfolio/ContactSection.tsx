import { useState } from "react";
import type { FormEvent } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in name, email, and message.");
      return;
    }

    const finalSubject = subject || "Portfolio contact inquiry";
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:patana.patrickdave@gmail.com?subject=${encodeURIComponent(
      finalSubject
    )}&body=${body}`;
    setError("");
  };

  return (
    <section className="space-y-8 pt-4" id="contact">
      <div className="space-y-3">
        <p className="font-mono text-[1rem] leading-none text-sky-400 md:text-[1.2rem]">
          {"<section id=\"contact\">"}
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
          {"<h2>"}
        </p>
        <h2 className="pl-10 font-mono text-3xl font-bold tracking-tight text-zinc-100 md:pl-12 md:text-4xl">
          Get in touch
        </h2>
        <p className="pl-10 font-mono text-[1.05rem] text-zinc-500 md:pl-12 md:text-[1.15rem]">
          // have a project in mind? let&apos;s talk.
        </p>
        <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
          {"</h2>"}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <form
          className="space-y-3 rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-4 md:p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <input
              className="rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition focus:border-violet-400/60"
              name="name"
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Name"
              type="text"
              value={formData.name}
            />
            <input
              className="rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition focus:border-violet-400/60"
              name="email"
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Email"
              type="email"
              value={formData.email}
            />
          </div>
          <input
            className="w-full rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition focus:border-violet-400/60"
            name="subject"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, subject: event.target.value }))
            }
            placeholder="Subject (optional)"
            type="text"
            value={formData.subject}
          />
          <textarea
            className="min-h-32 w-full rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition focus:border-violet-400/60"
            name="message"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, message: event.target.value }))
            }
            placeholder="Message"
            value={formData.message}
          />
          {error && <p className="font-mono text-xs text-rose-300">{error}</p>}
          <button
            className="rounded-full border border-zinc-600/80 bg-zinc-200 px-4 py-2 font-mono text-xs font-semibold text-zinc-900 transition hover:bg-white"
            type="submit"
          >
            Send message
          </button>
        </form>

        <aside className="space-y-3 rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-4 md:p-6">
          <p className="font-mono text-xs text-zinc-500">// or reach me directly</p>
          <a
            className="block rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-3 transition hover:border-violet-400/45"
            href="mailto:patana.patrickdave@gmail.com"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Email
            </p>
            <p className="mt-1 text-sm text-zinc-200">patana.patrickdave@gmail.com</p>
          </a>
          <a
            className="block rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-3 transition hover:border-violet-400/45"
            href="https://github.com/zygradezeropat"
            rel="noreferrer"
            target="_blank"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Github
            </p>
            <p className="mt-1 text-sm text-zinc-200">github.com/zygradezeropat</p>
          </a>
          <a
            className="block rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-3 transition hover:border-violet-400/45"
            href="https://www.linkedin.com/in/patrick-dave-patana-166b65333/"
            rel="noreferrer"
            target="_blank"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Linkedin
            </p>
            <p className="mt-1 text-sm text-zinc-200">linkedin.com/in/patrick-dave-patana-166b65333</p>
          </a>
          <a
            className="block rounded-lg border border-zinc-700/70 bg-zinc-950/35 px-3 py-3 transition hover:border-violet-400/45"
            href="https://x.com/Patana7112"
            rel="noreferrer"
            target="_blank"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              X (Twitter)
            </p>
            <p className="mt-1 text-sm text-zinc-200">@Patana7112</p>
          </a>
        </aside>
      </div>

      <p className="font-mono text-xs text-zinc-600">{"</section>"}</p>
    </section>
  );
}
