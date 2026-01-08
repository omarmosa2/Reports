import { useEffect } from 'react'
import type { GalleryImage } from '../../data/galleryImages'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

interface ImageModalProps {
  image: GalleryImage
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export function ImageModal({ image, onClose, onNext, onPrevious, hasNext, hasPrevious }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasNext) onNext()
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white smooth-transition z-10"
        aria-label="إغلاق"
      >
        <X style={{ width: '24px', height: '24px' }} />
      </button>

      {/* Previous button */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrevious()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white smooth-transition z-10"
          aria-label="السابق"
        >
          <ChevronRight style={{ width: '32px', height: '32px' }} />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white smooth-transition z-10"
          aria-label="التالي"
        >
          <ChevronLeft style={{ width: '32px', height: '32px' }} />
        </button>
      )}

      {/* Image container */}
      <div 
        className="relative max-w-7xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        
        {/* Image info */}
        <div className="mt-4 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
          <p className="text-lg text-white/80 mb-3">{image.description}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-white/70">
            <ExternalLink style={{ width: '16px', height: '16px' }} />
            <a
              href={image.photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white smooth-transition"
            >
              {image.attribution}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}