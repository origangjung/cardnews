import endingImage from '../assets/cardnews/ending.png'

export function ClosingPage() {
  return (
    <section className="image-page closing-image-page">
      <img src={endingImage} alt="공감 서포터즈 카드뉴스 마무리" />
      <div className="image-page__fallback">
        <span>공감 서포터즈 카드뉴스</span>
        <small>ending.png</small>
      </div>
    </section>
  )
}
