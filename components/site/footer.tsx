import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { PageContainer } from "@/components/site/page-container";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-[#0D2B24] text-white">
      <PageContainer className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="font-editorial text-2xl leading-tight">
              VITAL
              <br />
              INDUSTRIES
            </div>
            <p className="eyebrow-light mt-4">Tax • Strategy • Advisory</p>
            {/* <p className="mt-6 max-w-xs text-sm text-white/60">
              A sister company of{" "}
              <a
                href="https://www.velocitytaxexpress.com/vte#home"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                Velocity Tax Express
              </a>
              .
            </p> */}
          </div>

          <div>
            <p className="eyebrow-light mb-5">Navigate</p>
            <ul className="flex flex-col gap-3 text-sm text-white/75">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-light mb-5">Get in Touch</p>
            <ul className="flex flex-col gap-3 text-sm text-white/75">
              <li>[PHONE NUMBER]</li>
              <li>[EMAIL ADDRESS]</li>
              <li>[OFFICE ADDRESS]</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Vital Industries. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
