import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

export type Service = {
  number: string;
  title: string;
  description: string;
  includes: string[];
};

export function ServiceDetail({ service, reversed }: { service: Service; reversed?: boolean }) {
  return (
    <Reveal amount={0.3}>
      <div className="grid grid-cols-1 gap-8 border-t border-border py-14 lg:grid-cols-[0.5fr_1fr_1fr] lg:gap-10 lg:py-16">
        <div className={reversed ? "lg:order-2" : ""}>
          <span className="font-editorial text-5xl text-accent-dark/60">
            {service.number}
          </span>
        </div>

        <div className={reversed ? "lg:order-1" : ""}>
          <h3 className="font-editorial text-3xl leading-tight text-primary lg:text-4xl">
            {service.title}
          </h3>
          <p className="mt-5 max-w-[420px] text-base leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 text-sm tracking-wide text-primary"
          >
            Talk to an advisor
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className={reversed ? "lg:order-3" : ""}>
          <p className="eyebrow mb-4">May Include</p>
          <ul className="space-y-3">
            {service.includes.map((item) => (
              <li
                key={item}
                className="border-t border-border pt-3 text-sm leading-relaxed text-foreground/80 first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
