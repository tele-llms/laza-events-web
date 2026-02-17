// components/SanityRecentWork.tsx
import { getPortfolioItemsByCategory } from "@/sanity/sanity.query";
import RecentWorkSection from "./RecentWorkSection";

export default async function SanityRecentWork({ category }: { category: string }) {
  const items = await getPortfolioItemsByCategory(category);
  
  // Clean up title (remove 'Events' if present in category name for cleaner display)
  const displayTitle = `Recent ${category.replace(' Events', '')} Projects`;

  return <RecentWorkSection items={items} title={displayTitle} />;  
}
