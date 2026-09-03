import Link from "next/link";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-[#123C32] py-24 text-white lg:py-32">
      <PageContainer>
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal amount={0.5}>
            <h2 className="font-editorial text-[clamp(2rem,5vw,3.75rem)] leading-[1.1]">
              Let&apos;s make your next
              <br />
              financial decision a better one.
            </h2>
          </Reveal>

          <Reveal amount={0.5} delay={0.1}>
            <div className="mx-auto mt-8 h-px w-16 bg-accent" />
          </Reveal>

          <Reveal amount={0.5} delay={0.15}>
            <p className="mx-auto mt-8 max-w-[560px] text-base leading-relaxed text-white/65 lg:text-lg">
              Whether you&apos;re preparing for tax season, planning for
              growth, or navigating a complex financial situation, Vital
              Industries is here to help you move forward with clarity.
            </p>
          </Reveal>

          <Reveal amount={0.5} delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="primary-inverse">
                <Link href="/contact">Talk to Vital Industries</Link>
              </Button>
              <Button asChild variant="outline-light">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
