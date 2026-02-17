'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ReactNode } from 'react';
import PageHeader from '@/components/PageHeader';

const services = [
  { title: 'Conferences & Seminars', desc: 'Large-scale events with professional production', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop' },
  { title: 'Team Building', desc: 'Engaging activities that strengthen teams', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop' },
  { title: 'Product Launches', desc: 'Memorable reveals that make an impact', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop' },
  { title: 'Award Ceremonies', desc: 'Elegant celebrations of achievement', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop' },
];

const features = [
  'Full event conceptualization and planning',
  'Venue sourcing and management',
  'Audio-visual production',
  'Catering and hospitality',
  'Guest management and registration',
  'Post-event analytics and reporting',
];

export default function CorporateEventsClient({ recentWork }: { recentWork: ReactNode }) {
  return (
    <main className="bg-white">
      <PageHeader
        kicker="Services"
        title="Corporate Events"
        subtitle="Professional planning and execution for conferences, launches, team events, and award ceremonies."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Corporate Events' }]}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">What we offer</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">Corporate event solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
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

          <div className="mt-12 flex justify-center">
            <Link href="/contact-us" className="btn-primary">
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">Why choose us</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">End-to-end excellence</h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed mb-8">
                We handle every aspect of your corporate event, ensuring a seamless experience from concept to completion.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle2 className="text-[var(--brand-purple)] mr-3 flex-shrink-0" size={20} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=1000&fit=crop"
                  alt="Corporate Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-gray-900">200+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gray-500">Corporate events</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      {recentWork}

      {/* CTA */}
      <section className="py-20 bg-[var(--brand-purple)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to elevate your next corporate event?</h2>
            <p className="mt-4 text-white/80 text-lg">Call, WhatsApp, or email us — we&apos;ll respond quickly.</p>
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
