import { motion } from 'framer-motion'
import { Clock3, MapPin, PhoneCall, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

import { InquiryForm, SectionBadge, SectionHeading } from '../components/SiteSections'
import {
  bentoBg,
  contactCards,
  heroImg,
  slideLeft,
  slideRight,
  slideUp,
  testimonials,
} from '../data/siteData'
import { modernHover } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <SectionBadge icon={PhoneCall}>Contact and Booking Support</SectionBadge>
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 md:text-7xl">
              Let families reach you with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600">
              This page now feels intentional and complete, with clear support options, a polished inquiry section, and the same visual language as the Home page.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
              >
                Send an Inquiry
              </Link>
              <Link
                to="/puja"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                View Puja Options
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: 'Daily', label: 'booking support' },
                { value: 'Ujjain', label: 'ritual coordination' },
                { value: 'Fast', label: 'callback flow' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-zinc-900">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
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
            <div className="grid min-h-[520px]">
              <div className="relative overflow-hidden">
                <img src={heroImg} alt="Puja consultation and booking" className="h-[300px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">Response style</p>
                  <p className="mt-2 text-lg">Warm, guided, and centered on the family’s exact requirement.</p>
                </div>
              </div>

              <div className="grid gap-4 p-8 sm:grid-cols-2 sm:p-10">
                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-5">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <h3 className="mt-4 font-bold text-zinc-900">Serving from Ujjain</h3>
                  <p className="mt-2 text-sm text-zinc-600">Ideal for Mahakal-connected rituals and sacred-city storytelling.</p>
                </div>
                <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-5">
                  <Clock3 className="h-6 w-6 text-orange-500" />
                  <h3 className="mt-4 font-bold text-zinc-900">Quick coordination</h3>
                  <p className="mt-2 text-sm text-zinc-600">Booking flow now guides users clearly from inquiry to confirmation.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="connect-options" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          title="Choose the Way You Want to Connect"
          subtitle="Instead of a thin contact page, the site now offers multiple polished contact paths."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactCards.map((card) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              whileHover={modernHover}
              className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <card.icon className="h-7 w-7 text-orange-500" />
              <h3 className="mt-5 text-xl font-bold text-zinc-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{card.desc}</p>
              <Link
                to={card.link}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                {card.actionLabel}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="grid overflow-hidden rounded-[2.75rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="p-8 sm:p-10 lg:p-16">
            <SectionBadge icon={PhoneCall}>Send Your Requirement</SectionBadge>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              Tell us what you want help with.
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600">
              The form uses the same premium design language as Home, so the journey feels intentional from first landing to final inquiry.
            </p>

            <InquiryForm />
          </div>

          <div className="relative flex flex-col justify-between border-l border-zinc-200 bg-zinc-50 p-8 sm:p-10 lg:p-16">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${bentoBg})`, backgroundSize: '420px auto' }} />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">What to share</p>
              <div className="mt-6 space-y-4">
                {[
                  'Preferred puja or spiritual concern',
                  'Your city and preferred date',
                  'Whether you need consultation first',
                  'Any urgency around muhurat or family event',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <p className="text-sm text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-orange-500">
                {[...Array(testimonials[0].rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                “The process felt very personal even online. We always knew what was happening and what to do next.”
              </p>
              <p className="mt-4 font-bold text-zinc-900">Verified Yajman</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
