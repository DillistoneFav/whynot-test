<template>
  <div>
    <p>Advantages page content</p>
    <button class="imitateButton" @click="addMessageHandler">Добавить сообщение в store</button>
  </div>
</template>

<script setup lang="ts">
import { useMessagesStore } from "@/stores/messages";

const messagesStore = useMessagesStore()
const addMessageHandler = () => {
  // some logic to open modal maybe ?
  messagesStore.addMessage()
}
</script>

<style scoped>
.imitateButton{
  margin-top: 1rem;
  width: 170px;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
}
</style>
