import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by learning about your circumstances, priorities, and objectives.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "We examine the details, identify opportunities, and surface areas that require attention.",
  },
  {
    number: "03",
    title: "Strategize",
    description:
      "We develop a thoughtful approach based on your specific situation.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "You leave with greater clarity and a practical path forward.",
  },
];

export function Process() {
  return (
    <section className="bg-muted/60 py-20 lg:py-32">
      <PageContainer>
        <Reveal amount={0.5}>
          <p className="eyebrow">How We Work</p>
          <h2 className="font-editorial mt-6 max-w-[560px] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-primary">
            Clarity starts with understanding.
          </h2>
        </Reveal>

        <div className="mt-20 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-10">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-border" />
            {steps.map((step, i) => (
              <Reveal key={step.number} amount={0.5} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-[#F7F4EC]" />
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent-dark">
                    {step.number}
                  </p>
                  <h3 className="font-editorial mt-2 text-2xl text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-10 lg:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.number} amount={0.4} delay={i * 0.06}>
              <div className="relative flex gap-6 pl-2">
                <div className="flex flex-col items-center">
                  <div className="h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-accent bg-[#F7F4EC]" />
                  {i !== steps.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent-dark">
                    {step.number}
                  </p>
                  <h3 className="font-editorial mt-2 text-2xl text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
