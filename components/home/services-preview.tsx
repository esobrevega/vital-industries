"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <section className="py-20 lg:py-32">
      <PageContainer>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <Reveal amount={0.5}>
            <p className="eyebrow">Our Expertise</p>
            <h2 className="font-editorial mt-6 max-w-[420px] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-primary">
              A broader view of tax.
            </h2>
            <p className="mt-6 max-w-[420px] text-base leading-relaxed text-muted-foreground">
              From everyday filing needs to more complex financial decisions,
              our approach begins with understanding the bigger picture.
            </p>
          </Reveal>

          <div>
            <div className="hairline" />
            {services.map((service, i) => (
              <Reveal key={service.number} amount={0.3} delay={i * 0.04}>
                <Link
                  href="/services"
                  className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors hover:bg-primary/[0.03] lg:py-7"
                >
                  <div className="flex items-baseline gap-6 lg:gap-10">
                    <span className="w-8 shrink-0 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-accent-dark">
                      {service.number}
                    </span>
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="font-editorial text-xl text-foreground lg:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-[440px] text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
