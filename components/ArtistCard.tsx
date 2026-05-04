import Link from 'next/link'
import { Artist } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ArtistCard({ artist }: { artist: Artist }) {
  const profileImage = artist.metadata?.profile_image
  const name = getMetafieldValue(artist.metadata?.name) || artist.title
  const specialty = getMetafieldValue(artist.metadata?.specialty)
  const bio = getMetafieldValue(artist.metadata?.bio)

  return (
    <Link href={`/artists/${artist.slug}`} className="group block">
      <div className="cosmic-card p-6 text-center">
        {profileImage ? (
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-cosmic-gold/30 group-hover:ring-cosmic-gold transition-all">
            <img
              src={`${profileImage.imgix_url}?w=256&h=256&fit=crop&auto=format,compress`}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-ethereal-gradient flex items-center justify-center text-5xl ring-2 ring-cosmic-gold/30 group-hover:ring-cosmic-gold transition-all">
            👤
          </div>
        )}
        <h3 className="font-serif text-xl text-cosmic-milk group-hover:text-cosmic-gold transition-colors mb-1">
          {name}
        </h3>
        {specialty && (
          <p className="text-sm text-cosmic-celestial-light mb-3">{specialty}</p>
        )}
        {bio && (
          <p className="text-sm text-cosmic-milk/60 line-clamp-3">{bio}</p>
        )}
      </div>
    </Link>
  )
}