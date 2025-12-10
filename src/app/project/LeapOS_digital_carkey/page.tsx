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
            NicelyFormed transforms natural language into production-ready forms in seconds, replacing tedious manual construction with a smart CUI.
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
                <p className="font-semibold">Adoption Rate increase 5% </p>
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
          a. Prompt Bar移至页面顶部的Hero Section，并移除冗余的CTA以消除注意力分散。
          b. “Create from scratch“按钮降级为三级链接样式，在视觉上进行弱化。
          c. 纯文本模版标签升级为带有缩略图预览的卡片。旨在为用户提供点击后的心理预期，去解决“点击迟疑”问题。
          d. 我们移除了静态模版上的“星星”图标，避免了用户混淆“生成式功能”与“预设功能。”
          这一重组确立了产品“AI Native”的定位。通过建立清晰的视觉焦点，我们引导用户进入“主要路径”（AI 生成），同时保留手动创建作为低干扰的兜底选项。`}
          media={[
          {
            type: 'image',
            src: '/assets/MVP version_updated.png',
            fit: 'contain'
          },
          ]}  
        />



        {/* Section 4: Design System (Full Width Image) */}
        <CaseStudySection
          subtitle="MVP updates"
          title="Improvements"
          description={`根据`}
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