
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";
import { PageContainer } from "@/components/site/page-container";
import { ContactImageStrip } from "@/components/contact/contact-strip";

export const metadata: Metadata = {
  title: "Contact Vital Industries",
  description:
    "Connect with Vital Industries for thoughtful tax guidance and financial solutions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactImageStrip />

      <section className="mt-20 pb-24 lg:pb-36">
        <PageContainer>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_0.75fr] lg:gap-16">

            {/* Contact Form */}
            <div className="min-w-0 border-t border-border pt-8 lg:pt-10">
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  01 / Send an Inquiry
                </p>
                <h2 className="mt-4 font-editorial text-3xl leading-tight text-primary lg:text-4xl">
                  How can we help?
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Share a little about your needs. We&apos;ll use the
                  information to better understand how we can assist you.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:pt-0">
              <ContactDetails />
            </div>

          </div>
        </PageContainer>
      </section>
    </>
  );
}
