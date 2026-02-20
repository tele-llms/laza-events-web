import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';

const serviceLinks = [
  { name: 'Corporate Events', href: '/corporate-events' },
  { name: 'Weddings', href: '/wedding' },
  { name: 'Stage Shows', href: '/stage-show' },
  { name: 'Community Events', href: '/community-events' },
  { name: 'Equipment Rentals', href: '/rentals' },
  { name: 'Gifts & Mementos', href: '/memento-gifts' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Portfolio', href: '/gallery' },
  { name: 'Contact', href: '/contact-us' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image src="/logo-footer.png" alt="Laza Events" width={140} height={42} className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-gray-400 leading-relaxed text-sm">
              Premium event management in Qatar — from corporate conferences and weddings to live shows and community celebrations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/laza_events_official"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-purple)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579970287675"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-purple)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@Lazaevent"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-purple)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-[var(--brand-purple)] flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <a href="tel:+97470694883" className="text-gray-300 hover:text-white">+974 7069 4883</a>
                  <p className="text-gray-500 text-xs mt-0.5">Mon–Sat 9:00–18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[var(--brand-purple)] flex-shrink-0 mt-0.5" size={16} />
                <a href="mailto:info@lazaevent.com" className="text-gray-300 hover:text-white">info@lazaevent.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--brand-purple)] flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300">Doha, Qatar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Laza Events. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
