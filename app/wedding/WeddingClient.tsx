'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ReactNode } from 'react';
import PageHeader from '@/components/PageHeader';

const services = [
  { title: 'Full Planning', desc: 'Complete wedding coordination from start to finish', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
  { title: 'Décor & Florals', desc: 'Stunning arrangements that bring your vision to life', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop' },
  { title: 'Photography', desc: 'Capturing every precious moment', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop' },
  { title: 'Entertainment', desc: 'Live music and DJ services', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop' },
  { title: 'Catering', desc: 'Exquisite cuisine for every palate', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop' },
  { title: 'Special Effects', desc: 'Magical lighting and atmosphere', image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&h=400&fit=crop' },
];

const features = [
  'Venue selection and booking',
  'Wedding theme and décor design',
  'Invitation design and guest management',
  'Bridal and groom coordination',
  'Vendor management (photography, catering, entertainment)',
  'On-the-day coordination and execution',
];

export default function WeddingClient({ recentWork }: { recentWork: ReactNode }) {
  return (
    <main className="bg-white">
      <PageHeader
        kicker="Our Services"
        title="Weddings"
        subtitle="Your love story deserves a celebration as unique as your journey. We create magical moments that last a lifetime."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Weddings' }]}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">What we offer</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Wedding essentials</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  <p className="mt-2 text-gray-200 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">Why choose us</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">End-to-end wedding planning</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We handle every detail of your big day so you can relax and enjoy the celebration. From the first consultation to the last dance, we're by your side.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle2 className="text-[var(--brand-purple)] mr-3 flex-shrink-0" size={18} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop" alt="Wedding" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-gray-100 shadow-lg p-5 hidden sm:block">
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-500">Weddings delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      {recentWork}

      {/* CTA */}
      <section className="py-20 bg-[var(--brand-purple)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to plan your dream wedding?</h2>
            <p className="mt-4 text-white/80 text-lg">Let&apos;s create an unforgettable celebration.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+97470694883" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[var(--brand-purple)] font-semibold shadow hover:bg-gray-100 transition-colors">
                Call +974 7069 4883
              </a>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
                Contact Details <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
