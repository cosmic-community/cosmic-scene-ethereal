import Link from 'next/link'
import { StyleTag } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function StyleTagCard({ tag }: { tag: StyleTag }) {
  const name = getMetafieldValue(tag.metadata?.name) || tag.title
  const description = getMetafieldValue(tag.metadata?.description)
  const color = getMetafieldValue(tag.metadata?.color) || '#d4af37'

  return (
    <Link href={`/style-tags/${tag.slug}`} className="group block">
      <div
        className="cosmic-card p-6 transition-all"
        style={{
          borderColor: `${color}30`,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}80` }}
          />
          <h3
            className="font-serif text-xl group-hover:opacity-80 transition-opacity"
            style={{ color }}
          >
            {name}
          </h3>
        </div>
        {description && (
          <p className="text-sm text-cosmic-milk/70 line-clamp-3">{description}</p>
        )}
      </div>
    </Link>
  )
}