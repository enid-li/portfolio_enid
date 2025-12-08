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
              <span>Nicelyformed AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
            NicelyFormed transforms natural language into production-ready forms in seconds, replacing tedious manual construction with a smart CUI.
            </p>

            {/* Project Stats / Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 text-left">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Role</p>
                <p className="font-semibold">Product Designer</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-semibold">August. 2023 - feb. 2024</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Team</p>
                <p className="font-semibold">3 Devs, 1 PM, 2 UX</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Impact</p>
                <p className="font-semibold">10k+ Users Acquired</p>
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
            src="/assets/NF V0 cover page.png"
            className="w-full h-full object-cover"
          // autoPlay muted loop playsInline
          // poster="https://placehold.co/1920x1080/e2e8f0/64748b/png?text=Loading+Media..."
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}

        {/* Section 1: MVP */}
        <CaseStudySection
          subtitle="Dashboard MVP"
          title="What to include in the dashbaord?"
          description={`我们一开始对产品有一个基本的构想：以用户熟悉的LLM布局为基础，结合表单生成的核心功能，设计一个简洁高效的Dashboard界面。这降低了用户的学习门槛，让他们在熟悉的框架内探索新的生成能力，而不是一开始就面对完全陌生的界面。`}
            media={{
              type: 'image',
              src: '/assets/MVP version.png',
              fit: 'contain'
            }}
        />

        {/* Section 1: Challenges */}
        <CaseStudySection
          subtitle="Key Chanllenges"
          title=" Build The Gap in 3D Web Design"
          description={`新用户经常在初始阶段流失，主要原因为从零开始搭建网站的畏难情绪以及极高的上手成本。如何让用户在Landing page及新建项目页面即可快速体验到AI生成网站的工作流以及其核心价值，成为设计的首要挑战。`}
        />


        {/* Section 3: The Solution (Text + Video) */}
        <CaseStudySection
          subtitle="Early stages"
          title="Whitelist & Referral Programme"
          description={`考虑到Dora ai推理及图片生成成本问题，我们选择开放白名单模式以限制早期的使用人数，并计算用户的平均消耗（Unit Economics），从而估算大规模开放后的成本。同时去规避突发的大规模流量导致的崩溃或响应延迟（Latency）。这样一点点拧开流量，以便验证后端架构的承载能力。
          对于非白名单用户，我们决定仍然保留入口可见。这里利用了FOMO（错失恐惧症）以提高Waitlist的转化率。并且我们也设计了动态刷新的队列号码，希望增加用户回访的动力，进一步提升回访率。`}
          media={{
            type: 'image',
            src: '/assets/Referral programme.png',
            caption: 'Join the whitelist & Share for free trial'
          }}
        />

        {/* Section 4: Design System (Full Width Image) */}
        <CaseStudySection
          subtitle="Acquisition & Activation"
          title="Onboarding Flow"
          description={`Onboarding的设计上，我们给出了双重入口（Dual-Entry Strategy）的设计: 
          为了让用户在最短时间内触达核心功能，我们对存量用户及增量用户分别设计了两条路径：
          1）沉浸式交互引导 (登录前): 在Landing Page，我们结合了鼠标scroll-down的交互，去做AI feature使用方法的演示。用户在下滑过程中，就可以高效地掌握产品使用技巧。
          2）直通式激活弹窗 (登录后): 针对已登录用户，我们在Dashboard内置了带AI feature宣发视频的弹窗，用户一键即可进入AI 工作台。`}
          media={[
            {
              type: 'video',
              src: '/assets/dora_ai_landing_page.mp4',
              alt: 'Dora ai landing page'
            },           
            {
              type: 'video',
              src: '/assets/get_started_dora_ai.mp4',
              alt: 'get started with Dora AI',
            }
          ]}
        />

        {/* Section 5: Conclusion */}
        <CaseStudySection
          subtitle="Design iterations"
          title="Tags or not?"
          description={`在“Gain more credits“的设计上，我们发现引入显性标签（Upgrade the plan & Refer a friend）虽然增加了清晰的信息分类，但也引入了不必要的视觉噪音（Visual Noise）。 继而我们通过增加卡片的对比度作为分类暗示，标签的功能变得冗余。
            移除标签显著提升了界面的信噪比（Signal-to-Noise Ratio），让用户的视线能直接聚焦于核心价值（crerdits）和行动点（Upgrade & Share），而不是浪费精力去处理辅助性的层级信息。与其把所有东西都标出来，不如让context代替labeling自己说话。`}
          media={[
            // {
            //   type: 'image',
            //   src: '/assets/iterations_share.png', 
            //   alt: '[Copy link & Share] visual exploration',
            //   caption: '[Copy link & Share] visual exploration',
            //   fit: 'contain',
            // },
            {
              type: 'image',
              src: '/assets/iterations_referral.png',
              alt: '[Refer & Gain more credits] visual exploration',
              caption: '[Refer & Gain more credits] visual exploration',
              fit: 'contain',
            }
          ]}
        />

        <CaseStudySection
          subtitle="Cold Start Problem"
          title="Reduce Blank Canvas Paralysis"
          description={`在Dora AI冷启动阶段，主要的设计目标为尽量降低用户对0-1建站的畏难心理，期望借力AI快速生成期望网站的基本布局，并引导用户进行后续的修改。根据竞品调研，我们发现如Webflow、Wix等平台均提供了丰富的模板库供用户选择，以减少从零开始设计的难度。但是Dora仍然在起步阶段，没有一个十分强大的社群来提供海量UGC模板。
            因此我们决定通过AI生成多样化的网站模板，用户只需提供简单的文本描述，系统即可生成符合其需求的3D网站布局。这种方式旨在降低了设计门槛，帮助他们专注于细节微调，从而在极短时间内达成最终交付。`}
          media={{
            type: 'video',
            src: '/assets/dora_ai_main.mp4',
            alt: 'Cold-start AI feature'
          }}
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