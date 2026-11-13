
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BookOpen } from "lucide-react";

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

import { ResourceCard } from "@/components/resources/resource-card";
import { resources, resourceCategories } from "@/lib/resources";

export function ResourceGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        category === "All" || resource.category === category;

      const matchesQuery =
        searchTerm.length === 0 ||
        resource.title.toLowerCase().includes(searchTerm) ||
        resource.excerpt.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="bg-[#F7F4EC] pb-24 lg:pb-32">
      <PageContainer>
        {/* Section introduction */}
        <Reveal amount={0.3}>
          <div className="grid gap-8 border-b border-[#123C32]/15 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B55]" />

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#806B3E]">
                  Knowledge & Perspective
                </p>
              </div>

              <h2 className="mt-7 font-editorial text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.08] text-[#123C32]">
                Explore our
                <span className="block text-[#A58B55]">
                  latest insights.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-sm leading-[1.9] text-[#68736C] lg:justify-self-end lg:pb-1 lg:text-base">
              Browse educational articles and helpful perspectives on tax,
              financial planning, and business decisions. Find information
              relevant to the questions you&apos;re working through.
            </p>
          </div>
        </Reveal>

        {/* Search and filters */}
        <Reveal amount={0.3} delay={0.05}>
          <div className="mt-10 border-y border-[#123C32]/15 py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1 sm:max-w-[480px]">
                  <Search
                    size={17}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#806B3E]"
                  />

                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles and insights..."
                    aria-label="Search resources"
                    className="h-12 rounded-none border-[#123C32]/20 bg-transparent pl-11 text-sm text-[#123C32] placeholder:text-[#8B918A] shadow-none transition-colors focus-visible:border-[#A58B55] focus-visible:ring-0"
                  />
                </div>

                <div className="sm:w-[220px]">
                  <Select
                    value={category}
                    onValueChange={setCategory}
                  >
                    <SelectTrigger
                      aria-label="Filter by category"
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
                      {resourceCategories.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 lg:justify-end">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#806B3E]">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "Resource" : "Resources"}
                </span>

                {(query || category !== "All") && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setCategory("All");
                    }}
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
        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filtered.map((resource, i) => (
              <Reveal
                key={resource.title}
                amount={0.25}
                delay={(i % 3) * 0.06}
              >
                <ResourceCard resource={resource} />
              </Reveal>
            ))}
          </div>
        ) : (
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
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="mt-6 border-b border-[#A58B55] pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#806B3E] transition-colors hover:text-[#123C32]"
              >
                View all resources
              </button>
            </div>
          </Reveal>
        )}
      </PageContainer>
    </section>
  );
}
