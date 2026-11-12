import type { Metadata } from "next";
import { AudienceHero } from "@/components/who-we-serve/audience-hero";
import { AudienceList } from "@/components/who-we-serve/audience-list";
import { AudienceCta } from "@/components/who-we-serve/audience-cta";
import { AudienceImageStrip } from "@/components/who-we-serve/audience-image-strip";

export const metadata: Metadata = {
  title: "Tax Services for Individuals & Businesses | Vital Industries",
  description:
    "Vital Industries serves individuals, families, entrepreneurs, and businesses with tax and financial guidance built around each circumstance.",
};

export default function WhoWeServePage() {
  return (
    <>
      <AudienceHero />
      <AudienceImageStrip />
      <AudienceList />
      <AudienceCta />
    </>
  );
}
