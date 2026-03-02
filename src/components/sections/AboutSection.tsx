import Image from "next/image"

const TRAITS = [
  '🧱 Clean Architecture', '⚡ Performance First', '🎯 User-Focused',
  '📈 Continuous Learner', '🔍 Detail Oriented', '🤝 Team Player',
]

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="c-section bg-[var(--bg2)]">
      <div className="c-container">
        <div className="text-center mb-16 reveal">
          <h2 id="about-heading" className="c-section-title">
            The person{' '}
            <span className="c-gradient-text">behind the code</span>
          </h2>
          <p className="c-section-desc">
            Passionate developer with a love for clean architecture and performance-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start reveal">
            <div className="relative">
              <div
                className="absolute rounded-[34px] border border-[var(--border)]"
                style={{ inset: '-20px', animation: 'rotateRing 20s linear infinite' }}
                aria-hidden="true"
              />
              <div
                className="relative w-64 h-64 rounded-[24px] flex items-center justify-center font-syne text-6xl font-black text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                  boxShadow: '0 20px 60px var(--glow)',
                }}
                aria-label="RS initials avatar"
              >
                <Image src="/images/Images.png" alt="" className="rounded-xl" width={400} height={400}/>
                <div className="absolute inset-[8px] rounded-[18px] border-2 border-white/20" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 reveal reveal-d2">
            <p className="text-[var(--text2)] text-base leading-[1.85] mb-4">
              I&apos;m <strong className="text-[var(--text)] font-semibold">Rajesh Sarkar</strong>, a Full Stack
              Developer based in <strong className="text-[var(--text)] font-semibold">Uttar Pradesh, India</strong>,
              specialising in the MERN stack. With 2+ years of professional experience I focus on building scalable,
              efficient applications that deliver real value to users.
            </p>
            <p className="text-[var(--text2)] text-base leading-[1.85] mb-4">
              My journey started with a curiosity for how the web works and quickly turned into a passion for crafting
              every layer — from intuitive React interfaces to robust Node.js APIs and optimised MongoDB schemas. I care
              deeply about clean architecture, developer experience, and making things that actually perform.
            </p>
            <p className="text-[var(--text2)] text-base leading-[1.85] mb-8">
              When I&apos;m not coding I explore performance optimisation patterns, contribute to open source, and stay
              current with the ever-evolving JavaScript ecosystem.
            </p>
            <div className="flex flex-wrap gap-2.5" role="list" aria-label="Personal traits">
              {TRAITS.map((t) => (
                <span
                  key={t}
                  role="listitem"
                  className="px-4 py-2 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text2)] cursor-default transition-all hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[var(--surface2)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
