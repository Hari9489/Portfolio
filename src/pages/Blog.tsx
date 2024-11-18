import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const posts = [
  {
    title: "The Future of VoIP Technology",
    date: "March 15, 2024",
    excerpt: "Exploring upcoming trends in Voice over IP technology and their impact on business communications.",
    readTime: "5 min read"
  },
  {
    title: "Implementing Secure Network Infrastructure",
    date: "March 10, 2024",
    excerpt: "Best practices for building and maintaining secure network systems in modern enterprises.",
    readTime: "7 min read"
  },
  {
    title: "Cloud Phone Systems: A Complete Guide",
    date: "March 5, 2024",
    excerpt: "Everything you need to know about implementing cloud-based phone systems for your organization.",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-12"
    >
      <h1 className="text-4xl font-bold mb-12 gradient-text">Technical Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl backdrop-blur-sm cursor-pointer"
          >
            <div className="flex items-center gap-2 text-pink-400 mb-2">
              <BookOpen size={18} />
              <span className="text-sm">{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-semibold text-pink-300 mb-2">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="text-gray-400 text-sm">{post.date}</div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}