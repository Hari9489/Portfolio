import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from '../components/ProfileSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-12 space-y-20"
    >
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </motion.div>
  );
}