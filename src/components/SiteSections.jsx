import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, PhoneCall, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  modernHover,
  panditAvatar,
  pujaCatalog,
  slideUp,
  testimonials,
} from '../data/siteData'

export function SectionBadge({ icon: Icon, children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
      <Icon className="h-4 w-4" />
      {children}
    </div>
  )
}

export function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-12 max-w-2xl text-center' : 'mb-12 max-w-2xl'}>
      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-zinc-600">{subtitle}</p> : null}
    </div>
  )
}

export function PujaCard({ puja, compact = false }) {
  return (
    <motion.article
      whileHover={modernHover}
      className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-zinc-200/60"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={puja.image} alt={puja.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        <div className={`absolute inset-0 bg-gradient-to-t ${puja.accent} opacity-25`} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            {puja.duration}
          </span>
          <span className="text-sm font-medium text-zinc-500">Ujjain Ritual</span>
        </div>

        <h3 className="text-2xl font-bold text-zinc-900">{puja.name}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{puja.shortDesc}</p>

        {!compact ? (
          <ul className="mt-5 space-y-3">
            {puja.benefits.slice(0, 2).map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-zinc-700">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/puja/${puja.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
          >
            View Details
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact#contact-form"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export function InquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Inquiry saved for the prototype. Connect this form to your preferred backend or WhatsApp flow next.')
  }

  return (
    <form className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />
      <input
        type="tel"
        placeholder="WhatsApp Number"
        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100 md:col-span-2"
      />
      <input
        type="text"
        placeholder="City"
        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />
      <input
        type="text"
        placeholder="Preferred Date or Muhurat Window"
        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />
      <select className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-600 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100 md:col-span-2">
        <option>Select Puja</option>
        {pujaCatalog.map((puja) => (
          <option key={puja.slug}>{puja.name}</option>
        ))}
      </select>
      <textarea
        rows="5"
        placeholder="Tell us your requirement, dosh concern, family event, or anything you want guidance on."
        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100 md:col-span-2"
      />
      <button
        type="submit"
        className="rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 md:col-span-2"
      >
        Submit Inquiry
      </button>
    </form>
  )
}

export function BookingPanel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Booking request captured for the prototype. You can connect this with WhatsApp, email, or your backend next.')
  }

  return (
    <section id="booking-section" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className="grid overflow-hidden rounded-[3rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="bg-white p-8 sm:p-10 lg:p-16">
          <SectionBadge icon={PhoneCall}>Get a Call Back</SectionBadge>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">Book Your Puja</h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            A polished callback section for the Home page, with enough detail to feel real while staying lightweight for a prototype.
          </p>

          <form className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100 md:col-span-2"
            />
            <select className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-600 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100 md:col-span-2">
              <option>Select Puja</option>
              {pujaCatalog.map((puja) => (
                <option key={puja.slug}>{puja.name}</option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 md:col-span-2"
            >
              Confirm Booking Request
            </button>
          </form>
        </div>

        <div className="relative flex flex-col justify-between border-l border-zinc-200 bg-zinc-50 p-8 sm:p-10 lg:p-16">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="mb-6 flex gap-1 text-orange-500">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-8 text-lg italic leading-relaxed text-zinc-700">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <p className="font-bold text-zinc-900">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-zinc-500">
                    Verified Yajman • {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="z-10 mb-8 mt-4 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-orange-500' : 'bg-zinc-300 hover:bg-zinc-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="z-10 mt-auto flex items-center gap-4 border-t border-zinc-200 pt-8">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm">
              <img src={panditAvatar} alt="Acharya Pawan Shastri" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500">Guided by</p>
              <p className="font-bold text-zinc-900">Acharya Pawan Shastri</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
