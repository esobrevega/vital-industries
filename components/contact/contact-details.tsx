
import { Reveal } from "@/components/animations/reveal";

export function ContactDetails() {
  return (
    <Reveal amount={0.3}>
      <aside className="relative isolate h-full overflow-hidden bg-[#123C32] px-8 py-10 text-white lg:px-10 lg:py-12">

        {/* Decorative background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-5 -right-4 -z-10 select-none font-editorial text-[150px] leading-none text-white/[0.035]"
        >
          V
        </div>

        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-accent" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            02 / Get in Touch
          </p>
        </div>

        <h2 className="mt-10 max-w-[300px] font-editorial text-3xl leading-tight lg:text-4xl">
          We&apos;d be glad to hear from you.
        </h2>

        <p className="mt-5 max-w-[340px] text-sm leading-[1.9] text-white/55">
          Have a question or need more information? Reach out through
          any of the channels below.
        </p>

        {/* Contact Information */}
        <div className="mt-12 space-y-8">

          <div className="border-t border-white/15 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Phone
            </p>

            <p className="mt-3 font-editorial text-xl text-white/90">
              (623) 302-1049
            </p>
          </div>

          <div className="border-t border-white/15 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Email
            </p>

            <p className="mt-3 break-all font-editorial text-xl text-white/90">
              vital.industriesllc.info@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Signature */}
        <div className="mt-16 border-t border-white/15 pt-6">
          <p className="font-editorial text-lg tracking-wide text-white/80">
            VITAL INDUSTRIES
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
            Beyond the Numbers.
          </p>
        </div>

      </aside>
    </Reveal>
  );
}
