import React from 'react';
import { motion } from 'framer-motion';
import { Server, Phone, Network } from 'lucide-react';

const projects = [
  {
    title: "Cloud Phone System Implementation",
    description: "Designed and deployed a comprehensive cloud-based phone system with advanced features including call menus, wait lines, and WhatsApp integration.",
    icon: Phone,
    tech: ["3CX", "VoIP", "SIP", "WebRTC"]
  },
  {
    title: "IP-Based Lift Communication System",
    description: "Implemented IP-based lift communication systems for UAE-based companies using FXO gateways and UCM PBX systems.",
    icon: Network,
    tech: ["UCM PBX", "FXO Gateway", "IP Telephony"]
  },
  {
    title: "Network Infrastructure Upgrade",
    description: "Led a complete network infrastructure upgrade project implementing VLANs, STP, and enhanced security measures.",
    icon: Server,
    tech: ["VLAN", "STP", "RSTP", "ACL"]
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-12"
    >
      <h1 className="text-4xl font-bold mb-8 md:mb-12 gradient-text">Featured Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm"
          >
            <project.icon className="text-pink-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-pink-300">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}