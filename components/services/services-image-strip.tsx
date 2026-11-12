
import Image from "next/image";

export function ServicesImageStrip() {
  return (
    <section className="relative overflow-hidden bg-[#123C32]">
      <div className="relative h-[240px] w-full sm:h-[320px] lg:h-[420px]">
        <Image
          src="/images/services-image-strip.jpg"
          alt="A thoughtfully arranged workspace representing financial planning and professional guidance"
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
