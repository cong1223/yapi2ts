import { FC } from 'react'
import styles from '@/layout/ContentWrapper/index.module.scss'

const Home: FC = () => {
  return (
    <>
      <textarea
        className={styles.textAreaInput}
        name="inputCode"
        rows={12}
        placeholder="enter link"
      />
      <div className={styles.btnGroups}>
        <button className={styles.btn} onClick={() => void 0}>
          确认
        </button>
      </div>
    </>
  )
}

export default Home
