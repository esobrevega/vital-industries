
import Link from "next/link";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123C32] py-28 text-white lg:py-40">

      {/* Oversized background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-8 select-none font-editorial text-[25vw] leading-none tracking-tighter text-white/[0.025]"
      >
        VITAL
      </div>

      <PageContainer>
        <div className="relative">

          {/* Section label */}
          <Reveal amount={0.5}>
            <div className="mb-16 flex items-center gap-4">
              <span className="h-px w-8 bg-accent" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                04 / The Next Step
              </span>
            </div>
          </Reveal>

          {/* Main content */}
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            {/* Headline */}
            <Reveal amount={0.4}>
              <div className="max-w-[850px]">
                <h2 className="font-editorial text-[clamp(2.75rem,6vw,6rem)] leading-[1.02] tracking-tight">
                  Let&apos;s make your next
                  <span className="block text-accent">
                    financial decision
                  </span>
                  a better one.
                </h2>
              </div>
            </Reveal>

            {/* Supporting content */}
            <div className="max-w-[480px] lg:pb-2">

              <Reveal amount={0.5} delay={0.1}>
                <div className="mb-8 h-px w-16 bg-accent" />

                <p className="text-base leading-[1.9] text-white/65 lg:text-lg">
                  Whether you&apos;re preparing for tax season, planning for
                  growth, or navigating a complex financial situation, Vital
                  Industries is here to help you move forward with clarity.
                </p>
              </Reveal>

              <Reveal amount={0.5} delay={0.2}>
                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">

                  <Button asChild variant="primary-inverse">
                    <Link href="/contact">
                      Talk to Vital Industries
                    </Link>
                  </Button>

                  <Button asChild variant="outline-light">
                    <Link href="/services">
                      Explore Our Services
                    </Link>
                  </Button>

                </div>
              </Reveal>

              <Reveal amount={0.5} delay={0.3}>
                <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Thoughtful guidance. Clearer decisions.
                </p>
              </Reveal>

            </div>
          </div>

          {/* Bottom signature */}
          <Reveal amount={0.5} delay={0.2}>
            <div className="mt-28 border-t border-white/15 pt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <span className="font-editorial text-lg tracking-wide text-white/80">
                  VITAL INDUSTRIES
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Your financial future, considered.
                </span>

              </div>
            </div>
          </Reveal>

        </div>
      </PageContainer>
    </section>
  );
}
