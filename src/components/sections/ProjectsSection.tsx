'use client'

import Image from "next/image"
import { projects } from "@/data/portfolio"
import type { Project } from "@/types"

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  return (
    <article
      role="listitem"
      className={`group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg3)] transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-0.5 reveal reveal-d${(idx % 3) + 1}`}
    >
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-[var(--bg)]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: p.gradient }}
        />

        {p.featured && (
          <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 flex items-center gap-1.5 text-white text-[11px] font-semibold tracking-wide drop-shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            Featured
          </div>
        )}

        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-xl sm:text-2xl z-10 drop-shadow-lg">
          {p.emoji}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="font-syne text-base sm:text-lg font-bold leading-tight mb-1.5 sm:mb-2 text-[var(--text)]">
          {p.title}
        </h3>

        <p className="text-[13px] sm:text-sm text-[var(--text2)] leading-relaxed mb-3 sm:mb-4">
          {p.desc}
        </p>

        <div
          className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 sm:mb-5 font-mono text-[11px] text-[var(--accent2)]"
          role="list"
          aria-label="Technologies used"
        >
          {p.tags.map((t, i) => (
            <span key={t} role="listitem" className="flex items-center gap-2.5">
              {i > 0 && <span className="text-[var(--border2)]" aria-hidden="true">·</span>}
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 pt-1">
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${p.title}`}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent2)]"
          >
            View project
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>

          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repo of ${p.title}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[var(--text2)] transition-colors hover:text-[var(--text)] hover:bg-[var(--surface)]"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="c-section bg-[var(--bg2)]">
      <div className="c-container">
        {/* Header: same masthead split used in the skills section, for consistency across sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-12 sm:mb-16 reveal items-end px-4 sm:px-0">
          <div className="md:col-span-7">
            <h2
              id="projects-heading"
              className="font-syne font-bold text-[var(--text)] text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] tracking-tight"
            >
              Featured work
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--text2)] md:text-right">
              A selection of projects showcasing full-stack capabilities and design thinking.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
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