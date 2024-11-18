import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="mailto:muthukumarhari2002@gmail.com" 
           className="bg-gray-800/50 p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800/70 transition-all">
          <Mail className="text-blue-400" size={24} />
          <div>
            <h3 className="font-semibold text-blue-300">Email</h3>
            <p className="text-gray-300">muthukumarhari2002@gmail.com</p>
          </div>
        </a>
        
        <a href="tel:+919489102595"
           className="bg-gray-800/50 p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800/70 transition-all">
          <Phone className="text-blue-400" size={24} />
          <div>
            <h3 className="font-semibold text-blue-300">Phone</h3>
            <p className="text-gray-300">+91 9489102595</p>
          </div>
        </a>
        
        <a href="https://www.linkedin.com/in/harinesh-muthukumar-a25864331"
           target="_blank"
           rel="noopener noreferrer"
           className="bg-gray-800/50 p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800/70 transition-all">
          <Linkedin className="text-blue-400" size={24} />
          <div>
            <h3 className="font-semibold text-blue-300">LinkedIn</h3>
            <p className="text-gray-300">@harinesh-muthukumar-a25864331</p>
          </div>
        </a>
        
        <div className="bg-gray-800/50 p-6 rounded-lg flex items-center gap-4">
          <MapPin className="text-blue-400" size={24} />
          <div>
            <h3 className="font-semibold text-blue-300">Location</h3>
            <p className="text-gray-300">Bangalore, Karnataka, 560068</p>
          </div>
        </div>
      </div>
    </section>
  );
}