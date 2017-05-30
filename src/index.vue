<template lang="pug">
div(ref="scrollView", :style="wrapperStyle", :class="wrapperClass")
  div(ref="scroller", :style="scrollerStyle", :class="scrollerClass")
    slot
</template>

<script>
import Vue from 'vue'

export default {
  name: 'iscroll-view',
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
    _registPullEvents () {
      const {iscroll} = this
      iscroll.on('scrollEnd', e => {
        if (iscroll.y <= iscroll.maxScrollY) {
          this.$emit('pullUp', iscroll)
        } else if (iscroll.y >= 0) {
          this.$emit('pullDown', iscroll)
        }
      })
    },
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

      let key
      let value
      let attributes = this.$refs.scrollView.attributes

      this.$refs.scrollView.scrollTop = 0
      for (key in attributes) {
          value = attributes[key]
          if (value instanceof Attr && value.name.indexOf('data-v-') > -1) {
              this.$refs.scroller.attributes.setNamedItem(document.createAttribute(value.name))
          }
      }
      try {
          location.hash && this.iscroll.scrollToElement(location.hash, 0)
      }
      catch(e) {
      }
  }, 0);

    this.$nextTick(() => {
      const IScroll = Vue._IScroll
      this.iscroll = new IScroll(this.$refs.scrollView, this.options)
      events.forEach(event => {
        this.iscroll.on(event, () => this.$emit(event, this.iscroll))
      })
      this._registPullEvents();
    })
  }
}
</script>
