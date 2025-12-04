'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Menu } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- COMPONENTS START ---

// 1. Jelly Cursor (保持不变，因为效果很好)
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

// 2. Particle Background (保持不变，为了透过磨砂玻璃看效果)
function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      let animationFrameId: number;
      let particles: Array<{x: number, y: number, vx: number, vy: number, size: number}> = [];
      
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
            size: Math.random() * 3 + 1, // 稍微加大粒子，让透过玻璃更明显
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
  
          // Mouse interaction
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

// 3. Uniform Glass Card with 3 Images
// 这是一个统一大小的磨砂玻璃卡片，支持展示3张图
interface ProjectImages {
    main: string;
    sub1: string;
    sub2: string;
}

function GlassProjectCard({ 
    title, 
    category, 
    description, 
    images, 
    href 
}: { 
    title: string, 
    category: string, 
    description: string, 
    images: ProjectImages, 
    href: string 
}) {
    return (
      <Link href={href} className="group relative block w-full h-full">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          // --- GLASSMORPHISM STYLES ---
          // bg-white/40 (40%不透明度) + backdrop-blur-md (背景模糊) + border (边框增加质感)
          className="h-full rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-xl hover:shadow-black/5 overflow-hidden flex flex-col transition-all duration-300"
        >
            {/* Image Gallery Area - 4:3 Aspect Ratio */}
            <div className="relative p-4 gap-2 grid grid-cols-3 grid-rows-2 aspect-video">
                
                {/* Main Image (Occupies 2/3 width, full height) */}
                <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden bg-gray-100">
                     <Image 
                        src={images.main} 
                        alt={title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                     />
                </div>

                {/* Sub Image 1 (Top right) */}
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden bg-gray-100">
                    <Image 
                        src={images.sub1} 
                        alt="detail" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>

                {/* Sub Image 2 (Bottom right) */}
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden bg-gray-100">
                    <Image 
                        src={images.sub2} 
                        alt="detail" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">{category}</p>
                            <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
                        </div>
                        <div className="bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
                </div>
            </div>
        </motion.div>
      </Link>
    );
}

// 4. Horizontal Glass Card with 3 Images (Full Width)
interface ProjectImagesHorizontal {
    img1: string;
    img2: string;
    img3: string;
}

function GlassProjectCardHorizontal({ 
    title, 
    category, 
    description, 
    images, 
    href 
}: { 
    title: string, 
    category: string, 
    description: string, 
    images: ProjectImagesHorizontal, 
    href: string 
}) {
    return (
      <Link href={href} className="group relative block w-full">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-xl hover:shadow-black/5 overflow-hidden flex flex-col transition-all duration-300"
        >
            {/* Image Gallery Area - 3 Equal Images Horizontal */}
            <div className="relative p-4 gap-2 grid grid-cols-3 w-full">
                
                {/* Image 1 */}
                <div className="col-span-1 relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                   <Image 
                    src={images.img1} 
                    alt={title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                </div>

                {/* Image 2 */}
                <div className="col-span-1 relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                   <Image 
                    src={images.img1} 
                    alt={title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                </div>

                {/* Image 3 */}
                <div className="col-span-1 relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                   <Image 
                    src={images.img1} 
                    alt={title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">{category}</p>
                            <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
                        </div>
                        <div className="bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
                </div>
            </div>
        </motion.div>
      </Link>
    );
}

// --- MAIN PAGE ---

export default function Home() {
  return (
    // bg-gray-50 稍微给一点底色，让白色磨砂玻璃卡片能显现出来
    <div className="min-h-screen bg-gray-50 text-black selection:bg-black selection:text-white cursor-none font-sans"> 
      
      <CustomCursor />
      <ParticleBackground />

      {/* 1. Header with Glassmorphism & Navigation Links */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center 
                      bg-white/60 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">
            Enid Li
        </Link>

        {/* New Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/others">Others</NavLink>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
        </button>
      </nav>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-40 pb-32 relative z-10">
        
        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05]">
              Full-Stack <br />
              <span className="relative inline-block">
                Designer.
                {/* Fun underline */}
                <svg viewBox="0 0 200 9" className="absolute -bottom-2 left-0 w-full h-3 text-blue-500/50">
                    <path d="M2.00025 6.99996C38.5002 9.49996 110.5 9.49996 198 2.50005" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
              I build systems where creativity meets code.
            </p>
          </motion.div>
        </section>

        {/* 2. Uniform Grid Layout (2 Columns) */}
        {/* 移除了 Bento Grid，改为 grid-cols-1 md:grid-cols-2，确保大小一致 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          
          {/* Project 1 */}
          <GlassProjectCard 
            title="Dora.ai"
            category="AI Product Design"
            description="Designed the editing system and shipped GenAI features. A new editor for marketers and brand designers."
            href="/project/dora"
            images={{
                main: "/assets/dora_editor.png",
                sub1: "https://placehold.co/400x400/f0f9ff/0ea5e9/png?text=UI+Kit",
                sub2: "https://placehold.co/400x400/eef2ff/6366f1/png?text=Mobile"
            }}
          />

          {/* Project 2 */}
          <GlassProjectCard 
            title="Workflow Tool"
            category="UX Architecture"
            description="Blurring abstraction boundaries and making workflows feel more connected."
            href="/project/workflow"
            images={{
                main: "https://placehold.co/800x600/f3f4f6/374151/png?text=Workflow",
                sub1: "https://placehold.co/400x400/e5e7eb/4b5563/png?text=Flow",
                sub2: "https://placehold.co/400x400/d1d5db/4b5563/png?text=Details"
            }}
          />

           {/* Project 3 */}
           <GlassProjectCard 
            title="Pro Nudges"
            category="Growth Design"
            description="Contextual nudges that appear naturally in the user journey."
            href="/project/nudges"
            images={{
                main: "https://placehold.co/800x600/fff7ed/ea580c/png?text=Growth",
                sub1: "https://placehold.co/400x400/ffedd5/f97316/png?text=Stats",
                sub2: "https://placehold.co/400x400/fed7aa/fb923c/png?text=Chart"
            }}
          />

          {/* Project 4 */}
          <GlassProjectCard 
            title="Design System"
            category="Infrastructure"
            description="A complete overhaul of the component library to support dark mode and accessibility."
            href="/project/system"
            images={{
                main: "https://placehold.co/800x600/fdf4ff/c026d3/png?text=System",
                sub1: "https://placehold.co/400x400/fae8ff/d946ef/png?text=Icons",
                sub2: "https://placehold.co/400x400/f5d0fe/e879f9/png?text=Typo"
            }}
          />

        </section>

        {/* 3. Full Width Horizontal Cards Section */}
        <section className="space-y-8 mb-32">
          
          {/* Horizontal Project 1 */}
          <GlassProjectCardHorizontal 
            title="Brand Identity"
            category="Visual Design"
            description="Complete brand identity system including typography, color palette, and iconography guidelines."
            href="/project/brand"
            images={{
                img1: "https://placehold.co/600x400/fef3c7/f59e0b/png?text=Colors",
                img2: "https://placehold.co/600x400/ddd6fe/8b5cf6/png?text=Typography",
                img3: "https://placehold.co/600x400/fce7f3/ec4899/png?text=Icons"
            }}
          />

          {/* Horizontal Project 2 */}
          <GlassProjectCardHorizontal 
            title="Mobile App Redesign"
            category="Mobile UX"
            description="Complete redesign of native iOS and Android app focusing on performance and user engagement."
            href="/project/mobile"
            images={{
                img1: "https://placehold.co/600x400/e0e7ff/4f46e5/png?text=Onboarding",
                img2: "https://placehold.co/600x400/f0fdf4/22c55e/png?text=Dashboard",
                img3: "https://placehold.co/600x400/fef2f2/f43f5e/png?text=Settings"
            }}
          />

          {/* Horizontal Project 3 */}
          <GlassProjectCardHorizontal 
            title="Web Platform"
            category="Full Stack Design"
            description="Enterprise web platform with complex data visualization and real-time collaboration features."
            href="/project/platform"
            images={{
                img1: "https://placehold.co/600x400/f3f4f6/6b7280/png?text=Dashboard",
                img2: "https://placehold.co/600x400/fafaf9/78716c/png?text=Analytics",
                img3: "https://placehold.co/600x400/f5f3ff/a78bfa/png?text=Reports"
            }}
          />

        </section>
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

        {/* Footer */}
        <footer className="text-center pb-20">
          <a 
            href="mailto:hello@enidli.com"
            className="group relative inline-flex flex-col items-center gap-4"
          >
            <span className="text-3xl md:text-5xl font-semibold tracking-tight group-hover:text-blue-600 transition-colors">
                hello@enidli.com
            </span>
            <span className="text-sm text-gray-400">Let's build something fun.</span>
          </a>
        </footer>
      </main>
    </div>
  );
}

// Helper: NavLink Component
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link 
            href={href} 
            className="text-sm font-medium text-gray-600 hover:text-black hover:scale-105 transition-all duration-200 relative group"
        >
            {children}
            {/* Hover underline animation */}
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