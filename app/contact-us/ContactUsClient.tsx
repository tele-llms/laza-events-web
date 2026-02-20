'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUsClient() {
  return (
    <main className="bg-white pt-28">
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">Contact</div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Contact Details</h1>
            <p className="mt-4 text-gray-600">
              No forms. Just direct contact. Call, WhatsApp, or email us and we’ll respond quickly.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: (
                  <div className="flex flex-col gap-1">
                    <a href="tel:+97470694883" className="hover:text-[var(--brand-purple)] transition-colors">+974 7069 4883</a>
                    <a href="tel:+97466320397" className="hover:text-[var(--brand-purple)] transition-colors">+974 6632 0397</a>
                  </div>
                ),
                desc: "Mon-Sat from 8am to 6pm"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: <a href="mailto:info@lazaevent.com" className="hover:text-[var(--brand-purple)] transition-colors">info@lazaevent.com</a>,
                desc: "For general inquiries & quotes"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Doha, Qatar",
                desc: "Schedule a meeting with us"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-[var(--brand-purple)] group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{item.title}</h3>
                <div className="mt-2 text-xl text-gray-900 font-medium">
                  {item.info}
                </div>
                <p className="mt-1 text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-10 h-[500px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115454.67475654576!2d51.44047867380181!3d25.286663248666355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sae!4v1709400000000!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--brand-purple)] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Lets Plan Your Next Event</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+97470694883" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-[var(--brand-purple)] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Call Now
            </a>
            <a href="mailto:info@lazaevent.com" className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
