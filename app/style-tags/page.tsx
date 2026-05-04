import { getAllStyleTags } from '@/lib/cosmic'
import StyleTagCard from '@/components/StyleTagCard'

export default async function StyleTagsPage() {
  const tags = await getAllStyleTags()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <p className="text-cosmic-celestial-light text-sm uppercase tracking-widest mb-2">
          Aesthetic Realms
        </p>
        <h1 className="font-serif text-5xl md:text-6xl gold-text mb-4">
          Style Tags
        </h1>
        <p className="text-cosmic-milk/70 max-w-2xl mx-auto">
          Discover artworks by their aesthetic and stylistic themes.
        </p>
      </div>

      {tags.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-cosmic-milk/60">No style tags available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tags.map((tag) => (
            <StyleTagCard key={tag.id} tag={tag} />
          ))}
        </div>
      )}
    </div>
  )
}