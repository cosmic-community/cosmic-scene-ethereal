// app/style-tags/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getStyleTagBySlug, getArtworksByStyleTag, getMetafieldValue } from '@/lib/cosmic'
import ArtworkCard from '@/components/ArtworkCard'

export default async function StyleTagDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tag = await getStyleTagBySlug(slug)

  if (!tag) {
    notFound()
  }

  const artworks = await getArtworksByStyleTag(tag.id)
  const name = getMetafieldValue(tag.metadata?.name) || tag.title
  const description = getMetafieldValue(tag.metadata?.description)
  const color = getMetafieldValue(tag.metadata?.color) || '#d4af37'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/style-tags"
        className="inline-flex items-center gap-2 text-cosmic-gold-light hover:text-cosmic-gold transition-colors mb-8"
      >
        ← Back to styles
      </Link>

      <div
        className="cosmic-card p-8 md:p-12 mb-12 text-center"
        style={{ borderColor: `${color}40` }}
      >
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6"
          style={{ backgroundColor: color, boxShadow: `0 0 40px ${color}80` }}
        />
        <h1
          className="font-serif text-5xl md:text-6xl mb-4"
          style={{ color }}
        >
          {name}
        </h1>
        {description && (
          <p className="text-cosmic-milk/80 max-w-2xl mx-auto leading-relaxed text-lg">
            {description}
          </p>
        )}
      </div>

      {artworks.length > 0 ? (
        <div>
          <h2 className="font-serif text-3xl text-cosmic-milk mb-8">
            Artworks in this style
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-cosmic-milk/60">No artworks in this style yet.</p>
        </div>
      )}
    </div>
  )
}