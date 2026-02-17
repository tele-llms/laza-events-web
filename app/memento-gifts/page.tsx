import MementoGiftsClient from './MementoGiftsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export default function MementoGifts() {
  return <MementoGiftsClient recentWork={<SanityRecentWork category="Gifts" />} />;
}
