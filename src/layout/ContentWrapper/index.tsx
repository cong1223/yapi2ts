import { FC } from 'react'
import styles from './index.module.scss'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

const ContentWrapper: FC<RouteConfigComponentProps> = (props) => {
  const { route } = props
  return (
    <div className={styles.content}>
      <div className={styles.wrap}>
        {route && renderRoutes(route.routes)}
        <hr className={styles.divider} />
      </div>
    </div>
  )
}

export default ContentWrapper
