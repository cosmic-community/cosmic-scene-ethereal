import { getAllArtists } from '@/lib/cosmic'
import ArtistCard from '@/components/ArtistCard'

export default async function ArtistsPage() {
  const artists = await getAllArtists()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <p className="text-cosmic-celestial-light text-sm uppercase tracking-widest mb-2">
          The Visionaries
        </p>
        <h1 className="font-serif text-5xl md:text-6xl ethereal-text mb-4">
          Our Artists
        </h1>
        <p className="text-cosmic-milk/70 max-w-2xl mx-auto">
          Meet the divine visionaries crafting cosmic ethereal worlds.
        </p>
      </div>

      {artists.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-cosmic-milk/60">No artists available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      )}
    </div>
  )
}