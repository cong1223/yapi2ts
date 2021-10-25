import { makeAutoObservable } from 'mobx'

class CommonStore {
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  setLoading = (loading: boolean) => {
    this.loading = loading
  }
}

export default new CommonStore()
