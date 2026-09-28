import { coverImage } from '../data/cardImages'

export function HeroCover() {
  return (
    <header className="image-page cover-image-page">
      <img src={coverImage} alt="공감 서포터즈 카드뉴스 표지" decoding="async" fetchPriority="high" />
      <div className="image-page__fallback">
        <span>공감 서포터즈 카드뉴스</span>
        <small>start.png</small>
      </div>
    </header>
  )
}
