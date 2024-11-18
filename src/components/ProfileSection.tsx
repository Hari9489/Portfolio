import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfileSection() {
  return (
    <section className="relative px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <div className="space-y-4 md:space-y-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold gradient-text"
          >
            HARINESH MK
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-primary-400"
          >
            Network Engineer
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <a href="mailto:muthukumarhari2002@gmail.com" 
               className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group text-sm md:text-base">
              <Mail className="group-hover:stroke-primary-400" size={18} />
              <span>muthukumarhari2002@gmail.com</span>
            </a>
            <a href="tel:+919489102595" 
               className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group text-sm md:text-base">
              <Phone className="group-hover:stroke-primary-400" size={18} />
              <span>+91 9489102595</span>
            </a>
            <a href="https://www.linkedin.com/in/harinesh-muthukumar-a25864331" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group text-sm md:text-base">
              <Linkedin className="group-hover:stroke-primary-400" size={18} />
              <span className="break-all">harinesh-muthukumar-a25864331</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
              <MapPin size={18} />
              <span>Bangalore, Karnataka, 560068</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 leading-relaxed max-w-xl text-sm md:text-base"
          >
            A highly skilled professional with expertise in VoIP, SIP, PSTN, PRI, and WebRTC technologies. 
            Proven ability to design, implement, and troubleshoot real-time communication solutions for voice calls, 
            video conferencing, and file sharing.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mt-8 md:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672"
            alt="Network Technology"
            className="rounded-2xl object-cover w-full h-[300px] md:h-[500px] relative z-10 gradient-border hover-glow"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}