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
    }
  },
  methods: {
    zoom () {
      this.$nextTick(this.iscroll.zoom.bind(this.iscroll, arguments))
    },
    goToPage () {
      this.$nextTick(this.iscroll.goToPage.bind(this.iscroll, arguments))
    },
    next () {
      this.$nextTick(this.iscroll.next.bind(this.iscroll, arguments))
    },
    prev () {
      this.$nextTick(this.iscroll.prev.bind(this.iscroll, arguments))
    },
    scrollToElement () {
      this.$nextTick(this.iscroll.scrollToElement.bind(this.iscroll, arguments))
    },
    scrollBy () {
      this.$nextTick(this.iscroll.scrollBy.bind(this.iscroll, arguments))
    },
    scrollTo () {
      this.$nextTick(this.iscroll.scrollTo.bind(this.iscroll, arguments))
    },
    refresh () {
      this.$nextTick(this.iscroll.refresh.bind(this.iscroll, arguments))
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
