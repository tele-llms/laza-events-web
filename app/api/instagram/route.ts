import { NextResponse } from 'next/server';

// Instagram Basic Display API endpoint
const INSTAGRAM_API_URL = 'https://graph.instagram.com';

interface InstagramMedia {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    // Return demo data if no access token is configured
    return NextResponse.json({
      success: true,
      demo: true,
      message: 'Using demo data. Add INSTAGRAM_ACCESS_TOKEN to .env.local for real data.',
      reels: getDemoReels(),
    });
  }

  try {
    // Fetch user's media from Instagram
    const response = await fetch(
      `${INSTAGRAM_API_URL}/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${accessToken}`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data: InstagramApiResponse = await response.json();

    // Filter to only include videos (reels)
    const reels = data.data
      .filter((media) => media.media_type === 'VIDEO')
      .slice(0, 8) // Limit to 8 reels
      .map((media) => ({
        id: media.id,
        thumbnail: media.thumbnail_url || media.media_url,
        videoUrl: media.media_url,
        reelUrl: media.permalink,
        caption: media.caption || 'Check out this reel! 🎉',
        timestamp: media.timestamp,
        likes: '—', // Basic Display API doesn't provide engagement metrics
        comments: '—',
      }));

    return NextResponse.json({
      success: true,
      demo: false,
      reels,
    });
  } catch (error) {
    console.error('Instagram API Error:', error);
    
    // Return demo data on error
    return NextResponse.json({
      success: false,
      demo: true,
      error: 'Failed to fetch from Instagram. Using demo data.',
      reels: getDemoReels(),
    });
  }
}

function getDemoReels() {
  return [
    {
      id: 'demo-1',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=700&fit=crop',
      likes: '2.8K',
      comments: '124',
      caption: 'A magical wedding ceremony under the stars ✨ #LazaEvents #QatarWeddings',
      reelUrl: 'https://www.instagram.com/laza_events_official/',
    },
    {
      id: 'demo-2',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=700&fit=crop',
      likes: '1.9K',
      comments: '89',
      caption: 'Corporate excellence at its finest 🏆 #CorporateEvents #Qatar',
      reelUrl: 'https://www.instagram.com/laza_events_official/',
    },
    {
      id: 'demo-3',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=700&fit=crop',
      likes: '3.2K',
      comments: '156',
      caption: 'When the stage comes alive 🎤🔥 #StageShow #LivePerformance',
      reelUrl: 'https://www.instagram.com/laza_events_official/',
    },
    {
      id: 'demo-4',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=700&fit=crop',
      likes: '2.1K',
      comments: '98',
      caption: 'Community celebrations that bring people together 🎉 #CommunityEvents',
      reelUrl: 'https://www.instagram.com/laza_events_official/',
    },
  ];
}
