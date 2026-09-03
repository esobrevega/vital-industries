import { Reveal } from "@/components/animations/reveal";

export function ContactDetails() {
  return (
    <Reveal amount={0.5}>
      <div className="border-t border-border pt-8 lg:border-t-0 lg:pt-0">
        <p className="eyebrow mb-6">Get in Touch</p>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="text-muted-foreground">Phone</dt>
            <dd className="mt-1 text-foreground">[PHONE NUMBER]</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Email</dt>
            <dd className="mt-1 text-foreground">[EMAIL ADDRESS]</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Office</dt>
            <dd className="mt-1 text-foreground">[OFFICE ADDRESS]</dd>
          </div>
        </dl>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Vital Industries is a sister company of Velocity Tax Express.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
