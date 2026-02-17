import RentalsClient from './RentalsClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export default function Rentals() {
  return <RentalsClient recentWork={<SanityRecentWork category="Rentals" />} />;
}
