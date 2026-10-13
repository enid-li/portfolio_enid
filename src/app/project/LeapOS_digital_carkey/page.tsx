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
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">IoT App Design</span>
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
          subtitle="24Fall OTA"
          title="Adoption Rate Challenges"
          description={`
            相比于依赖网络的4G远程解闭锁和需要贴靠的NFC，无感蓝牙钥匙具有近场通信优势，在地下车库等弱网环境下表现高效。然而私有蓝牙钥匙开通率未达预期。
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
            alt:'Pains of previous BLE bluetooth car key design',
            caption:'Pains of previous BLE bluetooth car key design',
            fit: 'contain'
          }}
        />


        {/* Section 3: The Solution (Text + Video) */}
        <CaseStudySection
          subtitle="Design Opportunities"
          title="Closing the loop"
          description={`
          我们的设计原则是：
          「短」：操作路径尽可能缩短 「平」：信息层级尽量少 「快」：快速及时的反馈 
          针对上述问题，我们做了以下设计改进:
          a. 取消故障诊断入口及耗时判断，将权限异常卡片前置于数字钥匙首屏，并透传至爱车页面，保证无感解闭锁最核心基础功能主链路畅通；
          b. 开关与权限引导页解耦，蓝牙钥匙默认开启，列表形式展示待开启权限，针对性得给予权限开启操作引导。
          c. 必要权限、辅助权限分离，降低用户的认知负担，提升权限开启率。
          `}
          media={[
          {
            type: 'image',
            src: '/assets/Improvements_ble_carkey.png',
            alt:'BLE car key after redesign',
            caption:'BLE car key after redesign',
            fit: 'contain'
          },
          {
            type: 'image',
            src: '/assets/ota1.png',
            alt:'BLE car key page after the first OTA upgrade',
            caption:'BLE car key page after the first OTA upgrade',
            fit: 'contain'
          },
          ]}  
        />

        <CaseStudySection
          subtitle="25 SPring OTA"
          title="How UWB blends in?"
          description={`
          核心问题：不同蓝牙通信技术导致现有交互框架无法兼容。
          
          业务背景：原致字钥匙技术仅含私有BLE方案以及ICCOA厂商钥匙，现3.5架构涵盖ICCOA、UWB CCC 2.0&3.0、 私有NFC等多技术并存的生态，原有的产品设计已无法适应新的复杂性。

          项目契机：UWB钥匙的增配以及卡片NFC体验问题导致手机私有NFC重新推进，成为数字钥匙模块体验重构契机。这迫使我们将所有钥匙类型视为一个完整的“数字钥匙“体验体系，进行顶层重新设计，而非继续打补丁。

          项目目标：构建统一直观可扩展的数字钥匙交互总架构，向用户隐藏技术复杂性，提供无缝可靠的用车体验。
          设计一个以“解闭锁“快速用车为中心，而非以解释“钥匙技术”的信息架构，简化成功用车的整个操作路径，尽量避免用户找不到钥匙状态异常根源而导致的罚站问题。
          构建弹性交互框架，使其能够平滑接入UWB等未来新数字钥匙。
          `}
          media={[
          {
            type: 'image',
            src: '/assets/old_version_key.png',
            alt:'Digital car-key page begfore the reconstruction',
            caption:'Digital car-key page begfore the reconstruction',
            fit: 'contain'
          },
          ]}  
        />
        

        <CaseStudySection
          subtitle="Pains"
          title="Problems Breakdown"
          description={`
          问题拆解：
          「设计一致性缺失」不同技术标准的钥匙能力集不统一，导致无法用单一，统一的交互逻辑/认知模型覆盖所有场景，被迫暴露技术细节（如UWB数字钥匙的蓝牙能力缺失导致的独立的BLE入口），入口混乱。
          「决策负荷加剧」向用户呈现厂商“数字钥匙”和私有“蓝牙钥匙/NFC”等切换入口或二级页面Tab，会传递错误心智，让用户困惑于“我该用哪个？“，而非聚焦于“解闭锁“这一核心任务。
          「可扩展性不足」当前架构无法兼容未来可能新增的更多钥匙类型以及手机厂商、车型能力，每次技术升级都可能引发新的体验断裂。
          设计方向：
          「交互扁平化」不同协议钥匙卡片显示形态统一，保持界面逻辑一致。不增加不必要层级带来的理解负担。
          「能力自适应」针对不同车端/手机系统能力，动态展示卡片，保证始终有钥匙可用。
          「体验一致性」解决不同协议共存状态下，配置项的冲突、重复设置问题，进行全局配置项同步，保证体验一致性。
          `}
          media={[
          {
            type: 'image',
            src: '/assets/old_version_key.png',
            alt:'The basic BLE key & ICCOA before the reconstruction',
            caption:'The basic BLE key & ICCOA before the reconstruction',
            fit: 'contain'
          },
          ]}  
        />

        <CaseStudySection
          subtitle="Design Opportunities"
          title="Elastic framework for Usage Scenarios"
          description={`
          建立动态自适应的钥匙卡片显示逻辑以适配各种使用场景。
          「场景A」默认状态（未开通高阶钥匙）：二级页面清晰展示两张基础钥匙卡片：「私有蓝牙钥匙（默认开启）」和「私有NFC钥匙（需手动激活）」。此状态覆盖最广泛的设备和用户，提供基础且可靠的钥匙能力。
          「场景B」开通功能完备的ICCOA/CCC 3.0钥匙后，界面简化，仅显示集成的厂商钥匙卡片（如”小米手机钥匙”“苹果手机钥匙”）。因其已囊括蓝牙，NFC或UWB能力，故隐藏冗余的私有钥匙卡片，为用户提供最简洁的视图。
          「场景C」开通能力受限的CCC2.0钥匙后：界面智能补充，同时显示「苹果手机钥匙（CCC 2.0）」和「私有蓝牙钥匙」卡片。此举既提供了苹果生态的NFC安全解锁，又通过保留蓝牙钥匙入口，确保用户不丢失丰富的私有蓝牙设置功能（如感应区调节）。
          `}
        />


        <CaseStudySection
          subtitle="Design Opportunities"
          title="Elastic framework for Usage Scenarios "
          description={`
          1、多协议弹性架构
          横向拉齐BLE/ICCOA/UWB/NFC等多端诉求，收拢为统一的“数字钥匙”卡片，完成从“暴露技术细节的Tab切换”到“以‘解闭锁’核心任务为中心”的转变。

          2、无感降级兜底
          厂商钥匙异常时，自动复现私有 BLE/NFC 卡片，确保极端边缘场景下用户始终“有钥匙可用”，解决“罚站”。

          3、能力设置双向同步
          实现手机厂商钥匙与自研BLE设置项（如解闭锁方式）的双向同步，保障蓝牙能力体验一致性。
          `}
          media={[
          {
            type: 'image',
            src: '/assets/new_version_ICCOA.png',
            alt:'New design of the ICCOA car-key',
            caption:'New design of the ICCOA car-key',
            fit: 'contain'
          },
          {
            type: 'image',
            src: '/assets/new_version_BLE.png',
            alt:'New design of the BLE car-key',
            caption:'New design of the BLE car-key',
            fit: 'contain'
          },
          ]}  
        />

        <CaseStudySection
          subtitle="Outcome"
          title="Improvement Activation rate & Usage rate"
          description={`
          24Fall OTA后三个月数字厂商钥匙开通率月环比提升3%，从88%提升至97%。
          蓝牙钥匙开通耗时感知平均缩短30s，成功开通率提升5%，蓝牙解闭锁使用率月环比提升5%。
          `}
          media={[
          {
            type: 'image',
            src: '/assets/key_data1.png',
            alt:'Adoption rate shocasing the result of redesign',
            caption:'Data shocasing the result of redesign',
            fit: 'contain'
          },
          {
            type: 'image',
            src: '/assets/key_data2.png',
            alt:'Success rate shocasing the result of redesign',
            caption:'Success rate shocasing the result of redesign',
            fit: 'contain'
          },
          ]}  
        />
        
        {/* Next Project Footer */}
        <div className="border-t border-gray-200 mt-32 pt-16">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-wider mb-8">Next Project</p>

          <Link href="/project/LeapOS_car_control" className="group block max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden bg-[#E2F175] aspect-[21/9] flex items-center justify-center border border-black/5"
            >
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 group-hover:underline decoration-4 underline-offset-4 decoration-[#F79CEF]">Leap AI car control</h3>
                <p className="text-black/60 font-medium">AI Car experience</p>
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