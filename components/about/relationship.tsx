
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

export function Relationship() {
  return (
    <section className="relative overflow-hidden bg-[#123C32] py-24 text-[#F7F4EC] lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-8 select-none font-editorial text-[clamp(12rem,28vw,27rem)] leading-none text-white/[0.025]"
      >
        V
      </div>

      <PageContainer>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal amount={0.3}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9AD70]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#C9AD70]">
                Our Network
              </p>
            </div>

            <h2 className="mt-8 max-w-[450px] font-editorial text-4xl leading-[1.08] lg:text-5xl">
              Different expertise. A shared vision for the future.
            </h2>
          </Reveal>

          <Reveal amount={0.3} delay={0.1}>
            <div className="max-w-[650px] lg:ml-auto">
              <p className="text-base leading-[1.95] text-white/70 lg:text-lg">
                Vital Industries is affiliated with Your Legacy Financial
                Services LLC, a company that shares our commitment to
                thoughtful, client-focused financial guidance.
              </p>

              <p className="mt-6 text-sm leading-[1.95] text-white/55 lg:text-base">
                Together, we recognize that financial decisions are part of a
                much bigger picture. Through our respective areas of expertise,
                we share a common goal of helping individuals and businesses
                approach their financial future with greater clarity and
                confidence.
              </p>

              <div className="mt-12 border-t border-white/20 pt-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9AD70]">
                  Affiliated Company
                </p>

                <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-[280px]">
                    <Image
                      src="/images/your-legacy-financial-services-transparent.png"
                      alt="Your Legacy Financial Services LLC"
                      width={440}
                      height={330}
                      className="h-auto w-full max-w-[220px] object-contain object-left"
                    />
                  </div>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-3 border-b border-[#C9AD70]/60 pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C9AD70] transition-colors hover:border-[#F7F4EC] hover:text-[#F7F4EC]"
                  >
                    Discover Your Legacy
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal amount={0.3}>
          <div className="relative z-10 mt-20 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
            <p className="font-editorial text-xl text-[#F7F4EC] lg:text-2xl">
              Different strengths. A shared commitment to what comes next.
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
