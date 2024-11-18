import React from 'react';
import { Network, Server, Shield, Wifi, Database, Code } from 'lucide-react';

const skills = [
  {
    category: "VoIP and SIP Technologies",
    description: "Configuring and troubleshooting VoIP systems, SIP trunks, PSTN, and PRI gateways",
    icon: Network
  },
  {
    category: "Network Design & Implementation",
    description: "Planning and implementing LANs utilizing structured cabling",
    icon: Server
  },
  {
    category: "Network Integration & Testing",
    description: "Integrating network components and conducting testing with switches and hubs",
    icon: Wifi
  },
  {
    category: "Networking Protocols",
    description: "OSI model, TCP/IP protocol suite, subnetting, IP addressing, routing protocols, FTP",
    icon: Database
  },
  {
    category: "Network Security & Management",
    description: "Access Control Lists (ACLs), DHCP servers, IP management",
    icon: Shield
  },
  {
    category: "Network Switching",
    description: "VLANs, Spanning Tree Protocol (STP), Rapid Spanning Tree Protocol (RSTP)",
    icon: Code
  }
];

export default function SkillsSection() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-blue-400">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all">
            <div className="flex items-start gap-4">
              <skill.icon className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-300">{skill.category}</h3>
                <p className="text-gray-300 text-sm md:text-base">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <img 
          src="https://images.unsplash.com/photo-1612045194743-877419047a35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Network Setup"
          className="rounded-lg object-cover h-48 w-full"
        />
        <img 
          src="https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=2670"
          alt="Data Center"
          className="rounded-lg object-cover h-48 w-full"
        />
        <img 
          src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?auto=format&fit=crop&q=80&w=2670"
          alt="Network Infrastructure"
          className="rounded-lg object-cover h-48 w-full sm:col-span-2 md:col-span-1"
        />
      </div>
    </section>
  );
}