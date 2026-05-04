import Link from 'next/link'
import { Artwork } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const featuredImage = artwork.metadata?.featured_image
  const title = getMetafieldValue(artwork.metadata?.title) || artwork.title
  const description = getMetafieldValue(artwork.metadata?.description)
  const aspectRatio = getMetafieldValue(artwork.metadata?.aspect_ratio)
  const styleTags = artwork.metadata?.style_tags || []

  return (
    <Link href={`/artworks/${artwork.slug}`} className="group block">
      <div className="cosmic-card overflow-hidden">
        {featuredImage && (
          <div className="relative overflow-hidden aspect-[3/4] bg-cosmic-deeper">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=1067&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={533}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deeper via-transparent to-transparent opacity-60" />
            {aspectRatio && (
              <span className="absolute top-3 right-3 text-xs bg-cosmic-deeper/80 backdrop-blur-sm border border-cosmic-gold/30 px-2 py-1 rounded text-cosmic-gold-light">
                {aspectRatio}
              </span>
            )}
          </div>
        )}
        <div className="p-5">
          <h3 className="font-serif text-xl text-cosmic-milk group-hover:text-cosmic-gold transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-cosmic-milk/60 line-clamp-2 mb-3">
              {description}
            </p>
          )}
          {styleTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {styleTags.slice(0, 3).map((tag) => {
                const tagColor = getMetafieldValue(tag.metadata?.color) || '#d4af37'
                const tagName = getMetafieldValue(tag.metadata?.name) || tag.title
                return (
                  <span
                    key={tag.id}
                    className="text-xs px-2 py-1 rounded-full border"
                    style={{
                      borderColor: `${tagColor}40`,
                      color: tagColor,
                      backgroundColor: `${tagColor}15`,
                    }}
                  >
                    {tagName}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}