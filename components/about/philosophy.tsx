
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function Philosophy() {
  return (
    <section className="bg-[#F7F4EC] py-24 lg:py-36">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal amount={0.3}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A58B55]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                The Thinking Behind Our Work
              </p>
            </div>

            <h2 className="mt-8 font-editorial text-4xl leading-[1.08] text-[#123C32] lg:text-5xl">
              Our
              <span className="block text-[#A58B55]">Philosophy</span>
            </h2>

            <p className="mt-6 max-w-[300px] text-sm leading-[1.9] text-[#68736C]">
              Understanding first. Guidance with purpose.
            </p>
          </Reveal>

          <Reveal amount={0.3} delay={0.1}>
            <div className="max-w-[720px] lg:ml-auto">
              <p className="font-editorial text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.25] text-[#123C32]">
                Good financial guidance starts with understanding the people
                behind the numbers.
              </p>

              <div className="mt-10 grid gap-8 border-t border-[#123C32]/15 pt-8 sm:grid-cols-2">
                <p className="text-sm leading-[1.95] text-[#68736C] lg:text-base">
                  Every client has a different financial picture, different
                  priorities, and different questions. There is no single
                  approach that serves every circumstance.
                </p>

                <p className="text-sm leading-[1.95] text-[#68736C] lg:text-base">
                  That is why we begin by understanding each situation before
                  considering the next step. Our aim is to make complex
                  matters easier to navigate and decisions easier to approach.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <span className="h-px w-12 bg-[#A58B55]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#806B3E]">
                  Clarity begins with context
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
