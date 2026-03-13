import { motion } from 'framer-motion'
import { ChevronRight, PhoneCall, ScrollText, Sparkles } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { PujaCard, SectionBadge, SectionHeading } from '../components/SiteSections'
import { pujaCatalog, slideLeft, slideRight, slideUp } from '../data/siteData'

export function PujaDetailPage() {
  const { slug } = useParams()
  const puja = pujaCatalog.find((item) => item.slug === slug)

  if (!puja) {
    return <Navigate to="/puja" replace />
  }

  const relatedPujas = pujaCatalog.filter((item) => item.slug !== puja.slug).slice(0, 3)

  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <SectionBadge icon={Sparkles}>Dedicated Puja Detail Page</SectionBadge>
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 md:text-7xl">{puja.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600">{puja.detail}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">{puja.duration}</span>
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">Ujjain-based coordination</span>
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">Live updates available</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
              >
                Book This Puja
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact#connect-options"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                Talk to Pandit Ji
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {puja.idealFor.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Ideal for</p>
                  <p className="mt-2 text-lg font-bold text-zinc-900">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideRight}
            className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-200/60"
          >
            <div className="relative h-full min-h-[520px] overflow-hidden">
              <img src={puja.image} alt={puja.name} className="h-full w-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t ${puja.accent} opacity-25`} />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <div className="rounded-[2rem] border border-white/20 bg-white/15 p-6 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Included in the experience</p>
                  <ul className="mt-4 space-y-3 text-sm text-white">
                    {puja.includes.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Families Choose This Ritual"
          subtitle="This page answers the natural client question: what makes this puja important, and what does the experience include?"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {puja.benefits.map((item) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <Sparkles className="h-7 w-7 text-orange-500" />
              <p className="mt-5 text-lg font-semibold text-zinc-900">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <SectionBadge icon={ScrollText}>What Is Included</SectionBadge>
            <ul className="space-y-4">
              {puja.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-900 text-white shadow-lg"
          >
            <div className="grid h-full lg:grid-rows-[auto_1fr]">
              <div className="border-b border-white/10 p-8 sm:p-10">
                <SectionBadge icon={PhoneCall}>Need Help Deciding?</SectionBadge>
                <h3 className="text-3xl font-bold">Talk to our team before you book.</h3>
                <p className="mt-4 text-white/80">
                  We can help you understand whether this is the right ritual, how the sankalp should be prepared, and what to expect on the day.
                </p>
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">Best for</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {puja.idealFor.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact#contact-form"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:bg-orange-100"
                  >
                    Ask About This Puja
                  </Link>
                  <Link
                    to="/puja"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Back to All Pujas
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading title="Related Pujas" subtitle="Visitors can continue exploring without hitting a dead end." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedPujas.map((item) => (
            <PujaCard key={item.slug} puja={item} compact />
          ))}
        </div>
      </section>
    </>
  )
}
