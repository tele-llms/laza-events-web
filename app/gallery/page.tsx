export const revalidate = 60; // revalidate every minute

import { Metadata } from 'next';
import { getPortfolioItems } from '@/sanity/sanity.query';
import GalleryGrid from './GalleryGrid';

export const metadata: Metadata = {
  title: 'Our Event Portfolio | Real Weddings & Events in Qatar | Laza Events',
  description: 'Explore our gallery of past events in Qatar. Stunning weddings, corporate conferences, and stage productions coordinated by Laza Events.',
  keywords: ['event gallery qatar', 'wedding photos doha', 'corporate event portfolio qatar', 'laza events work'],
};

export default async function GalleryPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <main className="pt-20">
      <GalleryGrid initialItems={portfolioItems} />
    </main>
  );
}
