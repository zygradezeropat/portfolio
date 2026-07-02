import { useState } from "react";
import day1Seminar from "../../assets/certificate/day1_seminar.jpg";
import day2Seminar from "../../assets/certificate/day2_seminar.jpg";
import ethicalHacker from "../../assets/certificate/ethical_hacker.jpg";
import javaCertificate from "../../assets/certificate/java_certificate.jpg";
import psitsCertificate from "../../assets/certificate/psits_certificate.jpg";
import aspnetCertificate from "../../assets/certificate/asp.net.jpg";
import datascience from "../../assets/certificate/datascience.jpg";

const workItems = [
  {
    type: "INTERNSHIP",
    period: "Recent",
    status: "Present",
    title: "Web Developer (Frappe)",
    company: "Wela Online Corporation - Livro System Inc.",
    description:
      "Handled school applications assigned to billing and enrollment departments. Built and maintained modules using Frappe and supported feature updates for daily school operations."
  },
  {
    type: "FREELANCE",
    period: "Ongoing",
    status: "Active",
    title: "Full Stack Developer",
    company: "Independent Projects",
    description:
      "Develop full-stack websites from planning to deployment. Build frontend and backend features, integrate databases, and deploy production-ready systems."
  }
];

const certificationItems = [
  {
    type: "CERTIFICATION",
    issuer: "Microsoft",
    issued: "Issued Jan 2020",
    title: "Microsoft Certified - Java Programming",
    description: "Introduction to Programming using Java (Microsoft Technology Associate).",
    image: javaCertificate
  },
  {
    type: "CERTIFICATION",
    issuer: "Cisco Networking Academy",
    issued: "Issued June 2026",
    title: "Introduction to Data Science",
    description:
      "Completed Introduction to Data Science course under the Cisco Networking Academy program.",
    image: datascience
  },
  {
    type: "CERTIFICATION",
    issuer: "Davao del Norte State College",
    issued: "Issued Dec 2025",
    title: "Cisco Certified - Ethical Hacking",
    description:
      "Completed Ethical Hacker training under the Cisco Networking Academy program.",
    image: ethicalHacker
  },
  {
    type: "CERTIFICATION",
    issuer: "ScholarHat",
    issued: "Issued July 2026",
    title: "ASP.NET Core Foundations Course",
    description:
      "Completed ASP.NET Core Foundations course, covering web development fundamentals and best practices.",
    image: aspnetCertificate
  },
  {
    type: "ACHIEVEMENT",
    issuer: "IT Olympiad 2024",
    issued: "Issued 2024",
    title: "ACM Programming Competition",
    description:
      "Participated in IT Olympiad 2024 ACM Programming Competition as part of competitive programming track.",
    image: psitsCertificate
  },
  {
    type: "CERTIFICATION",
    issuer: "Davao del Norte State College",
    issued: "Issued Oct 2025",
    title: "Advanced Seminar Series - IT Specialist & Design",
    description:
      "Completed Day 1 of Advanced Seminar Series focused on IT specialization and design.",
    image: day1Seminar
  },
  {
    type: "CERTIFICATION",
    issuer: "Davao del Norte State College",
    issued: "Issued Nov 2025",
    title: "Advanced Seminar Series - Graphic Design Theory",
    description:
      "Completed Day 2 topic: The Power of Color in Graphic Design: Theory, Psychology, and Practice.",
    image: day2Seminar
  }
];

export function WorkSection() {
  const [preview, setPreview] = useState<{ title: string; image: string } | null>(null);

  return (
    <>
      <section className="space-y-8 pt-4" id="work">
        <div className="space-y-3">
          <p className="font-mono text-[1rem] leading-none text-sky-400 md:text-[1.2rem]">
            {"<section id=\"work\">"}
          </p>
          <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
            {"<h2>"}
          </p>
          <h2 className="pl-10 font-mono text-3xl font-bold tracking-tight text-zinc-100 md:pl-12 md:text-4xl">
            Work
          </h2>
          <p className="pl-10 font-mono text-[1.05rem] text-zinc-500 md:pl-12 md:text-[1.15rem]">
            // internship, freelancing, and achievements
          </p>
          <p className="pl-7 font-mono text-[1rem] leading-none text-sky-400 md:pl-8 md:text-[1.15rem]">
            {"</h2>"}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {workItems.map((item) => (
            <article
              className="rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-5 md:p-6"
              key={item.title}
            >
              <div className="mb-4 flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>{item.type}</span>
                <span>
                  {item.period} - <span className="text-emerald-300">{item.status}</span>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
              <p className="mb-4 text-zinc-400">{item.company}</p>
              <p className="leading-relaxed text-zinc-300/95">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="font-mono text-lg font-semibold text-zinc-100">
            Certifications & Achievements
          </h3>
          <p className="font-mono text-xs text-zinc-500">
            // credentials with certificate preview
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certificationItems.map((item) => (
            <article
              className="rounded-2xl border border-zinc-700/60 bg-zinc-900/35 p-5 md:p-6"
              key={item.title}
            >
              <div className="mb-4 flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>{item.type}</span>
                <span className="text-emerald-300">{item.issued}</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
              <p className="mb-4 text-zinc-400">{item.issuer}</p>
              <p className="mb-5 leading-relaxed text-zinc-300/95">{item.description}</p>
              <button
                className="rounded-lg border border-violet-400/35 bg-violet-500/10 px-3 py-1.5 font-mono text-xs text-violet-200 transition hover:bg-violet-500/20"
                onClick={() => setPreview({ title: item.title, image: item.image })}
                type="button"
              >
                Preview Certificate
              </button>
            </article>
          ))}
        </div>

        <p className="font-mono text-xs text-zinc-600">{"</section>"}</p>
      </section>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#060913]/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl rounded-2xl border border-zinc-700/70 bg-zinc-950/90 p-4 md:p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="pr-4 font-mono text-sm text-zinc-200 md:text-base">
                {preview.title}
              </h3>
              <button
                className="rounded-md border border-zinc-700/80 px-2.5 py-1 font-mono text-xs text-zinc-300 transition hover:text-zinc-100"
                onClick={() => setPreview(null)}
                type="button"
              >
                Close
              </button>
            </div>
            <img
              alt={preview.title}
              className="max-h-[76vh] w-full rounded-xl border border-zinc-700/60 object-contain"
              src={preview.image}
            />
          </div>
        </div>
      )}
    </>
  );
}
