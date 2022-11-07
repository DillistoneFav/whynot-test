<template>
  <div class="navbarContainer">
    <div class="headerTop">
      <div class="headerTopContent">
        <router-link to="/">
          <CompanyLogo alt="company logo" class="companyLogo"/>
        </router-link>
        <div class="rightSideHeader">
          <div class="region">
            <LocationIcon/>
            <div class="regionName">{{region}}</div>
          </div>
          <button class="messagesIndication" @click="clearMessagesHandler">
            <Bell
              class="bell"
              :class="{'animated': messages.length}"
            />
            <div
              class="messagesCount"
              v-if="messages.length"
            >
            </div>
          </button>
          <button class="menuToggleButton" @click="messagesStore.changeMenuVisibility()" :class="{'menuButtonOpened': menuVisibility}">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
    <div class="headerBottom container" :class="{'menuVisible': menuVisibility}">
      <router-link
        v-for="route in routes"
        :to="route.path"
        class="link"
        active-class="active"
      >
        {{route.name}}
      </router-link>
      <div class="region">
        <LocationIcon/>
        <div class="regionName">{{region}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyLogo from "@/components/icons/CompanyLogo.vue"
import LocationIcon from "@/components/icons/LocationIcon.vue"
import Bell from "@/components/icons/Bell.vue"

import { useMessagesStore } from "@/stores/messages";
import { computed } from "vue";
import {routes} from "@/router/routes";

import '@/assets/navbar.scss'

const messagesStore = useMessagesStore()
const messages = computed(() => messagesStore.messages)
const region = computed(() => messagesStore.region)
const menuVisibility = computed(() => messagesStore.menuVisibility)

const clearMessagesHandler = () => {
  // some logic to open modal maybe ?
  messagesStore.clearMessages()
}

</script>

<style scoped lang="scss">

</style>
