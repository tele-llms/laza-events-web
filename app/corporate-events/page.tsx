import { Metadata } from 'next';
import CorporateEventsClient from './CorporateEventsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export const metadata: Metadata = {
  title: 'Corporate Event Management Qatar | Conferences & Galas | Laza Events',
  description: 'Leading corporate event organizers in Doha, Qatar. We specialize in conferences, product launches, gala dinners, and team building events. Professional execution for your business success.',
  keywords: ['corporate event qatar', 'conference organizer doha', 'product launch event qatar', 'gala dinner qatar', 'corporate party planner doha', 'business events qatar'],
};

export default function CorporateEvents() {
  return (
    <CorporateEventsClient
      recentWork={<SanityRecentWork category="Corporate Events" />}
    />
  );
}
