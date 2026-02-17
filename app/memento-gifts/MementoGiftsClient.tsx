'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import PageHeader from '@/components/PageHeader';

const services = [
  { title: 'Corporate Gifts', desc: 'Branded gifts for clients and employees', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop' },
  { title: 'Trophies & Awards', desc: 'Custom awards and recognition items', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop' },
  { title: 'Event Giveaways', desc: 'Promotional items for events', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop' },
  { title: 'Custom Design', desc: 'Bespoke packaging and branding', image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop' },
  { title: 'Personalization', desc: 'Engraving, printing, and custom labels', image: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?w=600&h=400&fit=crop' },
  { title: 'Bulk Orders', desc: 'Large quantity fulfillment', image: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=600&h=400&fit=crop' },
];

const features = [
  'Premium quality products',
  'Custom branding options',
  'Fast turnaround times',
  'Elegant packaging',
  'Corporate volume pricing',
  'Design consultation included',
];

export default function MementoGiftsClient({ recentWork }: { recentWork: ReactNode }) {
  return (
    <main className="bg-white">
      <PageHeader
        kicker="Our Services"
        title="Memento & Gifts"
        subtitle="Thoughtfully curated gifts and keepsakes that leave lasting impressions."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Memento & Gifts' }]}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">What we offer</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Gift services</h2>
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
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Gifts that matter</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From executive gifts to event giveaways, we help you make a lasting impression with quality products and elegant presentation.
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
                <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&h=900&fit=crop" alt="Gifts and Mementos" fill className="object-cover" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Looking for corporate gifts?</h2>
            <p className="mt-4 text-white/80 text-lg">Get a custom quote for your gifting needs.</p>
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
