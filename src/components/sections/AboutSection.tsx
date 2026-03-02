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
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[var(--text2)]">
                I&apos;m{" "}
                <strong className="text-[var(--text)] font-semibold">
                  Rajesh Sarkar
                </strong>
                , a Full Stack Developer specializing in the MERN stack.
                With over 2 years of professional experience, I bridge the gap
                between complex backend logic and seamless frontend experiences.
              </p>
              <p className="text-base leading-[1.8] text-[var(--text2)]">
                My approach is rooted in technical excellence. I don&apos;t
                just write code; I design systems. From crafting intuitive
                React interfaces to architecting robust Node.js APIs and
                optimized MongoDB schemas, I prioritize clean architecture
                and developer experience to ensure production-ready scalability.
              </p>
              <p className="text-base leading-[1.8] text-[var(--text2)]">
                Beyond the IDE, I continuously refine my workflow with
                performance optimization patterns and explore emerging web
                technologies to stay aligned with industry standards.
              </p>
            </div>
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