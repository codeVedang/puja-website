import {
  Clock3,
  MessageCircle,
  PhoneCall,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from 'lucide-react'

import bagulaImg from '../assets/bagulamukhi.png'
import bentoBg from '../assets/bento-bg.png'
import heroImg from '../assets/hero.png'
import iconAbout from '../assets/icon-about.png'
import iconBook from '../assets/icon-book.png'
import iconPandit from '../assets/icon-pandit.png'
import iconSpecial from '../assets/icon-special.png'
import kalsarpImg from '../assets/kalsarp-puja.png'
import logoImg from '../assets/logo.png'
import mahaImg from '../assets/maharudrabhishek.png'
import mangalImg from '../assets/mangal-puja.png'
import panditAvatar from '../assets/pandit-avatar.png'

export { bentoBg, heroImg, iconBook, logoImg, panditAvatar }

export const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export const modernHover = {
  scale: 1.02,
  y: -5,
  transition: { duration: 0.3 },
}

export const pujaCatalog = [
  {
    slug: 'baglamukhi',
    name: 'Baglamukhi Hawan',
    shortDesc: 'A focused shakti sadhana performed for victory, confidence, and protection in difficult situations.',
    detail:
      'Baglamukhi Hawan is chosen when devotees want a strong sankalp for legal relief, protection from negativity, or strength during competition and conflict.',
    image: bagulaImg,
    duration: '4 to 5 Hours',
    idealFor: ['Court cases', 'Protection from opposition', 'Competitive success'],
    benefits: [
      'Invokes courage and spiritual protection',
      'Supports focus during disputes and pressure',
      'Conducted with proper mantra, sankalp, and hawan vidhi',
    ],
    includes: [
      'Pandit guidance before the ritual',
      'Samagri checklist and arrangement support',
      'Live photos or video updates during the puja',
      'Post-puja upay and prasad guidance',
    ],
    accent: 'from-amber-400 to-orange-600',
  },
  {
    slug: 'maharudrabhishek',
    name: 'Maharudrabhishek Puja',
    shortDesc: 'A powerful Shiv anushthan performed for deep purification, peace, and obstacle removal.',
    detail:
      'Maharudrabhishek is ideal for devotees seeking a complete Shiva-centered ritual for family wellbeing, dosh shanti, health prayers, and major life transitions.',
    image: mahaImg,
    duration: '5 to 7 Hours',
    idealFor: ['Family peace', 'Health and wellbeing', 'Major life milestones'],
    benefits: [
      'Invokes Lord Shiva for protection and healing energy',
      'Supports removal of inner and outer obstacles',
      'Creates a deeply devotional and uplifting atmosphere',
    ],
    includes: [
      'Detailed Rudrabhishek vidhi by experienced pandits',
      'Temple-style or home-style arrangement planning',
      'Sankalp personalization for the family',
      'Photos, darshan moments, and completion confirmation',
    ],
    accent: 'from-orange-500 to-red-600',
  },
  {
    slug: 'mangaldosh',
    name: 'Mangaldosh Puja',
    shortDesc: 'A carefully guided puja to reduce Mangal dosh effects and bring harmony to marriage and family plans.',
    detail:
      'Mangaldosh Puja is often booked for delayed marriage, compatibility concerns, or when families want a calm and auspicious start for a new chapter.',
    image: mangalImg,
    duration: '3 to 4 Hours',
    idealFor: ['Marriage delays', 'Relationship harmony', 'Kundali balancing'],
    benefits: [
      'Addresses Mangal-related imbalances with proper vidhi',
      'Brings calm, clarity, and positive family support',
      'Combined with guidance for the right muhurat and upay',
    ],
    includes: [
      'Consultation support before booking',
      'Clear list of required details for sankalp',
      'Pandit-led ritual updates throughout the puja',
      'Simple next-step remedies after completion',
    ],
    accent: 'from-rose-400 to-orange-500',
  },
  {
    slug: 'kalsarpdosh',
    name: 'Kalsarpdosh Puja',
    shortDesc: 'A special dosh nivaran ritual for peace, progress, and release from recurring blockages.',
    detail:
      'Kalsarpdosh Puja is recommended for devotees facing repeated setbacks, anxiety, instability, or a sense that life progress is being delayed despite effort.',
    image: kalsarpImg,
    duration: '4 to 6 Hours',
    idealFor: ['Career delays', 'Recurring obstacles', 'Inner restlessness'],
    benefits: [
      'Designed to reduce the effects associated with Kalsarp dosh',
      'Supports stability, confidence, and peace of mind',
      'Performed in a disciplined, transparent, and devotional way',
    ],
    includes: [
      'Pre-puja guidance and booking assistance',
      'Temple-side coordination in Ujjain where needed',
      'Live updates and completion proof',
      'Simple follow-up guidance for the yajman',
    ],
    accent: 'from-orange-400 to-yellow-500',
  },
]

export const topLevelPujaLinks = pujaCatalog.map((puja) => ({
  name: puja.name,
  path: `/puja/${puja.slug}`,
}))

export const homeFeatureCards = [
  { title: 'Book Puja', desc: 'Share your requirement and let our team guide the next step.', icon: iconBook, link: '/contact#contact-form' },
  { title: 'Talk to Pandit Ji', desc: 'Get spiritual guidance for dosh nivaran and family rituals.', icon: iconPandit, link: '/contact#connect-options' },
  { title: "Special Puja's", desc: 'Explore Kalsarp, Mangal Dosh, Baglamukhi, Maharudrabhishek, and more.', icon: iconSpecial, link: '/puja#catalog' },
  { title: 'About Ujjain', desc: 'Discover the sacred city, the tradition, and the people behind the service.', icon: iconAbout, link: '/about#ujjain-story' },
]

export const processSteps = [
  { step: '1', title: 'Select Your Ritual', desc: 'Choose a dosh nivaran puja, family anushthan, or consultation package.' },
  { step: '2', title: 'Confirm the Muhurat', desc: 'Our team aligns the most auspicious timing, requirements, and booking details.' },
  { step: '3', title: 'Receive Divine Blessings', desc: 'Attend physically or receive transparent updates through live photos and videos.' },
]

export const trustPillars = [
  { title: 'Verified Pandit Network', desc: 'Every ritual is carried out by experienced pandits with a clear, devotional process.', icon: ShieldCheck },
  { title: 'Temple-Side Coordination', desc: 'From samagri to sankalp details, arrangements are handled with calm and care.', icon: ScrollText },
  { title: 'Updates That Build Trust', desc: 'Families receive timely calls, photos, and clarity instead of uncertainty.', icon: MessageCircle },
]

export const aboutValues = [
  { title: 'Tradition with transparency', desc: 'We keep the sanctity of the ritual intact while making the experience simple to understand.', icon: ScrollText },
  { title: 'Guidance before booking', desc: 'Families can speak with us first, understand the process, and then decide peacefully.', icon: Users },
  { title: 'Support from Ujjain', desc: 'Our approach is rooted in the sacred atmosphere and ritual tradition of Ujjain.', icon: Sun },
]

export const contactCards = [
  { title: 'Call Back Support', desc: 'Share your name, city, and requirement. We will guide you on the right puja and next steps.', actionLabel: 'Request a callback', link: '/contact#contact-form', icon: PhoneCall },
  { title: 'WhatsApp Planning', desc: 'Great for fast coordination, sending details, and receiving updates about the puja flow.', actionLabel: 'Plan on WhatsApp', link: '/contact#contact-form', icon: MessageCircle },
  { title: 'Ujjain Coordination', desc: 'Need temple-side arrangements or guidance around Mahakal-connected rituals? Start here.', actionLabel: 'Share your plan', link: '/contact#contact-form', icon: Clock3 },
]

export const testimonials = [
  {
    text: 'The Mahamrityunjay Jaap was performed flawlessly. We received live photos, and the entire process felt deeply spiritual and transparent.',
    author: 'Rajiv S.',
    location: 'Delhi',
    rating: 5,
  },
  {
    text: 'Booked Kalsarp Dosh puja online. Pandit ji explained every step over the video call and the arrangements were seamless from start to finish.',
    author: 'Sneha M.',
    location: 'Mumbai',
    rating: 5,
  },
  {
    text: 'Highly recommend for authentic pujas. The chanting, discipline, and devotion created a truly blessed experience for our family.',
    author: 'Amit K.',
    location: 'Bangalore',
    rating: 5,
  },
]
