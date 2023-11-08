import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '~/App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import router from '~/routes/index'

/**
 * 解决tailwind的样式冲突
 */
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
