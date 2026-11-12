
import { PageContainer } from "@/components/site/page-container";
import { FadeIn } from "@/components/animations/fade-in";

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] pb-20 pt-36 lg:pb-28 lg:pt-44">
      {/* Decorative background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-24 select-none font-editorial text-[clamp(10rem,24vw,23rem)] leading-none text-[#123C32]/[0.035]"
      >
        INSIGHTS
      </div>

      <PageContainer>
        <div className="relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A58B55]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                Resources & Insights
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <FadeIn delay={0.1}>
              <h1 className="max-w-[850px] font-editorial text-[clamp(3rem,6.5vw,6rem)] leading-[0.98] tracking-tight text-[#123C32]">
                Better information.
                <span className="block text-[#A58B55]">
                  Better decisions.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-[420px] lg:justify-self-end">
                <span className="mb-6 block h-px w-12 bg-[#A58B55]/70" />

                <p className="text-base leading-[1.9] text-[#68736C] lg:text-lg">
                  A clearer understanding can make all the difference.
                  Explore insights, practical tools, and trusted references
                  to help you approach tax and financial decisions with
                  greater confidence.
                </p>

                <p className="mt-5 text-sm leading-[1.9] text-[#68736C]">
                  Knowledge is a starting point. Knowing where to find
                  reliable information is just as important.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-20 flex items-center justify-between border-t border-[#123C32]/15 pt-6 lg:mt-28">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B918A]">
                Insights · Education · Helpful References
              </span>

              <span className="font-editorial text-sm text-[#A58B55]">
                01 / 03
              </span>
            </div>
          </FadeIn>
        </div>
      </PageContainer>
    </section>
  );
}
