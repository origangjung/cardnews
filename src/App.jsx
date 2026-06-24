import { useState } from 'react'
import aprilImage from './assets/cardnews/april.jpg'
import endingImage from './assets/cardnews/ending.png'
import juneImage from './assets/cardnews/june.jpg'
import mayImage from './assets/cardnews/may.png'
import startImage from './assets/cardnews/start.png'
import './App.css'

const activities = [
  {
    month: '04',
    label: '4월 활동',
    date: '2026.04.29',
    title: '산업체 인사 진로 탐색 특강',
    newsTitle: '데이터로 산업 현장을 읽는 진로 탐색 프로그램이 열렸다',
    programName: '산업체 인사 진로 탐색 특강',
    kicker: 'Palantir 플랫폼과 데이터 기반 의사결정',
    photo: {
      src: aprilImage,
      alt: '산업체 특강과 데이터 플랫폼 학습을 상징하는 회의 장면',
    },
    summary:
      '4월 29일, 팔란티어 플랫폼의 실제 활용 사례를 중심으로 데이터가 산업 현장의 의사결정에 어떻게 연결되는지 살펴보는 진로 탐색 특강이 진행됐다.',
    points: [
      {
        title: '팔란티어 플랫폼 이해',
        body: '방위산업의 전황 판단, 제조업의 생산 일정 재수립, 의료 분야의 환자 회복 데이터 분석 등 다양한 산업 사례를 통해 데이터 플랫폼의 역할을 확인했다.',
      },
      {
        title: '핵심 기술 온톨로지',
        body: '데이터 간 관계를 정의하고 구조화한 지식 지도를 인공지능과 대형 언어모델이 읽기 좋은 형태로 연결하는 구조를 학습했다.',
      },
      {
        title: '디지털 트윈 적용',
        body: '원유 생산처럼 변수가 많은 환경에서 디지털 공간을 활용해 실시간 최적 조건을 찾아내는 기술의 필요성을 이해했다.',
      },
    ],
    quote:
      '인공지능은 목적이 아니라 수단이다. 기술보다 먼저 문제를 정의하는 태도가 중요하다는 메시지가 남았다.',
    palette: 'blue',
  },
  {
    month: '05',
    label: '5월 활동',
    date: '2026.05',
    title: '홈페이지 피드백 및 숏폼 공모전 준비',
    newsTitle: '학생 참여를 높이는 홈페이지 개선과 AIHub 활용 프로그램이 추진됐다',
    programName: '홈페이지 개선 피드백 및 연암AIHub 숏폼 공모전 준비',
    kicker: '학생 관점의 서비스 개선과 AI 콘텐츠 제작',
    photo: {
      src: mayImage,
      alt: '노트북으로 홈페이지와 AI 서비스를 살펴보는 장면',
    },
    link: {
      href: 'https://aihub.yc.ac.kr',
      label: '연암AIHub 바로가기',
    },
    summary:
      '5월에는 학생들이 더 쉽게 프로그램을 찾고 신청할 수 있도록 홈페이지 개선 의견을 정리하고, 연암AIHub를 활용한 숏폼 공모전 준비 활동이 함께 진행됐다.',
    points: [
      {
        title: 'UI/UX 개선 제안',
        body: '메인 화면에 신청 가능한 프로그램을 카드 형태로 배치하고, 학과별 참여 가능 프로그램을 필터링할 수 있는 기능의 필요성을 제안했다.',
      },
      {
        title: 'FAQ 실효성 강화',
        body: '신청 대상, 신청 방법, 취소 규정, 마일리지, 수료증, 문의처 등 학생들이 실제로 궁금해하는 정보를 중심으로 FAQ를 구성할 것을 건의했다.',
      },
      {
        title: 'AIHub 기능 실습',
        body: '늘어난 5000토큰 한도를 활용해 아이디어 정리, 대본 구성, 내용 수정, 홍보 이미지와 발표 자료 제작까지 AI 기반 제작 흐름을 실습했다.',
      },
    ],
    quote:
      '연암AIHub의 API와 에이전트 기능은 전공 프로젝트와 과제에 직접 연결할 수 있는 실용적인 학습 프로그램으로 보였다.',
    palette: 'green',
  },
  {
    month: '06',
    label: '6월 활동',
    date: '2026.06.24',
    title: 'AI 시대에 변화하는 개발환경과 개발자의 역할 특강',
    newsTitle: 'AI 에이전트 시대, 개발자의 역할 변화를 짚는 특강이 진행됐다',
    programName: 'AI 시대 개발환경과 개발자 역할 특강',
    kicker: 'Agentic AI와 개발자 역량의 변화',
    photo: {
      src: juneImage,
      alt: 'AI와 개발 환경 변화를 상징하는 회로와 기술 이미지',
    },
    summary:
      '6월 24일 특강에서는 스스로 목표를 설정하고 업무를 수행하는 에이전틱 AI의 등장과 함께 개발자에게 요구되는 역량이 어떻게 달라지는지 다뤘다.',
    points: [
      {
        title: '에이전틱 AI의 대두',
        body: '날씨, 예산, 구매 이력 등을 종합해 의사결정을 돕는 AI 쇼핑 에이전트 사례를 통해 산업 현장의 자동화 흐름을 접했다.',
      },
      {
        title: 'SaaS Apocalypse 이해',
        body: 'AI 에이전트가 사람의 업무를 대신 처리하면서 사용자 수 기반 라이선스 모델이 흔들릴 수 있다는 비즈니스 생태계 변화를 학습했다.',
      },
      {
        title: '개발자 채용 시장 변화',
        body: '앞으로의 개발자는 단순 코딩 능력보다 고객의 요구사항을 분석하고 실제 문제를 해결하는 역량이 중요해진다는 점을 확인했다.',
      },
    ],
    quote:
      'AI를 도구로 쓰는 수준을 넘어 새로운 서비스와 시스템을 직접 설계하는 역량이 미래의 핵심임을 실감했다.',
    palette: 'coral',
  },
]

function HeroCover() {
  return (
    <header className="image-page cover-image-page">
      <img src={startImage} alt="공감 서포터즈 카드뉴스 표지" />
      <div className="image-page__fallback">
        <span>공감 서포터즈 카드뉴스</span>
        <small>start.png</small>
      </div>
    </header>
  )
}

function TimelineNav({ items, currentPage, onSelect }) {
  return (
    <nav className="timeline" aria-label="활동 월별 목차">
      {items.map((item) => (
        <button
          className={currentPage === item.page ? 'is-active' : ''}
          key={item.month}
          type="button"
          onClick={() => onSelect(item.page)}
        >
          <span>{item.month}</span>
          {item.label}
        </button>
      ))}
    </nav>
  )
}

function ActivityPoint({ point, index }) {
  return (
    <li className="point">
      <span className="point__number">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <strong>{point.title}</strong>
        <p>{point.body}</p>
      </div>
    </li>
  )
}

function ProgramPhoto({ photo, month }) {
  return (
    <figure className="program-photo">
      <img src={photo.src} alt={photo.alt} />
      <figcaption>{month}월 프로그램 현장 이미지</figcaption>
    </figure>
  )
}

function LinkButton({ link }) {
  if (!link) {
    return null
  }

  return (
    <a className="program-link" href={link.href} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  )
}

function ActivityCard({ activity }) {
  return (
    <article
      className={`activity-card activity-card--${activity.palette}`}
      id={`month-${activity.month}`}
    >
      <div className="activity-card__header">
        <div>
          <span className="activity-card__label">{activity.label}</span>
          <h2>{activity.newsTitle}</h2>
        </div>
        <time>{activity.date}</time>
      </div>

      <aside className="activity-card__program">
        <span>PROGRAM</span>
        <strong>{activity.programName}</strong>
        <p>{activity.kicker}</p>
        <LinkButton link={activity.link} />
      </aside>

      <ProgramPhoto photo={activity.photo} month={activity.month} />

      <p className="activity-card__summary">{activity.summary}</p>

      <ul className="point-list">
        {activity.points.map((point, index) => (
          <ActivityPoint point={point} index={index} key={point.title} />
        ))}
      </ul>

      <blockquote>{activity.quote}</blockquote>
    </article>
  )
}

function ClosingPage() {
  return (
    <section className="image-page closing-image-page">
      <img src={endingImage} alt="공감 서포터즈 카드뉴스 마지막 장" />
      <div className="image-page__fallback">
        <span>공감 서포터즈 카드뉴스</span>
        <small>ending.png</small>
      </div>
    </section>
  )
}

function PageViewer({ pages, currentPage, direction }) {
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

function PageControls({ currentPage, totalPages, onPrev, onNext }) {
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

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState('next')

  const pages = [
    { id: 'cover', content: <HeroCover />, fullscreen: true },
    ...activities.map((activity) => ({
      id: activity.month,
      content: <ActivityCard activity={activity} />,
    })),
    { id: 'closing', content: <ClosingPage />, fullscreen: true },
  ]

  const navItems = activities.map((activity, index) => ({
    ...activity,
    page: index + 1,
  }))

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
