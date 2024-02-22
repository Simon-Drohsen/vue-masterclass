<template>
  <h1>Welcome to the Forum</h1>
  <CategoryList :categories="categories"/>
</template>

<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue'
import CategoryList from '../components/CategoryList.vue'

const categories = ref(sourceData.categories)

</script>

<style scoped>

</style>
