import {
  UserRound,
  Building2,
  CalendarCheck2,
  MessageCircle,
  ShieldCheck,
  Compass,
} from "lucide-react";

import { PageContainer } from "@/components/site/page-container";

const items = [
  {
    label: "Individual Tax",
    icon: UserRound,
  },
  {
    label: "Business Tax",
    icon: Building2,
  },
  {
    label: "Tax Planning",
    icon: CalendarCheck2,
  },
  {
    label: "Advisory",
    icon: MessageCircle,
  },
  {
    label: "Resolution",
    icon: ShieldCheck,
  },
  {
    label: "Strategy",
    icon: Compass,
  },
];

export function CredibilityStrip() {
  return (
    <section className="bg-[#0D2B24] py-8 text-white lg:py-10">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Section Label */}
          <p className="eyebrow-light shrink-0">
            Built on Experience
          </p>

          {/* Services */}
          <div className="grid w-full grid-cols-2 gap-y-8 sm:grid-cols-3 lg:flex lg:w-auto lg:items-start lg:justify-center lg:gap-x-12 xl:gap-x-16">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group flex min-w-[110px] flex-col items-center justify-center gap-3 text-center"
                >
                  {/* Icon */}
                  <Icon
                    className="h-[18px] w-[18px] text-accent/80 transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.4}
                  />

                  {/* Label */}
                  <span className="text-[0.68rem] uppercase tracking-[0.12em] text-white/75">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}