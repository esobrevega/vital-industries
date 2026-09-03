"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const interests = [
  "Individual Tax",
  "Business Tax",
  "Tax Planning",
  "Tax Resolution",
  "Business Advisory",
  "Other",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!v.firstName.trim()) next.firstName = "First name is required.";
    if (!v.lastName.trim()) next.lastName = "Last name is required.";
    if (!v.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!v.interest) next.interest = "Please select an option.";
    if (!v.message.trim()) next.message = "Please share a short message.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: wire up backend submission (API route / email service / CRM integration).
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <Reveal amount={0.6}>
        <div className="border border-border p-10">
          <h3 className="font-editorial text-2xl text-primary">
            Thank you for reaching out.
          </h3>
          <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-muted-foreground">
            A member of the Vital Industries team will follow up with you
            shortly.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal amount={0.5}>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
              First Name
            </label>
            <Input
              id="firstName"
              value={values.firstName}
              onChange={(e) => setValues({ ...values, firstName: e.target.value })}
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && (
              <p className="mt-2 text-xs text-red-700">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Last Name
            </label>
            <Input
              id="lastName"
              value={values.lastName}
              onChange={(e) => setValues({ ...values, lastName: e.target.value })}
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && (
              <p className="mt-2 text-xs text-red-700">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-2 text-xs text-red-700">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Phone
            </label>
            <Input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            I am interested in...
          </label>
          <Select
            value={values.interest}
            onValueChange={(v) => setValues({ ...values, interest: v })}
          >
            <SelectTrigger aria-invalid={!!errors.interest}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {interests.map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && (
            <p className="mt-2 text-xs text-red-700">{errors.interest}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Message
          </label>
          <Textarea
            id="message"
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-2 text-xs text-red-700">{errors.message}</p>
          )}
        </div>

        <Button type="submit" size="default">
          Send Inquiry
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </form>
    </Reveal>
  );
}
