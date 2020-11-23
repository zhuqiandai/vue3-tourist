<template>
  <Fetch>
    <template #default="data">{{ data.data.title }}</template>
    <template #loading>Loading...</template>
  </Fetch>
</template>

<script>
import { defineComponent } from 'vue'
import Fetch from './Hoc/Fetch.vue'

export default defineComponent({
  components: {
    Fetch,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped></style>
