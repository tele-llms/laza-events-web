'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import PageHeader from '@/components/PageHeader';

const services = [
  { title: 'Tents & Canopies', desc: 'Outdoor marquees and shade structures', image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&h=400&fit=crop', href: null },
  { title: 'Furniture Rental', desc: 'Chairs, tables, lounges, and more', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop', href: '/rentals/furniture' },
  { title: 'Lighting Equipment', desc: 'Decorative and stage lighting', image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&h=400&fit=crop', href: null },
  { title: 'Catering Equipment', desc: 'Serving dishes, chafing sets, linens', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop', href: null },
  { title: 'Audio Visual', desc: 'Sound systems, projectors, LED screens', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop', href: null },
  { title: 'Delivery & Setup', desc: 'Full logistics and installation', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&h=400&fit=crop', href: null },
];

const features = [
  'Premium quality equipment',
  'Flexible rental periods',
  'On-time delivery and pickup',
  'Professional installation',
  'Competitive pricing',
  'Wide inventory selection',
];

export default function RentalsClient({ recentWork }: { recentWork: ReactNode }) {
  return (
    <main className="bg-white">
      <PageHeader
        kicker="Our Services"
        title="Event Rentals"
        subtitle="Everything you need to set the stage — from furniture and lighting to full AV systems."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Rentals' }]}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">What we offer</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Rental services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const CardContent = (
                <>
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
                    {service.href && (
                      <span className="mt-3 inline-flex items-center gap-2 text-[var(--brand-purple-light)] text-sm font-medium">
                        View Collection <ArrowRight size={14} />
                      </span>
                    )}
                  </div>
                </>
              );

              return service.href ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={service.href} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer block">
                    {CardContent}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-lg"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">Why choose us</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Quality equipment</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We maintain a large inventory of premium event equipment, ensuring your event looks polished and professional.
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
                <Image src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=900&fit=crop" alt="Event Rentals" fill className="object-cover" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Need event equipment?</h2>
            <p className="mt-4 text-white/80 text-lg">Browse our catalog or get a custom quote today.</p>
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
