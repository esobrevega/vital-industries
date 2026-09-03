import { Hero } from "@/components/home/hero";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { Introduction } from "@/components/home/introduction";
import { ServicesPreview } from "@/components/home/services-preview";
import { SignatureStatement } from "@/components/home/signature-statement";
import { AudiencePreview } from "@/components/home/audience-preview";
import { Approach } from "@/components/home/approach";
import { Process } from "@/components/home/process";
import { ResourcesPreview } from "@/components/home/resources-preview";
import { FinalCta } from "@/components/home/final-cta";
import { HeroInvert } from "@/components/home/hero copy";
import { Hero2 } from "@/components/home/hero copy 2";

export default function Home() {
  return (
    <>
      {/* <Hero2 />
      <HeroInvert /> */}
      <Hero />
      <CredibilityStrip />
      <Introduction />
      <ServicesPreview />
      <SignatureStatement />
      <AudiencePreview />
      <Approach />
      <Process />
      <ResourcesPreview />
      <FinalCta />
    </>
  );
}
