import { defineStore } from 'pinia'
import type { IMessage } from "@/types/IMessage";

const messagesArray: IMessage[] = [{id: 1, value: '123'}]
const selectedRegion: string = 'Москва и область'
const isMenuVisible: boolean = false

export const useMessagesStore = defineStore('messagesStore', {

  state: () => ({
    messagesArray,
    selectedRegion,
    isMenuVisible
  }),

  getters: {
    messages(state) {
      return state.messagesArray
    },
    region(state) {
      return state.selectedRegion
    },
    menuVisibility(state) {
      return state.isMenuVisible
    }
  },

  actions: {
    addMessage() {
      this.messagesArray.push(
        {
          id: Math.max(...this.messagesArray.map(item => item.id), 0) + 1,
          value: 'message value'
        }
      )
    },
    clearMessages() {
      this.messagesArray = []
    },
    changeMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible
    }
  },

})
