import { makeAutoObservable } from 'mobx'
import authApi from '@/common/api/auth'

class Store {
  visible = true

  constructor() {
    makeAutoObservable(this)
  }

  hideModal = () => {
    this.visible = false
  }

  handleLogin = async () => {
    const res = await authApi.login<any>({
      email: 'ye_xiu@hunliji.com',
      password: 'qq962464'
    })
    console.log('===登录结果=====', res)
  }
}

export default Store
