import IScrollView from './index.vue'

export default {
  install (Vue, options = {}) {
    Vue._IScroll = options.IScroll || options
    Vue.component('iscroll-view', IScrollView)
  }
}