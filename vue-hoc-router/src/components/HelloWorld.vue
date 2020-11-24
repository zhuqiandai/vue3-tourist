<template>
  <Fetch>
    <template #default="data">{{ data.data.title }}</template>
    <template #loading>Loading...</template>
  </Fetch>
  <emit-parent />
  <scope-parent />
</template>

<script>
import { defineComponent } from 'vue'
import Fetch from './Hoc/Fetch.vue'
import EmitParent from './emit/EmitParent.vue'
import ScopeParent from './slots/scopeSlot/ScopeParent.vue'

export default defineComponent({
  components: {
    Fetch,
    EmitParent,
    ScopeParent,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped></style>
