import { Metadata } from 'next';
import RentalsClient from './RentalsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export const metadata: Metadata = {
  title: 'Event Furniture & Equipment Rentals Qatar | Laza Events',
  description: 'Qatar\'s top source for event rentals. From luxury furniture and seating to professional lighting and sound systems, we supply everything for your Doha event.',
  keywords: ['event rentals qatar', 'furniture rental doha', 'party equipment hire qatar', 'chair rental qatar', 'wedding furniture qatar', 'sound and light rental doha'],
};

export default function Rentals() {
  return <RentalsClient recentWork={<SanityRecentWork category="Rentals" />} />;
}
