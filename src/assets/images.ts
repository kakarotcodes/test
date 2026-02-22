// Auto-import all JPG images in this folder and export sorted lists
// Vite will inline the correct URLs at build time.

const raw = import.meta.glob('./*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

function sortKeys(a: string, b: string) {
  // Normalize keys like './ishi_12.jpg' -> 'ishi_12.jpg'
  const na = a.replace(/^\.\//, '')
  const nb = b.replace(/^\.\//, '')

  // Put 'first.jpg' first if present
  if (na === 'first.jpg' && nb !== 'first.jpg') return -1
  if (nb === 'first.jpg' && na !== 'first.jpg') return 1

  // Extract ishi_N numbers and compare numerically
  const ra = /ishi_(\d+)\.jpg$/i.exec(na)
  const rb = /ishi_(\d+)\.jpg$/i.exec(nb)
  if (ra && rb) return Number(ra[1]) - Number(rb[1])

  // Fallback to locale compare
  return na.localeCompare(nb)
}

const sortedEntries = Object.keys(raw).sort(sortKeys)
export const allImages: string[] = sortedEntries.map((k) => raw[k])

export const heroImage: string | undefined = sortedEntries.find(k => /first\.jpg$/i.test(k)) ? raw['./first.jpg'] : allImages[0]

// Choose first 4 as timeline defaults
export const timelineImages: string[] = allImages.slice(0, 4)

// All for gallery by default
export const galleryImages: string[] = allImages

