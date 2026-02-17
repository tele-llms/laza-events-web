import { Metadata } from 'next';
import WeddingClient from './WeddingClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export const metadata: Metadata = {
  title: 'Luxury Wedding Planner Qatar | Exclusive Weddings in Doha | Laza Events',
  description: 'Your dream wedding starts here. Laza Events provides full-service luxury wedding planning in Qatar, from stage design and floral decor to seamless execution.',
  keywords: ['wedding planner qatar', 'luxury weddings doha', 'stage decoration qatar', 'wedding planning company qatar', 'qatar wedding services', 'bespoke weddings doha'],
};

export default function Wedding() {
  return <WeddingClient recentWork={<SanityRecentWork category="Wedding" />} />;
}
