<template>
  <div class="indexPage">
    <p>Тестовое задание Why Not</p>
    <p>Мельников Кирилл</p>
    <span>Github: <a href="https://github.com/DillistoneFav">LINK</a></span>
    <span>HH.ru: <a href="https://vologda.hh.ru/resume/81025270ff0b2dfa8c0039ed1f777a63696b51">LINK</a></span>
    <span>Web-resume: <a href="https://dillistonefav.github.io/resume/">LINK</a></span>
    <router-link to="/advantages">Перейти в приложение</router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.indexPage{
  height: 100%;
  font-size: 24px;
  a:last-child{
    margin-top: 1rem;
  }
}
</style>
