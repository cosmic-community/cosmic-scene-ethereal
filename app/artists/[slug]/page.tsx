// app/artists/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArtistBySlug, getArtworksByArtist, getMetafieldValue } from '@/lib/cosmic'
import ArtworkCard from '@/components/ArtworkCard'

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const artist = await getArtistBySlug(slug)

  if (!artist) {
    notFound()
  }

  const artworks = await getArtworksByArtist(artist.id)
  const profileImage = artist.metadata?.profile_image
  const name = getMetafieldValue(artist.metadata?.name) || artist.title
  const specialty = getMetafieldValue(artist.metadata?.specialty)
  const bio = getMetafieldValue(artist.metadata?.bio)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/artists"
        className="inline-flex items-center gap-2 text-cosmic-gold-light hover:text-cosmic-gold transition-colors mb-8"
      >
        ← Back to artists
      </Link>

      <div className="cosmic-card p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {profileImage ? (
            <img
              src={`${profileImage.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={name}
              width={200}
              height={200}
              className="w-48 h-48 rounded-full object-cover ring-4 ring-cosmic-gold/30"
            />
          ) : (
            <div className="w-48 h-48 rounded-full bg-ethereal-gradient flex items-center justify-center text-7xl ring-4 ring-cosmic-gold/30">
              👤
            </div>
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl gold-text mb-2">
              {name}
            </h1>
            {specialty && (
              <p className="text-cosmic-celestial-light text-lg mb-4">
                {specialty}
              </p>
            )}
            {bio && (
              <p className="text-cosmic-milk/80 leading-relaxed">{bio}</p>
            )}
          </div>
        </div>
      </div>

      {artworks.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl md:text-4xl gold-text mb-8">
            Works by {name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}