import { Metadata } from 'next';
import CommunityEventsClient from './CommunityEventsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export const metadata: Metadata = {
  title: 'Community Events Organizer Qatar | Local Festivals & Celebrations | Laza Events',
  description: 'Expert planning for community gatherings, public festivals, and cultural events in Qatar. We bring neighborhoods and communities together with passion.',
  keywords: ['community event planner qatar', 'public festivals doha', 'cultural event organizer qatar', 'national day events qatar', 'eid celebrations doha'],
};

export default function CommunityEvents() {
  return <CommunityEventsClient recentWork={<SanityRecentWork category="Community Events" />} />;
}
