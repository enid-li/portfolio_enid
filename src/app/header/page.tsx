'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-white/10">
      {/* <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-8 flex justify-between items-center"> */}
      
        <a href="#info" className="text-base hover:opacity-70 transition-opacity">
          Info
        </a>
      {/* </div> */}
    </header>
  )
}