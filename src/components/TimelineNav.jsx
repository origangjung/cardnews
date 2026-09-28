export function TimelineNav({ items, currentPage, onSelect }) {
  return (
    <nav className="timeline" aria-label="활동 월별 목차">
      {items.map((item) => (
        <button
          className={currentPage === item.page ? 'is-active' : ''}
          key={item.month}
          type="button"
          aria-current={currentPage === item.page ? 'page' : undefined}
          onClick={() => onSelect(item.page)}
        >
          <span>{item.month}</span>
          {item.label}
        </button>
      ))}
    </nav>
  )
}
