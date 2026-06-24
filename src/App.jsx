import { useMemo, useState } from 'react'
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

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection('prev')
      setCurrentPage((page) => page - 1)
    }
  }

  const goNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection('next')
      setCurrentPage((page) => page + 1)
    }
  }

  return (
    <div className="reader">
      <TimelineNav
        currentPage={currentPage}
        items={navItems}
        onSelect={goToPage}
      />
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
