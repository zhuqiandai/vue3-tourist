<template>
  <button @click="pushRouter">push</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../router'

export default defineComponent({
  setup() {
    const pushRouter = () => {
      router.push({ path: '/about' })
    }
    return {}
  },
})
</script>

<style scoped></style>
