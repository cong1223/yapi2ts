import { makeAutoObservable } from 'mobx'

class Store {
  inputValue = '初始值'

  constructor() {
    makeAutoObservable(this)
  }

  generateEntity = () => {
    console.log('生成generateEntity')
  }

  onChangeInputValue = (text: string) => {
    console.log('input change', text)
    this.inputValue = text
  }
}

export default Store
