'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Corporate Events', href: '/corporate-events' },
  { name: 'Weddings', href: '/wedding' },
  { name: 'Stage Shows', href: '/stage-show' },
  { name: 'Community Events', href: '/community-events' },
  { name: 'Equipment Rentals', href: '/rentals' },
  { name: 'Gifts & Mementos', href: '/memento-gifts' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // On homepage, trigger at viewport height (end of hero video)
      // On other pages, trigger at 50px
      const threshold = isHomePage ? window.innerHeight - 100 : 50;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Removed click outside listener because we are using hover now for desktop
  // but kept for mobile or specific interactions if needed, though hover simplifies it.

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));
  
  // Dynamic styles based on scroll state and page
  const isTransparent = isHomePage && !scrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent 
          ? 'bg-transparent border-transparent' 
          : 'bg-white shadow-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 md:h-16 transition-all duration-300">
          {/* Logo - Rigid on left */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo-web.png"
              alt="Laza Events"
              width={160}
              height={50}
              className="h-8 w-auto md:h-10 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav - Centered Absolute */}
          <div className="hidden lg:flex flex-grow justify-center items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className={`relative group text-sm font-medium tracking-wide transition-colors ${
                isActive('/') 
                  ? isTransparent ? 'text-white' : 'text-[var(--brand-purple)]' 
                  : isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[var(--brand-purple)]'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 ${isTransparent ? 'bg-white' : 'bg-[var(--brand-purple)]'} transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            <Link
              href="/about-us"
              className={`relative group text-sm font-medium tracking-wide transition-colors ${
                isActive('/about-us') 
                  ? isTransparent ? 'text-white' : 'text-[var(--brand-purple)]'
                  : isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[var(--brand-purple)]'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 ${isTransparent ? 'bg-white' : 'bg-[var(--brand-purple)]'} transition-all duration-300 ${isActive('/about-us') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            {/* Services Dropdown - Hover Trigger */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors relative group ${
                  services.some((s) => isActive(s.href))
                    ? isTransparent ? 'text-white' : 'text-[var(--brand-purple)]'
                    : isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[var(--brand-purple)]'
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 ${isTransparent ? 'bg-white' : 'bg-[var(--brand-purple)]'} transition-all duration-300 ${services.some((s) => isActive(s.href)) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 origin-top bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden p-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className={`relative group block px-4 py-3 rounded-lg text-sm transition-colors ${
                          isActive(service.href)
                            ? 'bg-[var(--brand-purple-50)] text-[var(--brand-purple)] font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--brand-purple)]'
                        }`}
                      >
                        <span className="relative">
                          {service.name}
                          <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--brand-purple)] transition-all duration-300 ${isActive(service.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/gallery"
              className={`relative group text-sm font-medium tracking-wide transition-colors ${
                isActive('/gallery') 
                  ? isTransparent ? 'text-white' : 'text-[var(--brand-purple)]'
                  : isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[var(--brand-purple)]'
              }`}
            >
              Portfolio
              <span className={`absolute bottom-0 left-0 h-0.5 ${isTransparent ? 'bg-white' : 'bg-[var(--brand-purple)]'} transition-all duration-300 ${isActive('/gallery') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            <Link
              href="/contact-us"
              className={`relative group text-sm font-medium tracking-wide transition-colors ${
                isActive('/contact-us') 
                  ? isTransparent ? 'text-white' : 'text-[var(--brand-purple)]'
                  : isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[var(--brand-purple)]'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 ${isTransparent ? 'bg-white' : 'bg-[var(--brand-purple)]'} transition-all duration-300 ${isActive('/contact-us') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          </div>

          {/* CTA - Rigid on right */}
          <div className="hidden lg:flex flex-shrink-0 ml-auto">
            <Link 
              href="/contact-us" 
              className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 ${
                isTransparent 
                  ? 'bg-white text-[var(--brand-purple)] shadow-lg hover:shadow-xl' 
                  : 'btn-primary shadow-md hover:shadow-lg'
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ml-auto z-50 relative flex items-center justify-center ${
              !isOpen && !isTransparent ? "text-gray-900" : "text-white"
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="w-8 h-8 flex flex-col justify-center items-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 6 L 20 6" },
                    open: { d: "M 6 18 L 18 6" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  d="M 4 12 L 20 12"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.1 }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 18 L 20 18" },
                    open: { d: "M 6 6 L 18 18" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              },
              closed: {
                opacity: 0,
                y: '-100%',
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.05,
                  staggerDirection: -1
                }
              }
            }}
            className="fixed inset-0 z-40 bg-[var(--brand-purple)] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-center p-6 w-full max-w-sm">
              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-bold text-white hover:text-[var(--brand-gold)] transition-colors"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="/about-us" 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-bold text-white hover:text-[var(--brand-gold)] transition-colors"
                >
                  About Us
                </Link>
              </motion.div>

              {/* Mobile Services Accordion */}
              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }} className="w-full flex flex-col items-center">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-2 text-3xl font-bold text-white hover:text-[var(--brand-gold)] transition-colors mb-4"
                >
                  Services
                  <ChevronDown size={24} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col items-center gap-4 overflow-hidden"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setServicesOpen(false);
                            setIsOpen(false);
                          }}
                          className="text-lg text-white/80 hover:text-white transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="/gallery" 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-bold text-white hover:text-[var(--brand-gold)] transition-colors"
                >
                  Portfolio
                </Link>
              </motion.div>

              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="/contact-us" 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-bold text-white hover:text-[var(--brand-gold)] transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
