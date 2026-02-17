'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';

// Furniture data with local images
const furnitureData = [
  {
    id: 1,
    name: 'Velvet Elegance Sofa',
    description: 'A luxurious velvet sofa perfect for VIP lounges and upscale events. Features deep cushioning and elegant curved armrests.',
    color: 'Royal Purple',
    dimensions: '220cm x 90cm x 85cm',
    seating: '3 Seater',
    pricePerDay: 'QAR 450',
    image: '/images/furniture/sofa-1.png',
  },
  {
    id: 2,
    name: 'Modern Chesterfield',
    description: 'Classic Chesterfield design with a modern twist. Tufted leather upholstery adds sophistication to any corporate event.',
    color: 'Midnight Black',
    dimensions: '240cm x 95cm x 80cm',
    seating: '3 Seater',
    pricePerDay: 'QAR 550',
    image: '/images/furniture/sofa-2.png',
  },
  {
    id: 3,
    name: 'Cloud Comfort Sectional',
    description: 'Modular sectional sofa that can be configured to fit any space. Ultra-soft fabric with plush seating.',
    color: 'Pearl White',
    dimensions: '300cm x 180cm x 75cm',
    seating: '6 Seater',
    pricePerDay: 'QAR 750',
    image: '/images/furniture/sofa-3.png',
  },
  {
    id: 4,
    name: 'Arabian Majlis Set',
    description: 'Traditional Arabic floor seating with contemporary comfort. Perfect for cultural events and traditional gatherings.',
    color: 'Gold & Burgundy',
    dimensions: '250cm x 250cm x 45cm',
    seating: '8 Seater',
    pricePerDay: 'QAR 650',
    image: '/images/furniture/sofa-4.png',
  },
  {
    id: 5,
    name: 'Minimalist Lounge Sofa',
    description: 'Sleek, low-profile design ideal for modern exhibitions and contemporary event spaces. Clean lines and premium fabric.',
    color: 'Charcoal Grey',
    dimensions: '200cm x 85cm x 70cm',
    seating: '2 Seater',
    pricePerDay: 'QAR 380',
    image: '/images/furniture/sofa-5.png',
  },
];

export default function FurnitureRentals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);

  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % furnitureData.length);
    setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 800);
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + furnitureData.length) % furnitureData.length);
    setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 800);
  }, []);

  // Lock body scroll and handle wheel events
  useEffect(() => {
    // Function to set up desktop behavior
    const setupDesktopScroll = () => {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = '';
        document.body.style.height = '';
        return;
      }

      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    };

    // Initial setup
    setupDesktopScroll();

    const handleWheel = (e: WheelEvent) => {
      // Only intervene on desktop
      if (window.innerWidth < 1024) return;

      e.preventDefault();
      
      if (isAnimatingRef.current) return;
      
      if (e.deltaY > 20) {
        handleNext();
      } else if (e.deltaY < -20) {
        handlePrev();
      }
    };

    const handleResize = () => {
      setupDesktopScroll();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleNext, handlePrev]);

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentFurniture = furnitureData[activeIndex];

  return (
    <main 
      className="bg-white min-h-screen lg:h-screen lg:overflow-hidden relative flex flex-col lg:block"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Back Navigation */}
      <div className="fixed top-20 lg:top-6 left-6 z-50 text-white lg:text-gray-600 mix-blend-difference lg:mix-blend-normal">
        <Link 
          href="/rentals" 
          className="inline-flex items-center gap-2 hover:text-[var(--brand-purple)] transition-colors text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back to Rentals
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row h-full">
        {/* Mobile: Image on Top */}
        <div className="lg:hidden w-full h-[45vh] bg-gradient-to-b from-[var(--brand-purple)] to-purple-800 relative flex items-center justify-center overflow-hidden rounded-b-[40px] shadow-2xl z-0">
          <AnimatePresence mode="wait">
             <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ duration: 0.5 }}
              className="relative w-[300px] h-[220px]"
            >
              <Image
                src={currentFurniture.image}
                alt={currentFurniture.name}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile Swipe Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
             {furnitureData.map((_, idx) => (
               <div 
                 key={idx} 
                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`} 
               />
             ))}
          </div>
        </div>

        {/* Left Side - Details (Desktop & Mobile Content) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16 relative z-20 flex-1">
          <div className="max-w-xl w-full pb-20 lg:pb-0">
            {/* Page Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 lg:mb-10 hidden lg:block"
            >
              <p className="text-[var(--brand-purple)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                Furniture Rentals
              </p>
              <h1 className="text-gray-900 text-3xl font-bold">
                Premium Collection
              </h1>
            </motion.div>

            {/* Furniture Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Counter */}
                <div className="flex items-baseline gap-2 mb-4 lg:mb-6 mt-4 lg:mt-0">
                  <span className="text-5xl lg:text-8xl font-bold text-[var(--brand-purple)]">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-gray-300 text-xl lg:text-2xl font-light">
                    / {String(furnitureData.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Name */}
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
                  {currentFurniture.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                  {currentFurniture.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8">
                  <div className="bg-gray-50 p-3 lg:p-4 rounded-xl">
                    <p className="text-gray-400 text-[10px] lg:text-xs uppercase tracking-wider mb-1">Color</p>
                    <p className="text-gray-900 font-semibold text-sm lg:text-base">{currentFurniture.color}</p>
                  </div>
                  <div className="bg-gray-50 p-3 lg:p-4 rounded-xl">
                    <p className="text-gray-400 text-[10px] lg:text-xs uppercase tracking-wider mb-1">Seating</p>
                    <p className="text-gray-900 font-semibold text-sm lg:text-base">{currentFurniture.seating}</p>
                  </div>
                  <div className="bg-gray-50 p-3 lg:p-4 rounded-xl">
                    <p className="text-gray-400 text-[10px] lg:text-xs uppercase tracking-wider mb-1">Dimensions</p>
                    <p className="text-gray-900 font-semibold text-sm lg:text-sm">{currentFurniture.dimensions}</p>
                  </div>
                  <div className="bg-gray-50 p-3 lg:p-4 rounded-xl">
                    <p className="text-gray-400 text-[10px] lg:text-xs uppercase tracking-wider mb-1">Price / Day</p>
                    <p className="text-[var(--brand-purple)] font-bold text-base lg:text-lg">{currentFurniture.pricePerDay}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-2 lg:gap-3 bg-[var(--brand-purple)] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-[var(--brand-purple-dark)] transition-all duration-300 shadow-lg shadow-purple-500/25 text-sm lg:text-base w-full lg:w-auto justify-center"
                >
                  Inquire Now
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Desktop Only now that we have swipe */}
            <div className="flex items-center gap-4 mt-8 lg:mt-12 hidden lg:flex">
              <button 
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--brand-purple)] hover:border-[var(--brand-purple)] transition-all disabled:opacity-50"
              >
                <ChevronUp size={24} />
              </button>
              <button 
                onClick={handleNext}
                disabled={isAnimating}
                className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--brand-purple)] hover:border-[var(--brand-purple)] transition-all disabled:opacity-50"
              >
                <ChevronDown size={24} />
              </button>
              <span className="text-gray-400 text-sm ml-4">or scroll to navigate</span>
            </div>
            
            {/* Mobile Navigation Buttons (in case swipe isn't obvious) */}
            <div className="flex lg:hidden justify-between mt-8 pb-8">
               <button 
                onClick={handlePrev}
                className="flex items-center gap-2 text-gray-500 font-medium"
              >
                 <ArrowLeft size={16} /> Previous
              </button>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 text-[var(--brand-purple)] font-medium"
              >
                 Next <ArrowRight size={16} /> 
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Big Purple Circle with Centered Image */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center">
          {/* Large Purple Half Circle - Fixed on right edge */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -right-[350px] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[var(--brand-purple)] via-purple-600 to-purple-800"
            style={{
              boxShadow: '-50px 0 100px rgba(139, 92, 246, 0.3)',
            }}
          />
          
          {/* Inner glow circle */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -right-[330px] w-[660px] h-[660px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            }}
          />

          {/* Centered Large Sofa Image */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="relative w-[700px] h-[500px]"
              >
                <Image
                  src={currentFurniture.image}
                  alt={currentFurniture.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400/50" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>

        {/* Mobile View - Removed fixed overlay, replaced by inline flow above */}
      </div>

      {/* Progress Dots - Right Side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {furnitureData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-[var(--brand-purple)] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </main>
  );
}
