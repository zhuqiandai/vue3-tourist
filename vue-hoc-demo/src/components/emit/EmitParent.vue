<template>
  <div>{{ count }}</div>
  <emit-child @increment="plus" v-model:count="inputing" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EmitChild from './EmitChild.vue'

export default defineComponent({
  components: {
    EmitChild,
  },
  setup() {
    const count = ref(0)

    function inputing(value) {
      count.value = value
    }

    function plus(val) {
      console.log(val)
      count.value += val
    }

    return { count, plus }
  },
})
</script>

<style scoped></style>
