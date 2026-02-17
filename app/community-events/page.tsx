import CommunityEventsClient from './CommunityEventsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export default function CommunityEvents() {
  return <CommunityEventsClient recentWork={<SanityRecentWork category="Community" />} />;
}
