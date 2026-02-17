export const revalidate = 60; // revalidate every minute

import { getPortfolioItems } from '@/sanity/sanity.query';
import GalleryGrid from './GalleryGrid';

export default async function GalleryPage() {
  const portfolioItems = await getPortfolioItems();

  return <GalleryGrid initialItems={portfolioItems} />;
}
