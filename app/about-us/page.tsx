import { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
	title: 'About Laza Events | Qatar\'s Leading Event Management Company',
	description: 'With over a decade of excellence, Laza Events is Qatar\'s trusted partner for weddings, corporate events, and live productions. Learn about our passion and expertise.',
	keywords: ['about laza events', 'event company profile qatar', 'leading event managers doha', 'laza events team'],
};

export default function AboutUs() {
	return <AboutUsClient />;
}