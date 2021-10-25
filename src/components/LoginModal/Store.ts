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
      email: '',
      password: ''
    })
  }
}

export default Store
