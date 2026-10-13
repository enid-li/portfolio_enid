'use client'

import { motion, useSpring, useScroll, } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';
import { CustomCursor } from '@/components/CustomCursor';
import { CaseStudySection } from './components/CaseStudySection';
import { Footer } from '@/components/Footer';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gray-50 text-black selection:bg-black selection:text-white cursor-none font-sans">

      <CustomCursor />
      <ParticleBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#E2F175] origin-left z-[100]"
        style={{ scaleX }}
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-12 pb-32 relative z-10">

        {/* 1. Project Hero Section */}
        <header className="mb-24 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >

          </motion.div>
        </header>


        <CaseStudySection
         subtitle="工作及教育经历"
         title="Resume"
         
           media={[
            {
              type: 'image',
              src: '/assets/Resume_2026_9.png',
              alt: 'Car Control Page',
              fit: 'contain',
            },
           ]}    
        />

        {/* Next Project Footer */}
        <div className="border-t border-gray-200 mt-32 pt-16">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-wider mb-8">Next Project</p>

          <Link href="/project/workflow" className="group block max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden bg-[#E2F175] aspect-[21/9] flex items-center justify-center border border-black/5"
            >
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 group-hover:underline decoration-4 underline-offset-4 decoration-[#F79CEF]">Workflow Tool</h3>
                <p className="text-black/60 font-medium">UX Architecture</p>
              </div>

              {/* Decorative Doodles for Next Project Card */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <Sparkles className="absolute top-10 left-10 w-24 h-24 text-black" />
                <ArrowRight className="absolute bottom-10 right-10 w-24 h-24 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </motion.div>
          </Link>

        </div>
      </main>
    </div>
  );
}