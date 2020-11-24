<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Router />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Router from '@/components/Router.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    Router,
  },
})
</script>
