
import type { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/resources-hero";
import { ResourceGrid } from "@/components/resources/resource-grid";
import { OfficialResources } from "@/components/resources/official-resources";
import { TaxRefundTracker } from "@/components/resources/tax-refund-tracker";

export const metadata: Metadata = {
  title: "Resources | Vital Industries",
  description:
    "Explore tax insights, official government resources, tax tools, and financial information selected by Vital Industries.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <OfficialResources />
      <TaxRefundTracker />
      <ResourceGrid />
    </>
  );
}
