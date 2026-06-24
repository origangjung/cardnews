import startImage from '../assets/cardnews/start.png'

export function HeroCover() {
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
