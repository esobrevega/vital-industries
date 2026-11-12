
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const values = [
  {
    title: "Expertise",
    description:
      "Knowledge grounded in real-world financial decisions, supported by practical experience and a commitment to getting the details right.",
  },
  {
    title: "Perspective",
    description:
      "Looking beyond the immediate question to understand the bigger picture, anticipate what lies ahead, and recognize new opportunities.",
  },
  {
    title: "Partnership",
    description:
      "Building relationships that extend beyond a single filing through consistent guidance, open communication, and meaningful support.",
  },
  {
    title: "Precision",
    description:
      "Giving every detail the attention it deserves, because thoughtful financial decisions begin with accuracy and care.",
  },
];

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EC] py-24 lg:py-36">
      <PageContainer>
        {/* Header */}
        <Reveal amount={0.3}>
          <div className="grid gap-8 border-b border-[#123C32]/15 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  The Vital Approach
                </p>
              </div>

              <h2 className="mt-8 max-w-[650px] font-editorial text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-tight text-[#123C32]">
                More than a return.
                <span className="block text-[#A58B55]">
                  A clearer financial perspective.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-sm leading-[1.9] text-[#68736C] lg:justify-self-end lg:pb-2 lg:text-base">
              The way we work matters just as much as the work itself. Every
              engagement is guided by principles that put clarity, care, and
              thoughtful decision-making first.
            </p>
          </div>
        </Reveal>

        {/* Waterfall values */}
        <div className="mt-10 border-y border-[#123C32]/15">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              amount={0.3}
              delay={i * 0.06}
            >
              <div
                className={`group relative grid grid-cols-1 gap-5 py-9 transition-colors duration-500 hover:bg-[#123C32]/[0.025] sm:grid-cols-[100px_1fr_40px] sm:items-center sm:gap-8 lg:py-11 ${
                  i % 2 === 1
                    ? "lg:pl-[15%]"
                    : "lg:pr-[15%]"
                } ${i !== values.length - 1 ? "border-b border-[#123C32]/15" : ""}`}
              >
                {/* Number */}
                <div className="flex items-center gap-3 sm:block">
                  <span className="font-editorial text-2xl text-[#A58B55] lg:text-3xl">
                    0{i + 1}
                  </span>
                  <span className="h-px w-8 bg-[#A58B55]/50 sm:hidden" />
                  <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[#8B918A] sm:block sm:mt-2">
                    Principle
                  </span>
                </div>

                {/* Content */}
                <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
                  <h3 className="font-editorial text-3xl text-[#123C32] transition-colors duration-300 group-hover:text-[#806B3E] lg:text-4xl">
                    {value.title}
                  </h3>

                  <p className="max-w-[470px] text-sm leading-[1.9] text-[#68736C] lg:text-base">
                    {value.description}
                  </p>
                </div>

                {/* Hover detail */}
                <div className="hidden justify-end sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center border border-[#123C32]/15 text-[#A58B55] transition-all duration-300 group-hover:border-[#A58B55] group-hover:bg-[#123C32] group-hover:text-[#F7F4EC]">
                    <ArrowUpRight size={16} strokeWidth={1.4} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing line */}
        <Reveal amount={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[580px] font-editorial text-xl leading-relaxed text-[#123C32] lg:text-2xl">
              A thoughtful approach to every decision, and every relationship.
            </p>

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#806B3E]">
              Vital Industries
            </span>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
