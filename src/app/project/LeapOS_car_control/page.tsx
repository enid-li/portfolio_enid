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
              <span>Leap AI car control</span>
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
                <p className="font-semibold">Adopted by 1 million users </p>
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
            src="/assets/Leapmotor car control cover.png"
            className="w-full h-full object-cover"
          // autoPlay muted loop playsInline
          // poster="https://placehold.co/1920x1080/e2e8f0/64748b/png?text=Loading+Media..."
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* --- CASE STUDY CONTENT SECTIONS --- */}

        {/* Section 1: 背景&目标 */}
        <CaseStudySection
          subtitle="项目背景 & 目标"
          title={`All-In-One Car Control App
            一站式车控APP智能体验`}
          description={`我们为什么要做AI车控？
            在智能网联场景下，车控APP承载了除“车钥匙”以外更为丰富的功能，逐渐演变为“人车互动枢纽”，需要优化端云协同体验。同时，LLM技术的爆发，为重塑人机交互范式（从GUI向CUI演进）提供了底层技术支撑。
            过去，车控APP受限于移动端的GUI架构，只能让用户去适应复杂的APP菜单；现在有了LLM的意图理解和Tool-calling（工具调用）能力，我们可以真正实现‘让功能来适应人’。
            同时，Agent可以为购车咨询、售后维保、用车问答场景提供知识查询入口，有效减少人工客服介入以及投诉。

            Leap AI OS旨在通过引入AI Agent，对原有车控APP功能进行重构，将零跑车控APP从“功能罗列“转变为“意图直达”，构建品牌的智能化体验。
            `}
        />

        {/* Section 1: Problems*/}
        <CaseStudySection
          subtitle="核心问题"
          title={`From GUI to CUI
            GUI模式的局限`}
          description={`除了解闭锁等简单指令，GUI模式下可一键高效完成，复合指令（如一键备车）和长尾模糊指令（如明天下午3点出远门，请保证车辆有80%以上的电以及车内温度适宜），受限于嵌套逻辑结构以及界面的点击交互方式，导致需求无法被精确且高效满足。 
            a.原GUI树状菜单结构下车况信息、功能层级过深，导致车况信息查找和功能操作成本高、使用率低；
            b.长尾需求和部分功能逻辑的用户沟通渠道缺失，导致售后、400客服电话投入运营人力成本高，长期来削弱了用户对车的可控感、信任感。
            c.功能场景割裂，缺乏主动性。传统指令式车控被动响应用户需求，无法根据多场景主动提供服务，使得APP难以满足用户对智能化的期待。`}
          // media={{
          //   type: 'image',
          //   src: '/assets/Pains_ble_carkey.png',
          // }}
        />



        {/* Section 4: Design System (Full Width Image) */}
        <CaseStudySection
          subtitle="Overview & Walkthrough"
          title="设计概览：我们做了些什么？"
          description={`1.0的设计，我们想做到基础的车控指令的意图识别。基础车控指令分多指令组合车控和单指令车控。做区分的原因是，单指令意图识别返回快而准，基本不会出错，不需要用户做二次确认，这样效率高。
            但是多指令组合车控，比如一键备车含空调、座椅加热通风、导航到xxx地址。这里面有一个出错的，就需要用户点进页面去撤回操作。所以1.0版本，我们给到了组合车控的二次确认。
            等到后期意图识别逐渐准确，我们再拿掉这个二次确认。`}
          media={[
            {
              type: 'image',
              src: '/assets/AI overview & walkthrough.png',
              alt: 'AI car control overview and walkthourgh'
            }
          ]}
        />

        {/* Section 5: Conclusion */}
        <CaseStudySection
          subtitle="Card Design for Confirmation"
          title="车控：二次确认卡片的设计"
          description={`在车控场景中，用户的指令往往涉及车辆安全，因此多车控指令场景下，需要二次确认，以确保用户意图被正确理解和执行。我们设计了一个只有“确认”按钮的富文本卡片，有效减少误操作的风险，提升用户对小零信任感和满意度。
          也以此实现全量车控底座能力的原子化接入与大模型动态编排。
          一开始，我们想把卡片设计得紧凑一点，“设备”和“模式”/“动作”和“参数”都换行显示。但是这样做会使单个车控component的高度过高，导致整体卡片高度过高，因此我们选择将这些字段都放在同一行显示。
          有些车控的设置项信息密度比较高，比如“导航地址发送到车”的地址可能会很长，这样基础原子车控使用1*2容器、过长的使用1*4的容器，会使得控件size不统一，给大模型返回参数再渲染前端控件带来很多麻烦。因此我们全部统一设计1*4容器。并严格按照icon-device-action（后台槽位表维护的顺序）的字段设计，这样算法用大模型在渲染调用前端控件时，节省了很多开发资源。
          icon的使用也没有做到区分开启/关闭状态，要维护全量icon的on-off状态，这又需要添加一个参数字段。
          那为什么不在卡片里面直接做调节参数的GUI控件呢？这样不是更符合用户长久以来的操作习惯吗？比如滑轨、步进器？
          这样我们为CUI做的努力，就付之东流了。又变成了GUI，这不符合我们的设计初衷，也不是产品的方向。
          这让我意识到一个问题，AI设计的工作流中，设计不是单纯为了“效果更好”做适配，而是需要考虑到整个开发周期快速迭代的效率，舍弃一些触及不到用户体验本质的设计。`}
           
          media={[
            {
              type: 'image',
              src: '/assets/confirmation cards tries.png',
              alt: '[Refer & Gain more credits] visual exploration',
              fit: 'contain',
            }
          ]}
        />

        <CaseStudySection
          subtitle="V1.0 Agent Framework"
          title="Query的分流：规则+模型的结合"
          description={`在1.0的Agent Framework里,我们通过一个喂标注数据训练的轻量化的bert模型（比如：“帮我开窗户”打上“车控”标签），对所有用户query进行大致分流（意图识别），是车书、车控还是车况。
            按照features，“怎么用、如何操作、什么意思、有啥用、为什么会...、怎么解决”，带明显的问句结构的，属于用车问答（车书）。祈使句、命令、请求等，属于车控。包含数据相关的，如“多少、数值、当前、状态、温度、电量、里程、时间等”，属于车况查询。
            若落域到车控，我们先用规则层进行初筛，也就是根据一个专门为冷启动准备的语义标准库进行正则匹配，如果无法匹配到，对query进行向量嵌入，并泛化匹配语义库里最接近的意图，如果还是无法匹配到，我们再调用阿里百炼兜底。
            因为流量大，用LLM做所有请求的分流太慢且太贵。所以我们用规则和向量泛化做层层过滤。
            接着就是对槽位和实体的提取。比如空调xx度、动作是打开还是关闭、座椅调节位置是哪个等。`}
          media={{
            type: 'image',
            src: '/assets/AI v1.0 model framework.png',
            alt: 'Cold-start AI feature'
          }}
        />

        <CaseStudySection
          subtitle="Problems encountered"
          title="远控场景特性问题：硬编码的思维链"
          description={`在demo阶段端到端跑通的过程中，我们发现多指令下发的耗时要比单指令长很多。
            我们分析了原因后发现，一个是长难指令意图识别确实耗时更长（无法直接进行规则匹配，需要LLM兜底），还有一个原因是车辆下电的时候，ABCD 4个指令连续下发，如果是非快速远控，需要A把车辆唤醒MQ在线后，BCD才能继续下发。
            一个指令下发+等待车辆上电+其余指令并行下发，这三个是串行的。有着很长的等待时间。为了缓解这个等待焦虑，我们想fake一个思维链。
            一个硬编码的思维链意味着固定的动画时长、固定的接口调用节点。因为其实没有推理模型在后面工作。
            最大的问题在于：没办法真正区分车控、车书、车况不同的思维链节点的文案，因为那个时候模型还没有真正介入意图识别。
            我们考虑在2.0逐步优化这个思维链，以反映query流转的真实路径，在大模型意图识别后，返回给前端一个意图类型，去判断各自的思维链条以及接口调用节点。`}
          media={{
            type: 'image',
            src: '/assets/chain of thought.png',
            alt: 'A faked chain of thought'
          }}
        />


        <CaseStudySection
          subtitle="Scenario Division & Command Scope"
          title="细分场景以及指令范围"
          description={`我们处理不同场景的原则是：高频场景提效率，低频场景保正确。
            单指令比如“打开空调”，“打开主驾座椅通风”等，这种都是高频场景，车控可以直接下发，效率优先。如果在这些指令上还要不停二次追问以及要求用户确认，会使得语音控车失去意义。
            但是比如具体时间下导航发送到车和空调的混合指令（延迟备车场景），这种时候首要保证地址是用户要的、时间是用户要的。
            原因1：1.0版本还没有做组合指令的记忆存储和回撤。在我们放开了很多业务指令范围的情况下，如果下发错了，用户需要去车上、或者app的界面进行回撤，易造成客诉。
            原因2：二次确认表单给予了用户多轮对话调整组合指令以及时间的机会。
            关于指令范围，我们放开了许多原有的业务参数范围，比如远控场景的车窗只能通风、半开和关闭，现在自然语言控车放开了以10%为刻度的车窗控制。
            预约备车及充电原本不支持未来指定时间的预约，现在我们打通并支持任意一个有效时间的预约。
            车控指令应该是车辆底层原子能力的排列组合。我们认为这是自然语言控车的本源意义，让用户尽可能做到“想什么做什么”，而不是“功能定义是什么才能做什么”。
            业务逻辑是研发猜测的用户需求，而用户有自己的需求。
            `}
          media={{
            type: 'image',
            src: '/assets/AI navigation.png',
            alt: 'AI navigation'
          }}
        />

        {/* Next Project Footer */}
        <div className="border-t border-gray-200 mt-32 pt-16">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-wider mb-8">Next Project</p>

          <Link href="/projectLeap_APP_Collection" className="group block max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden bg-[#E2F175] aspect-[21/9] flex items-center justify-center border border-black/5"
            >
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 group-hover:underline decoration-4 underline-offset-4 decoration-[#F79CEF]">Leap APP Collection</h3>
                <p className="text-black/60 font-medium">IoT Design</p>
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