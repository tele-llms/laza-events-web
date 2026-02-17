'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import SmoothScroll from './SmoothScroll';
import BackgroundAccent from './BackgroundAccent';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <BackgroundAccent />
      <SmoothScroll>
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <WhatsAppButton />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
