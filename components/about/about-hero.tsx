
import { PageContainer } from "@/components/site/page-container";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123C32] pb-24 pt-36 text-[#F7F4EC] lg:pb-36 lg:pt-48">
      {/* Background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-24 select-none font-editorial text-[clamp(9rem,23vw,22rem)] leading-none text-white/[0.035]"
      >
        VITAL
      </div>

      <PageContainer>
        <div className="relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9AD70]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#C9AD70]">
                About Vital Industries
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <FadeIn delay={0.1}>
              <h1 className="max-w-[850px] font-editorial text-[clamp(3rem,6.5vw,6rem)] leading-[0.98] tracking-tight">
                Financial decisions deserve
                <span className="block text-[#C9AD70]">
                  a broader perspective.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-[430px] lg:justify-self-end">
                <span className="mb-6 block h-px w-12 bg-[#C9AD70]/70" />

                <p className="text-base leading-[1.9] text-white/70 lg:text-lg">
                  Vital Industries helps individuals and businesses approach
                  tax and financial decisions with greater clarity, context,
                  and confidence.
                </p>

                <p className="mt-5 text-sm leading-[1.9] text-white/50">
                  Because good guidance begins with understanding the bigger
                  picture.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-20 flex items-center justify-between border-t border-white/20 pt-6 lg:mt-28">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                Our Story & Approach
              </span>
              <span className="font-editorial text-sm text-[#C9AD70]">
                01 / 04
              </span>
            </div>
          </FadeIn>
        </div>
      </PageContainer>
    </section>
  );
}
