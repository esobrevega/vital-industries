
import Image from "next/image";

export function AudienceImageStrip() {
  return (
    <section className="relative overflow-hidden bg-[#123C32] mb-20">
      <div className="relative h-[240px] w-full sm:h-[320px] lg:h-[420px]">
        <Image
          src="/images/who-we-serve-strip.png"
          alt="A warm, thoughtfully arranged workspace representing financial planning and guidance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#123C32]/10" />
      </div>
    </section>
  );
}
