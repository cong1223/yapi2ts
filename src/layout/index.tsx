import NavHeader from './NavHeader'
import styles from './index.module.scss'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { FC } from 'react'
import LoginModal from '@/components/LoginModal'

const Layout: FC<RouteConfigComponentProps> = (props) => {
  const { route } = props

  return (
    <div>
      <NavHeader />
      <div className={styles.content}>
        <div className={styles.wrap}>
          {route && renderRoutes(route.routes)}
          <hr className={styles.divider} />
        </div>
      </div>
      <LoginModal />
    </div>
  )
}

export default Layout
