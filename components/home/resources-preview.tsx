import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";
import { resources } from "@/lib/resources";

export function ResourcesPreview() {
  const featured = resources.slice(0, 3);

  return (
    <section className="py-20 lg:py-32">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal amount={0.5}>
            <p className="eyebrow">Insights</p>
            <h2 className="font-editorial mt-6 max-w-[560px] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-primary">
              Useful perspective for the decisions ahead.
            </h2>
          </Reveal>
          <Reveal amount={0.5} delay={0.1}>
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-primary"
            >
              View all resources
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {featured.map((article, i) => (
            <Reveal key={article.title} amount={0.3} delay={i * 0.08} className="bg-[#F7F4EC]">
              <Link href={article.href} className="group flex h-full flex-col justify-between p-8">
                <div>
                  <p className="eyebrow">{article.category}</p>
                  <h3 className="font-editorial mt-5 text-2xl leading-snug text-primary">
                    {article.title}
                  </h3>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm text-foreground/70">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
