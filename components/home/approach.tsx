import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const values = [
  {
    title: "Expertise",
    description: "Knowledge grounded in real-world financial decisions.",
  },
  {
    title: "Perspective",
    description:
      "Looking beyond the immediate question to the larger picture.",
  },
  {
    title: "Partnership",
    description:
      "Building relationships that extend beyond a single filing.",
  },
  {
    title: "Precision",
    description:
      "Careful attention to the details that shape better decisions.",
  },
];

export function Approach() {
  return (
    <section className="py-20 lg:py-32">
      <PageContainer>
        <Reveal amount={0.5}>
          <p className="eyebrow">The Vital Approach</p>
          <h2 className="font-editorial mt-6 max-w-[640px] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-primary">
            More than a return. A clearer financial perspective.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {values.map((value, i) => (
            <Reveal key={value.title} amount={0.4} delay={i * 0.05}>
              <div
                className={`grid grid-cols-1 gap-4 py-8 lg:grid-cols-[1fr_2fr] lg:gap-10 lg:py-10 ${
                  i % 2 === 1 ? "lg:pl-[15%]" : ""
                }`}
              >
                <h3 className="font-editorial text-3xl text-primary lg:text-4xl">
                  {value.title}
                </h3>
                <p className="max-w-[480px] text-base leading-relaxed text-muted-foreground self-center">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
