<template lang="pug">
div(ref="scrollView")
  slot
</template>

<script>
import IScroll from 'iscroll/build/iscroll-lite.js'
export default {
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    zoom: {
      type: Array
    },
    goToPage: {
      type: Array
    },
    next: {
      type: Array
    },
    prev: {
      type: Array
    },
    scrollToElement: {
      type: Array
    },
    scrollBy: {
      type: Array
    },
    scrollTo: {
      type: Array
    },
    refresh: {
      type: Array
    }
  },
  methods: {
    _refresh () {
      this.$nextTick(this.iscroll.refresh)
    }
  },
  watch: {
    zoom (val) {
      this.iscroll.zoom.apply(this.iscroll, val)
    },
    goToPage (val) {
      this.iscroll.goToPage.apply(this.iscroll, val)
    },
    next (val) {
      this.iscroll.next.apply(this.iscroll, val)
    },
    prev (val) {
      this.iscroll.prev.apply(this.iscroll, val)
    },
    scrollBy (val) {
      this.iscroll.scrollBy.apply(this.iscroll, val)
    },
    scrollToElement (val) {
      this.iscroll.scrollToElement.apply(this.iscroll, val)
    },
    scrollTo (val) {
      this.iscroll.scrollTo.apply(this.iscroll, val)
    },
    refresh (val) {
      this._refresh()
    }
  },
  beforeDestroy () {
    this.iscroll && this.iscroll.destroy()
    this.iscroll = null
  },
  mounted () {
    const events = [
      'beforeScrollStart',
      'scrollCancel',
      'scrollStart',
      'scrollEnd',
      'scroll',
      'flick',
      'zoomStart',
      'zoomEnd'
    ]

    this.iscroll = new IScroll(this.$refs.scrollView, this.options)

    events.forEach(event => {
      this.iscroll.on(event, () => this.$emit(event, this.iscroll))
    })
  }
}
</script>
