
import { PageContainer } from "@/components/site/page-container";
import { FadeIn } from "@/components/animations/fade-in";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] pb-5 pt-36 lg:pb-20 lg:pt-48">

      {/* Subtle background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-28 select-none font-editorial text-[20vw] leading-none text-[#123C32]/[0.025]"
      >
        CONNECT
      </div>

      <PageContainer>
        <div className="relative">

          {/* Eyebrow */}
          <FadeIn>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent-dark" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Contact Vital Industries
              </p>
            </div>
          </FadeIn>

          {/* Hero Content */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            {/* Main Heading */}
            <FadeIn delay={0.1}>
              <h1 className="max-w-[850px] font-editorial text-[clamp(3rem,6.5vw,6rem)] leading-[1.02] tracking-tight text-primary">
                Let&apos;s start with
                <span className="block text-accent-dark">
                  a conversation.
                </span>
              </h1>
            </FadeIn>

            {/* Supporting Content */}
            <FadeIn delay={0.2}>
              <div className="max-w-[440px] border-l border-[#123C32]/20 pl-7 lg:mb-2">

                <p className="mt-5 text-base leading-[1.9] text-muted-foreground lg:text-lg">
                  Every financial situation is different. Tell us what
                  you&apos;re working toward, and let&apos;s explore how
                  Vital Industries can help.
                </p>

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary/60">
                  Thoughtful guidance starts here.
                </p>
              </div>
            </FadeIn>

          </div>

          {/* Bottom Divider */}
          <div className="mt-20 border-t border-[#123C32]/15 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Your Next Step
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                We&apos;re Here to Listen
              </span>
            </div>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
