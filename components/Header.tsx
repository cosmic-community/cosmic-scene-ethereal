import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cosmic-deeper/80 border-b border-cosmic-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-3xl">🌌</span>
            <div>
              <h1 className="font-serif text-xl md:text-2xl gold-text font-semibold">
                Cosmic Ethereal
              </h1>
              <p className="text-xs text-cosmic-milk/60">Divine Art Gallery</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-cosmic-milk/80 hover:text-cosmic-gold transition-colors text-sm md:text-base">
              Home
            </Link>
            <Link href="/artworks" className="text-cosmic-milk/80 hover:text-cosmic-gold transition-colors text-sm md:text-base">
              Artworks
            </Link>
            <Link href="/artists" className="text-cosmic-milk/80 hover:text-cosmic-gold transition-colors text-sm md:text-base">
              Artists
            </Link>
            <Link href="/style-tags" className="text-cosmic-milk/80 hover:text-cosmic-gold transition-colors text-sm md:text-base hidden sm:block">
              Styles
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}