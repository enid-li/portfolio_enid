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
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">IoT Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-8 text-black">
              <span>Leap APP 3.0</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
            A gallery for the Leap remote control APP, showcasing my core work scope: domestic & overseas vehicle data visualization, overseas marketplace, user manual, Temperature control, maps.
            </p>

            {/* Project Stats / Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 text-left">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Role</p>
                <p className="font-semibold">User experience Designer</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-semibold">May. 2024 - Now</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Team</p>
                <p className="font-semibold">16 Devs, 2 PM, 2 UX</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Impact</p>
                <p className="font-semibold">1 Million + User </p>
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
          <img
            src="/assets/Leapmotor Remote Control cover.png"
            className="w-full h-full object-cover"
          // autoPlay muted loop playsInline
          // poster="https://placehold.co/1920x1080/e2e8f0/64748b/png?text=Loading+Media..."
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}


        {/* Section 1: Before*/}
        <CaseStudySection
          subtitle="旧版本"
          title="Before Redesign"
          description={`重构设计前，旧版本的APP有很多问题：用户无法理解或者根本不关心的技术信息露出过多、充电和能耗数据口径不符合用户预期、快捷车控无法连续并行下发、重点车况信息不明显等。
            旧版本的首页我们使用2d车型配置图做车辆状态展示，这造成了巨大的配图工程量，且质感较差。 `}
          media={{
            type: 'image',
            src: '/assets/APP_Design_before.png',
            fit: 'contain'
          }}
        />

        {/* Section 2: After*/}
        <CaseStudySection
          subtitle="新国内版本"
          title="After Redesign (Domestic）"
          description={`重构后我们使用3D车模型进行四门两盖、车窗、早晚、胎压、车内温控等车辆状态的展示。
            这意味着需要对四门两盖等车模型动画并发做优先级处理。比如主驾车门、二排右车门同时打开。
            车模型的翻转和车模型部件开合动画播放均需要按响应状态进行显示。车模型上的状态显示需要和实际车辆对齐，以规避质量问题。 `}
          media={[
          {
            type: 'video',
            src: '/assets/3d model.mov',
            fit: 'contain'
           },
             {
              type: 'image',
              src: '/assets/APP_Design_after.png',
              alt: 'Car Control Page',
              fit: 'contain',
            }
          ]}
        />


        {/* Section 3: After Oversea*/}
        <CaseStudySection
          subtitle="新海外版本"
          title="After Redesign (Overseas）"
          description={`海外的项目重点主要在多语言的适配，零跑的出口国家较多，主要涉及22国语言的适配以及各个机型（IOS、Android、Harmony）的适配。
            不同版本的机型性能不一样，帧率也不同，适配难度大故海外暂未升级3D车模型桌面。除了用车数据可视化（充电记录和里程能耗）外，海外相关的需求集中在商城、运营类需求（如海外流量、用户手册）以及手机辅助ota。`}
          media={[
             {
              type: 'image',
              src: '/assets/APP_Design_oversea.png',
              alt: 'Car Control Page',
              fit: 'contain',
            }
          ]}
        />


 
        
        {/* Next Project Footer */}
        <div className="border-t border-gray-200 mt-32 pt-16">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-wider mb-8">Next Project</p>

          <Link href="/project/dora" className="group block max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden bg-[#E2F175] aspect-[21/9] flex items-center justify-center border border-black/5"
            >
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 group-hover:underline decoration-4 underline-offset-4 decoration-[#F79CEF]">Dora AI</h3>
                <p className="text-black/60 font-medium">No-code web builder</p>
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