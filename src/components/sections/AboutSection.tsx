import Image from "next/image";

const TRAITS = [
  "Clean Architecture",
  "Performance First",
  "User-Focused",
  "Continuous Learner",
  "Detail Oriented",
  "Team Player",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-[var(--bg2)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 reveal">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] mb-6"
          >
            The person{" "}
            <span className="c-gradient-text italic">behind the code</span>
          </h2>

          <p className="text-lg text-[var(--text2)] leading-relaxed">
            Full-stack developer dedicated to building high-performance
            applications with a focus on maintainability and scalable
            architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 flex justify-center lg:justify-start reveal">
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-[40px] border border-[var(--border)] opacity-50 group-hover:border-[var(--accent)] transition-colors duration-500"
                style={{ animation: "rotateRing 25s linear infinite" }}
                aria-hidden="true"
              />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-[var(--surface)] shadow-2xl">
                <Image
                  src="/profile/profile.png"
                  alt="Rajesh Sarkar"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 reveal reveal-d2">
            <section className="relative max-w-3xl py-4 antialiased">
              <div className="absolute -left-6 top-0 hidden h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--primary-color,#3b82f6)] to-transparent opacity-30 md:block" />
              <div className="space-y-6">
                <header className="space-y-2">
                  <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
                    Rajesh Sarkar
                  </h2>
                  <p className="text-lg font-medium tracking-wide text-[var(--primary-color,#3b82f6)] uppercase">
                    Full Stack Engineer • MERN Specialist
                  </p>
                </header>
                <div className="space-y-5 text-lg leading-relaxed text-[var(--text2)]">
                  <p>
                    With <span className="font-semibold text-[var(--text)]">2+ years of professional experience</span>,
                    I bridge the gap between complex backend logic and seamless frontend experiences.
                    I don&apos;t just write code; <span className="italic text-[var(--text)]">I architect systems.</span>
                  </p>
                  <div className="grid gap-4 py-2 sm:grid-cols-2">
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]">
                      <h4 className="mb-1 font-semibold text-[var(--text)] text-sm uppercase tracking-wider">Frontend</h4>
                      <p className="text-sm">Crafting intuitive, high-performance React interfaces with optimized state management.</p>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]">
                      <h4 className="mb-1 font-semibold text-[var(--text)] text-sm uppercase tracking-wider">Backend</h4>
                      <p className="text-sm">Architecting robust Node.js APIs and scalable MongoDB schemas for production environments.</p>
                    </div>
                  </div>
                  <p className="text-base">
                    Beyond the IDE, I focus on <span className="underline decoration-[var(--primary-color,#3b82f6)] decoration-2 underline-offset-4">performance optimization patterns</span>
                    and emerging web standards to ensure every line of code I ship is scalable and future-proof.
                  </p>
                </div>
              </div>
            </section>
            <div className="pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
                Core Principles
              </h3>
              <div className="flex flex-wrap gap-3" role="list">
                {TRAITS.map((trait) => (
                  <span
                    key={trait}
                    role="listitem"
                    className="px-4 py-2 text-xs font-medium rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}