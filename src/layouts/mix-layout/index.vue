<script lang="ts" setup>
const props = withDefaults(defineProps<{
  headerHeight?: number
}>(), {
  headerHeight: 48,
})
const headerHeightVar = computed(() => `${props.headerHeight}px`)
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header inverted class="pro-admin-mix-layout-header flex justify-between items-center px-4">
      <div>左侧</div>
      <div>右侧</div>
    </n-layout-header>
    <n-layout has-sider class="pro-admin-mix-layout-content">
      <n-layout-sider content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <slot />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.pro-admin-mix-layout-header{
  height: v-bind(headerHeightVar);
}
.pro-admin-mix-layout-content{
  height: v-bind(contentHeightVar);
}
</style>
