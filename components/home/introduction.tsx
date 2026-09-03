import Image from "next/image";

import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function Introduction() {
  return (
    <section className="bg-[#F7F4EC] py-20 lg:py-32">
      <PageContainer>
        {/* Section Label */}
        <Reveal amount={0.5}>
          <div className="flex items-center gap-4">
            <p className="eyebrow">Who We Are</p>

            <span className="h-px w-20 bg-[#B28A2E]" />
          </div>
        </Reveal>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-[1fr_1px_1fr] lg:gap-16 xl:gap-24">
          {/* =================================================
              LEFT
          ================================================== */}
          <div className="flex flex-col">
            {/* Headline */}
            <Reveal amount={0.4} delay={0.05}>
              <h2 className="font-editorial max-w-[620px] text-[clamp(2.75rem,5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-[#0D2B24]">
                Tax decisions
                <br />
                rarely exist in
                <br />
                isolation.
              </h2>
            </Reveal>

            {/* Logo */}
            <Reveal amount={0.35} delay={0.15}>
              <div className="mt-12 flex justify-center lg:mt-14 lg:justify-start">
                <div className="relative w-[260px] sm:w-[300px] lg:w-[360px] xl:w-[390px]">
                  <Image
                    src="/vital-industries-logo.png"
                    alt="Vital Industries"
                    width={500}
                    height={500}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}
          <div className="hidden bg-[#B28A2E]/50 lg:block" />

          {/* =================================================
              RIGHT
          ================================================== */}
          <Reveal amount={0.4} delay={0.15}>
            <div className="flex h-full items-center">
              <div className="max-w-[560px] space-y-8 lg:pl-4 xl:pl-8">
                <p className="text-[1.2rem] leading-[1.6] tracking-[-0.015em] text-[#253238] sm:text-[1.35rem] lg:text-[1.45rem]">
                  They affect how businesses grow, how families plan, and how
                  individuals protect the value they have worked to build.
                </p>

                <p className="text-base leading-[1.8] text-muted-foreground lg:text-lg">
                  Vital Industries brings tax expertise and strategic thinking
                  together to help clients understand the decisions in front of
                  them and move forward with greater confidence.
                </p>

                {/* Small statement */}
                <div className="flex items-center gap-4 pt-4">
                  <span className="h-px w-10 bg-[#B28A2E]" />

                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#0D2B24]/60">
                    Plan • Protect • Prosper
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}