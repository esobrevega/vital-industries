import { PageContainer } from "@/components/site/page-container";
import { FadeIn } from "@/components/animations/fade-in";

export function ResourcesHero() {
  return (
    <section className="pb-16 pt-36 lg:pb-20 lg:pt-44">
      <PageContainer>
        <FadeIn>
          <p className="eyebrow">Insights</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-editorial mt-6 max-w-[680px] text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] text-primary">
            Better information. Better decisions.
          </h1>
        </FadeIn>
      </PageContainer>
    </section>
  );
}
