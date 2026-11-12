
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function AudienceCta() {
  return (
    <section className="relative overflow-hidden bg-[#123C32] py-24 text-[#F7F4EC] lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-8 select-none font-editorial text-[clamp(12rem,28vw,27rem)] leading-none text-white/[0.025]"
      >
        V
      </div>

      <PageContainer>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <Reveal amount={0.3}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9AD70]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#C9AD70]">
                Let's Start With You
              </p>
            </div>

            <h2 className="mt-8 max-w-[700px] font-editorial text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.05] tracking-tight">
              Your circumstances are different.
              <span className="block text-[#C9AD70]">
                Your guidance should be, too.
              </span>
            </h2>
          </Reveal>

          <Reveal amount={0.3} delay={0.1}>
            <div className="max-w-[400px] lg:justify-self-end">
              <p className="text-sm leading-[1.95] text-white/65 lg:text-base">
                Whatever your financial priorities may be, the first step is
                understanding where you are and where you want to go.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-5 border-b border-[#C9AD70]/60 pb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9AD70] transition-colors hover:border-[#F7F4EC] hover:text-[#F7F4EC]"
              >
                Talk to Vital Industries

                <span className="flex h-9 w-9 items-center justify-center border border-[#C9AD70]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#F7F4EC]">
                  <ArrowUpRight size={17} strokeWidth={1.4} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal amount={0.3}>
          <div className="relative z-10 mt-20 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
            <p className="font-editorial text-xl text-[#F7F4EC] lg:text-2xl">
              A clearer picture starts with a conversation.
            </p>

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Vital Industries
            </span>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
