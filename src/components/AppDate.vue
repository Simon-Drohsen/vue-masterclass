<script setup>
import { defineProps } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

const props = defineProps(['timestamp'])

function diffForHumans() {
  return dayjs.unix(props.timestamp).fromNow()
}

function humanFriendlyDate() {
  return dayjs.unix(props.timestamp).format('llll')
}

</script>

<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<style scoped>

</style>
