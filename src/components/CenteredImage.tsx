import React from 'react'

type Props = {
  src: string
  alt: string
  ratio?: string // e.g. '3 / 4', '4 / 3', '16 / 9' (omit to disable)
  className?: string
  imgClassName?: string
  fit?: 'cover' | 'contain'
  position?: string // CSS object-position value, e.g. '50% 50%', 'center top'
  sizes?: string
  srcSet?: string
  heightClass?: string // Tailwind classes for fixed height, e.g. 'h-48 md:h-64'
  widthClass?: string // Tailwind classes for width, defaults to w-full
}

export default function CenteredImage({
  src,
  alt,
  ratio,
  className = '',
  imgClassName = '',
  fit = 'contain',
  position = '50% 50%',
  sizes = '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw',
  srcSet,
  heightClass = '',
  widthClass = 'w-full',
}: Props) {
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-lg ${widthClass} ${heightClass} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-${fit} ${imgClassName}`}
        style={{ objectPosition: position }}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
