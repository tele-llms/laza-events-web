'use client';

import { motion, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Sparkles, Building2, Heart, Mic2, PartyPopper, Gift, Sofa, Star, Instagram, Play, MessageCircle } from 'lucide-react';
import { FadeUp, ScaleReveal, SlideIn, Parallax } from '@/components/ScrollAnimations';

// Smooth animation variants
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: smoothEase },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: smoothEase },
};

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10px' });
  // Faster, more bouncy spring animation
  const springValue = useSpring(0, { stiffness: 60, damping: 15, mass: 0.8 });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
        
        // Add motion blur based on velocity
        const velocity = springValue.getVelocity();
        // Blur amount based on speed
        const blurAmount = Math.min(Math.abs(velocity) / 20, 2); 
        // Slight vertical offset for "spinning" effect
        const yOffset = Math.min(Math.abs(velocity) / 10, 5) * (velocity > 0 ? -1 : 1);
        
        if (Math.abs(velocity) > 10) {
           ref.current.style.filter = `blur(${blurAmount}px)`;
           ref.current.style.transform = `translateY(${yOffset}px)`;
           ref.current.style.opacity = '0.7';
        } else {
           ref.current.style.filter = 'blur(0px)';
           ref.current.style.transform = 'translateY(0px)';
           ref.current.style.opacity = '1';
        }
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="inline-block transition-colors" />;
}

function TypewriterText({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-[var(--brand-purple)]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12, ease: smoothEase } },
};

const services = [
  { icon: Building2, title: 'Corporate Events', desc: 'Conferences, seminars, product launches, and team events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', href: '/corporate-events' },
  { icon: Heart, title: 'Weddings', desc: 'Full planning, décor, catering, and unforgettable celebrations', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', href: '/wedding' },
  { icon: Mic2, title: 'Stage Shows', desc: 'Live concerts, performances, lighting, and sound production', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop', href: '/stage-show' },
  { icon: PartyPopper, title: 'Community Events', desc: 'Festivals, cultural events, charity galas, and public gatherings', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop', href: '/community-events' },
  { icon: Sofa, title: 'Equipment Rentals', desc: 'Furniture, lighting, audio, tents, and staging equipment', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop', href: '/rentals' },
  { icon: Gift, title: 'Gifts & Mementos', desc: 'Corporate gifts, awards, hampers, and branded keepsakes', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop', href: '/memento-gifts' },
];

const clientLogos = [
  { name: 'ABC Houz', src: '/images/clients/abc_houz_logo.png' },
  { name: 'Go Mosafer', src: '/images/clients/go_mosafer_logo.png' },
  { name: 'Hot N Cool', src: '/images/clients/hot_n_cool_logo.png' },
  { name: 'Ideal Home', src: '/images/clients/ideal_home_logo.png' },
  { name: 'Lulu', src: '/images/clients/lulu_logo.png' },
  { name: 'Marza', src: '/images/clients/marza_logo.webp' },
  { name: 'Paris', src: '/images/clients/paris_logo.png' },
  { name: 'Tasty Tea', src: '/images/clients/tasty_tea_logo.png' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
];

const testimonials = [
  {
    name: 'Sarah Al-Thani',
    role: 'Corporate Director, Qatar Energy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    quote: 'Laza Events transformed our annual conference into an extraordinary experience. Their attention to detail and professionalism exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Groom',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    quote: 'Our wedding was absolutely magical. The team understood our vision perfectly and delivered beyond our dreams. Thank you for making our special day unforgettable!',
    rating: 5,
  },
  {
    name: 'Fatima Al-Mansouri',
    role: 'Event Manager, Katara Cultural Village',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    quote: 'We have worked with Laza Events on multiple cultural festivals. Their creativity, reliability, and ability to handle large-scale events is unmatched in Qatar.',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Sulaiti',
    role: 'CEO, Tech Solutions Qatar',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    quote: 'From product launches to team building events, Laza Events has been our trusted partner. They always deliver exceptional results on time and within budget.',
    rating: 5,
  },
];

const instagramReels = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=700&fit=crop',
    likes: '2.8K',
    comments: '124',
    caption: 'A magical wedding ceremony ✨',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=700&fit=crop',
    likes: '1.9K',
    comments: '89',
    caption: 'Corporate excellence 🏆',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=700&fit=crop',
    likes: '3.2K',
    comments: '156',
    caption: 'Stage comes alive 🎤',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=700&fit=crop',
    likes: '2.1K',
    comments: '98',
    caption: 'Community celebrations 🎉',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=700&fit=crop',
    likes: '4.1K',
    comments: '203',
    caption: 'Luxury gala night 🌟',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=700&fit=crop',
    likes: '2.4K',
    comments: '112',
    caption: 'Product launch success 🚀',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=700&fit=crop',
    likes: '3.8K',
    comments: '178',
    caption: 'Desert wedding magic 🏜️',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=700&fit=crop',
    likes: '1.7K',
    comments: '67',
    caption: 'Birthday extravaganza 🎂',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=700&fit=crop',
    likes: '5.2K',
    comments: '245',
    caption: 'Festival vibes 🎪',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=700&fit=crop',
    likes: '2.9K',
    comments: '134',
    caption: 'Concert night 🎵',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=700&fit=crop',
    likes: '3.5K',
    comments: '189',
    caption: 'Celebration time 🥳',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=700&fit=crop',
    likes: '4.7K',
    comments: '221',
    caption: 'Live performance 🎸',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&h=700&fit=crop',
    likes: '2.2K',
    comments: '94',
    caption: 'Dance floor energy 💃',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=700&fit=crop',
    likes: '3.1K',
    comments: '156',
    caption: 'Night to remember 🌙',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=700&fit=crop',
    likes: '1.8K',
    comments: '82',
    caption: 'Award ceremony 🏅',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=700&fit=crop',
    likes: '4.3K',
    comments: '198',
    caption: 'Party atmosphere 🎊',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=700&fit=crop',
    likes: '2.6K',
    comments: '117',
    caption: 'Crowd moments 👥',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400&h=700&fit=crop',
    likes: '3.9K',
    comments: '183',
    caption: 'Elegant setup ✨',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=700&fit=crop',
    likes: '2.3K',
    comments: '105',
    caption: 'Team celebration 🙌',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1546955311-79c4ffdda4b2?w=400&h=700&fit=crop',
    likes: '5.1K',
    comments: '267',
    caption: 'Grand finale 🎆',
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero - Video Focus with Bottom Left Content */}
      <section className="relative h-screen flex items-end overflow-hidden bg-black">
        {/* Full Screen Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2015/11/03/1258-144566586_medium.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay - stronger at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Bottom Left Content */}
        <div className="relative z-10 w-full pb-12 lg:pb-20 pl-6 sm:pl-10 lg:pl-16">
          <div className="w-full max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tagline */}
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: smoothEase }}
                className="text-[var(--brand-purple-light)] text-sm font-medium tracking-[0.2em] uppercase mb-6"
              >
                Premier Event Management
              </motion.p>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: smoothEase }}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              >
                Crafting Unforgettable
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-purple-light)] to-[var(--brand-gold)]">
                  Experiences
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: smoothEase }}
                className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
              >
                From weddings to corporate events, we bring your vision to life with precision and creativity.
              </motion.p>

              {/* Stats Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: smoothEase }}
                className="flex items-center gap-10 sm:gap-14 mb-4"
              >
                {[
                  { value: 10, label: 'Years', suffix: '+' },
                  { value: 500, label: 'Events', suffix: '+' },
                  { value: 200, label: 'Clients', suffix: '+' },
                ].map((stat, i) => (
                  <div key={i} className="text-left">
                    <p className="text-3xl lg:text-5xl font-bold text-white mb-2">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Right Side */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 right-8 lg:right-12 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Clients Marquee */}
      <section className="py-20 border-y border-gray-100 bg-[#fafafa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-px w-12 bg-[var(--brand-purple)]/30" />
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-purple)]">Trusted by leading brands</p>
            <span className="h-px w-12 bg-[var(--brand-purple)]/30" />
          </div>
        </div>
        
        <div className="w-full">
          <div className="marquee gap-16 pl-8">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="flex items-center justify-center min-w-[180px]">
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={200} 
                  height={100} 
                  className={`w-auto object-contain transition-transform duration-300 hover:scale-110 ${
                    logo.name === 'Lulu' ? 'h-12' : 'h-20'
                  }`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Sticky Scroll Section */}
      <section id="about" className="py-24 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20">
            {/* Left - Sticky Content */}
            <div className="lg:sticky lg:top-32 lg:self-start lg:py-32">
              <SlideIn direction="left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-[var(--brand-purple)]" />
                  <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--brand-purple)]">About Us</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--brand-purple)] tracking-tight leading-[1.1]">About Us</h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  At Laza Events, we bring your event vision to life with precision, creativity, and excellence. With over 10 years of experience in Qatar, our team of seasoned professionals is dedicated to delivering exceptional event solutions that exceed expectations.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/about-us" className="btn-primary">
                    Learn More <ArrowRight size={18} />
                  </Link>
                  <Link href="/contact-us" className="btn-outline-dark">
                    Contact Us
                  </Link>
                </div>
              </SlideIn>
            </div>

            {/* Right - Scrolling Images with Parallax */}
            <div className="mt-12 lg:mt-0 lg:py-32 space-y-8">
              <Parallax speed={0.2}>
                <ScaleReveal>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=900&fit=crop"
                      alt="Corporate conference event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScaleReveal>
              </Parallax>
              
              <Parallax speed={0.35}>
                <ScaleReveal delay={0.1}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=750&fit=crop"
                      alt="Panel discussion event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScaleReveal>
              </Parallax>
              
              <Parallax speed={0.25}>
                <ScaleReveal delay={0.2}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=900&fit=crop"
                      alt="Event technology setup"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScaleReveal>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Typewriter Section */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15]">
                Let Laza Events plan your<br />
                <TypewriterText words={['Corporate Event', 'Dream Wedding', 'Stage Show', 'Community Event', 'Product Launch', 'Gala Dinner']} />
              </h2>
              <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl">
                From corporate events to extravagant weddings, we craft immersive experiences with precision and passion.
              </p>
              <div className="mt-10">
                <Link href="/corporate-events" className="btn-primary">
                  Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Our Work - Expanding Gallery */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SlideIn direction="left">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--brand-purple)]" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--brand-purple)]">Our Work</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">Our Portfolio</h2>
            <p className="mt-3 text-gray-600 max-w-2xl text-lg">Each event is a masterpiece. Hover to explore our services.</p>
          </SlideIn>
          
          <Link href="/gallery" className="hidden md:inline-flex items-center text-[var(--brand-purple)] font-semibold hover:gap-4 transition-all gap-2 group">
            View Full Portfolio <ArrowRight className="group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Expanding Accordion */}
        <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full max-w-[1920px] mx-auto">
           {services.map((service, index) => (
             <Link 
               key={index} 
               href={service.href}
               className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group overflow-hidden border-b md:border-y-0 md:border-r border-white/20 last:border-0 h-72 md:h-auto"
             >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover filter grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/50 md:group-hover:bg-black/20 transition-colors duration-700" />
                
                {/* Content Overlay - Expanded State */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[var(--brand-purple)] font-bold text-xs md:text-sm tracking-wider uppercase mb-2">View Service</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-sm md:text-base line-clamp-2 max-w-md">
                      {service.desc}
                    </p>
                  </div>
                </div>
                
                {/* Collapsed Label (Desktop Only) */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                   <h3 className="font-display text-white text-2xl font-semibold tracking-wider [writing-mode:vertical-rl] rotate-180 whitespace-nowrap drop-shadow-lg">
                     {service.title}
                   </h3>
                </div>
             </Link>
           ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
            <Link href="/gallery" className="btn-primary">
              View Full Portfolio <ArrowRight size={16} />
            </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[var(--brand-purple)]" />
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--brand-purple)]">Client Stories</span>
                <span className="h-px w-8 bg-[var(--brand-purple)]" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">
                Hear From Those<br className="hidden md:block" /> We&apos;ve Served
              </h2>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Real experiences from clients who trusted us with their most important moments
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[var(--brand-gold)] text-[var(--brand-gold)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Instagram className="text-[var(--brand-purple)]" size={24} />
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--brand-purple)]">Behind The Scenes</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">
                Watch Our Latest<br className="hidden md:block" /> Event Reels
              </h2>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Experience the magic of our events through our Instagram reels
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Infinite Scrolling Reels Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
            {/* First set of reels */}
            {instagramReels.map((reel, index) => (
              <a
                key={`reel-1-${index}`}
                href="https://instagram.com/laza_events_official"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer mx-2"
              >
                {/* Thumbnail */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Play size={20} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Instagram Reel Badge */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                    <Instagram size={10} className="text-white" />
                    <span className="text-white text-[10px] font-medium">Reel</span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs line-clamp-1 mb-1.5 font-medium">{reel.caption}</p>
                  <div className="flex items-center gap-2 text-white/90 text-[10px]">
                    <div className="flex items-center gap-1">
                      <Heart size={10} fill="white" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={10} />
                      <span>{reel.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {instagramReels.map((reel, index) => (
              <a
                key={`reel-2-${index}`}
                href="https://instagram.com/laza_events_official"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer mx-2"
              >
                {/* Thumbnail */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Play size={20} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Instagram Reel Badge */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                    <Instagram size={10} className="text-white" />
                    <span className="text-white text-[10px] font-medium">Reel</span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs line-clamp-1 mb-1.5 font-medium">{reel.caption}</p>
                  <div className="flex items-center gap-2 text-white/90 text-[10px]">
                    <div className="flex items-center gap-1">
                      <Heart size={10} fill="white" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={10} />
                      <span>{reel.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/laza_events_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Instagram size={22} />
              Follow @laza_events_official on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp duration={1.2}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-[var(--brand-purple)] leading-tight">
              Where Vision Meets
              <span className="block italic">
                Celebration
              </span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.3} duration={1}>
            <p className="mt-6 font-display text-xl md:text-2xl lg:text-3xl text-[var(--brand-purple)]/80 font-medium">
              Crafting moments that last a lifetime, one event at a time
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
