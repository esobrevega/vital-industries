
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServiceList } from "@/components/services/service-list";
import { ServicesCta } from "@/components/services/services-cta";
import { ServicesImageStrip } from "@/components/services/services-image-strip";

export const metadata: Metadata = {
  title: "Tax & Financial Services | Vital Industries",
  description:
    "Explore individual tax, business tax, tax planning, business advisory, tax resolution, and financial strategy services from Vital Industries.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesImageStrip />
      <ServiceList />
      <ServicesCta />
    </>
  );
}
