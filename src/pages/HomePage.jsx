import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Flame, Sparkles, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BookingPanel, PujaCard, SectionBadge, SectionHeading } from '../components/SiteSections'
import {
  heroImg,
  homeFeatureCards,
  iconBook,
  processSteps,
  pujaCatalog,
  slideLeft,
  slideRight,
  slideUp,
  stagger,
  trustPillars,
  bentoBg,
  panditAvatar,
} from '../data/siteData'
import { modernHover } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 pb-28 pt-40 text-center sm:px-6 lg:px-8">
        <div
          className="absolute inset-x-4 top-28 z-[-1] h-[70vh] rounded-[3rem] border border-zinc-200/60 bg-cover bg-center opacity-10 sm:inset-x-6 lg:inset-x-8"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <motion.div initial="hidden" animate="visible" variants={slideUp}>
          <SectionBadge icon={Sun}>Sacred Rituals Performed by Trusted Experts</SectionBadge>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="text-5xl font-bold tracking-tighter text-zinc-900 sm:text-6xl md:text-8xl"
        >
          Divine Blessings,
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Beautifully Delivered.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="mx-auto mt-6 max-w-3xl text-lg font-light text-zinc-600 md:text-xl"
        >
          Authentic Vedic rituals, dosh nivaran pujas, and guided ceremonies from Ujjain with a calm, premium experience your client can immediately trust.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <motion.div variants={slideUp}>
            <Link
              to="/#booking-section"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-orange-500"
            >
              Book a Puja
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div variants={slideUp}>
            <Link
              to="/puja"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-zinc-900 transition-all duration-300 hover:border-orange-200 hover:text-orange-600"
            >
              Explore Pujas
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            { label: 'Meet Our Team', link: '/about#team' },
            { label: 'View Puja List', link: '/#puja-list' },
            { label: 'Talk to Pandit Ji', link: '/contact#connect-options' },
            { label: 'Why Ujjain', link: '/about#ujjain-story' },
          ].map((item) => (
            <motion.div key={item.label} variants={slideUp}>
              <Link
                to={item.link}
                className="inline-flex rounded-full border border-zinc-200 bg-white/85 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { num: '5,000+', label: 'Happy Yajmans' },
            { num: '23,000+', label: 'Pujas Completed' },
            { num: '15+ Years', label: 'Vedic Experience' },
            { num: '100%', label: 'Authentic Vidhi' },
          ].map((stat) => (
            <motion.div key={stat.label} variants={slideUp} className="rounded-2xl border border-zinc-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-zinc-900">{stat.num}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative mx-auto -mt-10 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeFeatureCards.map((card, index) => (
            <Link key={card.title} to={card.link} className="block">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={index < 2 ? slideLeft : slideRight}
                whileHover={modernHover}
                className="flex h-full flex-col items-center rounded-[2rem] border border-zinc-100 bg-white p-8 text-center shadow-lg shadow-zinc-200/40"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center">
                  <img src={card.icon} alt={card.title} className="h-full w-full object-contain" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-zinc-900">{card.title}</h3>
                <p className="text-sm text-zinc-500">{card.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services. Refined."
          subtitle="Designed to feel premium, easy to navigate, and rooted in devotion from the first click to the final blessing."
        />

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          <Link to="/puja" className="block md:col-span-2 md:row-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideLeft}
              whileHover={modernHover}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-md md:flex-row"
            >
              <div className="relative z-10 flex flex-col justify-between bg-white p-8 md:w-3/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-200 bg-orange-100">
                  <Flame className="h-7 w-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="mb-4 text-3xl font-bold text-zinc-900">Puja & Anushthan</h3>
                  <p className="mb-6 max-w-md text-zinc-600">
                    From Griha Pravesh and Satyanarayan Katha to dosh nivaran rituals, every ceremony is planned with devotion and clarity.
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-zinc-700">
                    {['Griha Pravesh', 'Satyanarayan Katha', 'Shraad Puja', 'Birthday Puja'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <img src={iconBook} alt="" className="h-5 w-5 object-contain" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative hidden overflow-hidden bg-zinc-100 md:block md:w-2/5">
                <img src={heroImg} alt="Puja ceremony setup" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
              </div>
            </motion.div>
          </Link>

          <Link to="/contact#contact-form" className="block">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
              whileHover={modernHover}
              className="flex h-full flex-col justify-between rounded-[2rem] border border-orange-100 bg-orange-50 p-8 shadow-sm"
            >
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Astrology Consultation</h3>
                <div className="mt-4 space-y-2 text-sm font-medium text-zinc-600">
                  <p className="border-b border-orange-200 pb-2">Kundali Milan & Creation</p>
                  <p className="border-b border-orange-200 pb-2">Dosha Nivaran Upay</p>
                  <p>Special Muhurat Guidance</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-orange-600">
                <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          </Link>

          <Link to="/about#ujjain-story" className="block">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
              whileHover={modernHover}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-orange-600 p-8 text-white shadow-lg shadow-orange-600/20"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
              <h3 className="relative z-10 text-2xl font-bold leading-tight">
                Ujjain, Mahakal, and timeless ritual heritage
              </h3>
              <p className="relative z-10 text-sm text-white/90">
                Learn how the sacred atmosphere of Ujjain shapes the experience we deliver.
              </p>
              <div className="relative z-10 inline-flex w-max rounded-xl bg-white px-5 py-3 text-sm font-bold text-orange-600">
                About Ujjain
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl border-t border-zinc-200/60 px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="3 Steps to Divine Blessings"
          subtitle="A simple, transparent flow that makes the website feel complete and easy for families to use."
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {processSteps.map((item) => (
            <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-100 bg-white text-xl font-bold text-orange-500 shadow-md">
                {item.step}
              </div>
              <h4 className="mb-2 text-lg font-bold text-zinc-900">{item.title}</h4>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="puja-list" className="relative mx-auto max-w-7xl scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Specialized Dosha Nivaran"
          subtitle="Each puja now leads to a dedicated detail page, so the prototype feels fully connected rather than partially linked."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pujaCatalog.map((puja, index) => (
            <motion.div key={puja.slug} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={index < 2 ? slideLeft : slideRight}>
              <PujaCard puja={puja} compact />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="grid items-center gap-8 overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="p-8 sm:p-10 lg:p-14">
            <SectionBadge icon={Sparkles}>Why Families Trust Us</SectionBadge>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Rooted in Ujjain. Designed for a modern booking experience.
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600">
              The Home page now points visitors naturally toward deeper pages instead of leaving them at dead ends. That means stronger storytelling, better flow, and a much more complete client presentation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustPillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                  <item.icon className="h-6 w-6 text-orange-500" />
                  <h3 className="mt-4 font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
              >
                Learn About Us
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                Contact the Team
              </Link>
            </div>
          </div>

          <div className="relative h-full min-h-[420px] overflow-hidden bg-zinc-50">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${bentoBg})`, backgroundSize: '420px auto' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/70 to-orange-50" />
            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10 lg:p-14">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm">
                  <img src={panditAvatar} alt="Acharya Pawan Shastri" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Guided by</p>
                  <p className="text-xl font-bold text-zinc-900">Acharya Pawan Shastri</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Sacred Promise</p>
                <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                  “Every family should feel the same faith online that they would feel in person. That is the standard behind each page, each update, and each ritual we plan.”
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5">
                  <p className="text-2xl font-bold text-zinc-900">Live</p>
                  <p className="mt-1 text-sm text-zinc-500">updates and confirmations</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5">
                  <p className="text-2xl font-bold text-zinc-900">Ujjain</p>
                  <p className="mt-1 text-sm text-zinc-500">ritual-first coordination</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <BookingPanel />
    </>
  )
}
