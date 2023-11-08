export interface layoutTheme {
  title: string
  layout: 'mix' | 'side' | 'top'
  headerHeight: number
}

export const layoutThemeConfig: layoutTheme = {
  title: '项目管理',
  layout: 'mix',
  headerHeight: 48,
}
