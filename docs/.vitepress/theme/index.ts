import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AdBanner from './components/AdBanner.vue'
import Doc from './layouts/Doc.vue'

export default {
  extends: DefaultTheme,

  // 使用自定义布局
  Layout: Doc,

  // 全局组件注册
  enhanceApp({ app }) {
    app.component('AdBanner', AdBanner)
  }
}