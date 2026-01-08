import { useState } from 'react'
import type { GalleryImage } from '../../data/galleryImages'
import { ExternalLink } from 'lucide-react'

interface ImageCardProps {
  image: GalleryImage
  onClick: () => void
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div 
      className="group relative overflow-hidden rounded-xl cursor-pointer smooth-transition"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {/* Placeholder while loading */}
        {!isLoaded && (
          <div 
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: image.placeholderColor || 'var(--color-bg-secondary)' }}
          />
        )}
        
        {/* Image */}
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 smooth-transition">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 smooth-transition">
            <h3 className="font-bold text-lg mb-1">{image.title}</h3>
            <p className="text-sm text-white/80 mb-2">{image.categoryAr}</p>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <ExternalLink style={{ width: '14px', height: '14px' }} />
              <a
                href={image.photographerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white smooth-transition"
                onClick={(e) => e.stopPropagation()}
              >
                {image.attribution}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}