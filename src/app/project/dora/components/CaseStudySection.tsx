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
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight">
                            {title}
                        </h2>
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

            {/* Media Block - Optional */}
            {mediaArray.length > 0 && (
                <div className={`grid gap-6 ${mediaArray.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {mediaArray.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-3xl overflow-hidden border border-white/50 shadow-sm
                  ${mediaArray.length === 1 ? 'aspect-video' : 'aspect-[4/3]'}
                  ${mediaArray.length === 1 ? 'bg-gray-100' : 'bg-gray-100'}
                `}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-cover" />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={item.alt || 'Project image'}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105" />
                            )}
                            {item.caption && (
                                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl text-xs font-medium text-gray-600 border border-white/20">
                                    {item.caption}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </motion.section>
    );
}