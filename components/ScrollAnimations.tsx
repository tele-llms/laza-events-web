'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Text reveal animation - words fade up one by one
export function TextReveal({ 
  children, 
  className = '',
  delay = 0,
}: { 
  children: string; 
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.word');
    
    gsap.fromTo(
      words,
      { 
        y: 60, 
        opacity: 0,
        rotateX: -40,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
        delay,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={`${className} overflow-hidden`} style={{ perspective: '1000px' }}>
      {words.map((word, i) => (
        <span 
          key={i} 
          className="word inline-block mr-[0.3em]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

// Fade up animation for any element
export function FadeUp({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { 
        y: 80, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Parallax effect for images
export function Parallax({ 
  children, 
  className = '',
  speed = 0.3,
}: { 
  children: React.ReactNode; 
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: () => -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Scale reveal animation
export function ScaleReveal({ 
  children, 
  className = '',
  delay = 0,
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { 
        scale: 0.85, 
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Horizontal slide animation
export function SlideIn({ 
  children, 
  className = '',
  direction = 'left',
  delay = 0,
}: { 
  children: React.ReactNode; 
  className?: string;
  direction?: 'left' | 'right';
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xValue = direction === 'left' ? -100 : 100;

    gsap.fromTo(
      element,
      { 
        x: xValue, 
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Line reveal - for decorative lines
export function LineReveal({ 
  className = '',
  direction = 'horizontal',
}: { 
  className?: string;
  direction?: 'horizontal' | 'vertical';
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const props = direction === 'horizontal' 
      ? { scaleX: 0, transformOrigin: 'left center' }
      : { scaleY: 0, transformOrigin: 'top center' };

    const toProps = direction === 'horizontal' 
      ? { scaleX: 1 }
      : { scaleY: 1 };

    gsap.fromTo(
      element,
      props,
      {
        ...toProps,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction]);

  return <div ref={ref} className={className} />;
}

// Stagger children animation
export function StaggerReveal({ 
  children, 
  className = '',
  stagger = 0.1,
}: { 
  children: React.ReactNode; 
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.children;

    gsap.fromTo(
      items,
      { 
        y: 60, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
