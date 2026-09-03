import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={resource.href}
      className="group flex h-full flex-col justify-between border border-border p-8 transition-colors hover:bg-primary/[0.03]"
    >
      <div>
        <p className="eyebrow">{resource.category}</p>
        <h3 className="font-editorial mt-5 text-2xl leading-snug text-primary">
          {resource.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {resource.excerpt}
        </p>
      </div>
      <div className="mt-10 flex items-center gap-2 text-sm text-foreground/70">
        Read more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
