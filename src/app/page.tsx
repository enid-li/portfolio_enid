'use client'

import { useState, } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Menu, Sparkles } from 'lucide-react';
import { motion, } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Footer } from '@/components/Footer';

// ... (保留之前的 COLORS, HOVER_COLORS, CustomCursor, ParticleBackground 代码不变) ...
const COLORS = {
  green: '#13A71D',
  lime: '#E2F175',
  pink: '#F79CEF',
  dark: '#917A7A',
  blue: '#CEEEEF'
};
const HOVER_COLORS = [COLORS.green, COLORS.lime, COLORS.pink, COLORS.dark];

// --- 新增：统一的媒体渲染组件 (支持 Image 和 Video) ---
interface MediaProps {
  src: string;
  type: 'image' | 'video';
  alt?: string;
  className?: string;
}

function MediaContent({ src, type, alt = "project media", className = "" }: MediaProps) {
  if (type === 'video') {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={`object-cover w-full h-full ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}


// 3. Glass Project Card (修改版：支持单张或多张媒体)
interface SingleMediaItem {
  src: string;
  type: 'image' | 'video';
}

function GlassProjectCard({
  title,
  category,
  description,
  media, // 现在接受单个或多个媒体项
  href
}: {
  title: string,
  category: string,
  description: string,
  media: SingleMediaItem | SingleMediaItem[], // 可以是单个或数组
  href: string
}) {
  const defaultBg = 'rgba(255, 255, 255, 0.4)';
  const [activeBg, setActiveBg] = useState(defaultBg);

  const handleMouseEnter = () => {
    setActiveBg(HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)]);
  };

  const handleMouseLeave = () => {
    setActiveBg(defaultBg);
  };

  // 将单个媒体转换为数组以统一处理
  const mediaArray = Array.isArray(media) ? media : [media];

  return (
    <Link href={href} className="group relative block w-full h-full">
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          backgroundColor: activeBg,
          y: activeBg !== defaultBg ? -5 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full rounded-3xl backdrop-blur-md border border-white/50 shadow-sm hover:shadow-xl hover:shadow-black/5 overflow-hidden flex flex-col"
      >
        {/* Media Area - 支持多张图片的网格 */}
        <div className={`relative p-4 w-full gap-2 grid ${mediaArray.length === 1 ? 'grid-cols-1' : mediaArray.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`} style={{ aspectRatio: '16/9' }}>
          {mediaArray.map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden bg-gray-100 w-full h-full">
              <MediaContent
                src={item.src}
                type={item.type}
                alt={`${title} - ${index + 1}`}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 mix-blend-hard-light">{category}</p>
                <h3 className="text-2xl font-bold text-black mb-3 mix-blend-hard-light">{title}</h3>
              </div>
              <div className="bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <p className="text-gray-900 text-sm leading-relaxed mix-blend-hard-light font-medium whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// 4. Horizontal Glass Card (修改版：支持混合 Image/Video)
function GlassProjectCardHorizontal({
  title,
  category,
  description,
  mediaItems, // 改名为 mediaItems，接受数组
  href
}: {
  title: string,
  category: string,
  description: string,
  mediaItems: SingleMediaItem[], // 必须是包含3个元素的数组
  href: string
}) {
  const defaultBg = 'rgba(255, 255, 255, 0.4)';
  const [activeBg, setActiveBg] = useState(defaultBg);

  const handleMouseEnter = () => {
    setActiveBg(HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)]);
  };

  const handleMouseLeave = () => {
    setActiveBg(defaultBg);
  };

  return (
    <Link href={href} className="group relative block w-full">
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          backgroundColor: activeBg,
          y: activeBg !== defaultBg ? -5 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-3xl backdrop-blur-md border border-white/50 shadow-sm hover:shadow-xl hover:shadow-black/5 overflow-hidden flex flex-col"
      >
        {/* Media Gallery Area - 3 Column Grid */}
        <div className="relative p-4 gap-2 grid grid-cols-3 w-full">
          {mediaItems.map((item, index) => (
            <div key={index} className="col-span-1 relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <MediaContent
                src={item.src}
                type={item.type}
                alt={`${title} - ${index + 1}`}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 mix-blend-hard-light">{category}</p>
                <h3 className="text-2xl font-bold text-black mb-3 mix-blend-hard-light">{title}</h3>
              </div>
              <div className="bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <p className="text-gray-900 text-sm leading-relaxed mix-blend-hard-light font-medium whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ... (保留 HeroDoodles 不变) ...
function HeroDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <svg className="absolute top-[8%] left-[1%] w-[100%] h-[120%] -z-10 overflow-visible" viewBox="0 0 400 120">
        <motion.path
          d="M 30 70 A 160 28 0 1 1 350 70 A 160 28 0 1 1 30 70"
          fill="none"
          stroke={COLORS.pink}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
      <motion.div
        className="absolute -top-8 -right-8"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
      >
        <Sparkles size={48} fill={COLORS.lime} stroke={COLORS.lime} />
      </motion.div>
    </div>
  )
}

// --- MAIN PAGE (Updated Data Structure) ---
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-black selection:bg-black selection:text-white cursor-none font-sans">

      {/* Import components from new file */}
      <CustomCursor />
      <ParticleBackground />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-40 pb-32 relative z-10">

        {/* 保持原来的 Hero Section */}
        <section className="mb-12 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto relative"
          >
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto pt-2" style={{ color: COLORS.dark, opacity: 0.6 }}>
            Hi, I'm Enid Li, a 
            </p> 
            <h1 className="text-2xl md:text-7xl lg:text-9xl font-semibold tracking-tighter leading-[1.1] text-black" >
              <span className="relative inline-block mr-4">
                User Experience
                <HeroDoodles />
              </span>
              <br className="md:hidden" />
              <span className="relative inline-block">
                Product Designer.
                <svg viewBox="0 0 300 15" className="absolute -bottom-2 left-0 w-full h-4" style={{ color: COLORS.green }}>
                  <motion.path
                    d="M 5 10 Q 150 2 295 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto pt-6" style={{ color: COLORS.dark, opacity: 0.6 }}>
              I firmly believe that <span className="font-bold relative px-1">
                <span className="absolute inset-0 bg-[#E2F175] -z-10 -rotate-2 rounded-sm opacity-60"></span>
              </span>product thinking <span className="font-bold relative px-1">
                is indispensable for designers in the new era.
                <span className="absolute inset-0 bg-[#F79CEF] -z-10 rotate-2 rounded-sm opacity-60"></span>
              </span>.
            </p>
          </motion.div>
        </section>

        {/* 2. Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">



          {/*项目1 - Leap OS app digital carkey*/}
          <GlassProjectCard
            title="Leap HMI 4.0 Redesign"
            category="HMI Design"
            description="Optimized the Leap HMI from version 3.5+ to 4.0, with a full redesign guided by three core principles: Discoverable, Unobtrusive, Intuitive and Effortless.
            我们将 Leap HMI 从 v3.5 + 优化升级至 v4.0，并基于四大核心设计原则：不难找、不打断、不难猜、不费脑，对其重新设计"
            href="/project/Leap_hmi4.0"
            media={{
              type: 'image',
              src: "/assets/Leap HMI 4.0 hero.png"
            }}
          />

          {/*项目2 - Leap OS app digital carkey*/}
          <GlassProjectCard
            title="LeapOS Digital Car Key"
            category="Connected Car Experience"
            description="Refactored the digital car key page. The upgrade improves compatibility with upcoming digital key protocols while enabling a better frictionless lock and unlock experience.
            优化并重构数字车钥匙界面。提升系统对未来数字钥匙协议（UWB)的兼容性，同时实现更优质的无感解闭锁体验"
            href="/project/LeapOS_digital_carkey"
            media={{
              type: 'image',
              src: "/assets/Leapmotor car key hero.png"
            }}
          />

          {/*项目3 - Leap OS AI car-control*/}
          <GlassProjectCard
            title="LeapOS AI Car-control Agent"
            category="Connected Car Experience"
            description="An LLM-powered Mobility Agent that redefines vehicle-control paradigm, turning complex control hierarchies into a seamless, intent-driven CUI interface.
            打造基于大模型的出行智能体，重新定义远控范式，将多层级的嵌套页面转化为语音、意图驱动的对话式交互界面，实现一句话控车、车况查询、用车手册等功能"
            href="/project/LeapOS_car_control"
            media={{
              type: 'image',
              src: "/assets/Leapmotor AI car control hero.png"
            }}
          />

          {/*项目5 - APP Collection*/}
          <GlassProjectCard
            title="APP Project Collection"
            category="IoT Design"
            description="A gallery for the Leap remote control APP, showcasing my core work scope: domestic & overseas vehicle data visualization, overseas marketplace, user manual, Temperature control, maps.
            这是一个Leap远控APP的界面合集，里面包含了我做过的主要APP需求，包含但不限于：国内外用车数据可视化、海外商城与用户手册、车内温控、地图及电子围栏"
            href="/project/Leap_APP_Collection"
            media={{
              type: 'image',
              src: "/assets/Leap APP 3.0 hero.png"
            }}
          />

          {/*项目5 - Dora AI*/}
          <GlassProjectCard
            title="Dora.ai 无代码建站工具"
            category="No-code Web Builder"
            description="Designed No-code web builder Dora AI features, enabling a natural-language-driven 3D website Developing experience. 
            设计无代码建站工具 Dora AI 功能，提供自然语言驱动的3D网站创作体验。"
            href="/project/dora"
            media={{
              type: 'image',
              src: "/assets/dora_ai.jpg"
            }}
          />

          {/*项目6 - Nicelyformed*/}
          <GlassProjectCard
            title="Nicelyformed AI问卷生成工具"
            category="AI Form Builder"
            description="Nicelyformed is an AI chatbot for form building, enabling users to generate surveys and do the iterations through dialogue.
            这是一款表单搭建AI对话机器人，用户可通过自然语言对话生成问卷并迭代优化。"
            href="/project/nicelyformed"
            media={[
              { type: 'image', src: "/assets/nicelyformed_hero.JPG" },
            ]}
          />

        </section>

        {/* 3. Horizontal Cards (Updated to Array of MediaItems) 
        <section className="space-y-8 mb-32">

          {/* Example: Mixed Video and Images */}


          {/*<GlassProjectCardHorizontal
            title="Web Platform"
            category="Full Stack Design"
            description="Enterprise web platform with complex data visualization and real-time collaboration features."
            href="/project/platform"
            mediaItems={[
              { type: 'image', src: "https://placehold.co/600x400/f3f4f6/6b7280/png?text=Dashboard" },
              { type: 'image', src: "https://placehold.co/600x400/fafaf9/78716c/png?text=Analytics" },
              { type: 'image', src: "https://placehold.co/600x400/f5f3ff/a78bfa/png?text=Reports" }
            ]}
          />
        </section>*/}

        {/* 保持原来的 Speaking, Footer 等 */}
        <section className="max-w-4xl mx-auto mb-48">
          <div className="flex items-baseline justify-between mb-16 border-b border-gray-200 pb-6">
            <h2 className="text-4xl font-semibold tracking-tight">Experience</h2>
            <span className="text-gray-400">2023 — 2026</span>
          </div>
          <div className="space-y-2">
            {['Ford London (23.1-23.5) - UX Designer', 'Dora & Nicelyfromed (23.10-24.2) - Product Designer & Entrepreneur', 'Leapmotor (24.5-Now) - UX Designer'].map((item, i) => (
              <ListItem key={i} title={item} />
            ))}
          </div>
        </section>

        <footer className="bg-[#E2F175] rounded-3xl py-20 px-8">
                    <a
                        href="mailto:hello@enidli.com"
                        className="group relative inline-flex flex-col items-center gap-4 w-full justify-center"
                    >
                        <span className="max-w-full break-all text-3xl md:text-5xl font-semibold tracking-tight text-black group-hover:text-[#13A71D] transition-colors">
                            xinyuanli12138@outlook.com
                        </span>
                        <span className="text-sm text-gray-700">Let's build something fun.</span>
                    </a>
                </footer> 
        {/*<div className="border-t border-gray-200 mt-32 pt-16">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-wider mb-8">Next Project</p>

          {/*<Link href="/project/workflow" className="group block max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden bg-[#E2F175] aspect-[21/9] flex items-center justify-center border border-black/5"
            >
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 group-hover:underline decoration-4 underline-offset-4 decoration-[#F79CEF]">Workflow Tool</h3>
                <p className="text-black/60 font-medium">UX Architecture</p>
              </div>

              {/* Decorative Doodles for Next Project Card 
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <Sparkles className="absolute top-10 left-10 w-24 h-24 text-black" />
                <ArrowRight className="absolute bottom-10 right-10 w-24 h-24 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </motion.div>
           </Link> 
        </div>*/}
          
      </main>
    </div>
  );
}



function ListItem({ title }: { title: string }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="block py-6 border-b border-gray-100 hover:bg-gray-50 px-4 -mx-4 rounded-xl transition-colors group cursor-none"
    >
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium group-hover:translate-x-2 transition-transform">{title}</span>
        <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-blue-600" />
      </div>
    </motion.a>
  )
}