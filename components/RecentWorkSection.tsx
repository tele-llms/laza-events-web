// components/RecentWorkSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/sanity.client';
import { ArrowRight } from 'lucide-react';

interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  image: any;
}

interface RecentWorkSectionProps {
  items: PortfolioItem[];
  title?: string;
}

export default function RecentWorkSection({ items, title = "Recent Work" }: RecentWorkSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
           <div>
              <span className="text-[var(--brand-purple)] font-medium tracking-wide uppercase text-sm block mb-2">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
           </div>
           
           <Link 
             href="/gallery" 
             className="hidden md:flex items-center gap-2 text-[var(--brand-purple)] font-medium hover:gap-3 transition-all group"
           >
             View Full Gallery <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
             <motion.div
               key={item._id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
             >
                {item.image && (
                    <>
                    <Image
                        src={urlFor(item.image).width(600).height(450).url()}
                        alt={item.title || 'Event image'}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-xs uppercase tracking-wider mt-1 opacity-80">{item.category}</p>
                        </div>
                    </div>
                   </>
                )}
             </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <Link 
             href="/gallery" 
             className="inline-flex items-center gap-2 text-[var(--brand-purple)] font-medium"
           >
             View Full Gallery <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </section>
  );
}

