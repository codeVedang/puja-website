import { motion } from 'framer-motion'
import { ChevronRight, Clock3, MessageCircle, ShieldCheck, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PujaCard, SectionBadge, SectionHeading } from '../components/SiteSections'
import { heroImg, pujaCatalog, slideLeft, slideRight, slideUp } from '../data/siteData'

export function PujaPage() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <SectionBadge icon={Sun}>Curated Rituals from Ujjain</SectionBadge>
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 md:text-7xl">
              Puja services that feel sacred, premium, and complete.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600">
              This page gives the client a proper service hub with strong visuals, clear navigation, dedicated puja detail pages, and easy movement toward inquiry.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
              >
                Start Your Booking
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#booking-section"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                Quick Callback
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Temple or home', value: 'Flexible rituals' },
                { label: 'Live transparency', value: 'Photos and updates' },
                { label: 'Guided booking', value: 'Support before puja' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-zinc-900">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideRight}
            className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-200/60"
          >
            <img src={heroImg} alt="Sacred puja arrangements" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">Featured service categories</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-bold">Dosh Nivaran</p>
                  <p className="mt-1 text-sm text-white/80">Kalsarp, Mangal Dosh, Baglamukhi</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-bold">Shiv Rituals</p>
                  <p className="mt-1 text-sm text-white/80">Maharudrabhishek and special anushthan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="catalog" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          title="Explore Our Puja Collection"
          subtitle="Every card now opens a dedicated page with benefits, process details, and clear booking paths."
        />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {pujaCatalog.map((puja, index) => (
            <motion.div key={puja.slug} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={index % 2 === 0 ? slideLeft : slideRight}>
              <PujaCard puja={puja} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Every Puja Booking Includes"
          subtitle="The page is not just beautiful now. It also explains the experience clearly, which helps build client confidence."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Pre-puja guidance',
              desc: 'We help confirm which ritual, details, and muhurat are right before anything is finalized.',
              icon: MessageCircle,
            },
            {
              title: 'Transparent execution',
              desc: 'Families receive clarity on the ritual flow and timely updates during the puja.',
              icon: ShieldCheck,
            },
            {
              title: 'Ujjain-rooted process',
              desc: 'The experience carries the spiritual depth expected from a sacred city offering.',
              icon: Sun,
            },
            {
              title: 'Smooth coordination',
              desc: 'From sankalp details to next-step upay, everything feels professionally guided.',
              icon: Clock3,
            },
          ].map((item) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <item.icon className="h-7 w-7 text-orange-500" />
              <h3 className="mt-5 text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
