
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/navigation";
import { PageContainer } from "@/components/site/page-container";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0D2B24] text-white">

      {/* Oversized Background Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-10 -z-10 select-none font-editorial text-[25vw] leading-none tracking-tighter text-[#C9AD70]/[0.035]"
      >
        VITAL
      </div>

      <PageContainer className="py-16 lg:py-24">

        {/* Main Brand Statement */}
        <div className="border-b border-[#C9AD70]/25 pb-14 lg:pb-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#C9AD70]">
                <span className="h-px w-8 bg-[#C9AD70]" />
                Tax · Strategy · Advisory
              </p>

              <h2 className="font-editorial text-[clamp(4rem,11vw,9rem)] leading-[0.8] tracking-tight text-[#C9AD70]">
                VITAL
                <span className="mt-3 block text-white/90">
                  INDUSTRIES
                </span>
              </h2>
            </div>

            <p className="max-w-[300px] text-sm leading-relaxed text-white/50 lg:pb-2">
              Thoughtful financial guidance.
              <br />
              Clearer decisions.
              <br />
              A better way forward.
            </p>

          </div>
        </div>

        {/* Footer Navigation and Information */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-20">

          {/* Brand Description */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9AD70]">
              Beyond the Numbers
            </p>

            <p className="mt-5 max-w-[320px] text-sm leading-[1.9] text-white/55">
              We look beyond the immediate numbers to help clients
              navigate their financial responsibilities and make
              decisions with greater clarity and confidence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#C9AD70]">
              Explore
            </p>

            <ul className="flex flex-col gap-4 text-sm text-white/70">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-[#C9AD70]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-[#C9AD70]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#C9AD70]">
              Get in Touch
            </p>

            <ul className="flex flex-col gap-5 text-sm text-white/70">
              <li>
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-white/35">
                  Phone
                </span>
                (623) 302-1049
              </li>

              <li>
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-white/35">
                  Email
                </span>
                vital.industriesllc.info@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Affiliated Company */}
        <div className="border-t border-[#C9AD70]/20 py-10">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">

            {/* Affiliation Description */}
            <div className="max-w-[380px] text-center sm:text-left">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9AD70]">
                An Affiliated Company
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                A shared commitment to thoughtful financial guidance
                and helping clients plan with confidence.
              </p>
            </div>

            {/* Your Legacy Logo */}
            <div className="flex items-center gap-8">
              <div className="hidden h-16 w-px bg-white/15 sm:block" />

              <Link
                href="#"
                aria-label="Your Legacy Financial Services LLC"
                className="block transition-opacity duration-300 hover:opacity-80"
              >
                <Image
                  src="/images/your-legacy-financial-services-transparent.png"
                  alt="Your Legacy Financial Services LLC"
                  width={440}
                  height={330}
                  className="h-auto w-[180px] object-contain sm:w-[220px]"
                />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col gap-5 border-t border-[#C9AD70]/20 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Vital Industries. All rights reserved.
          </p>

          <div className="flex gap-7">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#C9AD70]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#C9AD70]"
            >
              Terms
            </Link>
          </div>

          <p className="uppercase tracking-[0.2em] text-[#C9AD70]/70">
            Built on clarity.
          </p>

        </div>

      </PageContainer>
    </footer>
  );
}
