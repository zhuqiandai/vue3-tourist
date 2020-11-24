<template>
  <ul>
    <li v-for="item in itemList" :key="item">
      <slot name="item" v-if="item" :item="item"></slot>
    </li>
  </ul>
  <slot name="icon" :icon="itemList[0].icon"></slot>
  <slot style="background: red" name="footer"></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    itemList: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
