'use client'

import { motion, useSpring, useScroll, } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';
import { CustomCursor } from '@/components/CustomCursor';
import { CaseStudySection } from './components/CaseStudySection';
import { Footer } from './components/Footer';

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

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-32 pb-32 relative z-10">

        {/* 1. Project Hero Section */}
        <header className="mb-24 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#13A71D]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">AI Product Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-8 text-black">
              <span>Dora AI Editor</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
              Redefining how marketers build 3D websites using Generative AI.
              From a prompt to a fully editable 3D scene in seconds.
            </p>

            {/* Project Stats / Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 text-left">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Role</p>
                <p className="font-semibold">Lead Product Designer</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-semibold">Apr 2024 - Present</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Team</p>
                <p className="font-semibold">3 Devs, 1 PM</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Impact</p>
                <p className="font-semibold">2M+ Users Acquired</p>
              </div>
            </div>
          </motion.div>
        </header>

        {/* 2. Hero Image/Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-white/50 bg-gray-200 mb-32 relative"
        >
          {/* Placeholder for Main Hero Video/Image */}
          <video
            src="/assets/dora_ai_main.mp4"
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline
            poster="https://placehold.co/1920x1080/e2e8f0/64748b/png?text=Loading+Media..."
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}

        {/* Section 1: The Problem (Text Heavy) */}
        <CaseStudySection
          subtitle="The Challenge"
          title="The Gap in 3D Web Design"
          description={`Traditional 3D web design is notoriously difficult. It requires mastering complex tools like Blender or Three.js, which are inaccessible to most marketers and graphic designers.
            
            Our goal was to lower this barrier significantly. We wanted to create a tool where a user could describe their vision in natural language, and the system would generate a semantic, editable 3D layout.`}
        />

        {/* Section 2: Visual Exploration (Images Only, Grid) */}
        <CaseStudySection
          layout="full-width"
          media={[
            { type: 'image', src: 'https://placehold.co/1200x800/f3f4f6/9ca3af?text=Early+Exploration+1', caption: 'Initial wireframes for the prompt interface' },
            { type: 'image', src: 'https://placehold.co/1200x800/e5e7eb/9ca3af?text=Exploration+2', caption: 'Material generation tests' }
          ]}
        />

        {/* Section 3: The Solution (Text + Video) */}
        <CaseStudySection
          subtitle="The Solution"
          title="Contextual AI Nudges"
          description="Instead of a blank canvas, we introduced 'Pro Nudges'. As the user edits the generated site, the AI suggests improvements based on design principles—like contrast ratios, spacing consistency, and typographic hierarchy."
          media={{
            type: 'video',
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', // Placeholder video
            caption: 'Demo of the Contextual Nudge system in action'
          }}
        />

        {/* Section 4: Design System (Full Width Image) */}
        <CaseStudySection
          subtitle="Design System"
          title="Built for Dark Mode"
          description="We overhauled the entire UI library to support a high-contrast dark mode, essential for creative tools used for long hours."
          layout="full-width"
          media={{
            type: 'image',
            src: 'https://placehold.co/1920x1080/1e293b/94a3b8?text=Dark+Mode+UI+Kit',
            alt: 'Design System Overview'
          }}
        />

        {/* Section 5: Conclusion */}
        <CaseStudySection
          subtitle="Outcome"
          title="2 Million Users in 3 Months"
          description={`The launch was a massive success. The ease of use resonated with our core demographic of freelance designers.
            
            Key learnings included the importance of "undo" states in generative workflows and the need for more granular control over specific 3D assets.`}
        />


      </main>

      <Footer />
    </div>
  );
}