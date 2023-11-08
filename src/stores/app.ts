import { defineStore } from 'pinia'
import { reactive, unref } from 'vue'
import { layoutThemeConfig } from '~/config/layout-theme'
import { useLayoutTheme } from '~/componsables/layout-theme'
export const useAppStore = defineStore('app', () => {
  // 判断当前是不是在开发环境中，如果是在开发环境中那么我们直接使用默认的配置即可。
  const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()
  const layout = reactive(unref(defaultTheme))
  return {
    layout,
  }
})
