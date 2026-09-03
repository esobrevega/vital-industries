import type { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/resources-hero";
import { ResourceGrid } from "@/components/resources/resource-grid";

export const metadata: Metadata = {
  title: "Resources | Vital Industries",
  description:
    "Perspective on tax planning, business tax, and individual tax decisions from Vital Industries.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourceGrid />
    </>
  );
}
