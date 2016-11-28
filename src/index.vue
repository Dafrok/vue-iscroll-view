<template lang="pug">
div(ref="scrollView", :style="wrapperStyle", :class="wrapperClass")
  div(:style="scrollerStyle", :class="scrollerClass")
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
    wrapperClass: {
      type: Object,
      default () {
        return {}
      }
    },
    wrapperStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    scrollerClass: {
      type: Object,
      default () {
        return {}
      }
    },
    scrollerStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    zoom () {
      this.$nextTick(() => this.iscroll.zoom.apply(this.iscroll, arguments))
    },
    goToPage () {
      this.$nextTick(() => this.iscroll.goToPage.apply(this.iscroll, arguments))
    },
    next () {
      this.$nextTick(() => this.iscroll.next.apply(this.iscroll, arguments))
    },
    prev () {
      this.$nextTick(() => this.iscroll.prev.apply(this.iscroll, arguments))
    },
    scrollToElement () {
      this.$nextTick(() => this.iscroll.scrollToElement.apply(this.iscroll, arguments))
    },
    scrollBy () {
      this.$nextTick(() => this.iscroll.scrollBy.apply(this.iscroll, arguments))
    },
    scrollTo () {
      this.$nextTick(() => this.iscroll.scrollTo.apply(this.iscroll, arguments))
    },
    refresh () {
      this.$nextTick(() => this.iscroll.refresh.apply(this.iscroll, arguments))
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

    setTimeout(() => {
      this.$refs.scrollView.scrollTop = 0;
      location.hash && this.iscroll.scrollToElement(location.hash, 0)
    }, 0);

    this.$nextTick(() => {
      this.iscroll = new IScroll(this.$refs.scrollView, this.options)
      events.forEach(event => {
        this.iscroll.on(event, () => this.$emit(event, this.iscroll))
      })
    })
  }
}
</script>
