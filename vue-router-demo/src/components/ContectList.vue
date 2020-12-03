<!-- scope slot -->
<template>
  <div style="margin-top: 20px" v-for="item in contectUsers" :key="item.id">
    <slot :props="item"></slot>
    <slot name="email" :email="item.email"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contectUsers } from './user'

export default defineComponent({
  setup() {
    return { contectUsers }
  },
})
</script>

<style scoped></style>
