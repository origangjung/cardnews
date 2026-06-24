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

export function ActivityCard({ activity }) {
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
