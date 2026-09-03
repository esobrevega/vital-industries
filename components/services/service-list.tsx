import { ServiceDetail, type Service } from "@/components/services/service-detail";
import { PageContainer } from "@/components/site/page-container";

const services: Service[] = [
  {
    number: "01",
    title: "Individual Tax",
    description:
      "Thoughtful tax preparation and guidance built around your personal financial circumstances.",
    includes: ["Personal return preparation", "Year-round questions", "Life-event guidance"],
  },
  {
    number: "02",
    title: "Business Tax",
    description:
      "Practical tax support for businesses navigating growth, change, and ongoing financial decisions.",
    includes: ["Entity return preparation", "Ongoing compliance support", "Owner guidance"],
  },
  {
    number: "03",
    title: "Tax Planning",
    description:
      "Proactive planning that helps you understand opportunities and prepare before important decisions are made.",
    includes: ["Forward-looking review", "Scenario discussion", "Timing considerations"],
  },
  {
    number: "04",
    title: "Business Advisory",
    description:
      "Financial perspective designed to help business owners make informed decisions with greater clarity.",
    includes: ["Financial picture review", "Growth-stage guidance", "Decision support"],
  },
  {
    number: "05",
    title: "Tax Resolution",
    description:
      "Professional support for navigating complex tax matters and working toward a clear path forward.",
    includes: ["Situation review", "Communication support", "Path-forward planning"],
  },
  {
    number: "06",
    title: "Financial Strategy",
    description:
      "Long-term thinking that connects today's financial decisions with tomorrow's priorities.",
    includes: ["Long-term perspective", "Priority alignment", "Ongoing check-ins"],
  },
];

export function ServiceList() {
  return (
    <section className="pb-20 lg:pb-32">
      <PageContainer>
        {services.map((service, i) => (
          <ServiceDetail key={service.number} service={service} reversed={i % 2 === 1} />
        ))}
      </PageContainer>
    </section>
  );
}
