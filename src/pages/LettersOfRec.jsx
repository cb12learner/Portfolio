import styles from './LettersOfRec.module.css'

const recommenders = [
  {
    name: 'TBD',
    title: 'Professor',
    department: 'Industrial & Systems Engineering',
    institution: 'Texas A&M University',
    relationship: 'Course instructor',
  },
  {
    name: 'TBD',
    title: 'Supervisor',
    department: 'Operations & Analytics',
    institution: 'Internship — Summer 2024',
    relationship: 'Direct manager',
  },
]

export default function LettersOfRec() {
  return (
    <div className="page-container">
      <h1 className="page-title">Letters of Recommendation</h1>
      <p className="page-subtitle">
        Available upon request. Letters are in progress for the 2026 recruiting cycle.
      </p>

      <div className={styles.cards}>
        {recommenders.map((r, i) => (
          <div key={i} className={`card ${styles.recCard}`}>
            <div className={styles.avatar}>
              {r.name === 'TBD' ? '?' : r.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{r.name === 'TBD' ? 'Recommender TBD' : r.name}</p>
              <p className={styles.title}>{r.title} · {r.department}</p>
              <p className={styles.institution}>{r.institution}</p>
              <p className={styles.relationship}>{r.relationship}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`card ${styles.requestCard}`}>
        <h2 className={styles.requestTitle}>Request a Letter</h2>
        <p className={styles.requestText}>
          If you&rsquo;d like to review letters of recommendation as part of an application process,
          please reach out directly and I&rsquo;ll arrange delivery through the appropriate channel.
        </p>
        <a className={styles.emailBtn} href="mailto:you@example.com">
          Contact Me →
        </a>
      </div>
    </div>
  )
}
