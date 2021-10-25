import { FC } from 'react'
import styles from './index.module.scss'
import Store from './Store'
import { observer, useLocalObservable } from 'mobx-react'
import LimitedTextarea from '@/components/LimitTextArea'

const Home: FC = () => {
  const store = useLocalObservable(() => new Store())

  return (
    <>
      <LimitedTextarea
        className={styles.textAreaInput}
        rows={12}
        placeholder="enter link"
        value={store.inputValue}
        showLimitText={false}
        onChange={store.onChangeInputValue}
      />
      <div className={styles.btnGroups}>
        <button className={styles.btn} onClick={store.generateEntity}>
          确认
        </button>
      </div>
    </>
  )
}

export default observer(Home)
