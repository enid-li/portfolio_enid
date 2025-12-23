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
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">AI Product Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-8 text-black">
              <span>LeapOS 3.0 digital key</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
            Optimized digital carkey system to enhance experience conherency and integrity, delivering a seamless senseless entry experience.
            </p>

            {/* Project Stats / Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 text-left">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Role</p>
                <p className="font-semibold">User experience Designer</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-semibold">August. 2024 - Jan. 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Team</p>
                <p className="font-semibold">4 Devs, 4 PM, 1 UX</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Impact</p>
                <p className="font-semibold">Adoption Rate 5% ↑ </p>
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
            src="/assets/Leapmotor car key cover.png"
            className="w-full h-full object-cover"
          // autoPlay muted loop playsInline
          // poster="https://placehold.co/1920x1080/e2e8f0/64748b/png?text=Loading+Media..."
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}

        {/* Section 1: 背景 */}
        <CaseStudySection
          subtitle="Background"
          title="Adoption Rate Challenges"
          description={`相比于依赖网络的4G远程解闭锁和需要贴靠的NFC，无感蓝牙钥匙具有近场通信优势，在地下车库等弱网环境下表现高效。然而私有蓝牙钥匙开通率未达预期。
            蓝牙钥匙团队于24年末下发25年初Over-the-air(OTA)升级任务，目标提升私有蓝牙钥匙功能的开通率和蓝牙解闭锁成功率，从而整体提高用户满意度，缓解地库罚站问题。`}
        />

        {/* Section 1: Problems*/}
        <CaseStudySection
          subtitle="Pains"
          title=" Pains & Frustrations"
          description={`我们原设计上做了UX Audit，并结合用户运营侧的一些问题反馈，发现了以下几个主要问题:
          a. 阻塞的权限引导流程：目前的交互逻辑将“功能开关”与“全量权限引导”进行了强制联动（Forced Linkage），当用户点击开启蓝牙钥匙时，系统会立刻触发一个不可跳过的多页面的权限开启引导流程（Sequential Flow）。
          用户被迫在“引导页”与“手机系统设置页”之间进行反复的来回跳转（Constant Switching）。只要用户中断了其中任何一步，整个功能就无法开启，极大地增加了操作阻力和流失率。
          b. 权限丢失诊断流程长：用户在初次跑通流程后，往往会因系统误操作关闭后台权限。由于用户对“权限”与“蓝牙钥匙功能”之间的强依赖关系不明晰，导致钥匙失效时用户茫然。
          老版本设计用户必须手动点击“故障诊断”进入三级页面做一个耗时的诊断（Time-consuming Session），诊断结果又有较多技术信息露出。这极大地增加了用户恢复功能的认知门槛和时间成本。 `}
          media={{
            type: 'image',
            src: '/assets/Pains_ble_carkey.png',
            fit: 'contain'
          }}
        />


        {/* Section 3: The Solution (Text + Video) */}
        <CaseStudySection
          subtitle="Design Iterations"
          title="Closing the loop"
          description={`针对上述问题，我们做了以下设计改进:
          a. 
          b. 
          c. 
          `}
          media={[
          {
            type: 'image',
            src: '/assets/Improvements_ble_carkey.png',
            fit: 'contain'
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