export function PageControls({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="page-controls">
      <button type="button" onClick={onPrev} disabled={currentPage === 0}>
        이전
      </button>
      <span>
        {String(currentPage + 1).padStart(2, '0')} /{' '}
        {String(totalPages).padStart(2, '0')}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
      >
        다음
      </button>
    </div>
  )
}
