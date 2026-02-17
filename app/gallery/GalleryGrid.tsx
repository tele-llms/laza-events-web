"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { urlFor } from "@/sanity/sanity.client";

interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  image: any;
  videoUrl?: string;
}

interface GalleryGridProps {
  initialItems: PortfolioItem[];
}

export default function GalleryGrid({ initialItems }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use categories from Sanity or fallback
  const categories = ["All", "Corporate", "Wedding", "Stage", "Community", "Rentals", "Gifts"];

  const filteredItems = activeCategory === "All" 
    ? initialItems 
    : initialItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = filteredItems[currentIndex];

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        kicker="Portfolio"
        title="Event Gallery"
        subtitle="Our Portfolio"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {/* Category Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                  activeCategory === category
                    ? "bg-[var(--brand-purple)] text-white"
                    : "border border-gray-200 text-gray-700 hover:border-[rgba(107,76,154,0.35)] hover:text-[var(--brand-purple)]"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group border border-gray-100"
                >
                  {item.image && (
                    <Image
                      src={urlFor(item.image).width(800).height(600).url()}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white/80 text-xs uppercase tracking-[0.22em]">{item.category}</span>
                    <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              className="relative w-full max-w-6xl h-[80vh] flex flex-col items-center justify-center"
               onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentItem._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full h-full rounded-lg overflow-hidden"
              >
                 {currentItem.image && (
                    <Image
                      src={urlFor(currentItem.image).width(1600).url()}
                      alt={currentItem.title}
                      fill
                      className="object-contain"
                      priority
                    />
                 )}
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center z-10">
                <span className="text-white/75 text-xs uppercase tracking-[0.22em]">{currentItem.category}</span>
                <h3 className="text-2xl font-semibold text-white mt-1">
                  {currentItem.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1">{currentIndex + 1} / {filteredItems.length}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
