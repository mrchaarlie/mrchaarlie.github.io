import { useEffect, useRef, useState } from 'react'

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  caption?: string
}

interface ClickableImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  onLightboxOpen: (src: string, alt: string, caption?: string) => void
}

export function ClickableImage({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  loading = 'lazy', 
  decoding = 'async',
  onLightboxOpen 
}: ClickableImageProps) {
  const handleClick = () => {
    // Find the parent figure element and extract caption
    const img = document.querySelector(`img[src="${src}"]`) as HTMLImageElement
    const figure = img?.closest('figure')
    const figcaption = figure?.querySelector('figcaption')
    const caption = figcaption?.textContent || undefined
    
    onLightboxOpen(src, alt, caption)
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={className}
      style={{ cursor: 'pointer', ...style }}
      onClick={handleClick}
    />
  )
}

export default function Lightbox({ isOpen, onClose, imageSrc, imageAlt, caption }: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Handle fade in/out animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Small delay to trigger fade-in after mount
      setTimeout(() => setIsVisible(true), 10)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      ref={modalRef}
      className={`lightbox-overlay ${isVisible ? 'lightbox-visible' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="lightbox-container">
        <button 
          className="lightbox-close" 
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ×
        </button>
        
        <div className="lightbox-content">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="lightbox-image"
          />
          {caption && (
            <div className="lightbox-caption">
              {caption}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 