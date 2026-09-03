import { PageContainer } from "@/components/site/page-container";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutHero() {
  return (
    <section className="pb-16 pt-36 lg:pb-24 lg:pt-44">
      <PageContainer>
        <FadeIn>
          <p className="eyebrow">About Vital Industries</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-editorial mt-6 max-w-[820px] text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] text-primary">
            A thoughtful approach to important financial decisions.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-[650px] text-base leading-relaxed text-muted-foreground lg:text-lg">
            Vital Industries exists to help individuals and businesses
            approach tax and financial decisions with greater clarity,
            context, and confidence.
          </p>
        </FadeIn>
      </PageContainer>
    </section>
  );
}
