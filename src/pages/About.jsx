import { books, movies, soccerAwards, stats, involvement } from '../data/aboutData'
import styles from './About.module.css'

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}{half ? '½' : ''}
    </span>
  )
}

export default function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">
        The non-resume version.
      </p>

      {/* Bio */}
      <section className={`card ${styles.bioCard}`}>
        <p className={styles.bio}>
          I&rsquo;m a senior Industrial & Systems Engineering student at Texas A&M, graduating December 2026.
          I like finding the bottleneck — in a production line, in a dataset, or in my own
          training. Outside of engineering, I watch a lot of films, read when I can, and take
          soccer and the gym seriously.
        </p>
      </section>

      {/* Stats row */}
      <section className={styles.statsRow}>
        <div className={`card ${styles.statCard}`}>
          <p className={styles.statValue}>{stats.benchPressMax} {stats.benchUnit}</p>
          <p className={styles.statLabel}>Bench Press Max</p>
          <p className={styles.statNote}>{stats.benchNote}</p>
        </div>
        <div className={`card ${styles.statCard}`}>
          <p className={styles.statValue}>{movies.length}</p>
          <p className={styles.statLabel}>Favorites on Letterboxd</p>
          <p className={styles.statNote}>Mostly slow, violent, or both.</p>
        </div>
        <div className={`card ${styles.statCard}`}>
          <p className={styles.statValue}>{books.length}</p>
          <p className={styles.statLabel}>Books on the shelf</p>
          <p className={styles.statNote}>Nonfiction-heavy.</p>
        </div>
      </section>

      {/* Soccer */}
      <section className="card">
        <h2 className={styles.sectionTitle}>Soccer</h2>
        <p className={styles.sectionSubtitle}>
          Played competitively through high school. Still play intramurals at A&M (won the championship Spring 2024).
        </p>
        <ul className={styles.awardList}>
          {soccerAwards.map((a, i) => (
            <li key={i} className={styles.awardItem}>
              <span className={styles.awardName}>{a.award}</span>
              <span className={styles.awardMeta}>{a.context} · {a.year}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Books */}
      <section className="card">
        <h2 className={styles.sectionTitle}>Currently Reading / Recently Read</h2>
        <div className={styles.bookGrid}>
          {books.map((b) => (
            <div key={b.title} className={styles.bookCard}>
              <p className={styles.bookTitle}>{b.title}</p>
              <p className={styles.bookAuthor}>{b.author} · {b.year}</p>
              <p className={styles.bookNote}>{b.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Letterboxd */}
      <section className="card">
        <h2 className={styles.sectionTitle}>Letterboxd Favorites</h2>
        <p className={styles.sectionSubtitle}>
          My taste skews toward slow burns, quiet menace, and movies that trust the audience.
        </p>
        <div className={styles.movieGrid}>
          {movies.map((m) => (
            <div key={m.title} className={styles.movieCard}>
              <p className={styles.movieTitle}>{m.title}</p>
              <p className={styles.movieYear}>{m.year}</p>
              <StarRating rating={m.rating} />
            </div>
          ))}
        </div>
      </section>

      {/* Involvement */}
      <section className="card">
        <h2 className={styles.sectionTitle}>Involvement</h2>
        <ul className={styles.involvementList}>
          {involvement.map((item) => (
            <li key={item.org} className={styles.involvementItem}>
              <div>
                <span className={styles.orgName}>{item.org}</span>
                <span className={styles.orgRole}> · {item.role}</span>
              </div>
              <div className={styles.orgMeta}>
                {item.years}{item.note ? ` · ${item.note}` : ''}
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}
