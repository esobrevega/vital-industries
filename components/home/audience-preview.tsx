import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const audiences = [
  {
    number: "01",
    title: "Individuals",
    description: "Personal tax guidance built around your financial picture.",
  },
  {
    number: "02",
    title: "Families",
    description:
      "Planning that considers changing priorities and long-term goals.",
  },
  {
    number: "03",
    title: "Entrepreneurs",
    description:
      "Tax and strategic support for people building something of their own.",
  },
  {
    number: "04",
    title: "Businesses",
    description:
      "Reliable tax and advisory support for organizations at different stages of growth.",
  },
];

export function AudiencePreview() {
  return (
    <section className="py-20 lg:py-32">
      <PageContainer>
        <Reveal amount={0.5}>
          <p className="eyebrow">Who We Serve</p>
          <h2 className="font-editorial mt-6 max-w-[600px] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-primary">
            Different circumstances.
            <br />
            One thoughtful approach.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal key={a.number} amount={0.4} delay={i * 0.06}>
              <div className="border-t border-border pt-6">
                <span className="font-editorial text-4xl text-accent-dark/70">
                  {a.number}
                </span>
                <h3 className="font-editorial mt-4 text-2xl text-primary">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
