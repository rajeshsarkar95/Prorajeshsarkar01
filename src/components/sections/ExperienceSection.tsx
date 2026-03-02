import { experiences } from '@/data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="exp-heading" className="c-section">
      <div className="c-container">
        <div className="text-center mb-16 reveal">
          <h2 id="exp-heading" className="c-section-title">
            Work <span className="c-gradient-text">History</span>
          </h2>
          <p className="c-section-desc">My professional journey building software that matters.</p>
        </div>
        <div className="relative max-w-[800px] mx-auto c-timeline" role="list" aria-label="Work experience">
          {experiences.map((e, i) => (
            <div
              key={e.id}
              role="listitem"
              className={`relative pl-[70px] mb-12 last:mb-0 reveal reveal-d${i + 1}`}
            >
              <div
                className="absolute left-3 top-2 w-[22px] h-[22px] rounded-full bg-[var(--accent)] border-[3px] border-[var(--bg)] flex items-center justify-center"
                style={{ boxShadow: '0 0 16px var(--glow)' }}
                aria-hidden="true"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="p-6 px-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] transition-all hover:border-[var(--accent)] hover:bg-[var(--surface2)]">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <h3 className="font-syne text-lg font-bold text-[var(--text)]">{e.company}</h3>
                  <span className="font-mono text-xs text-[var(--accent2)] px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                    {e.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--accent)] font-medium mb-3">{e.role}</p>
                <ul className="flex flex-col gap-2 list-none" aria-label="Responsibilities">
                  {e.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-sm text-[var(--text2)] pl-4 relative leading-relaxed before:content-['▸'] before:absolute before:left-0 before:top-0.5 before:text-[var(--accent)] before:text-[11px]"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
