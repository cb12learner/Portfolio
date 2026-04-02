import styles from './Home.module.css'

const skills = [
  'Python', 'SQL', 'Simio / Simulation', 'Minitab', 'Excel / VBA', 'SolidWorks', 'Six Sigma', 'Lean',
]

export default function Home() {
  return (
    <div className="page-container">

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.name}>Caden Burnett</h1>
        <p className={styles.tagline}>
          Industrial & Systems Engineering · Texas A&M University · Class of December 2026
          &nbsp;·&nbsp; Minor: Computer Science, Management
        </p>
        <p className={styles.bio}>
          I use data, simulation, and process engineering to find the inefficiency in a system and
          fix it. I&rsquo;m interested in operations, supply chain, and manufacturing roles where
          analytical thinking drives real decisions.
        </p>
        <a className={styles.resumeBtn} href="/resume.pdf" download>
          Download Resume ↓
        </a>
      </section>

      {/* Skills */}
      <section className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Tools & Skills</h2>
        <div className={styles.skillTags}>
          {skills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </section>

    </div>
  )
}
