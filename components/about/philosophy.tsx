import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function Philosophy() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <PageContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal amount={0.5}>
            <h2 className="font-editorial text-3xl leading-[1.15] text-primary lg:text-4xl">
              Our Philosophy
            </h2>
          </Reveal>
          <Reveal amount={0.4} delay={0.1}>
            <div className="max-w-[650px] space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>Good tax guidance starts with understanding.</p>
              <p>
                Every client has a different financial picture, different
                priorities, and different questions. Our approach begins by
                understanding those circumstances before recommending a path
                forward.
              </p>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
