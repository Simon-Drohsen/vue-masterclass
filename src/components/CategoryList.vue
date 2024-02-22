<script setup>
  import ForumList from '@/components/ForumList.vue'
  import sourceData from '@/data.json'

  const props = defineProps(['categories'])

  function getForumsForCategory(category) {
    return sourceData.forums.filter(forum => forum.categoryId === category.id)
  }
</script>

<template>
  <ForumList :category-id="category.id" :title="category.name" :forums="getForumsForCategory(category)" v-for="category in props.categories" :key="category.id"/>
</template>

<style scoped>

</style>
