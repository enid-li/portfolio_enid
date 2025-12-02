export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-8 flex justify-between items-center">
          {/* <Link href="/" className="text-[24px] font-bold text-base hover:opacity-70 transition-opacity">
            Enid Li
            thumbnail="/assets/thumbnail1.jpg"
          </Link> */}

          <img src="/assets/enid1.png" width={100} height={60} alt="" />

          <a href="#info" className="text-base hover:opacity-70 transition-opacity">
            Info
          </a>
        </div>
      </header>
    )
}