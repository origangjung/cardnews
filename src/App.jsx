import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { ActivityCard } from './components/ActivityCard'
import { ClosingPage } from './components/ClosingPage'
import { HeroCover } from './components/HeroCover'
import { PageControls } from './components/PageControls'
import { PageViewer } from './components/PageViewer'
import { TimelineNav } from './components/TimelineNav'
import { activities } from './data/activities'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState('next')

  const pages = useMemo(
    () => [
      { id: 'cover', content: <HeroCover />, fullscreen: true },
      ...activities.map((activity) => ({
        id: activity.month,
        content: <ActivityCard activity={activity} />,
      })),
      { id: 'closing', content: <ClosingPage />, fullscreen: true },
    ],
    [],
  )

  const navItems = useMemo(
    () =>
      activities.map((activity, index) => ({
        ...activity,
        page: index + 1,
      })),
    [],
  )

  const goToPage = (page) => {
    setDirection(page > currentPage ? 'next' : 'prev')
    setCurrentPage(page)
  }

  const goPrev = useCallback(() => {
    if (currentPage > 0) {
      setDirection('prev')
      setCurrentPage((page) => Math.max(0, page - 1))
    }
  }, [currentPage])

  const goNext = useCallback(() => {
    if (currentPage < pages.length - 1) {
      setDirection('next')
      setCurrentPage((page) => Math.min(pages.length - 1, page + 1))
    }
  }, [currentPage, pages.length])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        (event.target instanceof HTMLElement &&
          (event.target.isContentEditable ||
            event.target.closest('input, textarea, select')))
      ) {
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goPrev, goNext])

  return (
    <div className="reader">
      <header className="reader-header">
        <div className="reader-header__inner">
          <button className="reader-brand" type="button" onClick={() => goToPage(0)} aria-label="공감 서포터즈 카드뉴스 표지로 이동">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
            <span className="reader-brand__text">
              <strong>공감 서포터즈 <span>카드뉴스</span></strong>
              <small>함께 배우고, 함께 성장하는 이야기</small>
            </span>
          </button>
          <TimelineNav
            currentPage={currentPage}
            items={navItems}
            onSelect={goToPage}
          />
        </div>
      </header>
      <PageViewer pages={pages} currentPage={currentPage} direction={direction} />
      <PageControls
        currentPage={currentPage}
        totalPages={pages.length}
        onNext={goNext}
        onPrev={goPrev}
      />
    </div>
  )
}

export default App
