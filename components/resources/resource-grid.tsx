"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
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
    return resources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="pb-20 lg:pb-32">
      <PageContainer>
        <Reveal amount={0.6}>
          <div className="flex flex-col gap-4 border-y border-border py-6 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources"
                aria-label="Search resources"
                className="pl-11"
              />
            </div>
            <div className="sm:w-56">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger aria-label="Filter by category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {resourceCategories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource, i) => (
              <Reveal key={resource.title} amount={0.3} delay={(i % 3) * 0.06}>
                <ResourceCard resource={resource} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">
            No resources match your search.
          </p>
        )}
      </PageContainer>
    </section>
  );
}
