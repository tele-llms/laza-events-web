import { Metadata } from 'next';
import ContactUsClient from './ContactUsClient';

export const metadata: Metadata = {
  title: 'Contact Us - Laza Events Qatar | Get a Quote Today',
  description: 'Ready to plan your event in Qatar? Contact Laza Events for a consultation. Reach us by phone, email, or visit our office in Doha.',
  keywords: ['contact event planner qatar', 'laza events location', 'conference quote doha', 'wedding consultation qatar'],
};

export default function ContactUs() {
  return <ContactUsClient />;
}
