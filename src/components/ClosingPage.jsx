import { closingImage } from '../data/cardImages'

export function ClosingPage() {
  return (
    <section className="image-page closing-image-page">
      <img src={closingImage} alt="공감 서포터즈 카드뉴스 마무리" decoding="async" />
      <div className="image-page__fallback">
        <span>공감 서포터즈 카드뉴스</span>
        <small>ending.png</small>
      </div>
    </section>
  )
}
