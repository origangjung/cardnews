export function PageControls({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="page-controls">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentPage === 0}
        aria-label="이전 뉴스"
        aria-keyshortcuts="ArrowLeft"
        title="이전 뉴스 (←)"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
        이전
      </button>
      <div className="page-status">
        <span className="page-count">
          <strong>{String(currentPage + 1).padStart(2, '0')}</strong>
          <span className="page-count__divider">/</span>
          {String(totalPages).padStart(2, '0')}
        </span>
        <div className="page-dots" aria-hidden="true">
          {Array.from({ length: totalPages }, (_, index) => (
            <i key={index} className={index === currentPage ? 'is-active' : ''} />
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        aria-label="다음 뉴스"
        aria-keyshortcuts="ArrowRight"
        title="다음 뉴스 (→)"
      >
        다음
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
      </button>
    </div>
  )
}
