<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click.prevent="pushRouter">TO DASHBOARD</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import router from '../router'
import { onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(props) {
    const pushRouter = () => {
      router.push('/dashboard')
    }

    console.log(props)
    return { pushRouter }
  },
})
</script>
