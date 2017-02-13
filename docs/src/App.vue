<template>
  <iscroll-view ref="scrollView" class="scroll-view" @pullUp="pullup" @pullDown="pulldown">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ligula nulla, aliquet at volutpat ut, maximus sed neque. Morbi tempor gravida velit, ut gravida justo imperdiet non. Fusce gravida vestibulum ex at lobortis. Donec enim eros, ullamcorper sit amet nulla vel, feugiat rhoncus lectus. Duis tempor sollicitudin sem, sit amet laoreet erat tempor id. Nulla auctor, tellus et mattis ornare, urna velit pharetra enim, vel tristique felis diam et tellus. Pellentesque libero neque, maximus eget interdum eu, finibus a justo. Aenean at accumsan enim. Pellentesque et rutrum purus, vel tristique massa.
    </p>
    <p>
      Phasellus vestibulum consequat consectetur. Integer nulla urna, porttitor id nunc vel, suscipit sollicitudin ipsum. Duis sodales, lacus sed congue pulvinar, arcu urna tincidunt lorem, in condimentum orci nunc sed dolor. Suspendisse accumsan tortor eu sem tincidunt, non cursus quam tristique. Vivamus non lorem at mauris pharetra laoreet. Nam ullamcorper quam auctor rutrum rhoncus. Suspendisse sagittis ornare nisi, iaculis aliquet eros vulputate non. In euismod sem id augue malesuada, sit amet porta sapien pulvinar. Fusce finibus urna massa, ut dignissim velit euismod et. Donec tristique non dolor sed congue. Curabitur id velit eget diam vulputate malesuada. Nullam dapibus, massa id bibendum blandit, dui nunc tempor risus, non semper velit lorem vel massa. Nulla tristique arcu nunc.
    </p>
    <p>
    Nullam non nulla malesuada, vulputate urna ac, molestie turpis. Nam dui diam, auctor vitae pharetra sit amet, co
    </p>
  </iscroll-view>
</template>

<script>
export default {
  methods: {
    pullup () {
      console.log('Pull up.')
    },
    pulldown () {
      console.log('Pull down.')
    }
  },
  mounted () {
    console.log(this.$refs)
    this.$refs.scrollView.refresh()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
p {
  margin: 0;
}
.scroll-view {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  padding: 5px;
  overflow: hidden;
}
</style>