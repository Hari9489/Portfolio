import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Professional Experience</h2>
      
      <div className="space-y-12">
        <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-blue-300">Network Engineer</h3>
              <p className="text-xl text-gray-400">Nigus Systems</p>
            </div>
            <p className="text-gray-400">March 2024 – Present</p>
          </div>
          
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Built and maintained cloud phone systems with features like call menus, wait lines, and call forwarding</li>
            <li>Set up connections with phone providers to ensure calls reach the right destinations</li>
            <li>Managed and optimized cloud phone systems for companies using 3CX</li>
            <li>Integrated customer databases with phone systems for efficient call management</li>
            <li>Enhanced customer service by incorporating chat options like WhatsApp integration</li>
            <li>Configured and maintained on-site and cloud phone systems across different platforms</li>
            <li>Managed IP-based lift systems using FXO gateways for UAE-based companies</li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Work Experience on IP-Based Lift Systems (UAE)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Deployed and configured UCM PBX IPPBX systems on dedicated desktop or server machines</li>
            <li>Configured IP segmentation, gateways, and IP phones</li>
            <li>Set up trunks using FXO gateways on the UCM PBX server</li>
            <li>Deployed 3CX systems for managing IP-based lift communications</li>
            <li>Created extensions/users for IP phones and assigned routing</li>
            <li>Allocated inbound and outbound routes for each gateway based on customer requirements</li>
          </ul>
        </div>
      </div>
    </section>
  );
}