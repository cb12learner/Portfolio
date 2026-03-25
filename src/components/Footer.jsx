import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>Caden Burnett · Texas A&M ISEN · Class of December 2026</span>
        <span className={styles.links}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:cadenburt7@gmail.com">Email</a>
        </span>
      </div>
    </footer>
  )
}
