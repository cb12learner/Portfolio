import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {location.pathname !== '/' && (
          <div className={styles.left}>
            <span className={styles.name}>Caden Burnett</span>
            <a href="/Caden Burnett Resume.pdf" download className={styles.resumeBtn}>Resume ↓</a>
          </div>
        )}
        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
