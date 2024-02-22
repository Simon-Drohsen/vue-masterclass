<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const text = ref('')
const emits = defineEmits(['save'])
function save() {
  const postId = Math.floor(Math.random() * 100000)
  const post = {
    id: postId,
    text: text.value,
    publishedAt: Math.floor(Date.now() / 1000),
    userId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  }
  emits('save', { post })

  text.value = ''
}
</script>

<template>
  <form @submit.prevent="save">
    <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
    <button class="btn-blue">Submit Button</button>
  </form>
</template>

<style scoped>

</style>
