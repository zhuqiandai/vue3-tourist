<template>
  <slot v-if="data" :data="data"></slot>
  <slot v-if="loading" name="loading"></slot>
</template>

<script lang="ts">
import { ref, toRefs } from 'vue'

export default {
  setup() {
    const fetchApi = () => {
      const data = ref(null)
      const loading = ref(false)

      const fetchData = async () => {
        loading.value = true
        try {
          data.value = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
          loading.value = false
        } catch (err) {
          loading.value = false
          throw new Error(err)
        }
      }
      fetchData()
      return {
        data,
        loading,
      }
    }

    const { data, loading } = toRefs(fetchApi())
    console.log(data, loading)
    return {
      data,
      loading,
    }
  },
}
</script>

<style lang="scss" scoped></style>
