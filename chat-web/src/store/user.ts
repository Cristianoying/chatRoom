import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state:() => {
    return {
      name: '小于',
      nickName: '',
      socketId: '',
    }
  },
  getters: {

  },
  actions: {
    async getUserInfo() {
      const info = await new Promise<object>(resolve => {
      setTimeout(() => {
          resolve({
            name: '小王',
            nickName: '',
            socketId: '',
          })
        }, 1000);
      })
      this.name = (info as any).name 
    }
  }
})