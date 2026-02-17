import { Metadata } from 'next';
import StageShowClient from './StageShowClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export const metadata: Metadata = {
  title: 'Stage Shows & Live Entertainment Productions Qatar | Laza Events',
  description: 'Unforgettable stage productions and live entertainment in Qatar. We manage concerts, festivals, award nights, and cultural performances with cutting-edge technology.',
  keywords: ['stage show production qatar', 'live entertainment qatar', 'concert organizer doha', 'festival management qatar', 'award ceremony qatar', 'stage lighting sound doha'],
};

export default function StageShow() {
  return <StageShowClient recentWork={<SanityRecentWork category="Stage Show" />} />;
}
