'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Laza Events Qatar | Get a Quote Today',
  description: 'Ready to plan your event in Qatar? Contact Laza Events for a consultation. Reach us by phone, email, or visit our office in Doha.',
  keywords: ['contact event planner qatar', 'laza events location', 'conference quote doha', 'wedding consultation qatar'],
};

export default function ContactUs() {
  return (
    <main className="bg-white pt-28">
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">Contact</div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Contact Details</h1>
            <p className="mt-4 text-gray-600">
              No forms. Just direct contact. Call, WhatsApp, or email us and we’ll respond quickly.
            </p>
          </motion.div>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="p-8">
                <div className="space-y-6">
                  <a
                    href="tel:+97470694883"
                    className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 hover:border-[rgba(107,76,154,0.35)] transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple-50)] text-[var(--brand-purple)]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Phone</div>
                      <div className="mt-1 text-gray-700">+974 7069 4883</div>
                      <div className="mt-1 text-sm text-gray-500">Mon–Sat 9:00–18:00</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@lazaevent.com"
                    className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 hover:border-[rgba(107,76,154,0.35)] transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple-50)] text-[var(--brand-purple)]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Email</div>
                      <div className="mt-1 text-gray-700">info@lazaevent.com</div>
                      <div className="mt-1 text-sm text-gray-500">We reply within 24 hours</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple-50)] text-[var(--brand-purple)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Location</div>
                      <div className="mt-1 text-gray-700">Doha, Qatar</div>
                      <div className="mt-1 text-sm text-gray-500">Visit by appointment</div>
                    </div>
                  </div>
                </div>

                <div className="divider my-8" />

                <div className="flex flex-wrap gap-3">
                  <a href="tel:+97470694883" className="btn-primary">
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/97470694883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    WhatsApp
                  </a>
                  <a href="mailto:info@lazaevent.com" className="btn-outline">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115616.64984789064!2d51.43676075!3d25.28544665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf72f0c5d2!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
