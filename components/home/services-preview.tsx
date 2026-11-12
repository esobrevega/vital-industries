
"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const services = [
  {
    number: "01",
    title: "Individual Tax Services",
    description:
      "Thoughtful tax preparation and guidance built around your personal financial circumstances.",
  },
  {
    number: "02",
    title: "Business Tax Services",
    description:
      "Practical tax support for businesses navigating growth, change, and ongoing financial decisions.",
  },
  {
    number: "03",
    title: "Tax Planning",
    description:
      "Proactive planning that helps you understand opportunities and prepare before important decisions are made.",
  },
  {
    number: "04",
    title: "Business Advisory",
    description:
      "Financial perspective designed to help business owners make informed decisions with greater clarity.",
  },
  {
    number: "05",
    title: "Tax Resolution",
    description:
      "Professional support for navigating complex tax matters and working toward a clear path forward.",
  },
  {
    number: "06",
    title: "Financial Strategy",
    description:
      "Long-term thinking that connects today's financial decisions with tomorrow's priorities.",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] py-24 lg:py-36">

      <PageContainer>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.4fr] lg:gap-24">

          {/* LEFT INTRODUCTION */}
          <Reveal amount={0.3}>
            <div className="relative lg:sticky lg:top-32 lg:self-start">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  Our Expertise
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-8 max-w-[450px] font-editorial text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[1.05] tracking-tight text-[#123C32]">
                A broader view
                <span className="block text-[#A58B55]">
                  of tax.
                </span>
              </h2>

              {/* Gold Accent */}
              <div className="mt-8 h-px w-16 bg-[#A58B55]" />

              {/* Description */}
              <p className="mt-8 max-w-[390px] text-base leading-[1.9] text-[#59665F]">
                From everyday filing needs to more complex financial
                decisions, our approach begins with understanding
                the bigger picture.
              </p>

              {/* Supporting Statement */}
              <div className="mt-12 border-l border-[#A58B55]/50 pl-6">
                <p className="font-editorial text-xl leading-relaxed text-[#123C32]">
                  Good decisions begin with a clearer perspective.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/services"
                className="group mt-12 inline-flex items-center gap-4 border-b border-[#A58B55]/50 pb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#123C32] transition-colors hover:border-[#123C32]"
              >
                Explore All Services

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Decorative Number */}
              <div
                aria-hidden="true"
                className="pointer-events-none mt-16 hidden select-none font-editorial text-[120px] leading-none text-[#123C32]/[0.035] lg:block"
              >
                06
              </div>

            </div>
          </Reveal>

          {/* RIGHT SERVICE LIST */}
          <div>

            {/* List Header */}
            <div className="mb-2 flex items-center justify-between border-b border-[#123C32]/15 pb-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#806B3E]">
                Services & Solutions
              </span>

              <span className="text-[10px] tracking-[0.2em] text-[#123C32]/40">
                01 — 06
              </span>
            </div>

            {/* Services */}
            {services.map((service, i) => (
              <Reveal
                key={service.number}
                amount={0.25}
                delay={i * 0.04}
              >
                <Link
                  href="/services"
                  className="group relative flex items-center justify-between gap-5 border-b border-[#123C32]/15 py-7 transition-all duration-300 hover:bg-[#123C32]/[0.025] sm:gap-8 lg:py-8"
                >

                  <div className="flex min-w-0 items-start gap-5 sm:gap-8">

                    {/* Number */}
                    <span className="mt-1 w-8 shrink-0 font-editorial text-lg text-[#A58B55] transition-transform duration-300 group-hover:translate-x-1">
                      {service.number}
                    </span>

                    {/* Content */}
                    <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1">

                      <h3 className="font-editorial text-xl leading-snug text-[#123C32] transition-colors duration-300 group-hover:text-[#806B3E] sm:text-2xl lg:text-[1.65rem]">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-[440px] text-sm leading-[1.8] text-[#68736C]">
                        {service.description}
                      </p>

                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#123C32]/15 transition-all duration-300 group-hover:border-[#A58B55] group-hover:bg-[#123C32]">
                    <ArrowUpRight
                      className="h-4 w-4 text-[#123C32] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C9AD70]"
                      strokeWidth={1.5}
                    />
                  </div>

                </Link>
              </Reveal>
            ))}

            {/* Bottom Note */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#68736C]">
                Thoughtful guidance. Clearer decisions.
              </p>

              <span className="font-editorial text-sm text-[#A58B55]">
                Vital Industries
              </span>
            </div>

          </div>
        </div>
      </PageContainer>
    </section>
  );
}
