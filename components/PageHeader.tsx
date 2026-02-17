import Link from 'next/link';
import { motion } from 'framer-motion';

type Breadcrumb = { label: string; href?: string };

export default function PageHeader({
  kicker,
  title,
  subtitle,
  breadcrumbs,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="bg-white pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          {(breadcrumbs?.length ?? 0) > 0 && (
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.22em] text-gray-500">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {breadcrumbs!.map((c, i) => (
                  <li key={`${c.label}-${i}`} className="flex items-center gap-x-2">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-[var(--brand-purple)] transition-colors">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-gray-700">{c.label}</span>
                    )}
                    {i !== breadcrumbs!.length - 1 && <span className="text-gray-300">/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {kicker && (
            <div className="mt-3 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--brand-purple)]">
              {kicker}
            </div>
          )}

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">{title}</h1>
          {subtitle && <p className="mt-4 text-gray-600 text-lg leading-relaxed">{subtitle}</p>}

          <div className="divider mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
