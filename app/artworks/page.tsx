import { getAllArtworks } from '@/lib/cosmic'
import ArtworkCard from '@/components/ArtworkCard'

export default async function ArtworksPage() {
  const artworks = await getAllArtworks()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <p className="text-cosmic-celestial-light text-sm uppercase tracking-widest mb-2">
          The Gallery
        </p>
        <h1 className="font-serif text-5xl md:text-6xl gold-text mb-4">
          All Artworks
        </h1>
        <p className="text-cosmic-milk/70 max-w-2xl mx-auto">
          A complete collection of ethereal cosmic artwork, each a window into divine realms.
        </p>
      </div>

      {artworks.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-cosmic-milk/60">No artworks available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  )
}