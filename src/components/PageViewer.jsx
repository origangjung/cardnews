export function PageViewer({ pages, currentPage, direction }) {
  const page = pages[currentPage]

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
