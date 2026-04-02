import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>Caden Burnett · Texas A&M ISEN · Class of December 2026</span>
        <span className={styles.links}>
          <a href="https://www.linkedin.com/in/caden-burnett-67039524b/" target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
      </div>
    </footer>
  )
}
