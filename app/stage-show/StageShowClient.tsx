'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ReactNode } from 'react';
import PageHeader from '@/components/PageHeader';

const services = [
	{
		title: 'Live Performances',
		desc: 'Concert production and artist management',
		image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
	},
	{
		title: 'Lighting Design',
		desc: 'Dramatic lighting that sets the mood',
		image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&h=400&fit=crop',
	},
	{
		title: 'Sound Engineering',
		desc: 'Crystal clear audio systems',
		image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
	},
	{
		title: 'Video Production',
		desc: 'LED walls and visual effects',
		image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
	},
	{
		title: 'Special Effects',
		desc: 'Pyrotechnics and stage magic',
		image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop',
	},
	{
		title: 'Talent Management',
		desc: 'Artist booking and coordination',
		image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop',
	},
];

const features = [
	'Stage design and construction',
	'Professional sound and lighting',
	'LED screens and video walls',
	'Artist and talent coordination',
	'Backstage and crowd management',
	'Full event production and direction',
];

export default function StageShowClient({ recentWork }: { recentWork: ReactNode }) {
	return (
		<main className="bg-white">
			<PageHeader
				kicker="Our Services"
				title="Stage Shows"
				subtitle="From intimate performances to grand spectacles, we create unforgettable entertainment experiences."
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Services' },
					{ label: 'Stage Shows' },
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
							Production services
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
								Full-scale production
							</h2>
							<p className="mt-4 text-gray-600 leading-relaxed">
								We deliver complete stage show production — from concept and design
								to technical execution and on-site management.
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
									src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=900&fit=crop"
									alt="Stage Show"
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
							Ready for a spectacular show?
						</h2>
						<p className="mt-4 text-white/80 text-lg">
							Let&apos;s create an unforgettable experience.
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
