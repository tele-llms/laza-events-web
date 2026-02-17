import CorporateEventsClient from './CorporateEventsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export default function CorporateEvents() {
  return (
    <CorporateEventsClient
      recentWork={<SanityRecentWork category="Corporate" />}
    />
  );
}
