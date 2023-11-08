
import { createGlobalState, useStorage } from '@vueuse/core'
import { layoutThemeConfig } from '~/config/layout-theme'

export const useLayoutTheme = createGlobalState(() => useStorage('layout-theme', layoutThemeConfig))
