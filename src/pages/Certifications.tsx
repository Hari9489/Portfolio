import React from 'react';
import { motion } from 'framer-motion';
import { Award, Network, Server, Shield } from 'lucide-react';

const certifications = [
  {
    title: "Network Implementation Specialist",
    issuer: "Nigus Systems",
    date: "2024",
    description: "Specialized training in network implementation and troubleshooting",
    icon: Network
  },
  {
    title: "IP Telephony Expert",
    issuer: "3CX Foundation",
    date: "2024",
    description: "Hands-on experience with IP-based communication systems",
    icon: Server
  },
  {
    title: "Network Security Fundamentals",
    issuer: "CompTIA",
    date: "2023",
    description: "Core understanding of network security principles and practices",
    icon: Shield
  }
];

export default function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-12"
    >
      <h1 className="text-4xl font-bold mb-12 gradient-text">Professional Certifications</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-center">
              <cert.icon className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-pink-300">{cert.title}</h3>
              <div className="flex gap-2 text-gray-400 text-sm mt-2">
                <span>{cert.issuer}</span>
                <span>•</span>
                <span>{cert.date}</span>
              </div>
              <p className="text-gray-300 mt-4">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Training & Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2670"
            alt="Network Infrastructure"
            className="rounded-lg object-cover h-64 w-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2674"
            alt="Data Center"
            className="rounded-lg object-cover h-64 w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}