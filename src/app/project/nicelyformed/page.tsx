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
              <span>Nicelyformed</span>
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
                <p className="font-semibold">08/23 - 11/24 (MVP) 12/24 - 02/25 (V1)

                </p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}

        {/* Section 1: MVP */}
        <CaseStudySection
          subtitle="Dashboard MVP"
          title="What to include in the dashboard?"
          description={`我们一开始对产品有一个基本的构想：以用户熟悉的LLM布局为基础，结合表单生成的核心功能，设计一个简洁高效的Dashboard界面。这降低了用户的学习门槛，让他们在熟悉的框架内探索新的生成能力，而不是一开始就面对完全陌生的界面。
            考虑到孤零零的一个prompt会让用户不知所措，所以我们在输入框下方做了templates enties，既满足了高频场景的直接输入需求，也为不知道怎么用的普通用户提供了参照。
            MVP 阶段我们想先跑通最基础的功能，而避免过度设计，完全聚焦于“意图输入”。复杂的表单编辑功能只有在用户输入指令后才会显现，这旨在让产品轻量且易于上手。`}
          media={{
            type: 'image',
            src: '/assets/MVP version.png',
            fit: 'contain'
          }}
        />

        {/* Section 1: Problems from UX Audit */}
        <CaseStudySection
          subtitle="UX Audit Findings"
          title=" Pains & Frustrations"
          description={`我们在Dashboard的设计上，借助interactive prototype做了UX Audit，发现了以下几个主要问题:
          a. 视觉层级弱： “更多模板”的按钮缺乏与模版按钮的视觉区分，导致用户将其视为普通模版按钮而非导航控件，从而将其忽略。且当视窗高度降低，更多的按钮不可见了，用户更难发现templates的功能入口。
          b. 纯文本负荷：仅依赖文字标签迫使用户去“阅读”不同模版的文字信息，这违背了我们要的帮用户“快速输入看效果”的效果。
          c. 图标语义歧义： “星星”图标存在歧义问题。在当下的技术语境中，用户已建立了将“星星/火花”与“AI 生成”关联的心智模型。将其用于推荐的高频已生成模版按钮中，会误导用户这部分与AI有关联。
          d. 点击迟疑：对于推荐模版的按钮，用户存在点击迟疑，因为界面未能提供清晰的预览信息。用户无法预判点击模板是会立即生成表单还是打开预览，从而降低了点击的意愿。`}
          media={{
            type: 'image',
            src: '/assets/pains_UX_audit.png',
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
          subtitle="V1 updates"
          title="Human-in-the-Loop"
          description={`如何将优化表单的工作流结合进用户熟悉LLM布局，是我们在V1设计中的主要挑战。
            从MVP的“一键生成”进化到V1的“CUI 协同编辑”，这使得我们的产品从一个简单AI生成的工具升级为协同工作流的“助手（Co-pilot）。” 这方便用户精细化他们的表单需求。
            我们初步将CUI panel设计在中间，并形成了“左侧历史菜单(Menu) - 中间指令(CUI) - 右侧预览(Preview)的”分屏布局。用户在中间输入指令，右侧立刻刷新结果，构成了一条清晰的cause-effect视觉动线及反馈回路。旨在最大程度降低新的交互形式带来的认知负荷。
            传统的表单工具中，修改复杂的设置数据校验规则、调整跳转逻辑通常是耗时最长的环节。
            在新的设计中，用户可以输入“如果第六个问题选择A选项和C选项，就跳到第十个问题”这样的自然语言指令，系统会自动帮用户完成复杂的逻辑配置。`}
          media={[
            {
              type: 'image',
              src: '/assets/v1_dashboard_CUI.png',
              alt: 'v1 dashboard with CUI panel',
              fit: 'contain'
            },
          ]}
        />

        {/* Section 5: Conclusion */}
        <CaseStudySection
          subtitle="Design iterations"
          title="Where to put version management?"
          description={`对于在哪里维护历史版本切换的控件，我们初步给出了四个方案，并对每一个方案进行了Hypothesis、Pros & Cons的探讨。`}
          media={[
            {
              type: 'image',
              src: '/assets/version management.png',
              alt: '[Copy link & Share] visual exploration',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Option A&B.png',
              alt: 'version management feature placement comparison',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Option C&D.png',
              alt: 'version management feature placement comparison',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Comparison_CN.png',
              alt: 'version management feature placement comparison',
              fit: 'contain',
            }
          ]}
        />

        <CaseStudySection
          subtitle="B2B Empowerment"
          title="Branding Customization"
          description={`考虑到B端用户对自己的品牌视觉有自主的需要，我们在results panel顶部引入了专属的品牌识别模块（自定义cover与 Logo）。这主要有三个作用：         
            1）加强了B端用户表单填写者对品牌的识别度，进而提升表单的完成率（Completion Rate）。
            2) 显性的品牌标识（Logo/封面）作为视觉锚点,能够验证发起者的身份的合法性，从而提升受访者对数据安全的信任度。
            3）每一个被分发的表单都转化为一个微型营销渠道，在数字生态中持续强化品牌认知。这可以提升B端用户对Nicelyformed平台的忠诚度与依赖感，促进长期使用与续订。`}
          media={[
            {
              type: 'image',
              src: '/assets/cover_change.png',
              alt: 'nicelfotmed branding customization feature',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/covers.png',
              alt: 'nicelfotmed branding customization feature cover examples',
              fit: 'contain',
            }
          ]}
        />

        <CaseStudySection
          subtitle="Design iterations"
          title="Tags or not?"
          description={`在Cover change气泡卡片的原设计上，我们将Preset和Custom的上传通道用tag做了区分。并把Preset放在了优先级更高的首屏位置。
            在外部设计评审的反馈中，我们得知用户对Preset的认知度远低于Custom上传。大部分用户并不会用nicelyformed提供的封面，而是倾向于上传自己的品牌封面。
            同时，Preset和Custom因为内容量差异较大，导致切换tab的时候有明显跳变，影响了用户体验。
            故我们把层级扁平化，提升了custom通道的层级，并新增了高频率使用的history来存放用户曾经上传过的cover，方便用户快速切换。同时把History、Preset和Custom合并在一起，用户可以在同一个视图下选择预设或上传。
            这样旨在更好地契合B端用户的使用习惯，提升品牌定制化的效率。明确封面定制的主要目的是“品牌识别”而不是成为“装饰工具”。`}
          media={[
            {
              type: 'image',
              src: '/assets/cover_change_feature.png',
              alt: 'nicelfotmed branding customization feature before and after',
              fit: 'contain',
            }
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