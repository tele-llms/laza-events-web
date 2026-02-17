'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Heart, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';

interface ReelData {
  id: string;
  thumbnail: string;
  videoUrl?: string;
  likes: string;
  comments: string;
  caption: string;
  reelUrl: string;
}

interface InstagramApiResponse {
  success: boolean;
  demo: boolean;
  message?: string;
  error?: string;
  reels: ReelData[];
}

function ReelCard({ thumbnail, videoUrl, likes, comments, caption, reelUrl }: ReelData) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered && videoUrl) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [isHovered, videoUrl]);

  return (
    <a
      href={reelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer block bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      {!imageError ? (
        <Image
          src={thumbnail}
          alt={caption}
          fill
          className={`object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
          <Play size={48} className="text-white/80" />
        </div>
      )}

      {/* Video Preview on Hover */}
      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 bg-white/30' : ''}`}>
          <Play size={28} className="text-white ml-1" fill="white" />
        </div>
      </div>

      {/* Instagram Reel Badge */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
            <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1z"/>
            <path d="M12 6.865a5.135 5.135 0 1 0 5.135 5.135A5.135 5.135 0 0 0 12 6.865zm0 8.469a3.334 3.334 0 1 1 3.334-3.334A3.334 3.334 0 0 1 12 15.334z"/>
            <circle cx="17.338" cy="6.662" r="1.2"/>
          </svg>
          <span className="text-white text-xs font-medium">Reel</span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white text-sm line-clamp-2 mb-3 font-medium">{caption}</p>
        <div className="flex items-center gap-4 text-white/90 text-sm">
          <div className="flex items-center gap-1.5">
            <Heart size={16} fill="white" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle size={16} />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function LiveInstagramFeed() {
  const [reels, setReels] = useState<ReelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDemo, setIsDemo] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchReels = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/instagram', {
        cache: 'no-store', // Always get fresh data
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Instagram data');
      }

      const data: InstagramApiResponse = await response.json();
      
      setReels(data.reels);
      setIsDemo(data.demo);
      setLastUpdated(new Date());

      if (data.error) {
        console.warn('Instagram API:', data.error);
      }
    } catch (err) {
      setError('Unable to load Instagram feed');
      console.error('Instagram fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReels();

    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchReels, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading && reels.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-[9/16] rounded-2xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error && reels.length === 0) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">{error}</p>
        <button
          onClick={fetchReels}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Demo Mode Indicator */}
      {isDemo && (
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm">
            <AlertCircle size={16} />
            Demo Mode - Connect Instagram for live updates
          </span>
        </div>
      )}

      {/* Reels Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {reels.map((reel) => (
          <ReelCard key={reel.id} {...reel} />
        ))}
      </div>

      {/* Last Updated & Refresh */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
        {lastUpdated && (
          <span>Updated {lastUpdated.toLocaleTimeString()}</span>
        )}
        <button
          onClick={fetchReels}
          disabled={loading}
          className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-700 disabled:opacity-50"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>
    </div>
  );
}
