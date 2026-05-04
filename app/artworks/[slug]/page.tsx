// app/artworks/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArtworkBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const artwork = await getArtworkBySlug(slug)

  if (!artwork) {
    notFound()
  }

  const featuredImage = artwork.metadata?.featured_image
  const title = getMetafieldValue(artwork.metadata?.title) || artwork.title
  const description = getMetafieldValue(artwork.metadata?.description)
  const aiPrompt = getMetafieldValue(artwork.metadata?.ai_prompt)
  const aspectRatio = getMetafieldValue(artwork.metadata?.aspect_ratio)
  const resolution = getMetafieldValue(artwork.metadata?.resolution)
  const artist = artwork.metadata?.artist
  const styleTags = artwork.metadata?.style_tags || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/artworks"
        className="inline-flex items-center gap-2 text-cosmic-gold-light hover:text-cosmic-gold transition-colors mb-8"
      >
        ← Back to gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Image */}
        <div className="lg:col-span-3">
          {featuredImage && (
            <div className="cosmic-card overflow-hidden">
              <img
                src={`${featuredImage.imgix_url}?w=1600&auto=format,compress`}
                alt={title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl gold-text mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-cosmic-milk/80 leading-relaxed text-lg">
                {description}
              </p>
            )}
          </div>

          {artist && (
            <div className="cosmic-card p-5">
              <p className="text-xs uppercase tracking-widest text-cosmic-celestial-light mb-2">
                Artist
              </p>
              <Link
                href={`/artists/${artist.slug}`}
                className="flex items-center gap-3 group"
              >
                {artist.metadata?.profile_image && (
                  <img
                    src={`${artist.metadata.profile_image.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                    alt={getMetafieldValue(artist.metadata?.name) || artist.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-cosmic-gold/30"
                  />
                )}
                <div>
                  <p className="font-serif text-lg text-cosmic-milk group-hover:text-cosmic-gold transition-colors">
                    {getMetafieldValue(artist.metadata?.name) || artist.title}
                  </p>
                  {artist.metadata?.specialty && (
                    <p className="text-sm text-cosmic-milk/60">
                      {getMetafieldValue(artist.metadata?.specialty)}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {aspectRatio && (
              <div className="cosmic-card p-4">
                <p className="text-xs uppercase tracking-widest text-cosmic-celestial-light mb-1">
                  Aspect Ratio
                </p>
                <p className="font-serif text-lg text-cosmic-gold-light">
                  {aspectRatio}
                </p>
              </div>
            )}
            {resolution && (
              <div className="cosmic-card p-4">
                <p className="text-xs uppercase tracking-widest text-cosmic-celestial-light mb-1">
                  Resolution
                </p>
                <p className="font-serif text-lg text-cosmic-gold-light">
                  {resolution}
                </p>
              </div>
            )}
          </div>

          {styleTags.length > 0 && (
            <div className="cosmic-card p-5">
              <p className="text-xs uppercase tracking-widest text-cosmic-celestial-light mb-3">
                Style Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {styleTags.map((tag) => {
                  const tagColor = getMetafieldValue(tag.metadata?.color) || '#d4af37'
                  const tagName = getMetafieldValue(tag.metadata?.name) || tag.title
                  return (
                    <Link
                      key={tag.id}
                      href={`/style-tags/${tag.slug}`}
                      className="text-sm px-3 py-1 rounded-full border transition-transform hover:scale-105"
                      style={{
                        borderColor: `${tagColor}50`,
                        color: tagColor,
                        backgroundColor: `${tagColor}15`,
                      }}
                    >
                      {tagName}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {aiPrompt && (
            <div className="cosmic-card p-5">
              <p className="text-xs uppercase tracking-widest text-cosmic-celestial-light mb-3">
                AI Prompt
              </p>
              <p className="text-cosmic-milk/80 italic font-serif leading-relaxed text-sm">
                "{aiPrompt}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}