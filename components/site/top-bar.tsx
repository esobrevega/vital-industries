"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden h-11 bg-[#0D2B24] text-white/80 lg:block">
      <div className="mx-auto flex h-full w-full max-w-content items-center justify-between px-6 lg:px-10 xl:px-16 2xl:px-20">
        {/* Left */}
        <div className="flex items-center gap-6 text-[11px] tracking-[0.08em]">
          <Link
            href="mailto:info@vitalindustries.com"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
            info@vitalindustries.com
          </Link>

          <span className="h-3 w-px bg-white/20" />

          <Link
            href="tel:+10000000000"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            (000) 000-0000
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.12em]">
          <span className="eyebrow-light">
            Tax • Accounting • Financial Strategy
          </span>

          <span className="h-3 w-px bg-white/20" />

          <Link
            href="/contact"
            className="transition-colors hover:text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}