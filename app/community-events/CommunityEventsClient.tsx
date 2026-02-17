'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import PageHeader from '@/components/PageHeader';

const services = [
	{
		title: 'National Celebrations',
		desc: 'Qatar National Day and public festivals',
		image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
	},
	{
		title: 'Charity Events',
		desc: 'Fundraisers and awareness campaigns',
		image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
	},
	{
		title: 'Cultural Festivals',
		desc: 'Heritage and cultural celebrations',
		image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
	},
	{
		title: 'Public Gatherings',
		desc: 'Community fairs and open events',
		image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
	},
	{
		title: 'Seasonal Events',
		desc: 'Ramadan, Eid, and holiday celebrations',
		image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&h=400&fit=crop',
	},
	{
		title: 'International Events',
		desc: 'World Cup fan zones and expos',
		image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop',
	},
];

const features = [
	'Venue selection and crowd management',
	'Stage and entertainment setup',
	'Food and beverage coordination',
	'Security and safety planning',
	'Branding and signage',
	'Multi-language event hosting',
];

export default function CommunityEventsClient({ recentWork }: { recentWork: ReactNode }) {
	return (
		<main className="bg-white">
			<PageHeader
				kicker="Our Services"
				title="Community Events"
				subtitle="Bringing people together through memorable celebrations and culturally rich experiences."
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Services' },
					{ label: 'Community Events' },
				]}
			/>

			{/* Services Grid */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-14"
					>
						<div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">
							What we offer
						</div>
						<h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
							Community services
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08 }}
								className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
							>
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
								<div className="absolute inset-0 p-6 flex flex-col justify-end">
									<h3 className="text-white font-bold text-xl">
										{service.title}
									</h3>
									<p className="mt-2 text-gray-200 text-sm leading-relaxed">
										{service.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<div className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">
								Why choose us
							</div>
							<h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
								Events that unite
							</h2>
							<p className="mt-4 text-gray-600 leading-relaxed">
								We understand the importance of community celebrations in Qatar
								and the GCC. Our team ensures every event reflects local culture
								and brings people together.
							</p>
							<ul className="mt-8 space-y-3">
								{features.map((feature, i) => (
									<motion.li
										key={i}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.08 }}
										className="flex items-center text-gray-700"
									>
										<CheckCircle2
											className="text-[var(--brand-purple)] mr-3 flex-shrink-0"
											size={18}
										/>
										{feature}
									</motion.li>
								))}
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative"
						>
							<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
								<Image
									src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=900&fit=crop"
									alt="Community Event"
									fill
									className="object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Recent Work */}
			{recentWork}

			{/* CTA */}
			<section className="py-20 bg-[var(--brand-purple)]">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white">
							Planning a community event?
						</h2>
						<p className="mt-4 text-white/80 text-lg">
							Let&apos;s create something that brings everyone together.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<a
								href="tel:+97470694883"
								className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[var(--brand-purple)] font-semibold shadow hover:bg-gray-100 transition-colors"
							>
								Call +974 7069 4883
							</a>
							<Link
								href="/contact-us"
								className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors"
							>
								Contact Details{' '}
								<ArrowRight size={18} className="ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

		</main>
	);
}
