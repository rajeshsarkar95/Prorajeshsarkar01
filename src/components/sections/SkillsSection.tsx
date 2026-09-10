import { skills, chips } from '@/data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="c-section">
      <div className="c-container">
        <div className="text-center mb-10 sm:mb-16 reveal">
          <h2 id="skills-heading" className="c-section-title">
            Technical <span className="c-gradient-text">Expertise</span>
          </h2>
          <p className="c-section-desc px-4 sm:px-0">
            Core technologies I use to build production-ready applications
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16"
          role="list"
          aria-label="Core technical skills"
        >
          {skills.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.name}
                role="listitem"
                aria-label={`${s.name}: ${s.pct}%`}
                className={`c-card group p-4 sm:p-6 reveal ${i % 2 === 1 ? 'reveal-d1' : ''}`}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div
                    className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border2)',
                      boxShadow: '0 0 0 0 var(--accent)',
                    }}
                  >
                    {Icon ? (
                      <Icon
                        size={20}
                        strokeWidth={2}
                        className="sm:w-[22px] sm:h-[22px]"
                        style={{ color: s.color || 'var(--accent2)' }}
                      />
                    ) : (
                      <span className="font-syne font-bold text-sm" style={{ color: s.color || 'var(--accent2)' }}>
                        {s.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2 gap-2">
                      <span className="font-syne font-bold text-sm sm:text-[15px] text-[var(--text)] truncate">
                        {s.name}
                      </span>
                      <span className="font-mono text-xs sm:text-[13px] text-[var(--accent2)] font-medium shrink-0">
                        {s.pct}%
                      </span>
                    </div>
                    <div
                      className="h-[5px] sm:h-[6px] rounded-full overflow-hidden"
                      style={{ background: 'var(--border)' }}
                      role="progressbar"
                      aria-valuenow={s.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="c-skill-bar-fill"
                        data-width={s.pct}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal">
          <p className="font-syne text-base sm:text-lg font-bold text-center mb-4 sm:mb-5 text-[var(--text)]">
            Also proficient in
          </p>
          <div
            className="flex flex-wrap gap-2 sm:gap-2.5 justify-center px-2 sm:px-0"
            role="list"
            aria-label="Additional skills"
          >
            {chips.map((c) => {
              const label = typeof c === 'string' ? c : c.name
              const ChipIcon = typeof c === 'string' ? null : c.icon
              const chipColor = typeof c === 'string' ? undefined : c.color

              return (
                <span
                  key={label}
                  role="listitem"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-[18px] py-2 sm:py-2.5 rounded-full border border-[var(--border2)] bg-[var(--surface)] text-xs sm:text-[13px] font-medium text-[var(--text2)] cursor-default transition-all hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[var(--surface2)] hover:-translate-y-0.5"
                >
                  {ChipIcon && (
                    <ChipIcon
                      size={14}
                      strokeWidth={2}
                      style={{ color: chipColor || 'var(--accent2)' }}
                    />
                  )}
                  {label}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}