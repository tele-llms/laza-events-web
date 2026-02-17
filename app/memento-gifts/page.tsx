import { Metadata } from 'next';
import MementoGiftsClient from './MementoGiftsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export const metadata: Metadata = {
  title: 'Corporate Gifts & Personalized Mementos Qatar | Laza Events',
  description: 'Design custom corporate gifts, awards, trophies, and mementos in Qatar. Celebrate achievement and strengthen relationships with our premium gifting solutions.',
  keywords: ['corporate gifts qatar', 'personalized mementos doha', 'employee awards qatar', 'promotional items doha', 'custom trophies qatar'],
};

export default function MementoGifts() {
  return <MementoGiftsClient recentWork={<SanityRecentWork category="Memento & Gifts" />} />;
}
