import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function Values() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <PageContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal amount={0.5}>
            <h2 className="font-editorial text-3xl leading-[1.15] text-primary lg:text-4xl">
              Our Perspective
            </h2>
          </Reveal>
          <Reveal amount={0.4} delay={0.1}>
            <div className="max-w-[650px] space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                Tax is connected to the broader financial decisions people
                and businesses make every day.
              </p>
              <p>
                We believe the most useful guidance considers more than the
                immediate filing.
              </p>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
