import styles from './PersonalProjects.module.css'

export default function PersonalProjects() {
  return (
    <div className="page-container">
      <h1 className="page-title">Personal Projects</h1>
      <div className="card">
        <span className={`${styles.badge} ${styles.badgeActive}`}>In Progress</span>
        <p className={styles.message}>Projects coming soon.</p>
      </div>
    </div>
  )
}
