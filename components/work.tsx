import { projects, type Project } from "@/lib/projects";
import { Reveal } from "./reveal";

function Schematic({ flow }: { flow: string[] }) {
  return (
    <div className="border border-line bg-panel/70 p-6 md:p-8">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        The system
      </p>
      <p className="font-mono text-[13px] leading-[2.1] text-bone/85">
        {flow.map((node, i) => (
          <span key={node}>
            <span className="whitespace-normal">{node}</span>
            {i < flow.length - 1 && (
              <span aria-hidden className="px-2.5 text-brass">
                →
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="border-t border-line py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* sticky meta rail */}
        <div className="lg:col-span-3">
          <div className="flex flex-row items-baseline justify-between gap-6 lg:sticky lg:top-28 lg:flex-col lg:items-start">
            <Reveal>
              <span className="font-display text-6xl italic text-brass/90 md:text-7xl">
                {project.index}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {project.year} · {project.status}
                </p>
                <ul className="space-y-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* body */}
        <div className="lg:col-span-9">
          <Reveal>
            <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.015em] md:text-6xl">
              {project.title}
            </h3>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {project.lede}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-10">
            <Schematic flow={project.flow} />
          </Reveal>

          <div className="mt-4">
            {project.highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.06 * i}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass md:col-span-4 md:pt-1">
                    {h.title}
                  </p>
                  <p className="text-[15px] leading-relaxed text-bone/80 md:col-span-8">
                    {h.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 px-6 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
            <h2 className="font-display text-5xl tracking-[-0.02em] md:text-7xl">
              Selected <span className="italic text-brass">work</span>
            </h2>
            <p className="max-w-sm text-right font-mono text-[11px] uppercase leading-loose tracking-[0.22em] text-muted md:text-left">
              ({String(projects.length).padStart(2, "0")}) systems — chosen for
              <br />
              the problems they retire
            </p>
          </div>
        </Reveal>

        {projects.map((p) => (
          <CaseStudy key={p.index} project={p} />
        ))}
      </div>
    </section>
  );
}
