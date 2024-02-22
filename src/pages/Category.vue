<script setup>
  import ForumList from '@/components/ForumList.vue'
  import sourceData from '@/data.json'
  import { computed } from 'vue'

  const props = defineProps(['id'])

  const category = computed(() =>
    sourceData.categories.find(category => category.id === props.id)
  )

  function getForumsForCategory(category) {
    return sourceData.forums.filter(forum => forum.categoryId === category.id)
  }
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<style scoped>

</style>
