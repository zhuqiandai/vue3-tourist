<template>
  <button @click="$emit('increment', 3)">increment</button>
  <input v-model="inputValue" @input="$emit('inputing', $event.target.value)" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['increment', 'inputing'],

  setup() {
    const inputValue = ref('')

    return { inputValue }
  },
})
</script>

<style scoped></style>
