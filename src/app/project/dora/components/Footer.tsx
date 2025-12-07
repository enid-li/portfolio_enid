'use client'
import { motion } from "framer-motion"
import { Link, Sparkles, ArrowRight } from "lucide-react"

export function Footer() {
    return <div className="border-t border-gray-200 mt-32 pt-16">
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


}