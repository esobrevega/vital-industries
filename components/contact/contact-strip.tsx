import Image from "next/image";

export function ContactImageStrip() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[220px] w-full sm:h-[280px] lg:h-[360px]">
        <Image
          src="/images/contact-strip.png"
          alt="A warm, thoughtfully designed professional workspace"
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