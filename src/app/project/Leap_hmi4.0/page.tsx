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
              <span>Leap 4.0 OS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
              Our HMI system 4.0 upgrade follows three principles — discoverable controls, unobtrusive driving flows, intuitive UI — with scenario-driven home-screen quick controls that put key functions at users' fingertips.
            </p>

            {/* Project Stats / Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 text-left">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Role</p>
                <p className="font-semibold">UX Designer</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-semibold">08/26 - Now

                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Team</p>
                <p className="font-semibold">7UX 8UI 5PM 8DEVs</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Impact</p>
                <p className="font-semibold">1 Million + Users</p>
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
            src="/assets/Leapmotor HMI4.0 cover.png"
            className="w-full h-full object-cover"
          // autoPlay muted loop playsInline
          // poster="https://placehold.co/1920x1080/e2e8f0/64748b/png?text=Loading+Media..."
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}

        {/* Section 1: Background */}
        <CaseStudySection
          subtitle="WHY DO WE DO THIS"
          title="项目背景和目标（Background & Goals)"
          description={`在 HMI 4.0 的迭代中，我们需要解决“难找”、“难理解”以及容器并发问题，并做车机场景化提质。面对“千人千面”的用户需求与存量用户习惯，本次升级面临四大核心挑战：
            a.容器功能定位：如何定义不同容器（桌面、底栏、快捷面板）的优先级和定位，合理分布主场景与长尾场景功能？
            b.驾乘一体攻坚：“老板车”、“家庭车”属性下，前排如何高效掌控全车调节，实现驾乘一体？
            c.存量用户习惯：如何在不破坏存量用户习惯（不吃投诉）的前提下，优化体验和使用效率？
            d.功能场景化联动：如何识别并归纳不同场景下功能联动需求？如何用“一键直达”降低操作成本、提升屏效比？`}

        />

        {/* Section 2: Design Principles */}
        <CaseStudySection
          subtitle="HOW WE MOVE TOWARD THE SAME GOAL"
          title="四大设计原则（Design Iteration）"
          description={`在优化方案输出时间、资源有限的情况下，面对细碎或缺乏AB测试数据支撑的设计决策时，我们确立了三大核心原则，以减少跨部门协作方案摩擦：
            一、不难找（高频使用，高可触达）：全场景下，核心车控必须在 0-1 层级内闭环。
            二、不打断（聚焦主任务，降低干扰）：驾驶过程中，操作不能遮挡核心驾驶流程（如导航、SR环境感知）。
            三、不用猜（语义清晰，符合直觉）：信息架构清晰符合直觉，减少工程化文言和技术露出，降低认知负荷。
            四、不费脑（从"人找功能"转向"功能找人"）：基于车辆工况及用户需求及时动态重组桌面信息，建立功能信息的动态推荐机制`}
          
          
          media={[
            {
              type: 'image',
              src: '/assets/Scenarios & frequency.png',
              alt: 'Scenarios & frequency',
              caption:'Scenarios & frequency',
              fit: 'contain',
            },            
            {
              type: 'image',
              src: '/assets/4 design principles.png',
              alt: '4 design principles',
              caption:'4 design principles',
              fit: 'contain',
            }
          ]}


        />

          
        {/* Section 3: The Solution (Text + Video) */}
        <CaseStudySection
          subtitle="CONTAINERS & SCENARIOS"
          title="容器定位（Postioning & Relocation）"
          description={`HMI 4.0 核心解决方案主要涉及底栏（SmartDock）、桌面（Home）和快捷面板（Quick Panel）、状态栏 (Status Bar)三大容器的功能定位、交互优化和场景化联动。
          a. 底部栏 & 浮层(Dock & Smartcard）：
          为全场景下最高优常驻容器，无论行驻车、是否分屏，始终可见。
          b. 双桌面 - 行车/驻车分场景（Home)：
          行车桌面：采用1/3屏SR环境感知 + 2/3基础导航分屏布局。
          驻车桌面：全屏驻车桌面，功能密度更高，承接行车前的高频场景。
          c. -1屏下拉快捷操作面板（Quick Panel）：
          因其“全屏遮挡”，且功能密度大，图示少，故定位为“长尾车控”与低频操作容器，主要供自定义意图使用。
          d. 状态栏 (Status Bar)
          为全局状态监控容器，供状态优先的功能展示。
         `}
          
          media={[
            {
              type: 'image',
              src: '/assets/Framework_Home.png',
              alt: 'Framework of home Parking.png',
              caption:'Low-fi indicating home page structure under parking mode',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Framework_Driving Status.png',
              alt: 'Framework of home Driving',
              caption:'Low-fi indicating home page structure under Driving mode',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Framework_Quick Panel.png',
              alt: 'Framework of Quick Panel',
              caption:'Low-fi indicating Quick panel pulled-down',
              fit: 'contain',
            },
          ]}
        />


        {/* Section 4: Dock & SmartCard) */}
        <CaseStudySection
          subtitle="DOCK & SMARTCARD"
          title="底栏与轻量化浮层（不遮挡）"
          description={`底栏（Dock）是全场景下最高优先级的常驻容器，且其层级理解简单，使用门槛低，应承载高频快捷车控操作。
          而轻量化浮层（Smartcard）是Dock全场景下的延伸，主要承载驾驶中关键操作（驾驶模式、空调温控、除雾、座椅舒适）及其联动项。
          点击后通过轻量化卡片浮层 (Smartcard) 展开，将高频操作在全屏起应用前拦截，尽量降低对当前Main Task导航或音乐桌面的遮挡影响，保障行车安全。`}
          media={[
            {
              type: 'image',
              src: '/assets/底栏_除霜打组.png',
              alt: 'Defroster card popped from smartdock',
              caption:'A smartcard of Defroster popped from smartdock',
              fit: 'contain'
            },            
            {
              type: 'image',
              src: '/assets/底栏_驾驶模式.png',
              alt: 'A smartcard of driving mode switch popped from smartdock',
              fit: 'contain'
            },
            {
              type: 'image',
              src: '/assets/底栏_空调2.png',
              alt: 'A smartcard of Temperature control popped from smartdock',
              fit: 'contain'
            },
            {
              type: 'image',
              src: '/assets/底栏_可编辑.png',
              alt: 'An editable smartdock bar',
              fit: 'contain'
            },
            
          ]}
        />

        {/* Section 5: Double Home */}
        <CaseStudySection
          subtitle="DRIVING & PARKING"
          title="双桌面 - 行车/驻车分场景"
          description={`行车桌面：采用1/3屏SR环境感知 + 2/3基础导航布局。SR容器内除智驾相关功能仅保留音乐播放器和少部分车控（如驻车时的后备箱快捷键），确保驾驶任务不分心。
          驻车桌面：功能密度最高。采用 3D 车模桌面，承接行车前的高频场景（一键开启座椅通风/加热、车内空调极速调节等）。
          鉴于收到很多“方向盘”、“后视镜”相关调节没法找到的用户声音，在驻车桌面，我们进一步将“驾驶”相关的车控前置，用左上角的近手侧桌面卡片收纳“前后备箱”、“后视镜折叠”、“方向盘调节”、“HUD调节”等快捷操作或功能入口。`}
          media={[
            {
              type: 'image',
              src: '/assets/After_home_CardFolded.png',
              alt: 'A folded fast car-control card on home page',
              caption:'A folded fast car-control card on home page',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/After_home_CardExpand.png',
              alt: 'A expanded fast car-control card on home page',
              caption:'A expanded fast car-control card on home page',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/After_home_Grouping.png',
              alt: 'Adjust-related functions grouped together',
              caption:'Adjust-related functions grouped together',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/After_home_Editing.png',
              alt: 'Editable home page with containers floating',
              caption:'Editable home page with customised containers floating',
              fit: 'contain',
            },
          ]}
        />



        {/* Section 6: Quick Panel */}
        <CaseStudySection
          subtitle="Quick Panel"
          title="下拉快捷操作面板"
          description={`因其下拉会造成“全屏遮挡”，较大程度打断主任务。但因其容器内容弹性大，且可承载多种功能，因此我们将其定位为“长尾车控”容器，。
          其层级较“车控”页面更短，并且其有强大的自定义属性，用户可根据自身需求自定义常用功能，降低操作成本，提升屏效比。
          在旧版设计中，原子化的能力没有明显分组分类，基本都以文字+图标的形式平铺在-1屏。功能按钮彼此间没有格式塔聚类，也没有小标题辅助判断。在用户找相同或者相似的功能时，只能漫无目的地浏览每一个控件上的文字，直到找到又或者找不到他们想要的功能。
          我们在新版设计中，将其功能进行了分组聚类，相近功能彼此贴近，以降低用户找功能的认知负荷。
          同样地，在“自定义”界面内，相比原来所有车控类目下功能的无差别堆叠，这次我们新增了小标题：“显示与灯光”、“驾驶与安全”、“车身与舒适”，来帮助用户快速找到想要前置高优功能。`}
          media={[
            {
              type: 'image',
              src: '/assets/Before_Quick Panel.png',
              alt: 'Quick Panel Default Mode before redesign',
              caption:'Quick Panel Default Mode before redesign',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/After_Quick Panel.png',
              alt: 'Quick Panel Default Mode after redesign',
              caption:'Quick Panel Default Mode after redesign',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Before_Quick Panel_EditingMode.png',
              alt: 'Quick Panel Editing Mode before redesign',
              caption:'Quick Panel Editing Mode before redesign',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/After_Quick Panel_EditingMode.png',
              alt: 'Quick Panel Editing Mode after redesign',
              caption:'Quick Panel Editing Mode after redesign',
              fit: 'contain',
            }
          ]}
        />

        {/* Section 6: Status Bar */}
        <CaseStudySection
          subtitle="Status Bar"
          title="状态栏"
          description={`根据手机、电脑等主流交互范式，状态栏定位为强状态、弱交互容器，仅提供高关注度状态的快捷点击（如行车记录仪状态、童锁、蓝牙/网络、账号切换）。考虑到存量用户使用习惯，本次优化不作修改和迭代。`}
      
        />

        {/* Section 6: Car controls */}
        <CaseStudySection
          subtitle="Car controls"
          title="车控应用界面"
          description={`车控界面是用户车辆设置以及功能寻址的核心界面，承载了车辆基本所有的控制功能。但因其当前框架内为全屏，无法实现主副任务并行，且其功能密度大；
            因此我们主要做内部信息层级的优化，减少用户寻址负荷。
            我们的优化主要有两部分：
            1. 一级类目：驾驶前置。我们把“驾驶”相关的功能作为一级类目前置至第一优先级。因为对于车辆控制以及车辆设置而言，驾驶过程中用户寻找的功能紧迫性和优先级较驻车状态下找的功能更高。找不到更容易影响驾驶安全，进而招投诉。
            2. 二级类目：细化分类。我们将强“硬件域”指向型功能单拎出来，作为二级类目，减少用户在一级类目下的寻址负荷。比如“方向盘”、“后视镜”、“AR HUD"、“车锁”、“阅读灯”等。`}
          media={[
            {
              type: 'image',
              src: '/assets/Car_Control_page.png',
              alt: 'Car Control & Car Settings Page',
              caption:'Car Control & Car Settings Page',
              fit: 'contain',
            }
          ]}

        
        />


        {/* Section 7: Seat Topic*/}
        <CaseStudySection
          subtitle="SEAT - DESIGN TOPIC"
          title="座椅设计专题"
          description={`考虑到D车型系列，前排有帮二三排乘客调节座椅的需求（该需求待考证），产品部希望把所有座椅调节的操作均放在一屏中（以下方案B）。
            但页面并不够intuitive, 过度的按钮堆叠会加重认知负荷。座椅联动类模式功能也无法全屏展示。故我们在5个方案中进行讨论。`}
          media={[
            {
              type: 'image',
              src: '/assets/Seats_Design_directions.png',
              alt: 'Seats Design directions',
              caption:'Seats Design directions',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Seats_Design_directions_Comparison.png',
              alt: 'Seats Design direction Comparison',
              caption:'Seats Design direction Comparison',
              fit: 'contain',
            },
            {
              type: 'image',
              src: '/assets/Seats_Comparison & Analysis.png',
              alt: 'Seats Comparison & Analysis',
              caption:'Seats Comparison & Analysis',
              fit: 'contain',
            },
          ]}

        
        />

        {/* Next Project Footer */}
        <div className="border-t border-gray-200 mt-32 pt-16">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-wider mb-8">Next Project</p>

          <Link href="/project/LeapOS_digital_carkey" className="group block max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden bg-[#E2F175] aspect-[21/9] flex items-center justify-center border border-black/5"
            >
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 group-hover:underline decoration-4 underline-offset-4 decoration-[#F79CEF]">Leap Digital Car Key</h3>
                <p className="text-black/60 font-medium">App Design & IoT Design</p>
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