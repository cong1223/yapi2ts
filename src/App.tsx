import React from 'react'
import styles from './App.module.scss'

function App() {
  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.title}>yapi2ts</div>
        <div className={styles.desc}>generate TypeScript interfaces and requests from yapi</div>
        <ul className={styles.menus}>
          <li className={styles.menuItem}>email</li>
          <li className={styles.menuItem}>feedback</li>
          <li className={styles.menuItem}>help</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <textarea className={styles.textAreaInput} name='inputCode' rows={12} placeholder='enter link' />
          <div className={styles.btnGroups}>
            <button className={styles.btn}>确认</button>
          </div>
          <hr className={styles.divider}/>
        </div>
      </div>
    </div>
  )
}

export default App
