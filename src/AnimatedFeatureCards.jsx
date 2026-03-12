import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, Sparkles, MapPin } from 'lucide-react';

const features = [
  {
    title: "Book Puja",
    description: "Schedule your authentic rituals with trusted pandits easily.",
    icon: <Calendar className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Talk to Pandit ji",
    description: "Get guidance, muhurat, and spiritual advice instantly.",
    icon: <PhoneCall className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Special Pujas",
    description: "Specialized rituals for Kaal Sarp, Mangal Dosh & more.",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />
  },
  {
    title: "About Ujjain",
    description: "Explore the sacred city of Mahakal and Jyotirlinga.",
    icon: <MapPin className="w-8 h-8 text-orange-500" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function AnimatedFeatureCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center border border-gray-100 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}