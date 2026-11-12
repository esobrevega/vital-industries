
import { ServiceDetail, type Service } from "@/components/services/service-detail";
import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";

const services: Service[] = [
  {
    number: "01",
    title: "Individual Tax",
    description:
      "Thoughtful tax preparation and guidance built around your personal financial circumstances.",
    includes: [
      "Personal return preparation",
      "Year-round questions",
      "Life-event guidance",
    ],
  },
  {
    number: "02",
    title: "Business Tax",
    description:
      "Practical tax support for businesses navigating growth, change, and ongoing financial decisions.",
    includes: [
      "Entity return preparation",
      "Ongoing compliance support",
      "Owner guidance",
    ],
  },
  {
    number: "03",
    title: "Tax Planning",
    description:
      "Proactive planning that helps you understand opportunities and prepare before important decisions are made.",
    includes: [
      "Forward-looking review",
      "Scenario discussion",
      "Timing considerations",
    ],
  },
  {
    number: "04",
    title: "Business Advisory",
    description:
      "Financial perspective designed to help business owners make informed decisions with greater clarity.",
    includes: [
      "Financial picture review",
      "Growth-stage guidance",
      "Decision support",
    ],
  },
  {
    number: "05",
    title: "Tax Resolution",
    description:
      "Professional support for navigating complex tax matters and working toward a clear path forward.",
    includes: [
      "Situation review",
      "Communication support",
      "Path-forward planning",
    ],
  },
  {
    number: "06",
    title: "Financial Strategy",
    description:
      "Long-term thinking that connects today's financial decisions with tomorrow's priorities.",
    includes: [
      "Long-term perspective",
      "Priority alignment",
      "Ongoing check-ins",
    ],
  },
];

export function ServiceList() {
  return (
    <section className="bg-[#F7F4EC] py-20 lg:py-28">
      <PageContainer>
        <Reveal amount={0.3}>
          <div className="mb-12 flex flex-col gap-4 border-b border-[#123C32]/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                How We Can Help
              </p>

              <h2 className="mt-4 font-editorial text-3xl text-[#123C32] lg:text-4xl">
                Our Areas of Expertise
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-[1.8] text-[#68736C]">
              Each service is designed to address a different part of your
              financial picture, with guidance shaped around your needs.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-[#123C32]/15">
          {services.map((service, i) => (
            <Reveal
              key={service.number}
              amount={0.25}
              delay={i * 0.04}
            >
              <ServiceDetail
                service={service}
                reversed={i % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
