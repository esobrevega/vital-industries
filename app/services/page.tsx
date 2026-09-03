import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServiceList } from "@/components/services/service-list";
import { ServicesCta } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Tax & Financial Services | Vital Industries",
  description:
    "Individual tax, business tax, tax planning, business advisory, tax resolution, and financial strategy services from Vital Industries.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceList />
      <ServicesCta />
    </>
  );
}
