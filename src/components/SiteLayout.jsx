import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, MapPin, Menu, MessageCircle, ShieldCheck, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { bentoBg, logoImg, topLevelPujaLinks } from '../data/siteData'

const navLinkBase = 'text-sm font-medium transition-colors duration-300'

export function AppShell({ children }) {
  const location = useLocation()
  const [isPujaOpen, setIsPujaOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobilePujaOpen, setIsMobilePujaOpen] = useState(false)

  const isPujaRoute = location.pathname.startsWith('/puja')

  const closeMenus = () => {
    setIsMobileOpen(false)
    setIsMobilePujaOpen(false)
    setIsPujaOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-zinc-900 selection:bg-orange-200 selection:text-orange-900">
      <ScrollManager />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="absolute left-[-10%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-orange-300/35 blur-[140px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-[36rem] w-[36rem] rounded-full bg-red-200/35 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: `url(${bentoBg})`, backgroundSize: '460px auto' }}
        />
      </div>

      <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-zinc-200 bg-white/85 px-4 py-3 shadow-lg shadow-zinc-200/50 backdrop-blur-xl sm:px-6"
        >
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Puja Website Logo" className="h-10 w-10 object-contain" />
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Puja<span className="text-orange-500">Website</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <NavLink
              end
              to="/"
              onClick={closeMenus}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-orange-600'}`
              }
            >
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setIsPujaOpen(true)}
              onMouseLeave={() => setIsPujaOpen(false)}
            >
              <Link
                to="/puja"
                onClick={closeMenus}
                className={`flex items-center gap-1 ${navLinkBase} ${
                  isPujaRoute ? 'text-zinc-900' : 'text-zinc-600 hover:text-orange-600'
                }`}
              >
                Puja <ChevronDown className="h-4 w-4" />
              </Link>

              <AnimatePresence>
                {isPujaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-200/70"
                  >
                    <Link
                      to="/puja"
                      onClick={closeMenus}
                      className="mb-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-orange-50 hover:text-orange-600"
                    >
                      All Puja Services
                    </Link>
                    {topLevelPujaLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMenus}
                        className="block rounded-2xl px-4 py-3 text-sm text-zinc-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/about"
              onClick={closeMenus}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-orange-600'}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenus}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-orange-600'}`
              }
            >
              Contact Us
            </NavLink>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/#booking-section"
              onClick={closeMenus}
              className="hidden rounded-full bg-zinc-900 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500 sm:inline-flex"
            >
              Book Now
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:text-orange-600 lg:hidden"
              aria-label="Toggle navigation"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="mx-auto mt-4 max-w-7xl rounded-[2rem] border border-zinc-200 bg-white/95 p-4 shadow-2xl shadow-zinc-200/60 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-2">
                <MobileNavLink to="/" label="Home" onClick={closeMenus} />

                <button
                  type="button"
                  onClick={() => setIsMobilePujaOpen((prev) => !prev)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    isPujaRoute || isMobilePujaOpen
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-zinc-700 hover:bg-zinc-50'
                  }`}
                >
                  Puja
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isMobilePujaOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isMobilePujaOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 px-2 pb-2">
                        <MobileNavLink to="/puja" label="All Puja Services" onClick={closeMenus} />
                        {topLevelPujaLinks.map((item) => (
                          <MobileNavLink key={item.path} to={item.path} label={item.name} onClick={closeMenus} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <MobileNavLink to="/about" label="About Us" onClick={closeMenus} />
                <MobileNavLink to="/contact" label="Contact Us" onClick={closeMenus} />
                <MobileNavLink to="/#booking-section" label="Book Now" accent onClick={closeMenus} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  )
}

function MobileNavLink({ to, label, accent = false, onClick }) {
  return (
    <NavLink
      end={to === '/'}
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
          accent
            ? 'bg-zinc-900 text-white hover:bg-orange-500'
            : isActive
              ? 'bg-orange-50 text-orange-600'
              : 'text-zinc-700 hover:bg-zinc-50'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.replace('#', ''))

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 60)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return null
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200/70 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-zinc-900 via-zinc-900 to-orange-600 p-8 text-white shadow-xl sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                Ready for the next step
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A complete, connected prototype for the client presentation.
              </h2>
              <p className="mt-4 text-white/80">
                Home, Puja, About Us, and Contact Us now work together as one polished experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:bg-orange-100"
              >
                Contact Us
              </Link>
              <Link
                to="/puja"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Pujas
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Puja Website Logo" className="h-11 w-11 object-contain" />
              <span className="text-xl font-bold tracking-tight">
                Puja<span className="text-orange-500">Website</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600">
              Sacred rituals, puja coordination, and spiritual guidance shaped by the devotional energy of Ujjain and presented through a premium modern website.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Pages</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <div><Link to="/" className="transition-colors hover:text-orange-600">Home</Link></div>
              <div><Link to="/puja" className="transition-colors hover:text-orange-600">Puja</Link></div>
              <div><Link to="/about" className="transition-colors hover:text-orange-600">About Us</Link></div>
              <div><Link to="/contact" className="transition-colors hover:text-orange-600">Contact Us</Link></div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Highlights</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                Ujjain-centered spiritual identity
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-500" />
                Transparent booking experience
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-orange-500" />
                Guidance before and after puja
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
