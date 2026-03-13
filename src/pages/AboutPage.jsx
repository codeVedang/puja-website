import { motion } from 'framer-motion'
import { MapPin, Sun, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionBadge } from '../components/SiteSections'
import {
  aboutValues,
  bentoBg,
  heroImg,
  panditAvatar,
  slideLeft,
  slideRight,
  trustPillars,
} from '../data/siteData'

export function AboutPage() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <SectionBadge icon={Sun}>About Our Spiritual Platform</SectionBadge>
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 md:text-7xl">
              Tradition, trust, and thoughtful digital presentation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600">
              The About page now tells a fuller story: who you are, what makes the service authentic, and why Ujjain gives the brand real spiritual grounding.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: '15+ Years', label: 'ritual experience' },
                { value: '23,000+', label: 'pujas completed' },
                { value: 'Pan-India', label: 'family support' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-zinc-900">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
              >
                Plan a Puja with Us
              </Link>
              <Link
                to="/puja"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                View Puja Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideRight}
            className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-200/60"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${bentoBg})` }} />
            <div className="relative grid min-h-[520px] content-between p-8 sm:p-10">
              <div className="rounded-[2rem] border border-zinc-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">What this page communicates</p>
                <h3 className="mt-4 text-3xl font-bold text-zinc-900">
                  A spiritual brand that feels personal, authentic, and polished.
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {aboutValues.map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-sm">
                    <item.icon className="h-6 w-6 text-orange-500" />
                    <h4 className="mt-4 text-lg font-bold text-zinc-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ujjain-story" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-lg shadow-zinc-200/50"
          >
            <img src={heroImg} alt="Mahakal inspired sacred atmosphere" className="h-full min-h-[430px] w-full object-cover" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <SectionBadge icon={MapPin}>Why Ujjain Matters</SectionBadge>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              The sacred city gives the brand a real devotional center.
            </h2>
            <p className="mt-5 text-zinc-600">
              Ujjain is not just a location. It is a powerful part of the emotional story for the client website. This page explains that connection, helping visitors understand why the rituals feel grounded and spiritually meaningful.
            </p>
            <p className="mt-4 text-zinc-600">
              Referencing Mahakal tradition, temple-side coordination, and the city’s ritual heritage makes the prototype feel more authentic and more premium at the same time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Spiritual depth</p>
                <p className="mt-2 text-zinc-700">A clear link to sacred tradition, Mahakal, and ritual sincerity.</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Client value</p>
                <p className="mt-2 text-zinc-700">Stronger storytelling, stronger trust, and a richer experience for visitors.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-900 text-white shadow-lg lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative h-full min-h-[420px] overflow-hidden bg-zinc-800">
            <img src={panditAvatar} alt="Acharya Pawan Shastri" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">Lead guidance</p>
              <p className="mt-2 text-3xl font-bold">Acharya Pawan Shastri</p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-14">
            <SectionBadge icon={Users}>The Team Behind the Experience</SectionBadge>
            <h2 className="text-4xl font-bold tracking-tight">
              Devotional expertise paired with calm, client-friendly coordination.
            </h2>
            <p className="mt-5 text-white/80">
              Families need both ritual authenticity and modern clarity. This section explains the people, process, and communication style behind the brand in a way that feels warm and trustworthy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustPillars.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
                  <item.icon className="h-6 w-6 text-orange-200" />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:bg-orange-100"
              >
                Speak With Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
