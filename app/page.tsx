import Link from 'next/link'
import { getAllArtworks, getAllArtists, getAllStyleTags } from '@/lib/cosmic'
import ArtworkCard from '@/components/ArtworkCard'
import ArtistCard from '@/components/ArtistCard'
import StyleTagCard from '@/components/StyleTagCard'

export default async function HomePage() {
  const [artworks, artists, styleTags] = await Promise.all([
    getAllArtworks(),
    getAllArtists(),
    getAllStyleTags(),
  ])

  const featuredArtworks = artworks.slice(0, 6)
  const featuredArtists = artists.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-celestial/10 via-cosmic-ethereal/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-float">
            <span className="text-7xl md:text-8xl">🌌</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight">
            <span className="gold-text">Cosmic</span>
            <br />
            <span className="ethereal-text">Ethereal</span>
          </h1>
          <p className="text-lg md:text-xl text-cosmic-milk/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Journey through divine realms where celestial beings dwell, ethereal milk oceans flow, and golden architecture rises into infinite light.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/artworks"
              className="px-8 py-3 bg-gold-gradient text-cosmic-deeper font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Explore Gallery
            </Link>
            <Link
              href="/artists"
              className="px-8 py-3 border border-cosmic-gold/50 text-cosmic-gold-light rounded-full hover:bg-cosmic-gold/10 transition-colors"
            >
              Meet Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      {featuredArtworks.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-cosmic-celestial-light text-sm uppercase tracking-widest mb-2">
                  Featured Works
                </p>
                <h2 className="font-serif text-4xl md:text-5xl gold-text">
                  Divine Visions
                </h2>
              </div>
              <Link
                href="/artworks"
                className="text-cosmic-gold-light hover:text-cosmic-gold transition-colors text-sm hidden md:block"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Artists */}
      {featuredArtists.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cosmic-deeper/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-cosmic-celestial-light text-sm uppercase tracking-widest mb-2">
                The Creators
              </p>
              <h2 className="font-serif text-4xl md:text-5xl ethereal-text">
                Visionary Artists
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Style Tags */}
      {styleTags.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-cosmic-celestial-light text-sm uppercase tracking-widest mb-2">
                Aesthetic Realms
              </p>
              <h2 className="font-serif text-4xl md:text-5xl gold-text">
                Explore by Style
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {styleTags.map((tag) => (
                <StyleTagCard key={tag.id} tag={tag} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}