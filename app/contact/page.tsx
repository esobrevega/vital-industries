import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";
import { PageContainer } from "@/components/site/page-container";

export const metadata: Metadata = {
  title: "Contact Vital Industries",
  description:
    "Get in touch with Vital Industries to talk through your tax and financial questions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="pb-24 lg:pb-32">
        <PageContainer>
          <div className="grid grid-cols-1 gap-14 border-t border-border pt-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:pt-16">
            <ContactForm />
            <ContactDetails />
          </div>
        </PageContainer>
      </section>
    </>
  );
}
