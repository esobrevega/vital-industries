export type Resource = {
  category: string;
  title: string;
  excerpt: string;
  href: string;
};

// Placeholder resource data — replace with real published content.
export const resources: Resource[] = [
  {
    category: "Tax Planning",
    title: "What proactive tax planning can change about your financial year",
    excerpt:
      "A look at how planning ahead — rather than reacting each spring — can shape better outcomes.",
    href: "#",
  },
  {
    category: "Business",
    title: "Tax considerations every growing business owner should understand",
    excerpt:
      "As a business changes, so do its tax obligations and opportunities. Here's what to watch for.",
    href: "#",
  },
  {
    category: "Individuals",
    title: "Preparing for a more intentional approach to your taxes",
    excerpt:
      "Small shifts in how you prepare can lead to a clearer, less stressful filing season.",
    href: "#",
  },
  {
    category: "Tax Resolution",
    title: "Understanding your options when tax matters become complex",
    excerpt:
      "A practical overview of how resolution support works and when to seek it.",
    href: "#",
  },
  {
    category: "Business",
    title: "Financial strategy considerations for entrepreneurs",
    excerpt:
      "Connecting day-to-day decisions to a longer-term financial strategy.",
    href: "#",
  },
  {
    category: "Individuals",
    title: "Life changes and what they can mean for your taxes",
    excerpt:
      "Marriage, a new home, a new job — how major life events intersect with tax planning.",
    href: "#",
  },
];

export const resourceCategories = [
  "All",
  "Tax Planning",
  "Business",
  "Individuals",
  "Tax Resolution",
];
