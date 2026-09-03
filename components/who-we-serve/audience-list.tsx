import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const audiences = [
  {
    number: "01",
    title: "Individuals",
    intro:
      "Personal tax guidance built around your financial picture, whatever shape it takes.",
    needs: ["Annual filing", "Life-event questions", "Year-round guidance"],
    services: ["Individual Tax", "Tax Planning"],
  },
  {
    number: "02",
    title: "Families",
    intro:
      "Planning that considers changing priorities, milestones, and long-term goals.",
    needs: ["Multi-year planning", "Milestone preparation", "Shared decision-making"],
    services: ["Tax Planning", "Financial Strategy"],
  },
  {
    number: "03",
    title: "Entrepreneurs",
    intro:
      "Tax and strategic support for people building something of their own.",
    needs: ["Entity structure questions", "Cash-flow timing", "Growth-stage decisions"],
    services: ["Business Tax", "Business Advisory"],
  },
  {
    number: "04",
    title: "Businesses",
    intro:
      "Reliable tax and advisory support for organizations at different stages of growth.",
    needs: ["Ongoing compliance", "Owner guidance", "Strategic planning"],
    services: ["Business Tax", "Business Advisory", "Financial Strategy"],
  },
];

export function AudienceList() {
  return (
    <section className="pb-20 lg:pb-32">
      <PageContainer>
        {audiences.map((a, i) => (
          <Reveal key={a.number} amount={0.3}>
            <div className="grid grid-cols-1 gap-8 border-t border-border py-14 lg:grid-cols-[0.4fr_1fr_1fr] lg:gap-10 lg:py-16">
              <div>
                <span className="font-editorial text-5xl text-accent-dark/60">
                  {a.number}
                </span>
                <h3 className="font-editorial mt-4 text-3xl leading-tight text-primary lg:text-4xl">
                  {a.title}
                </h3>
              </div>

              <div>
                <p className="max-w-[420px] text-base leading-relaxed text-muted-foreground">
                  {a.intro}
                </p>
                <p className="eyebrow mb-3 mt-8">Common Needs</p>
                <ul className="space-y-2">
                  {a.needs.map((n) => (
                    <li key={n} className="text-sm text-foreground/80">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow mb-3">Relevant Services</p>
                <ul className="space-y-2">
                  {a.services.map((s) => (
                    <li key={s} className="text-sm text-foreground/80">
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-2 text-sm tracking-wide text-primary"
                >
                  Talk to an advisor
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </PageContainer>
    </section>
  );
}
