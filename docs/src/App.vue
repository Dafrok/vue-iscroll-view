<template>
  <iscroll-view ref="scrollView" class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel: true}">
    <doc-content class="markdown-body"/>
  </iscroll-view>
</template>

<script>
import Hljs from 'highlight.js'
import DocContent from './content.md'

export default {
  components: {
    DocContent
  },
  methods: {
    pullUp () {
      console.log('Pull up.')
    },
    pullDown () {
      console.log('Pull down.')
    }
  },
  mounted () {
    this.$refs.scrollView.refresh()
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, Hljs.highlightBlock)
  }
}
</script>

<style>
.scroll-view {
  touch-action: none;
  position: fixed;
  left: 1rem;
  right: 1rem;
  top: 1rem;
  bottom: 1rem;
  padding: 5px;
  overflow: hidden;
}
</style>