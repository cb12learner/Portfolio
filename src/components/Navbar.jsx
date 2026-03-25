import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/intern', label: 'Professional Projects' },
  { to: '/school', label: 'School Projects' },
  { to: '/personal', label: 'Personal Projects' },
  { to: '/letters', label: 'Letters of Rec' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.name}>Caden Burnett</span>
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
