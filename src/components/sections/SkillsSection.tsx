import { skills, chips } from '@/data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="c-section">
      <div className="c-container">
        {/* Header: asymmetric, not centered — heading and copy sit side by side like a masthead */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-14 sm:mb-20 reveal items-end">
          <div className="md:col-span-7">
            <h2
              id="skills-heading"
              className="font-syne font-bold text-[var(--text)] text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] tracking-tight"
            >
              Technical expertise
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--text2)] md:text-right">
              The languages, frameworks and tools I reach for to take
              products from idea to production.
            </p>
          </div>
        </div>

        {/* Skill list: hairline rows, no cards, no shadows — typography and a thin rule carry the hierarchy */}
        <div role="list" aria-label="Core technical skills" className="mb-16 sm:mb-24">
          {skills.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.name} role="listitem" aria-label={`${s.name}: ${s.pct}%`} className="group reveal">
                <div
                  className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.4fr)_auto] items-center gap-x-4 sm:gap-x-6 py-4 sm:py-5 transition-colors duration-300"
                  style={{
                    borderTop: '1px solid var(--border)',
                    borderBottom: i === skills.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div className="shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px] flex items-center justify-center">
                    {Icon ? (
                      <Icon
                        size={18}
                        strokeWidth={1.75}
                        style={{ color: 'var(--text2)' }}
                        className="transition-colors duration-300 group-hover:[color:var(--accent2)]"
                      />
                    ) : (
                      <span className="font-mono text-xs text-[var(--text2)]">{s.name.charAt(0)}</span>
                    )}
                  </div>

                  <span className="font-syne font-bold text-[15px] sm:text-lg text-[var(--text)] truncate">
                    {s.name}
                  </span>

                  {s.desc && (
                    <p className="hidden sm:block text-[13px] leading-relaxed text-[var(--text2)] truncate">
                      {s.desc}
                    </p>
                  )}

                  <span className="font-mono text-xs sm:text-[13px] text-[var(--text2)] tabular-nums justify-self-end">
                    {String(s.pct).padStart(2, '0')}
                  </span>
                </div>

                {/* proficiency as a thin rule under the row, not a boxed meter */}
                <div className="h-px w-full" style={{ background: 'var(--border)' }} aria-hidden="true">
                  <div
                    className="c-skill-bar-fill h-px"
                    data-width={s.pct}
                    style={{ width: '0%', background: 'var(--accent2)' }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional skills: run as quiet inline text, not button-style pills */}
        <div className="reveal">
          <p className="font-mono text-xs text-[var(--text2)] mb-4 sm:mb-5">Also proficient in</p>
          <div className="flex flex-wrap gap-x-0 gap-y-2.5" role="list" aria-label="Additional skills">
            {chips.map((c, idx) => {
              const label = typeof c === 'string' ? c : c.name
              const ChipIcon = typeof c === 'string' ? null : c.icon
              const isLast = idx === chips.length - 1

              return (
                <span key={label} role="listitem" className="inline-flex items-center">
                  <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-sm text-[var(--text2)] transition-colors duration-200 hover:text-[var(--text)] cursor-default">
                    {ChipIcon && <ChipIcon size={13} strokeWidth={1.75} style={{ color: 'var(--text2)' }} />}
                    {label}
                  </span>
                  {!isLast && (
                    <span className="mx-2.5 sm:mx-3 text-[var(--border2)] select-none" aria-hidden="true">
                      /
                    </span>
                  )}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}