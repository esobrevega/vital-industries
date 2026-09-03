import Link from "next/link";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function ServicesCta() {
  return (
    <section className="bg-[#123C32] py-24 text-white lg:py-28">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal amount={0.6}>
            <h2 className="font-editorial max-w-[520px] text-[clamp(2rem,4vw,3rem)] leading-[1.15]">
              Not sure which service fits your situation?
            </h2>
          </Reveal>
          <Reveal amount={0.6} delay={0.1}>
            <Button asChild variant="primary-inverse">
              <Link href="/contact">Talk to Vital Industries</Link>
            </Button>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
