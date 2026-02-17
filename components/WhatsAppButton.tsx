'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97470694883"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={36}
        height={36}
        className="w-9 h-9"
      />
    </a>
  );
}
