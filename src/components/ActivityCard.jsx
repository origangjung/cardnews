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
    <figure className={`program-photo${photo.type === 'poster' ? ' program-photo--poster' : ''}`}>
      <img src={photo.src} alt={photo.alt} decoding="async" />
      <figcaption>{photo.caption ?? `${month}월 프로그램 현장 이미지`}</figcaption>
    </figure>
  )
}

function PosterGallery({ posters }) {
  return (
    <div className="poster-gallery" aria-label="10월 공모전 포스터">
      {posters.map((poster) => (
        <figure className="poster-gallery__item" key={poster.title}>
          <div className="poster-gallery__image">
            <img src={poster.src} alt={poster.alt} decoding="async" />
          </div>
          <figcaption>
            <strong>{poster.title}</strong>
            <p>{poster.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
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

export function ActivityCard({ activity }) {
  return (
    <article
      className={`activity-card activity-card--${activity.palette}${activity.posters ? ' activity-card--posters' : ''}`}
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
        <span>프로그램 소개</span>
        <strong>{activity.programName}</strong>
        <p>{activity.kicker}</p>
        {activity.applicationGuide && (
          <p className="program-application">신청 방법: {activity.applicationGuide}</p>
        )}
        <LinkButton link={activity.link} />
      </aside>

      {!activity.posters && <ProgramPhoto photo={activity.photo} month={activity.month} />}

      {activity.posters && <PosterGallery posters={activity.posters} />}

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
