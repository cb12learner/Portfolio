import { Link } from 'react-router-dom'
import { schoolProjects } from '../data/schoolProjects'
import styles from './Home.module.css'

const skills = [
  'Lean', 'Six Sigma', 'SQL', 'VBA', 'Python', 'Minitab',
  'Simulation', 'SolidWorks', 'CNC Machining',
  'Production Planning', 'Inventory Control', 'Engineering Project Cost Analysis',
]

export default function Home() {
  return (
    <div className="page-container">

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.nameRow}>
          <h1 className={styles.name}>Caden Burnett</h1>
          <a className={styles.resumeBtn} href="/Caden Burnett Resume.pdf" download>Download Resume ↓</a>
        </div>

        <a
          href="https://www.linkedin.com/in/caden-burnett-67039524b/"
          target="_blank"
          rel="noreferrer"
          className={styles.linkedinLink}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        <p className={styles.tagline}>
          Industrial &amp; Systems Engineering · Texas A&amp;M University · Class of December 2026
          <br />
          Minor: Computer Science, Engineering Project Management
        </p>
        <p className={styles.bio}>
          I use data, simulation, and process engineering to find the inefficiency in a system and
          fix it. I'm interested in operations, supply chain, and manufacturing roles where
          analytical thinking drives real decisions.
        </p>
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

      {/* Project grid */}
      <section className={styles.projectsSection}>
        <h2 className={styles.skillsTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          {schoolProjects.map((p) => (
            <Link key={p.id} to={`/projects#${p.id}`} className={styles.projectCard}>
              <p className={styles.projectCardTitle}>{p.title}</p>
              <p className={styles.projectCardSummary}>{p.summary.split('. ')[0]}.</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
