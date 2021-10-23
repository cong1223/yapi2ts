import { FC } from 'react'
import styles from './index.module.scss'

const NavHeader: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>yapi2ts</div>
      <div className={styles.desc}>generate TypeScript interfaces and requests from yapi</div>
      <ul className={styles.menus}>
        <li className={styles.menuItem}>email</li>
        <li className={styles.menuItem}>feedback</li>
        <li className={styles.menuItem}>help</li>
      </ul>
    </div>
  )
}

export default NavHeader
