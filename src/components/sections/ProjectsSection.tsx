'use client'

import Image from "next/image"
import { projects } from "@/data/portfolio"
import type { Project } from "@/types"

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  return (
    <article
      role="listitem"
      className={`group relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg3)] transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] reveal reveal-d${(idx % 3) + 1}`}
    >
      {p.featured && (
        <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-full bg-[var(--accent)] text-white text-[11px] font-semibold">
          ⭐ Featured
        </div>
      )}
      <div className="relative h-48 overflow-hidden bg-[var(--bg)]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: p.gradient }}
        />
        <div className="absolute bottom-3 right-3 text-2xl z-10 drop-shadow-lg">
          {p.emoji}
        </div>
      </div>
      <div className="p-6">
        <div
          className="flex flex-wrap gap-1.5 mb-3.5"
          role="list"
          aria-label="Technologies used"
        >
          {p.tags.map((t) => (
            <span
              key={t}
              role="listitem"
              className="px-2.5 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] font-mono text-[11px] text-[var(--accent2)]"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-syne text-lg font-bold leading-tight mb-2.5 text-[var(--text)]">
          {p.title}
        </h3>
        <p className="text-sm text-[var(--text2)] leading-relaxed mb-5">
          {p.desc}
        </p>
        <div className="flex gap-3">
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${p.title}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[9px] bg-[var(--accent)] text-white text-[13px] font-semibold transition-all hover:bg-[var(--accent2)] hover:shadow-accent"
          >
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live Demo
          </a>

          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repo of ${p.title}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[9px] bg-[var(--surface)] border border-[var(--border2)] text-[var(--text2)] text-[13px] font-semibold transition-all hover:bg-[var(--surface2)] hover:text-[var(--text)] hover:border-[var(--accent)]"
          >
            <svg
              width="13"
              height="13"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.420-.225-1.020-.780-.015-.795.945-.015 1.620.870 1.845 1.230 1.080 1.815 2.805 1.305 3.495.990.105-.780.420-1.305.765-1.605-2.670-.300-5.460-1.335-5.460-5.925 0-1.305.465-2.385 1.230-3.225-.120-.300-.540-1.530.120-3.180 0 0 1.005-.315 3.300 1.230.960-.270 1.980-.405 3-.405s2.040.135 3 .405c2.295-1.560 3.300-1.230 3.300-1.230.660 1.650.240 2.880.120 3.180.765.840 1.230 1.905 1.230 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.810 1.095.810 2.220 0 1.605-.015 2.895-.015 3.300 0 .315.225.690.825.570A12.020 12.020 0 0 0 24 12c0-6.630-5.370-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="c-section bg-[var(--bg2)]"
    >
      <div className="c-container">
        <div className="text-center mb-16 reveal">
          <h2 id="projects-heading" className="c-section-title">
            Featured <span className="c-gradient-text">Work</span>
          </h2>
          <p className="c-section-desc">
            A selection of projects showcasing full-stack capabilities and design thinking.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Portfolio projects"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}