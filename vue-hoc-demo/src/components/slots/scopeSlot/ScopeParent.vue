<template>
  <scope-child :itemList="itemList">
    <template #item="slotProps">
      {{ slotProps.item.text }}
    </template>
    <template #icon="{icon}">{{ icon }}</template>
    <template #footer>some thing</template>
  </scope-child>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScopeChild from './ScopeChild.vue'

export default defineComponent({
  components: {
    ScopeChild,
  },
  setup() {
    const itemList = [
      { text: 'First item', icon: 'fa fa-user' },
      { text: 'Second item', icon: 'fa fa-copy' },
      { text: 'Third item', icon: 'fa fa-cut' },
    ]

    return { itemList }
  },
})
</script>

<style scoped></style>
