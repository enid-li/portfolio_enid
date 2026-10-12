'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionProps } from "../type";
export function CaseStudySection({ media, layout, subtitle, title, description }: SectionProps) {
    const mediaArray = Array.isArray(media) ? media : media ? [media] : [];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`mb-24 ${layout === 'full-width' ? 'w-full' : 'max-w-4xl mx-auto'}`}
        >
            {/* Text Content Block - Optional */}
            {(subtitle || title || description) && (
                <div className={`mb-12 ${layout === 'full-width' ? 'max-w-4xl mx-auto px-4' : ''}`}>
                    {subtitle && (
                        <span className="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-4 bg-blue-100/50 w-fit px-2 py-1 rounded-md backdrop-blur-sm">
                            {subtitle}
                        </span>
                    )}
                    {title && (
                        <div className="text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight">
                            {title.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    )}
                    {description && (
                        <div className="text-lg md:text-xl leading-relaxed text-gray-600 space-y-4">
                            {description.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    )}

                </div>
            )}

            {/* Media Block */}
            {mediaArray.length > 0 && (
                <div className={`grid gap-6 ${mediaArray.length > 1 ? 'grid-cols-1' : 'grid-cols-1'}`}>
                    {mediaArray.map((item, idx) => {
                        // 👇 修改 1: 获取 fit 属性 (如果没有传，默认还是 'cover')
                        // 使用 (item as any) 是为了不让你去修改 TypeScript 类型定义文件，实现最小改动
                        const objectFit = item.fit === 'contain' ? 'object-contain' : 'object-cover';

                        return (
                            <div
                                key={idx}
                                className={`relative border border-white/50
                                    ${mediaArray.length === 1 ? 'aspect-video' : 'aspect-[16/9]'}
                                    ${mediaArray.length === 1 ? 'bg-gray-50' : 'bg-gray-50'}
                                `}
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        autoPlay muted loop playsInline
                                        // 👇 修改 2: 给视频也加上这个类名
                                        className={`w-full h-full ${objectFit}`}
                                    />
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt || 'Project image'}
                                        fill
                                        // 👇 修改 3: 将 'object-cover' 替换为变量 ${objectFit}
                                        className={`${objectFit} transition-transform duration-700 hover:scale-105`}
                                    />
                                )}
                                {item.caption && (
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl text-xs font-medium text-gray-600 border border-white/20">
                                        {item.caption}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </motion.section>
    );
}