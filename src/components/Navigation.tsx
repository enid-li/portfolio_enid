'use client'

import { ArrowLeft, Menu } from "lucide-react"
import { NavLink } from "./NavLink"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return <nav className="text-[#000] fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
        <Link href="/" className="flex gap-2 items-center justify-between font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">
            {isHome ? null : <ArrowLeft className="w-4 h-4" />} Enid Li</Link>
        <div className="hidden md:flex items-center gap-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/others">Others</NavLink>
        </div>
        <button className="md:hidden p-2"><Menu className="w-6 h-6" /></button>
    </nav>
}