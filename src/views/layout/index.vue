<template>
   <div
    class="calamus_layout"
    >
      <cl-toolbar class="layout__toobar" v-on:iconClicked="showSidebar"></cl-toolbar>
      <cl-content class="layout__content" :isSmallScreen="isSmallScreen"></cl-content>
      <cl-footer class="layout__footer"></cl-footer>
  </div>
</template>

<script>
import ClToolbar from './components/Toolbar.vue'
import ClContent from './components/content.vue'
import ClFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    ClToolbar,ClContent,ClFooter
  },
  data() {
      return {
        drawer: false,
        isIconClicked: false,
        isSmallScreen: true
      }
  },
  mounted () {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
      handleResize () {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        if (width < 1024) {
          this.isSmallScreen = true
          this.drawer = false
          this.removeOverlay()
        } else {
          this.isSmallScreen = false
          this.drawer = true
          this.removeOverlay()
        }
      },

      showSidebar () {
        this.isIconClicked = !this.isIconClicked
      },

      removeOverlay () {
        let $overlay = document.getElementsByClassName('overlay')
        if ($overlay.length > 0) {
          $overlay[0].classList.remove('overlay--active')
        }
      }
    },
}
</script>

<style lang="scss" >
.calamus_layout{
  
  .layout__content{
    width:100%;
  }
  .layout__footer{

  }
}
</style>
