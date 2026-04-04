"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export function BlogListingClient({ posts }: { posts: Post[] }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-20 z-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
          <span className="text-cyan-500 text-xs font-bold uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-sharetech), monospace" }}>THE PULSE :: BLOG</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter" style={{ fontFamily: "var(--font-orbitron)" }}>
          Digital <span className="text-cyan-500">Insights</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Deciphering the digital landscape of Qatar. Expert guides on performance engineering, multimedia storytelling, and structural financial automation.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <Link
              href={`/blog/${post.slug}`}
              className="group relative block p-8 rounded-2xl bg-[#0d0d14] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-sm" style={{ fontFamily: "var(--font-sharetech), monospace" }}>
                    {post.category}
                  </span>
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">{post.date}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "var(--font-orbitron)" }}>
                  {post.title}
                </h2>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-cyan-500 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  READ INTEL <span>→</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/5 group-hover:bg-cyan-500/50 transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function BlogPostClient({ children }: { children: React.ReactNode }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-6 py-20"
    >
      {children}
    </motion.article>
  );
}
