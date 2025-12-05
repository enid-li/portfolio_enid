'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Menu, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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


// 3. Glass Project Card (修改版：单张大图/视频)
interface SingleMediaItem {
  src: string;
  type: 'image' | 'video';
}

function GlassProjectCard({
  title,
  category,
  description,
  media, // 变量名从 images 改为 media，接受单个对象
  href
}: {
  title: string,
  category: string,
  description: string,
  media: SingleMediaItem,
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
        {/* Media Area - 现在是单个大窗口 */}
        <div className="relative p-4 w-full aspect-video">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
            <MediaContent 
              src={media.src} 
              type={media.type} 
              alt={title}
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>
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
            <p className="text-gray-900 text-sm leading-relaxed line-clamp-2 mix-blend-hard-light font-medium">{description}</p>
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
            <p className="text-gray-900 text-sm leading-relaxed line-clamp-2 mix-blend-hard-light font-medium">{description}</p>
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
        <svg className="absolute top-[8%] left-[10%] w-[110%] h-[120%] -z-10 overflow-visible" viewBox="0 0 400 120">
          <motion.path
            d="M 40 40 C 40 40 100 20 200 30 C 300 40 380 60 350 90 C 320 120 100 110 50 90 C 20 70 30 50 40 40"
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
// 1. Jelly Cursor 组件代码
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black pointer-events-none z-[9999] hidden md:block mix-blend-difference bg-white"
      style={{ x: cursorXSpring, y: cursorYSpring }}
      animate={{ scale: isHovering ? 2.5 : 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}

// 2. Particle Background 组件代码
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number, y: number, vx: number, vy: number, size: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 20 : 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
        });
      }
    };

    let mouse = { x: -1000, y: -1000 };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          p.x -= (dx / distance) * force * 2;
          p.y -= (dy / distance) * force * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-black selection:bg-black selection:text-white cursor-none font-sans">
      
      {/* 保持原来的 Cursor 和 Background */}
      <CustomCursor />
      <ParticleBackground />

      {/* 保持原来的 Nav */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
        <Link href="/" className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">Enid Li</Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/others">Others</NavLink>
        </div>
        <button className="md:hidden p-2"><Menu className="w-6 h-6" /></button>
      </nav>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-40 pb-32 relative z-10">
        
        {/* 保持原来的 Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto relative"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter leading-[1.1] text-black" >
              <span className="relative inline-block mr-4">
          Full-Stack
          <HeroDoodles />
              </span>
              <br className="md:hidden" />
              <span className="relative inline-block">
          Designer.
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
              I build product where <span className="font-bold relative px-1">
                Creativity
                <span className="absolute inset-0 bg-[#E2F175] -z-10 -rotate-2 rounded-sm opacity-60"></span>
              </span> meets <span className="font-bold relative px-1">
                Functionality
                <span className="absolute inset-0 bg-[#F79CEF] -z-10 rotate-2 rounded-sm opacity-60"></span>
              </span>.
            </p>
          </motion.div>
        </section>

        {/* 2. Grid Layout (Updated to Single Media Item) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          
          {/* Example: Video Card */}
          <GlassProjectCard
            title="Dora.ai"
            category="AI Product Design"
            description="Designed the editing system and shipped GenAI features. A new editor for marketers and brand designers."
            href="/project/dora"
            media={{
              type: 'video',
              src: "/assets/dora_ai_main.mp4" // 替换为实际视频路径
            }}
          />

          {/* Example: Image Card */}
          <GlassProjectCard
            title="Workflow Tool"
            category="UX Architecture"
            description="Blurring abstraction boundaries and making workflows feel more connected."
            href="/project/workflow"
            media={{
              type: 'image',
              src: "https://placehold.co/800x600/f3f4f6/374151/png?text=Workflow"
            }}
          />

          <GlassProjectCard
            title="Pro Nudges"
            category="Growth Design"
            description="Contextual nudges that appear naturally in the user journey."
            href="/project/nudges"
            media={{
              type: 'image',
              src: "https://placehold.co/800x600/fff7ed/ea580c/png?text=Growth"
            }}
          />

          <GlassProjectCard
            title="Design System"
            category="Infrastructure"
            description="A complete overhaul of the component library to support dark mode and accessibility."
            href="/project/system"
            media={{
              type: 'image',
              src: "https://placehold.co/800x600/fdf4ff/c026d3/png?text=System"
            }}
          />
        </section>

        {/* 3. Horizontal Cards (Updated to Array of MediaItems) */}
        <section className="space-y-8 mb-32">
          
          {/* Example: Mixed Video and Images */}
          <GlassProjectCardHorizontal
            title="Brand Identity"
            category="Visual Design"
            description="Complete brand identity system including typography, color palette, and iconography guidelines."
            href="/project/brand"
            mediaItems={[
              { type: 'video', src: "/assets/brand_showcase.mp4" }, // 假设第一张是视频
              { type: 'image', src: "https://placehold.co/600x400/ddd6fe/8b5cf6/png?text=Typography" },
              { type: 'image', src: "https://placehold.co/600x400/fce7f3/ec4899/png?text=Icons" }
            ]}
          />

          <GlassProjectCardHorizontal
            title="Mobile App Redesign"
            category="Mobile UX"
            description="Complete redesign of native iOS and Android app focusing on performance and user engagement."
            href="/project/mobile"
            mediaItems={[
              { type: 'image', src: "https://placehold.co/600x400/e0e7ff/4f46e5/png?text=Onboarding" },
              { type: 'image', src: "https://placehold.co/600x400/f0fdf4/22c55e/png?text=Dashboard" },
              { type: 'image', src: "https://placehold.co/600x400/fef2f2/f43f5e/png?text=Settings" }
            ]}
          />

          <GlassProjectCardHorizontal
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
        </section>

        {/* 保持原来的 Speaking, Footer 等 */}
        <section className="max-w-4xl mx-auto mb-48">
          <div className="flex items-baseline justify-between mb-16 border-b border-gray-200 pb-6">
            <h2 className="text-4xl font-semibold tracking-tight">Speaking & Writing</h2>
            <span className="text-gray-400">2023 — 2025</span>
          </div>
          <div className="space-y-2">
            {['Conference: Deep Dive', 'Building Tools', 'Advocating for Craft'].map((item, i) => (
              <ListItem key={i} title={item} />
            ))}
          </div>
        </section>

        <footer className="bg-[#E2F175] rounded-3xl py-20 px-8">
          <a
            href="mailto:hello@enidli.com"
            className="group relative inline-flex flex-col items-center gap-4 w-full justify-center"
          >
            <span className="text-3xl md:text-5xl font-semibold tracking-tight text-black group-hover:text-[#13A71D] transition-colors">
              hello@enidli.com
            </span>
            <span className="text-sm text-gray-700">Let's build something fun.</span>
          </a>
        </footer>
      </main>
    </div>
  );
}

// 保持 NavLink 和 ListItem 不变
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-black hover:scale-105 transition-all duration-200 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
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