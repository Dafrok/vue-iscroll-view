# VUE ISCROLL VIEW

[IScroll](https://github.com/cubiq/iscroll) component for Vue 2.0

## Install

```bash
$ npm i vue-iscroll-view
$ npm i iscroll
```

## Usage

```javascript
import IScrollView from 'vue-iscroll-view'

/* Using these kinds of IScroll class for different cases. */
import IScroll from 'iscroll'
// import IScroll from 'iscroll/build/iscroll-infinite.js
// import IScroll from 'iscroll/build/iscroll-probe.js
// import IScroll from 'iscroll/build/iscroll-view.js
// import IScroll from 'iscroll/build/iscroll-zoom.js
// import IScroll from 'iscroll/build/iscroll-lite.js

Vue.use(IScrollView, IScroll)
```
## Example

### Preview

This page is rendered by vue-iscroll-view, Pull it up and down to preview.

### Source Code

```html
<template>
  <iscroll-view ref="scrollView" class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel: true}">
    <h1>vue-iscroll-view</h1>
    <p>This page is rendered by vue-iscroll-view.</p>
  </iscroll-view>
</template>

<script>
export default {
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
  }
}
</script>

<style>
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 1rem;
  overflow: hidden;
}
</style>
```