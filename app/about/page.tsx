import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { Philosophy } from "@/components/about/philosophy";
import { Values } from "@/components/about/values";
import { Relationship } from "@/components/about/relationship";

export const metadata: Metadata = {
  title: "About Vital Industries | Tax & Financial Strategy",
  description:
    "Vital Industries exists to help individuals and businesses approach tax and financial decisions with greater clarity, context, and confidence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Philosophy />
      <Values />
      <Relationship />
    </>
  );
}
