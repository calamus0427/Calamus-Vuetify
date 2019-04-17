<template>
   <div
    class="hide-overflow"
    style="position: relative;">
    <v-app>
      <toolbar  v-on:iconClicked="showSidebar"></toolbar>
      <okr-content :isSmallScreen="isSmallScreen"></okr-content>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import OkrContent from './components/content.vue'

export default {
  name: 'App',
  components: {
    Toolbar,OkrContent
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

</style>
