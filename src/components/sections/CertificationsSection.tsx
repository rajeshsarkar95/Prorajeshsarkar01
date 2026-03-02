import { certifications } from '@/data/portfolio'

export default function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="cert-heading" className="c-section bg-[var(--bg2)]">
      <div className="c-container">
        <div className="text-center mb-16 reveal">
          <h2 id="cert-heading" className="c-section-title">
            Learning &amp; <span className="c-gradient-text">Credentials</span>
          </h2>
          <p className="c-section-desc">Continuous learning through recognised certifications and courses.</p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Certifications"
        >
          {certifications.map((c, i) => (
            <article
              key={c.id}
              role="listitem"
              className={`flex flex-col gap-4 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] transition-all hover:border-[var(--accent)] hover:-translate-y-0.5 hover:shadow-glow-violet reveal reveal-d${(i % 3) + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: c.color, color: c.iconColor }}
                aria-hidden="true"
              >
                {c.icon}
              </div>
              <div>
                <h3 className="font-syne font-bold text-[15px] leading-tight text-[var(--text)] mb-1">{c.title}</h3>
                <p className="text-[13px] text-[var(--accent2)] font-medium mb-1">{c.issuer}</p>
                <p className="font-mono text-xs text-[var(--text3)]">{c.date}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
