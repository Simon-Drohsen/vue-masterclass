<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts" />
    <PostEditor :newPostText="newPostText" @save="addPost" />

  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, ref} from 'vue'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const newPostText = ref('')
const props = defineProps(['id'])

const thread = computed(() =>
  threads.value.find(thread => thread.id === props.id)
)

const threadPosts = computed(() =>
  posts.value.filter(post => post.threadId === thread.value.id)
)

function addPost(eventData) {
  const post = {
    ...eventData.post,
    threadId: thread.value.id,
    userId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  }
  posts.value.push(post)
  thread.value.posts.push(post.id)
}

</script>

<style scoped>

</style>
