
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
    <section className="relative overflow-hidden bg-[#0D2B24] py-12 text-white lg:py-14">

      <PageContainer>
        <div>

          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-3 border-b border-[#C9AD70]/20 pb-6 sm:flex-row sm:items-end">

            <div>
              <p className="mb-3 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#C9AD70]">
                <span className="h-px w-7 bg-[#C9AD70]" />
                What We Do
              </p>

              <h2 className="font-editorial text-2xl text-white lg:text-3xl">
                Areas of Expertise
              </h2>
            </div>

            <p className="max-w-[340px] text-sm leading-relaxed text-white/45">
              Thoughtful tax services and strategic guidance
              for every stage of your financial journey.
            </p>

          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative flex flex-col items-center gap-5 px-3 py-5 text-center transition-colors duration-300 hover:bg-white/[0.025] sm:px-5 lg:py-6"
                >

                  {/* Vertical Divider */}
                  {index !== 0 && (
                    <span className="absolute left-0 top-1/2 hidden h-12 -translate-y-1/2 bg-white/10 sm:block lg:block"
                      style={{ width: "1px" }}
                    />
                  )}

                  {/* Icon Container */}
                  <div className="flex h-12 w-12 items-center justify-center border border-[#C9AD70]/25 bg-white/[0.025] transition-all duration-300 group-hover:border-[#C9AD70]/70 group-hover:bg-[#C9AD70]/10">
                    <Icon
                      className="h-5 w-5 text-[#C9AD70]/80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#C9AD70]"
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* Service Label */}
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-white/75 transition-colors duration-300 group-hover:text-[#C9AD70]">
                      {item.label}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

          {/* Bottom Accent */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Vital Industries
            </span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9AD70]/70">
              Beyond the Numbers
            </span>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
