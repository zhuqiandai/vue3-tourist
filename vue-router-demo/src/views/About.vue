<template>
  <div>
    <contect-list>
      <template #default="{props}">
        {{ props.username }}
      </template>
      <template #email="{email}">
        {{ email }}
      </template>
    </contect-list>
  </div>
</template>

<script>
import ContectList from '@/components/ContectList.vue'

export default {
  components: {
    ContectList,
  },
  setup() {
    return { ContectList }
  },
}
</script>

<style lang="scss" scoped></style>
