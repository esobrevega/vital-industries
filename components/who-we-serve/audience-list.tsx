
import Link from "next/link";
import {
  ArrowUpRight,
  UserRound,
  UsersRound,
  Lightbulb,
  Building2,
} from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const audiences = [
  {
    number: "01",
    title: "Individuals",
    icon: UserRound,
    intro:
      "Personal tax guidance built around your financial picture, whatever shape it takes.",
    needs: [
      "Annual tax filing",
      "Life-event questions",
      "Year-round guidance",
    ],
    services: ["Individual Tax", "Tax Planning"],
  },
  {
    number: "02",
    title: "Families",
    icon: UsersRound,
    intro:
      "Planning that considers changing priorities, important milestones, and the goals you're working toward together.",
    needs: [
      "Multi-year planning",
      "Major life milestones",
      "Shared financial decisions",
    ],
    services: ["Tax Planning", "Financial Strategy"],
  },
  {
    number: "03",
    title: "Entrepreneurs",
    icon: Lightbulb,
    intro:
      "Tax and strategic support for people turning ideas into businesses and building something of their own.",
    needs: [
      "Business structure questions",
      "Cash-flow considerations",
      "Growth-stage decisions",
    ],
    services: ["Business Tax", "Business Advisory"],
  },
  {
    number: "04",
    title: "Businesses",
    icon: Building2,
    intro:
      "Reliable tax and advisory support for organizations navigating daily responsibilities and long-term growth.",
    needs: [
      "Ongoing tax compliance",
      "Business owner guidance",
      "Strategic planning",
    ],
    services: [
      "Business Tax",
      "Business Advisory",
      "Financial Strategy",
    ],
  },
];

export function AudienceList() {
  return (
    <section className="bg-[#F7F4EC] pb-24 lg:pb-36">
      <PageContainer>
        <Reveal amount={0.3}>
          <div className="mb-12 flex flex-col gap-4 border-b border-[#123C32]/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                Who We Work With
              </p>
              <h2 className="mt-4 font-editorial text-3xl text-[#123C32] lg:text-4xl">
                Guidance for every stage.
              </h2>
            </div>

            <p className="max-w-[350px] text-sm leading-[1.8] text-[#68736C]">
              Different needs call for different considerations. Here&apos;s how
              our areas of support connect with the people we serve.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-[#123C32]/15">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;

            return (
              <Reveal
                key={audience.number}
                amount={0.25}
                delay={i * 0.06}
              >
                <article
                  className={`group relative grid gap-8 border-b border-[#123C32]/15 py-12 transition-colors duration-500 hover:bg-[#123C32]/[0.025] lg:grid-cols-[0.75fr_1.1fr_0.9fr] lg:gap-12 lg:py-16 ${
                    i % 2 === 1 ? "lg:pl-[8%]" : "lg:pr-[8%]"
                  }`}
                >
                  {/* Audience identity */}
                  <div>
                    <div className="flex items-center justify-between lg:justify-start lg:gap-8">
                      <span className="font-editorial text-4xl text-[#A58B55] lg:text-5xl">
                        {audience.number}
                      </span>

                      <Icon
                        size={24}
                        strokeWidth={1.2}
                        className="text-[#A58B55] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 lg:hidden"
                      />
                    </div>

                    <h3 className="mt-5 font-editorial text-3xl leading-tight text-[#123C32] lg:text-4xl">
                      {audience.title}
                    </h3>

                    <div className="mt-5 hidden h-px w-10 bg-[#A58B55] lg:block" />
                  </div>

                  {/* Audience description and needs */}
                  <div>
                    <p className="max-w-[430px] text-base leading-[1.9] text-[#123C32]">
                      {audience.intro}
                    </p>

                    <div className="mt-8">
                      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#806B3E]">
                        Common Needs
                      </p>

                      <ul className="space-y-3">
                        {audience.needs.map((need) => (
                          <li
                            key={need}
                            className="flex items-center gap-3 text-sm text-[#68736C]"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#A58B55]" />
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Relevant services */}
                  <div className="lg:border-l lg:border-[#123C32]/15 lg:pl-8">
                    <div className="hidden justify-end lg:flex">
                      <Icon
                        size={25}
                        strokeWidth={1.2}
                        className="text-[#A58B55] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#806B3E] lg:mt-8">
                      Relevant Services
                    </p>

                    <ul className="space-y-3">
                      {audience.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-3 text-sm text-[#123C32]"
                        >
                          <span className="h-px w-4 bg-[#A58B55]" />
                          {service}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="group/link mt-8 inline-flex items-center gap-2 border-b border-[#A58B55]/50 pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#806B3E] transition-colors hover:border-[#123C32] hover:text-[#123C32]"
                    >
                      Talk to an advisor

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
