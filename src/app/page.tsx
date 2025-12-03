import Link from "next/link";
import Image from "next/image";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 md:px-12 pt-40 pb-32 ">
        {/* Selected Works Section */}
        <section className="mb-48">
          <div className="flex flex-col  md:py-12">
            <p className="text-4xl font-medium py-4">Hi, I'm Enid Li - a</p>
            <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-[clamp(5.875rem,4.5vw,10rem)] font-extrabold min-w-0">FULL-STACK
              <br />
              DESIGNER
            </h1>
            <p className="text-4xl font-medium py-4">TBH，I'm not trying to be a designer. I just make things,
              <br />
              and this is where they go.</p>
          </div>



          {/* Portfolio Items */}
          <div className="space-y-20">
            <hr></hr>
            <DesignProjectItem
            title="Dora.ai"
            date="Oct. 2023 - Feb. 2024"
            description="I designed for Dora AI features, a new editor for marketers and brand designers to create on-brand content. I defined the editing system, extended Design System capabilities into a new context, and shipped features like Focused Editing, Make Image (using gpt-image-1), the Inline Toolbar, and more. Launched at Config 2025."
            pictureSrc1="/assets/referral.png"
            videoSrc1="/assets/referral_welcome.mp4"
            videoSrc2="/assets/dora_ai_main.mp4"
            buttonName="READ MORE"                
            />  


            {/* Item 2 - with thumbnail */}
            <PortfolioItem
              title="Design Feature"
              date="June 2024"
              description="Designed an innovative feature that lets users shape how their ideas come across. Built and shipped with a small team in under a month, becoming part of the wider conversation around modern design tooling."
              thumbnail="https://placehold.co/1600x900/1a1a1a/4a4a4a/png?text=Design+Feature"
              links={[
                { text: "READ MORE", href: "#" }
              ]}
            />

            {/* Item 3 */}
            <PortfolioItem
              title="Workflow Tool"
              date="September 2024"
              description="Designed a feature helping users move smoothly from early ideas to final presentation. Points to a broader ambition: blurring abstraction boundaries and making workflows feel more connected."
              links={[
                { text: "READ MORE", href: "#" }
              ]}
            />

            {/* Item 4 */}
            <PortfolioItem
              title="Product Enhancement"
              date="June 2024"
              description="To upsell Pro features, designed contextual nudges that showed up naturally in the user journey. Instead of banners, focused on helpful, well-timed prompts with playful animations."
            />

            {/* Item 5 */}
            <PortfolioItem
              title="AI Integration"
              date="November 2023"
              description="Led design across the full AI bundle including multiple features. Worked closely with the team, guiding the overall direction. The patterns and frameworks from this work helped shape the company's AI strategy."
              links={[
                { text: "LEARN MORE", href: "#" }
              ]}
            />

            {/* Item 6 */}
            <PortfolioItem
              title="Innovation Project"
              date="August 2023"
              description="First AI feature launched - helped teams brainstorm, generate content, and collaborate. Demoed at a major industry event and helped position the company as an innovation leader."
              links={[
                { text: "LEARN MORE", href: "#" },
                { text: "PLUGIN", href: "#", badge: true }
              ]}
            />

            {/* Item 7 */}
            <PortfolioItem
              title="Growth Strategy"
              date="June 2023"
              description="Worked on early growth strategy, testing ways to reduce friction and increase activation by focusing on onboarding, permission states, and other key levers."
            />

            {/* Item 8 */}
            <PortfolioItem
              title="User Experience"
              date="October 2022"
              description="To help more people explore the product without barriers, designed an open experience focused on browsing content. Led the vision work and partnered across teams to define possibilities."
              links={[
                { text: "LEARN MORE", href: "#" }
              ]}
            />
          </div>
        </section>

        {/* Speaking & Writing Section */}
        <section className="mb-48">
          <h2 className="serif-italic text-6xl md:text-8xl mb-32 leading-none">
            Speaking
            <br />
            & Writing
          </h2>

          <div className="space-y-20">
            {/* Speaking Item 1 */}
            <PortfolioItem
              title="Conference: Deep Dive"
              date="May 2025"
              description="Shared the design process behind a major product alongside the team, highlighting the key decisions, challenges, and insights that shaped it. Offered a closer look at how we built tools that help teams create better content."
              links={[
                { text: "WATCH", href: "#", icon: true }
              ]}
            />

            {/* Speaking Item 2 */}
            <PortfolioItem
              title="Conference: Keynote"
              date="May 2025"
              description="Introduced a new product on the keynote stage alongside leadership. Demoed the product live in front of an audience of over 1,000 attendees."
              links={[
                { text: "WATCH", href: "#", icon: true }
              ]}
            />

            {/* Speaking Item 3 */}
            <PortfolioItem
              title="Community Talk"
              date="April 2025"
              description="Spoke with the local community about advocating for craft and quality throughout the product development process, from early product definition to design and implementation."
            />

            {/* Writing Item 1 */}
            <PortfolioItem
              title="Magazine Feature"
              date="June 2024"
              description="Contributed to a design publication, exploring what good design looks like in the modern era. The piece featured insights from leading designers and thinkers."
              links={[
                { text: "READ", href: "#" }
              ]}
            />

            {/* Writing Item 2 */}
            <PortfolioItem
              title="Design Interview"
              date="December 2023"
              description="Shared my design journey, creative process, and current inspirations in an interview, reflecting on the experiences and ideas that have shaped my approach to design."
              links={[
                { text: "READ", href: "#" }
              ]}
            />
          </div>
        </section>

        {/* Contact */}
        <section id="info" className="text-center pt-20">
          <a
            href="mailto:hello@yourportfolio.com"
            className="text-3xl md:text-4xl hover:opacity-70 transition-opacity inline-block"
          >
            hello@yourportfolio.com
          </a>
        </section>
      </main>
    </div>
  );
}


interface PortfolioItemProps {
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  links?: Array<{ text: string; href: string; badge?: boolean; icon?: boolean }>;
}


interface DesignProjectItem {
  title: string;
  date: string;
  description: string;
  pictureSrc1: string;
  videoSrc1: string;
  videoSrc2: string;
  buttonName: string;
}

function DesignProjectItem({ title, date, description, pictureSrc1, videoSrc1, videoSrc2, buttonName }: DesignProjectItem) {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {/* 第一张图  */}
        <div>
          <img
            src={pictureSrc1}
            alt={title}
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>

        {/* 第二张图  */}
        <div>
          <video
            src={videoSrc1}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>

        {/* 第三张图  */}
        <div>
          {/* <img src="/assets/sample.png" className="w-full h-full object-cover aspect-[4/3]" alt="" /> */}
          <video
            src={videoSrc2}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>

        {/* 文字部分 */}
        {/* <div className="sm:col-span-1 lg:col-span-3"> */}
        <div className="flex flex-col">
          <p className="text-base font-medium mb-2 leading-tight">{title}</p>
          <p className="text-sm text-white/40">{date}</p>
        </div>

        {/* <div className="sm:col-span-1 lg:col-span-3"> */}
        <div className="flex flex-col gap-2">
          <p className="text-base font-sm mb-2 leading-tight">{description}</p>
          <Link
            href="/project"
            className="text-sm font-medium hover:opacity-70 transition-opacity inline-flex items-center gap-2"
          >{buttonName}</Link>
        </div>
        {/* <div className="sm:col-span-1 lg:col-span-3">
      </div> */}
        <div className="flex flex-col gap-2">
        </div>
      </div>
  )
}

function PortfolioItem({ title, date, description, thumbnail, links }: PortfolioItemProps) {
  return (
    <div className="border-t border-white/10 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
        {/* Left Column: Title and Date */}
        <div className="flex-shrink-0">
          <h3 className="text-base font-medium mb-2 leading-tight">{title}</h3>
          <p className="text-sm text-white/40">{date}</p>
        </div>

        {/* Right Column: Content */}
        <div>
          {/* Thumbnail Image */}
          {thumbnail && (
            <div className="mb-8">
              <div className="relative w-full aspect-[16/9] bg-white/5 rounded-sm overflow-hidden border border-white/10">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed mb-6 text-white/85">
              {description}
            </p>

            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-4 items-center">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`text-sm font-medium hover:opacity-70 transition-opacity inline-flex items-center gap-2 ${link.badge ? 'border border-white/20 rounded-full px-4 py-1.5' : ''
                      }`}
                  >
                    {link.icon && <span className="text-[10px]">▶</span>}
                    {link.text}
                    {!link.badge && !link.icon && <span className="text-xs">→</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
