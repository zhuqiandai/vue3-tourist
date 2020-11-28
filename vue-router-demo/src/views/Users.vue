<template>
  <div>User {{ $route.params.id }}</div>
  <router-view></router-view>
</template>

<script>
import { defineComponent, watch } from 'vue'
import { users } from './users'
import { onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
  setup(props, context) {
    const getData = (to, from, next) => {
      setTimeout(() => {
        console.log(to, from, next)
      }, 1000)
    }

    onBeforeRouteUpdate(async (to, from, next) => {
      await getData(to, from)
      alert(to)
      next()
    })

    return { users }
  },
})
</script>

<style scoped></style>
