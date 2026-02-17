import StageShowClient from './StageShowClient';
import SanityRecentWork from '@/components/SanityRecentWork';

export default function StageShow() {
  return <StageShowClient recentWork={<SanityRecentWork category="Stage" />} />;
}
