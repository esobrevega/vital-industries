import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function Relationship() {
  return (
    <section className="border-t border-border bg-muted/50 py-20 lg:py-28">
      <PageContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal amount={0.5}>
            <h2 className="font-editorial text-3xl leading-[1.15] text-primary lg:text-4xl">
              Our Relationship with
              <br />
              Velocity Tax Express
            </h2>
          </Reveal>
          <Reveal amount={0.4} delay={0.1}>
            <div className="max-w-[650px] space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                Vital Industries is part of a broader family of tax-service
                businesses that share a commitment to dependable,
                client-focused financial support.
              </p>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
