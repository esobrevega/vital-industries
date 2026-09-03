import { PageContainer } from "@/components/site/page-container";
import { FadeIn } from "@/components/animations/fade-in";

export function ContactHero() {
  return (
    <section className="pb-12 pt-36 lg:pb-16 lg:pt-44">
      <PageContainer>
        <FadeIn>
          <p className="eyebrow">Contact</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-editorial mt-6 max-w-[680px] text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] text-primary">
            Let&apos;s start with a conversation.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-[560px] text-base leading-relaxed text-muted-foreground lg:text-lg">
            Tell us a little about what you&apos;re looking for and a member
            of the Vital Industries team can help determine the best next
            step.
          </p>
        </FadeIn>
      </PageContainer>
    </section>
  );
}
