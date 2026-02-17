"use client";'use client';'use client';'use client';



import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";import { useState } from 'react';

import { X, ChevronLeft, ChevronRight } from "lucide-react";

import PageHeader from "@/components/PageHeader";import { motion, AnimatePresence } from 'framer-motion';

import { urlFor } from "@/sanity/sanity.client";

import Image from 'next/image';import { useState } from 'react';import { useState } from 'react';

interface PortfolioItem {

  _id: string;import { X, ChevronLeft, ChevronRight } from 'lucide-react';

  title: string;

  category: string;import PageHeader from '@/components/PageHeader';import { motion, AnimatePresence } from 'framer-motion';import { motion, AnimatePresence } from 'framer-motion';

  image: any;

  videoUrl?: string;import { urlFor } from '@/sanity/sanity.client';

}

import Image from 'next/image';import Image from 'next/image';

interface GalleryClientProps {

  initialItems: PortfolioItem[];interface PortfolioItem {

}

  _id: string;import { X, ChevronLeft, ChevronRight } from 'lucide-react';import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryClient({ initialItems }: GalleryClientProps) {

  const [activeCategory, setActiveCategory] = useState("All");  title: string;

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);  category: string;import PageHeader from '@/components/PageHeader';import PageHeader from '@/components/PageHeader';



  // Use categories from Sanity or fallback  image: any;

  const categories = ["All", "Corporate", "Wedding", "Stage", "Community"];

  videoUrl?: string;import { urlFor } from '@/sanity/sanity.client';

  const filteredItems = activeCategory === "All" 

    ? initialItems }

    : initialItems.filter(item => item.category === activeCategory);

interface GalleryClientProps {

  const openLightbox = (index: number) => {

    setCurrentIndex(index);interface GalleryClientProps {

    setLightboxOpen(true);

    document.body.style.overflow = "hidden";  initialItems: PortfolioItem[];interface PortfolioItem {  initialItems: {

  };

}

  const closeLightbox = () => {

    setLightboxOpen(false);  _id: string;    _id: string;

    document.body.style.overflow = "auto";

  };export default function GalleryClient({ initialItems }: GalleryClientProps) {



  const nextImage = () => {  const [activeCategory, setActiveCategory] = useState('All');  title: string;    title: string;

    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);

  };  const [lightboxOpen, setLightboxOpen] = useState(false);



  const prevImage = () => {  const [currentIndex, setCurrentIndex] = useState(0);  category: string;    category: string;

    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);

  };



  const currentItem = filteredItems[currentIndex];  // Use categories from Sanity or fallback  image: any;    image: any;



  return (  const categories = ['All', 'Corporate', 'Wedding', 'Stage', 'Community'];

    <main className="bg-white min-h-screen">

      <PageHeader  videoUrl?: string;    videoUrl?: string;

        kicker="Portfolio"

        title="Event Gallery"  const filteredItems = activeCategory === 'All' 

        subtitle="Our Portfolio"

        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}    ? initialItems }  }[];

      />

    : initialItems.filter(item => item.category === activeCategory);

      {/* Category Filter */}

      <section className="pb-12">}

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div  const openLightbox = (index: number) => {

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}    setCurrentIndex(index);interface GalleryClientProps {

            viewport={{ once: true }}

            transition={{ delay: 0.2 }}    setLightboxOpen(true);

            className="flex flex-wrap justify-center gap-4"

          >    document.body.style.overflow = 'hidden';  initialItems: PortfolioItem[];import { urlFor } from '@/sanity/sanity.client'; // Ensure this exists or use a helper

            {categories.map((category) => (

              <button  };

                key={category}

                onClick={() => setActiveCategory(category)}}

                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${

                  activeCategory === category  const closeLightbox = () => {

                    ? "bg-[var(--brand-purple)] text-white"

                    : "border border-gray-200 text-gray-700 hover:border-[rgba(107,76,154,0.35)] hover:text-[var(--brand-purple)]"    setLightboxOpen(false);// Helper function to build image url if not using next-sanity-image

                }`}

              >    document.body.style.overflow = 'auto';

                {category}

              </button>  };export default function GalleryClient({ initialItems }: GalleryClientProps) {const getImageUrl = (source: any) => {

            ))}

          </motion.div>

        </div>

      </section>  const nextImage = () => {  const [activeCategory, setActiveCategory] = useState('All');  return source ? urlFor(source).url() : '';



      {/* Gallery Grid */}    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">  };  const [lightboxOpen, setLightboxOpen] = useState(false);};

          <motion.div 

            layout

            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

          >  const prevImage = () => {  const [currentIndex, setCurrentIndex] = useState(0);

            <AnimatePresence mode="popLayout">

              {filteredItems.map((item, index) => (    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);

                <motion.div

                  key={item._id}  };export default function GalleryClient({ initialItems }: GalleryClientProps) {

                  layout

                  initial={{ opacity: 0, scale: 0.9 }}

                  animate={{ opacity: 1, scale: 1 }}

                  exit={{ opacity: 0, scale: 0.9 }}  const currentItem = filteredItems[currentIndex];  // Use categories from Sanity or fallback  const [activeCategory, setActiveCategory] = useState('All');

                  transition={{ duration: 0.4 }}

                  onClick={() => openLightbox(index)}

                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group border border-gray-100"

                >  return (  const categories = ['All', 'Corporate', 'Wedding', 'Stage', 'Community'];  const [lightboxOpen, setLightboxOpen] = useState(false);

                  {item.image && (

                    <Image    <main className="bg-white min-h-screen">

                      src={urlFor(item.image).width(800).height(600).url()}

                      alt={item.title}      <PageHeader  const [currentImage, setCurrentImage] = useState(0);

                      fill

                      className="object-cover transition-transform duration-700 group-hover:scale-110"        kicker="Portfolio"

                    />

                  )}        title="Event Gallery"  const filteredItems = activeCategory === 'All' 

                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">        subtitle="Our Portfolio"

                    <span className="text-white/80 text-xs uppercase tracking-[0.22em]">{item.category}</span>

                    <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}    ? initialItems   const categories = ['All', 'Wedding', 'Corporate', 'Stage', 'Community']; // Updated to match schema values

                  </div>

                </motion.div>      />

              ))}

            </AnimatePresence>    : initialItems.filter(item => item.category === activeCategory);

          </motion.div>

        </div>      {/* Category Filter */}

      </section>

      <section className="pb-12">  const filteredImages = activeCategory === 'All' 

      {/* Lightbox */}

      <AnimatePresence>        <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {lightboxOpen && currentItem && (

          <motion.div          <motion.div  const openLightbox = (index: number) => {    ? initialItems 

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}            initial={{ opacity: 0, y: 20 }}

            exit={{ opacity: 0 }}

            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"            whileInView={{ opacity: 1, y: 0 }}    setCurrentIndex(index);    : initialItems.filter(item => item.category === activeCategory);

            onClick={closeLightbox}

          >            viewport={{ once: true }}

            <button

              onClick={closeLightbox}            transition={{ delay: 0.2 }}    setLightboxOpen(true);

              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"

            >            className="flex flex-wrap justify-center gap-4"

              <X size={24} />

            </button>          >    document.body.style.overflow = 'hidden';  const openLightbox = (index: number) => {

            

            <button            {categories.map((category) => (

              onClick={(e) => { e.stopPropagation(); prevImage(); }}

              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"              <button  };    setCurrentImage(index);

            >

              <ChevronLeft size={24} />                key={category}

            </button>

                            onClick={() => setActiveCategory(category)}    setLightboxOpen(true);

            <button

              onClick={(e) => { e.stopPropagation(); nextImage(); }}                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${

              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"

            >                  activeCategory === category  const closeLightbox = () => {    document.body.style.overflow = 'hidden';

              <ChevronRight size={24} />

            </button>                    ? 'bg-[var(--brand-purple)] text-white'



            <div                     : 'border border-gray-200 text-gray-700 hover:border-[rgba(107,76,154,0.35)] hover:text-[var(--brand-purple)]'    setLightboxOpen(false);  };

              className="relative w-full max-w-6xl h-[80vh] flex flex-col items-center justify-center"

               onClick={(e) => e.stopPropagation()}                }`}

            >

              <motion.div              >    document.body.style.overflow = 'auto';

                key={currentItem._id}

                initial={{ opacity: 0, scale: 0.95 }}                {category}

                animate={{ opacity: 1, scale: 1 }}

                exit={{ opacity: 0, scale: 0.95 }}              </button>  };  // ... (rest of logic adapted)

                className="relative w-full h-full rounded-lg overflow-hidden"

              >            ))}

                 {currentItem.image && (

                    <Image          </motion.div>

                      src={urlFor(currentItem.image).width(1600).url()}

                      alt={currentItem.title}        </div>

                      fill

                      className="object-contain"      </section>  const nextImage = () => {  const closeLightbox = () => {

                      priority

                    />

                 )}

              </motion.div>      {/* Gallery Grid */}    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);    setLightboxOpen(false);



              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center z-10">      <section className="pb-32">

                <span className="text-white/75 text-xs uppercase tracking-[0.22em]">{currentItem.category}</span>

                <h3 className="text-2xl font-semibold text-white mt-1">        <div className="max-w-7xl mx-auto px-6 lg:px-8">  };    document.body.style.overflow = 'auto';

                  {currentItem.title}

                </h3>          <motion.div 

                <p className="text-gray-400 text-xs mt-1">{currentIndex + 1} / {filteredItems.length}</p>

              </div>            layout  };

            </div>

          </motion.div>            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

        )}

      </AnimatePresence>          >  const prevImage = () => {

    </main>

  );            <AnimatePresence mode="popLayout">

}

              {filteredItems.map((item, index) => (    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);  const nextImage = () => {

                <motion.div

                  key={item._id}  };    setCurrentImage((prev) => (prev + 1) % filteredImages.length);

                  layout

                  initial={{ opacity: 0, scale: 0.9 }}  };

                  animate={{ opacity: 1, scale: 1 }}

                  exit={{ opacity: 0, scale: 0.9 }}  const currentItem = filteredItems[currentIndex];

                  transition={{ duration: 0.4 }}

                  onClick={() => openLightbox(index)}  const prevImage = () => {

                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group border border-gray-100"

                >  return (    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

                  {item.image && (

                    <Image    <main className="bg-white min-h-screen">  };

                      src={urlFor(item.image).width(800).height(600).url()}

                      alt={item.title}      <PageHeader

                      fill

                      className="object-cover transition-transform duration-700 group-hover:scale-110"        kicker="Portfolio"  return (

                    />

                  )}        title="Event Gallery"    <main className="bg-white min-h-screen">

                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">        subtitle="Our Portfolio"      <PageHeader

                    <span className="text-white/80 text-xs uppercase tracking-[0.22em]">{item.category}</span>

                    <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}        kicker="Portfolio"

                  </div>

                </motion.div>      />        title="Event Gallery"

              ))}

            </AnimatePresence>        subtitle="A showcase of moments we’ve created for clients across Qatar."

          </motion.div>

        </div>      {/* Category Filter */}        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}

      </section>

      <section className="pb-12">      />

      {/* Lightbox */}

      <AnimatePresence>        <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {lightboxOpen && currentItem && (

          <motion.div          <motion.div      {/* Category Filter */}

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}            initial={{ opacity: 0, y: 20 }}      <section className="pb-12">

            exit={{ opacity: 0 }}

            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"            whileInView={{ opacity: 1, y: 0 }}        <div className="max-w-7xl mx-auto px-6 lg:px-8">

            onClick={closeLightbox}

          >            viewport={{ once: true }}          <motion.div

            <button

              onClick={closeLightbox}            transition={{ delay: 0.2 }}            initial={{ opacity: 0, y: 20 }}

              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"

            >            className="flex flex-wrap justify-center gap-4"            whileInView={{ opacity: 1, y: 0 }}

              <X size={24} />

            </button>          >            viewport={{ once: true }}

            

            <button            {categories.map((category) => (            transition={{ delay: 0.2 }}

              onClick={(e) => { e.stopPropagation(); prevImage(); }}

              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"              <button            className="flex flex-wrap justify-center gap-4"

            >

              <ChevronLeft size={24} />                key={category}          >

            </button>

                            onClick={() => setActiveCategory(category)}            {categories.map((category) => (

            <button

              onClick={(e) => { e.stopPropagation(); nextImage(); }}                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${              <button

              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"

            >                  activeCategory === category                key={category}

              <ChevronRight size={24} />

            </button>                    ? 'bg-[var(--brand-purple)] text-white'                onClick={() => setActiveCategory(category)}



            <div                     : 'border border-gray-200 text-gray-700 hover:border-[rgba(107,76,154,0.35)] hover:text-[var(--brand-purple)]'                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${

              className="relative w-full max-w-6xl h-[80vh] flex flex-col items-center justify-center"

               onClick={(e) => e.stopPropagation()}                }`}                  activeCategory === category

            >

              <motion.div              >                    ? 'bg-[var(--brand-purple)] text-white'

                key={currentItem._id}

                initial={{ opacity: 0, scale: 0.95 }}                {category}                    : 'border border-gray-200 text-gray-700 hover:border-[rgba(107,76,154,0.35)] hover:text-[var(--brand-purple)]'

                animate={{ opacity: 1, scale: 1 }}

                exit={{ opacity: 0, scale: 0.95 }}              </button>                }`}

                className="relative w-full h-full rounded-lg overflow-hidden"

              >            ))}              >

                 {currentItem.image && (

                    <Image          </motion.div>                {category}

                      src={urlFor(currentItem.image).width(1600).url()}

                      alt={currentItem.title}        </div>              </button>

                      fill

                      className="object-contain"      </section>            ))}

                      priority

                    />          </motion.div>

                 )}

              </motion.div>      {/* Gallery Grid */}        </div>



              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center z-10">      <section className="pb-32">      </section>

                <span className="text-white/75 text-xs uppercase tracking-[0.22em]">{currentItem.category}</span>

                <h3 className="text-2xl font-semibold text-white mt-1">        <div className="max-w-7xl mx-auto px-6 lg:px-8">

                  {currentItem.title}

                </h3>          <motion.div       {/* Gallery Grid */}

                <p className="text-gray-400 text-xs mt-1">{currentIndex + 1} / {filteredItems.length}</p>

              </div>            layout      <section className="pb-32">

            </div>

          </motion.div>            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"        <div className="max-w-7xl mx-auto px-6 lg:px-8">

        )}

      </AnimatePresence>          >          <motion.div 

    </main>

  );            <AnimatePresence mode="popLayout">            layout

}

              {filteredItems.map((item, index) => (            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

                <motion.div          >

                  key={item._id}            <AnimatePresence mode="popLayout">

                  layout              {filteredImages.map((image, index) => (

                  initial={{ opacity: 0, scale: 0.9 }}                <motion.div

                  animate={{ opacity: 1, scale: 1 }}                  key={image.src}

                  exit={{ opacity: 0, scale: 0.9 }}                  layout

                  transition={{ duration: 0.4 }}                  initial={{ opacity: 0, scale: 0.9 }}

                  onClick={() => openLightbox(index)}                  animate={{ opacity: 1, scale: 1 }}

                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group border border-gray-100"                  exit={{ opacity: 0, scale: 0.9 }}

                >                  transition={{ duration: 0.4 }}

                  {item.image && (                  onClick={() => openLightbox(index)}

                    <Image                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group border border-gray-100"

                      src={urlFor(item.image).width(800).height(600).url()}                >

                      alt={item.title}                  <Image

                      fill                    src={image.src}

                      className="object-cover transition-transform duration-700 group-hover:scale-110"                    alt={image.title}

                    />                    fill

                  )}                    className="object-cover img-zoom"

                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="text-white/80 text-xs uppercase tracking-[0.22em]">{item.category}</span>                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">

                    <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>                    <span className="text-white/80 text-xs uppercase tracking-[0.22em]">{image.category}</span>

                  </div>                    <h3 className="text-xl font-semibold text-white mt-2">{image.title}</h3>

                </motion.div>                  </div>

              ))}                </motion.div>

            </AnimatePresence>              ))}

          </motion.div>            </AnimatePresence>

        </div>          </motion.div>

      </section>        </div>

      </section>

      {/* Lightbox */}

      <AnimatePresence>      {/* Lightbox */}

        {lightboxOpen && currentItem && (      <AnimatePresence>

          <motion.div        {lightboxOpen && (

            initial={{ opacity: 0 }}          <motion.div

            animate={{ opacity: 1 }}            initial={{ opacity: 0 }}

            exit={{ opacity: 0 }}            animate={{ opacity: 1 }}

            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"            exit={{ opacity: 0 }}

            onClick={closeLightbox}            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"

          >            onClick={closeLightbox}

            <button          >

              onClick={closeLightbox}            <button

              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"              onClick={closeLightbox}

            >              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"

              <X size={24} />            >

            </button>              <X size={24} />

                        </button>

            <button            

              onClick={(e) => { e.stopPropagation(); prevImage(); }}            <button

              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"              onClick={(e) => { e.stopPropagation(); prevImage(); }}

            >              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"

              <ChevronLeft size={24} />            >

            </button>              <ChevronLeft size={24} />

                        </button>

            <button            

              onClick={(e) => { e.stopPropagation(); nextImage(); }}            <button

              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"              onClick={(e) => { e.stopPropagation(); nextImage(); }}

            >              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"

              <ChevronRight size={24} />            >

            </button>              <ChevronRight size={24} />

            </button>

            <div 

              className="relative w-full max-w-6xl h-[80vh] flex flex-col items-center justify-center"            <motion.div

               onClick={(e) => e.stopPropagation()}              key={currentImage}

            >              initial={{ opacity: 0, scale: 0.9 }}

              <motion.div              animate={{ opacity: 1, scale: 1 }}

                key={currentItem._id}              exit={{ opacity: 0, scale: 0.9 }}

                initial={{ opacity: 0, scale: 0.95 }}              className="relative w-full max-w-5xl h-[70vh] mx-6"

                animate={{ opacity: 1, scale: 1 }}              onClick={(e) => e.stopPropagation()}

                exit={{ opacity: 0, scale: 0.95 }}            >

                className="relative w-full h-full rounded-lg overflow-hidden"              <Image

              >                src={filteredImages[currentImage].src}

                  {currentItem.image && (                alt={filteredImages[currentImage].title}

                    <Image                fill

                      src={urlFor(currentItem.image).width(1600).url()}                className="object-contain"

                      alt={currentItem.title}              />

                      fill            </motion.div>

                      className="object-contain" // Use contain to show full image

                      priority            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">

                    />              <span className="text-white/75 text-xs uppercase tracking-[0.22em]">{filteredImages[currentImage].category}</span>

                  )}              <h3 className="text-2xl font-semibold text-white mt-2">

              </motion.div>                {filteredImages[currentImage].title}

              </h3>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center z-10">              <p className="text-gray-500 text-sm mt-2">{currentImage + 1} / {filteredImages.length}</p>

                <span className="text-white/75 text-xs uppercase tracking-[0.22em]">{currentItem.category}</span>            </div>

                <h3 className="text-2xl font-semibold text-white mt-1">          </motion.div>

                  {currentItem.title}        )}

                </h3>      </AnimatePresence>

                <p className="text-gray-400 text-xs mt-1">{currentIndex + 1} / {filteredItems.length}</p>    </main>

              </div>  );

            </div>}

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
