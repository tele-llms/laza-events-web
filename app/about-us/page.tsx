'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Calendar, Users, Heart, Shield, Star, CheckCircle2, Sparkles, Globe, Clock, Building2, PartyPopper } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const stats = [
  { number: '10+', label: 'Years of Excellence', icon: Calendar },
  { number: '500+', label: 'Events Executed', icon: PartyPopper },
  { number: '200+', label: 'Happy Clients', icon: Users },
  { number: '50+', label: 'Team Members', icon: Building2 },
];

const values = [
  {
    title: 'Precision',
    desc: 'We believe that excellence lies in the details. Every element of your event is meticulously planned and executed to perfection.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  {
    title: 'Passion',
    desc: 'We love what we do, and it shows. Our energy and enthusiasm drive us to create extraordinary experiences that leave lasting impressions.',
    image: 'https://images.unsplash.com/photo-1529543544277-750e7ea275c0?w=800&h=600&fit=crop',
  },
  {
    title: 'Integrity',
    desc: 'Trust is our foundation. We are transparent, reliable, and committed to delivering on our promises without compromise.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
  },
  {
    title: 'Innovation',
    desc: 'We constantly push boundaries, embracing new technologies and creative concepts to deliver fresh, memorable experiences.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    title: 'Partnership',
    desc: 'We view every client relationship as a partnership. Your success is our success, and we work alongside you every step of the way.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
  },
  {
    title: 'Excellence',
    desc: 'We never settle for good enough. Our commitment to excellence drives us to exceed expectations in every project we undertake.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    desc: 'Laza Events was founded with a vision to revolutionize event management in Qatar.',
  },
  {
    year: '2016',
    title: 'Expanding Horizons',
    desc: 'Expanded into wedding planning and large-scale corporate events.',
  },
  {
    year: '2018',
    title: 'Award Recognition',
    desc: 'Received first industry award for Best Corporate Event of the Year.',
  },
  {
    year: '2020',
    title: 'Innovation Through Challenges',
    desc: 'Pioneered hybrid and virtual event solutions.',
  },
  {
    year: '2022',
    title: 'FIFA World Cup Qatar',
    desc: 'Contributed to multiple events during the historic FIFA World Cup 2022.',
  },
  {
    year: '2024',
    title: 'Industry Leaders',
    desc: 'Recognized as one of Qatars leading event management companies.',
  },
];

const whyChooseUs = [
  { title: 'Local Expertise, Global Standards', desc: 'Deep understanding of Qatari culture combined with international best practices.', icon: Globe },
  { title: 'End-to-End Solutions', desc: 'From concept to cleanup, we handle every aspect of your event seamlessly.', icon: CheckCircle2 },
  { title: 'Dedicated Project Managers', desc: 'A single point of contact who knows your event inside and out.', icon: Users },
  { title: '24/7 Support', desc: 'Round-the-clock availability during your event for complete peace of mind.', icon: Clock },
  { title: 'Premium Vendor Network', desc: 'Access to Qatars finest caterers, decorators, entertainers, and venues.', icon: Star },
  { title: 'Transparent Pricing', desc: 'Detailed quotes with no hidden costs. What we quote is what you pay.', icon: Shield },
];

const clients = ['Qatar Petroleum', 'Qatar Airways', 'Katara Cultural Village', 'QNB', 'Vodafone Qatar', 'Al Jazeera Media Network', 'Qatar Foundation', 'Lusail City'];

export default function AboutUs() {
  return (
    <main className="bg-white">
      <PageHeader
        kicker="Who We Are"
        title="About Laza Events"
        subtitle="Qatars premier event management agency, dedicated to crafting unforgettable experiences through creativity, precision, and passion since 2014."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-3 bg-[var(--brand-purple)] px-5 py-2.5 rounded-full mb-6">
                <Sparkles className="text-white" size={20} />
                <span className="text-base font-bold text-white uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">More Than Just Event Planners</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>Founded in 2014, Laza Events began with a simple yet powerful vision: to transform how Qatar experiences events. What started as a passionate team of three has grown into a full-service event management powerhouse with over 50 dedicated professionals.</p>
                <p>We understand that every event tells a story. Whether its a milestone corporate celebration, a fairytale wedding, an electrifying stage show, or a community festival that brings people together—our goal is to tell that story in the most compelling and memorable way possible.</p>
                <p>Our team combines deep local expertise with global standards, ensuring that every project is culturally resonant yet world-class in execution. Weve had the privilege of working with some of Qatars most prestigious organizations and individuals.</p>
                <p>From the historic FIFA World Cup 2022 to intimate private gatherings, weve proven time and again that excellence knows no bounds when passion meets precision.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=1500&fit=crop" alt="Laza Events team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute top-8 -left-6 bg-white p-5 rounded-2xl shadow-xl hidden lg:block max-w-[220px] border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <span className="font-bold text-gray-900">Award Winning</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Recognized for excellence in event design and production across Qatar.</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[var(--brand-purple)] to-purple-700 p-5 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Events Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-purple)] via-purple-700 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="relative h-[400px] rounded-3xl overflow-hidden group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Our Mission" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/70 to-purple-900/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed text-lg">To create extraordinary event experiences that exceed expectations, foster meaningful connections, and leave lasting impressions. We are committed to bringing our clients visions to life through innovative design, flawless execution, and unwavering dedication to excellence.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }} 
              className="relative h-[400px] rounded-3xl overflow-hidden group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop" 
                alt="Our Vision" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/95 via-amber-900/70 to-amber-900/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-lg">To be the Middle Easts most trusted and innovative event management company, setting new standards in creativity, sustainability, and client satisfaction. We envision a future where every event we touch becomes a benchmark for excellence in the industry.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[var(--brand-purple)] px-5 py-2.5 rounded-full mb-4">
              <Calendar className="text-white" size={20} />
              <span className="text-base font-bold text-white uppercase tracking-wide">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">A Decade of Excellence</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From humble beginnings to becoming Qatars leading event management company</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block max-w-md">
                      <div className="text-sm font-bold text-[var(--brand-purple)] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-white border-4 border-[var(--brand-purple)] rounded-full items-center justify-center flex-shrink-0 z-10">
                    <div className="w-4 h-4 bg-[var(--brand-purple)] rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[var(--brand-purple)] px-5 py-2.5 rounded-full mb-4">
              <Heart className="text-white" size={20} />
              <span className="text-base font-bold text-white uppercase tracking-wide">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">The core principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 bg-[var(--brand-purple)] px-5 py-2.5 rounded-full mb-6">
                <Star className="text-white" size={20} />
                <span className="text-base font-bold text-white uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Laza Events Difference</h2>
              <p className="text-gray-600 text-lg mb-10">When you partner with us, youre not just hiring an event planner—youre gaining a dedicated team committed to making your vision a reality.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <div className="w-12 h-12 bg-[var(--brand-purple-50)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[var(--brand-purple)]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=750&fit=crop" alt="Corporate event" width={600} height={750} className="object-cover w-full h-full" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop" alt="Wedding event" width={400} height={400} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" alt="Festival event" width={400} height={400} className="object-cover w-full h-full" />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=750&fit=crop" alt="Stage show" width={600} height={750} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by Leading Organizations</p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-gray-400 font-semibold text-lg hover:text-[var(--brand-purple)] transition-colors cursor-default">
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--brand-purple)] via-purple-700 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-white" size={16} />
              <span className="text-sm font-semibold text-white">Lets Create Together</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Event Journey?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Partner with Qatars premier event management team and experience the difference that passion, precision, and expertise make.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+97470694883" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-[var(--brand-purple)] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Call +974 7069 4883
              </a>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Get in Touch <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}