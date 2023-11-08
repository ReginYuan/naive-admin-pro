<script setup lang="ts">
import MixLayout from '~/layouts/mix-layout/index.vue'
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <MixLayout v-if="layout.layout === 'mix'">
    <router-view />
  </MixLayout>
</template>

<style scoped>
</style>
