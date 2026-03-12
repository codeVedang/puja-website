import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, ChevronRight, Star, 
  Sun, Flame, ArrowUpRight 
} from 'lucide-react';

// --- IMPORTING ALL YOUR ASSETS ---
import logoImg from './assets/logo.png';
import heroImg from './assets/hero.png';
import iconBook from './assets/icon-book.png';
import iconPandit from './assets/icon-pandit.png';
import iconSpecial from './assets/icon-special.png';
import iconAbout from './assets/icon-about.png';
import bentoBg from './assets/bento-bg.png';
import kalsarpImg from './assets/kalsarp-puja.png';
import mangalImg from './assets/mangal-puja.png';
import mahaImg from './assets/maharudrabhishek.png';
import bagulaImg from './assets/bagulamukhi.png';
import panditAvatar from './assets/pandit-avatar.png';

// --- STUNNING ANIMATION VARIANTS ---
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// FIX: Glass card hover effect changed to direct object to prevent duplicate variants
const modernHover = { 
  scale: 1.02, 
  y: -5, 
  transition: { duration: 0.3 } 
};

// --- TESTIMONIAL DATA ---
const testimonials = [
  {
    text: "The Mahamrityunjay Jaap was performed flawlessly. We received live photos, and the entire process was deeply spiritual and transparent.",
    author: "Rajiv S.",
    location: "Delhi",
    rating: 5
  },
  {
    text: "Booked Kalsarp Dosh puja online. Pandit ji explained every step over the video call. The arrangements were perfect and we felt genuine peace afterwards.",
    author: "Sneha M.",
    location: "Mumbai",
    rating: 5
  },
  {
    text: "Highly recommend for authentic pujas. The devotion and the chanting were mesmerizing. A truly blessed experience for our new home.",
    author: "Amit K.",
    location: "Bangalore",
    rating: 5
  }
];

export default function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide effect (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-hidden">
      
    
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-300/40 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-200/40 blur-[150px] rounded-full mix-blend-multiply"></div>
      </div>

    
      <nav className="fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-zinc-200 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-zinc-200/50"
        >
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Ujjain Pujan Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight">Puja<span className="text-orange-500">Website</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#" className="hover:text-orange-600 transition-colors">Experience</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Rituals</a>
            <a href="#" className="hover:text-orange-600 transition-colors">The Acharya</a>
          </div>
          <button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md">
            Book Now
          </button>
        </motion.div>
      </nav>

      <section className="relative z-10 pt-48 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center">
        {/* Cinematic Temple Background applied behind the hero text */}
        <div 
          className="absolute inset-0 z-[-1] opacity-10 bg-cover bg-center mask-image-gradient" 
          style={{ backgroundImage: `url(${heroImg})`, maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
        ></div>

        <motion.div initial="hidden" animate="visible" variants={slideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm mb-8 font-medium">
          <Sun className="w-4 h-4" /> Sacred Rituals Performed by Experts
        </motion.div>
        
        <motion.h1 initial="hidden" animate="visible" variants={slideUp} className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-zinc-900">
          Divine Blessings, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Delivered.
          </span>
        </motion.h1>
        
        <motion.p initial="hidden" animate="visible" variants={slideUp} className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-12 font-light">
          Authentic Vedic rituals, Kaal Sarp Dosh, and Mahamrityunjay Jaap performed by verified Pandits. Experience tradition redefined.
        </motion.p>

        {/* Stats floating below hero */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { num: "5,000+", label: "Happy Yajmans" },
            { num: "23,000+", label: "Pujas Completed" },
            { num: "15+ Yrs", label: "Vedic Experience" },
            { num: "100%", label: "Authentic Vidhi" }
          ].map((stat, i) => (
            <motion.div key={i} variants={slideUp} className="bg-white/80 backdrop-blur-sm border border-zinc-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">{stat.num}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    
      <section className="relative z-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Book Puja", desc: "Book your puja in Ujjain with trusted pandits.", icon: iconBook, dir: slideLeft },
            { title: "Talk to Pandit ji", desc: "Expert guidance, muhurat, and puja advice.", icon: iconPandit, dir: slideLeft },
            { title: "Special Puja's", desc: "Kaal Sarp, Mangal Dosh, Pitra Shanti & more.", icon: iconSpecial, dir: slideRight },
            { title: "About Ujjain", desc: "The sacred city of Mahakal & Jyotirlinga.", icon: iconAbout, dir: slideRight }
          ].map((card, i) => (
            <motion.div 
              key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
              variants={card.dir} whileHover={modernHover} 
              className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lg shadow-zinc-200/40 flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-500">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="relative z-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900">Our Services. <span className="text-zinc-400">Mastered.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideLeft} whileHover={modernHover}
            className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] border border-zinc-200 shadow-md relative overflow-hidden group flex flex-col md:flex-row"
          >
            
            <div className="p-8 md:w-3/5 flex flex-col justify-between relative z-10 bg-white">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center border border-orange-200 mb-6">
                <Flame className="text-orange-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-zinc-900">Puja & Anushthan</h3>
                <p className="text-zinc-600 mb-6 max-w-md">Comprehensive rituals including Griha Pravesh, Marriage Ceremonies, and Shraad Puja performed with utmost precision.</p>
                <ul className="grid grid-cols-2 gap-3 text-sm text-zinc-700 font-medium">
                  <li className="flex items-center gap-2"><img src={iconBook} className="w-5 h-5 object-contain" alt=""/> Griha Pravesh</li>
                  <li className="flex items-center gap-2"><img src={iconBook} className="w-5 h-5 object-contain" alt=""/> Satyanarayan Katha</li>
                  <li className="flex items-center gap-2"><img src={iconBook} className="w-5 h-5 object-contain" alt=""/> Shraad Puja</li>
                  <li className="flex items-center gap-2"><img src={iconBook} className="w-5 h-5 object-contain" alt=""/> Birthday Puja</li>
                </ul>
              </div>
            </div>

            
            <div className="md:w-2/5 relative hidden md:block overflow-hidden bg-zinc-100">
              <img 
                src={heroImg} 
                alt="Puja Ceremony" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideRight} whileHover={modernHover}
            className="bg-orange-50 rounded-[2rem] border border-orange-100 p-8 flex flex-col justify-between group shadow-sm"
          >
            <h3 className="text-xl font-bold text-zinc-900">Astrology Consultation</h3>
            <div className="space-y-2 text-sm text-zinc-600 font-medium">
              <p className="border-b border-orange-200 pb-2">Kundali Milan & Creation</p>
              <p className="border-b border-orange-200 pb-2">Dosha Nivaran Upay</p>
              <p>Special Muhart Generation</p>
            </div>
            <div className="flex justify-between items-center text-orange-600 group-hover:text-orange-500 transition-colors cursor-pointer mt-4">
              <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideRight} whileHover={modernHover}
            className="bg-orange-600 rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-lg shadow-orange-600/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold leading-tight relative z-10">Sacred Darshan & Religious Services</h3>
            <p className="text-white/90 text-sm relative z-10">Vastu Shanti, Puja for Success, and complete spiritual guidance.</p>
            <button className="bg-white text-orange-600 w-full py-3 rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
              Contact Pandit Ji
            </button>
          </motion.div>

        </div>
      </section>

      
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/50 mt-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">3 Steps to Divine Blessings</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center mb-4 text-orange-500 font-bold text-xl">1</div>
             <h4 className="font-bold text-zinc-900 text-lg mb-2">Select Your Ritual</h4>
             <p className="text-sm text-zinc-500">Choose from our specialized dosh nivaran or general puja services.</p>
           </motion.div>
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center mb-4 text-orange-500 font-bold text-xl">2</div>
             <h4 className="font-bold text-zinc-900 text-lg mb-2">Confirm Muhurat</h4>
             <p className="text-sm text-zinc-500">Our Pandit Ji will call you to finalize the most auspicious time and date.</p>
           </motion.div>
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center mb-4 text-orange-500 font-bold text-xl">3</div>
             <h4 className="font-bold text-zinc-900 text-lg mb-2">Receive Blessings</h4>
             <p className="text-sm text-zinc-500">Attend the puja physically or via our transparent live-stream service.</p>
           </motion.div>
        </div>
      </section>

      
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Specialized <br/>Dosha Nivaran.</h2>
          <button className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:text-orange-500">
            View All Rituals <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Kalsarpdosh Puja", desc: "For peace, progress, and dosh nivaran benefits.", direction: slideLeft, image: kalsarpImg },
            { title: "Mangaldosh Puja", desc: "Remove marriage delays and bring harmony.", direction: slideLeft, image: mangalImg },
            { title: "Maharudrabhishek", desc: "Ultimate removal of all doshas and obstacles.", direction: slideRight, image: mahaImg },
            { title: "Bagulamukhi Hawan", desc: "For victory over enemies and legal protection.", direction: slideRight, image: bagulaImg }
          ].map((puja, i) => (
            <motion.div 
              key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={puja.direction} whileHover={modernHover}
              className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-6 cursor-pointer group hover:border-orange-200 hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-40 bg-zinc-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-zinc-200">
                <img src={puja.image} alt={puja.title} className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{puja.title}</h3>
              <p className="text-sm text-zinc-600 mb-6 flex-grow">{puja.desc}</p>
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}
          className="bg-white rounded-[3rem] border border-zinc-200 overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-zinc-200/50"
        >
          {/* Form Content */}
          <div className="p-10 lg:p-16 lg:w-3/5 flex flex-col justify-center bg-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs mb-6 font-bold w-max">
              <PhoneCall className="w-3 h-3" /> Get a Call Back
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-zinc-900">Book Your Puja.</h2>
            <p className="text-zinc-600 mb-10">Secure your muhurat instantly. Our Acharya will reach out to confirm the details and samagri requirements.</p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
              <input type="text" placeholder="Last Name" className="bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
              <input type="tel" placeholder="WhatsApp Number" className="bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all md:col-span-2" />
              <select className="bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all md:col-span-2 appearance-none">
                <option>Select Puja (e.g., Kalsarp Dosh)</option>
              </select>
              <button className="bg-zinc-900 text-white font-bold rounded-xl px-6 py-4 md:col-span-2 mt-4 hover:bg-orange-600 transition-all duration-300 shadow-md">
                Confirm Booking Request
              </button>
            </form>
          </div>

      
          <div className="lg:w-2/5 bg-zinc-50 p-10 lg:p-16 border-l border-zinc-200 flex flex-col justify-between relative">
            
            {/* Carousel Container */}
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
                  <div className="flex text-orange-500 mb-6 gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-700 text-lg leading-relaxed italic mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-zinc-900">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-zinc-500">Verified Yajman • {testimonials[currentTestimonial].location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Dots */}
            <div className="flex gap-2 mb-8 mt-4 z-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    idx === currentTestimonial ? 'bg-orange-500' : 'bg-zinc-300 hover:bg-zinc-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-zinc-200 flex items-center gap-4 z-10">
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                 <img src={panditAvatar} alt="Acharya Pawan Shastri" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium">Guided by</p>
                <p className="font-bold text-zinc-900">Acharya Pawan Shastri</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}