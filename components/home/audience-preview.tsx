
"use client";

import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const audiences = [
  {
    number: "01",
    title: "Individuals",
    description:
      "Personal tax guidance built around your financial picture.",
    detail: "Personal financial needs",
    dark: false,
  },
  {
    number: "02",
    title: "Families",
    description:
      "Planning that considers changing priorities and long-term goals.",
    detail: "Planning for what matters",
    dark: true,
  },
  {
    number: "03",
    title: "Entrepreneurs",
    description:
      "Tax and strategic support for people building something of their own.",
    detail: "Supporting business owners",
    dark: true,
  },
  {
    number: "04",
    title: "Businesses",
    description:
      "Reliable tax and advisory support for organizations at different stages of growth.",
    detail: "Business growth and direction",
    dark: false,
  },
];

export function AudiencePreview() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] py-24 lg:py-36">
      <PageContainer>

        {/* Section Heading */}
        <Reveal amount={0.3}>
          <div className="grid gap-8 border-b border-[#123C32]/15 pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  Who We Serve
                </p>
              </div>

              <h2 className="mt-8 max-w-[650px] font-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[#123C32]">
                Different circumstances.
                <span className="block text-[#A58B55]">
                  One thoughtful approach.
                </span>
              </h2>
            </div>

            <p className="max-w-[400px] text-base leading-[1.9] text-[#68736C] lg:justify-self-end lg:pb-2">
              Financial guidance should reflect the people, ambitions,
              and businesses behind every decision. We take the time
              to understand what matters to you.
            </p>

          </div>
        </Reveal>

        {/* Audience Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {audiences.map((audience, i) => (
            <Reveal
              key={audience.number}
              amount={0.25}
              delay={i * 0.07}
            >
              <div
                className={`
                  group relative flex min-h-[300px] flex-col justify-between
                  overflow-hidden p-7 transition-all duration-500
                  lg:min-h-[340px] lg:p-8
                  ${
                    audience.dark
                      ? "bg-[#123C32] text-white hover:bg-[#174A3D]"
                      : "bg-[#EEEAE0] text-[#123C32] hover:bg-[#E9E2D3]"
                  }
                `}
              >

                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <span
                    className={`font-editorial text-5xl transition-transform duration-500 group-hover:-translate-y-1 ${
                      audience.dark
                        ? "text-[#C9AD70]"
                        : "text-[#A58B55]"
                    }`}
                  >
                    {audience.number}
                  </span>

                  <ArrowUpRight
                    className={`h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      audience.dark
                        ? "text-[#C9AD70]/70"
                        : "text-[#806B3E]/70"
                    }`}
                    strokeWidth={1.4}
                  />
                </div>

                {/* Bottom Content */}
                <div>
                  <p
                    className={`mb-4 text-[9px] font-medium uppercase tracking-[0.2em] ${
                      audience.dark
                        ? "text-white/40"
                        : "text-[#806B3E]/70"
                    }`}
                  >
                    {audience.detail}
                  </p>

                  <h3
                    className={`font-editorial text-3xl leading-tight lg:text-[2rem] ${
                      audience.dark
                        ? "text-white"
                        : "text-[#123C32]"
                    }`}
                  >
                    {audience.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-[260px] text-sm leading-[1.8] ${
                      audience.dark
                        ? "text-white/55"
                        : "text-[#68736C]"
                    }`}
                  >
                    {audience.description}
                  </p>

                  {/* Gold Accent */}
                  <div
                    className={`mt-7 h-px w-10 transition-all duration-500 group-hover:w-16 ${
                      audience.dark
                        ? "bg-[#C9AD70]"
                        : "bg-[#A58B55]"
                    }`}
                  />
                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* Closing Statement */}
        <Reveal amount={0.3}>
          <div className="mt-14 flex flex-col justify-between gap-5 border-t border-[#123C32]/15 pt-6 sm:flex-row sm:items-center">

            <p className="max-w-[440px] font-editorial text-xl leading-relaxed text-[#123C32]">
              Whatever your next chapter looks like, it deserves
              a thoughtful financial perspective.
            </p>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#806B3E]">
              Vital Industries
            </span>

          </div>
        </Reveal>

      </PageContainer>
    </section>
  );
}
