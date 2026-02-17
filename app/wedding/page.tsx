import WeddingClient from './WeddingClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export default function Wedding() {
  return <WeddingClient recentWork={<SanityRecentWork category="Wedding" />} />;
}
