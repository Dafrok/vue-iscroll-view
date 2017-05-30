<template>
  <iscroll-view ref="scrollView" class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel: true}" :scrollerClass="{scroller: true}">
    <doc-content class="markdown-body"/>
  </iscroll-view>
</template>

<script>
import Hljs from 'highlight.js'
import DocContent from './md/content.md'

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
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 1rem;
  overflow: hidden;
}
.scroller {
  background: green;
}
</style>