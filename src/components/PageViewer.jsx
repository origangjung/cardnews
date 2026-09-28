import { useEffect, useRef } from 'react'

export function PageViewer({ pages, currentPage, direction }) {
  const page = pages[currentPage]
  const cachedImages = useRef(new Map())

  useEffect(() => {
    // Decode adjacent pages in advance without delaying navigation.
    for (const index of [currentPage + 1, currentPage - 1]) {
      const src = pages[index]?.image
      if (!src || cachedImages.current.has(src)) continue

      const image = new Image()
      image.decoding = 'async'
      image.src = src
      cachedImages.current.set(src, image)
      image.decode().catch(() => {
        cachedImages.current.delete(src)
      })
    }
  }, [currentPage, pages])

  return (
    <main
      className={`page-stage ${page.fullscreen ? 'page-stage--fullscreen' : ''}`}
      aria-live="polite"
    >
      <section
        className={`newspaper-page ${page.fullscreen ? 'newspaper-page--fullscreen' : ''} ${
          direction === 'next' ? 'flip-next' : 'flip-prev'
        }`}
        key={page.id}
      >
        {page.content}
      </section>
    </main>
  )
}
