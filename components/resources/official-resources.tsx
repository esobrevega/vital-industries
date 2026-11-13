
"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  BookOpen,
} from "lucide-react";

import { PageContainer } from "@/components/site/page-container";
import { Reveal } from "@/components/animations/reveal";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const officialResources = [
  {
    number: "01",
    category: "Federal Tax",
    title: "IRS – Internal Revenue Service",
    description:
      "Access official U.S. tax forms, updates, payment options, and filing information.",
    url: "https://www.irs.gov/",
    label: "Visit IRS",
  },
  {
    number: "02",
    category: "State Tax",
    title: "AZ Taxes",
    description:
      "Arizona's official tax portal for filing, paying, and managing state taxes.",
    url: "https://www.aztaxes.gov/Home/Page",
    label: "Visit AZ Taxes",
  },
  {
    number: "03",
    category: "Social Security",
    title: "Social Security Administration",
    description:
      "Access benefits information, retirement planning, and Social Security services.",
    url: "https://www.ssa.gov/",
    label: "Visit SSA",
  },
  {
    number: "04",
    category: "Tax Credits",
    title: "Child Tax Credit",
    description:
      "Review eligibility details and learn how to claim the Child Tax Credit.",
    url: "https://www.irs.gov/credits-deductions/individuals/child-tax-credit",
    label: "Explore Credit",
  },
  {
    number: "05",
    category: "Tax Reference",
    title: "Standard Deductions",
    description:
      "Review IRS standard deduction amounts and tax inflation adjustments.",
    url: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2025",
    label: "View Tax Updates",
  },
  {
    number: "06",
    category: "Tax Calculator",
    title: "Federal Tax Withholding Estimator",
    description:
      "Estimate federal income tax withholding to help avoid unexpected tax bills or refunds.",
    url: "https://apps.irs.gov/app/tax-withholding-estimator",
    label: "Use Estimator",
  },
  {
    number: "07",
    category: "State Tax",
    title: "Arizona Department of Revenue",
    description:
      "Find official Arizona state tax information, forms, guidance, and resources.",
    url: "https://azdor.gov/",
    label: "Visit AZDOR",
  },
  {
    number: "08",
    category: "Tax Payments",
    title: "Where's My Refund?",
    description:
      "Check the status of your federal income tax refund through the IRS.",
    url: "https://www.irs.gov/refunds",
    label: "Track Refund",
  },
  {
    number: "09",
    category: "Social Security Updates",
    title: "2026 Cost-of-Living Adjustment",
    description:
      "Review the Social Security Administration's 2026 COLA information and fact sheet.",
    url: "https://www.ssa.gov/news/en/cola/factsheets/2026.html",
    label: "View Fact Sheet",
  },
];

const categories = [
  "All",
  ...Array.from(
    new Set(officialResources.map((resource) => resource.category))
  ),
];

export function OfficialResources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredResources = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return officialResources.filter((resource) => {
      const matchesCategory =
        category === "All" || resource.category === category;

      const matchesSearch =
        searchTerm.length === 0 ||
        resource.title.toLowerCase().includes(searchTerm) ||
        resource.description.toLowerCase().includes(searchTerm) ||
        resource.category.toLowerCase().includes(searchTerm) ||
        resource.label.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const hasFilters = query.trim().length > 0 || category !== "All";

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <section className="relative overflow-hidden border-t border-[#123C32]/15 bg-[#EEEAE0] py-24 lg:py-36">
      <PageContainer>
        {/* Section heading */}
        <Reveal amount={0.3}>
          <div className="grid gap-8 border-b border-[#123C32]/15 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  Helpful Links & References
                </p>
              </div>

              <h2 className="mt-8 max-w-[650px] font-editorial text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-tight text-[#123C32]">
                Official resources.
                <span className="block text-[#A58B55]">
                  Reliable information.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-sm leading-[1.9] text-[#68736C] lg:justify-self-end lg:pb-2 lg:text-base">
              Explore trusted government websites, tax tools, and reference
              materials to help you stay informed and navigate important
              financial matters.
            </p>
          </div>
        </Reveal>

        {/* Search and filters */}
        <Reveal amount={0.3} delay={0.05}>
          <div className="mt-10 border-y border-[#123C32]/15 py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                {/* Search input */}
                <div className="relative flex-1 sm:max-w-[480px]">
                  <Search
                    size={17}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#806B3E]"
                  />

                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search official resources..."
                    aria-label="Search official resources"
                    className="h-12 rounded-none border-[#123C32]/20 bg-transparent pl-11 text-sm text-[#123C32] placeholder:text-[#8B918A] shadow-none transition-colors focus-visible:border-[#A58B55] focus-visible:ring-0"
                  />
                </div>

                {/* Category filter */}
                <div className="sm:w-[230px]">
                  <Select
                    value={category}
                    onValueChange={setCategory}
                  >
                    <SelectTrigger
                      aria-label="Filter official resources by category"
                      className="h-12 rounded-none border-[#123C32]/20 bg-transparent text-sm text-[#123C32] shadow-none focus:ring-0"
                    >
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal
                          size={15}
                          className="text-[#806B3E]"
                        />
                        <SelectValue placeholder="All Categories" />
                      </div>
                    </SelectTrigger>

                    <SelectContent>
                      {categories.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item === "All" ? "All Categories" : item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results count and reset */}
              <div className="flex items-center justify-between gap-4 lg:justify-end">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#806B3E]">
                  {filteredResources.length}{" "}
                  {filteredResources.length === 1
                    ? "Resource"
                    : "Resources"}
                </span>

                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#68736C] underline underline-offset-4 transition-colors hover:text-[#123C32]"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Resource cards */}
        {filteredResources.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-[#123C32]/15 bg-[#123C32]/15 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, i) => (
              <Reveal
                key={resource.number}
                amount={0.25}
                delay={(i % 3) * 0.05}
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[275px] flex-col justify-between bg-[#F7F4EC] p-7 transition-colors duration-500 hover:bg-[#123C32] sm:p-8"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-editorial text-3xl text-[#A58B55]">
                        {resource.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center border border-[#123C32]/20 text-[#806B3E] transition-all duration-300 group-hover:border-[#C9AD70] group-hover:bg-[#C9AD70] group-hover:text-[#123C32]">
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.4}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>

                    <p className="mt-8 text-[9px] font-medium uppercase tracking-[0.22em] text-[#806B3E] transition-colors group-hover:text-[#C9AD70]">
                      {resource.category}
                    </p>

                    <h3 className="mt-3 font-editorial text-2xl leading-tight text-[#123C32] transition-colors group-hover:text-[#F7F4EC]">
                      {resource.title}
                    </h3>

                    <p className="mt-4 text-sm leading-[1.85] text-[#68736C] transition-colors group-hover:text-white/60">
                      {resource.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#123C32]/15 pt-5 transition-colors group-hover:border-white/20">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#806B3E] transition-colors group-hover:text-[#C9AD70]">
                      {resource.label}
                    </span>

                    <span className="text-[10px] text-[#8B918A] transition-colors group-hover:text-white/40">
                      External Website
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Empty state */
          <Reveal amount={0.3}>
            <div className="flex min-h-[300px] flex-col items-center justify-center border-b border-[#123C32]/15 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center border border-[#A58B55]/40 text-[#A58B55]">
                <BookOpen size={23} strokeWidth={1.3} />
              </div>

              <h3 className="mt-6 font-editorial text-2xl text-[#123C32]">
                No resources found.
              </h3>

              <p className="mt-3 max-w-[350px] text-sm leading-relaxed text-[#68736C]">
                We couldn&apos;t find anything matching your search. Try another
                keyword or explore a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 border-b border-[#A58B55] pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#806B3E] transition-colors hover:text-[#123C32]"
              >
                View all resources
              </button>
            </div>
          </Reveal>
        )}

        {/* Disclaimer */}
        <Reveal amount={0.3}>
          <div className="mt-8 flex flex-col gap-3 border-t border-[#123C32]/15 pt-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-[680px] text-xs leading-[1.8] text-[#68736C]">
              These links direct you to external government websites and
              resources. Information, eligibility requirements, and tax
              guidelines may change. Please refer to the relevant official
              agency for the latest details.
            </p>

            <span className="shrink-0 text-[9px] font-medium uppercase tracking-[0.2em] text-[#806B3E]">
              Selected by Vital Industries
            </span>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
