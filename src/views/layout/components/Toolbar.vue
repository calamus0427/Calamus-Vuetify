<template>
<v-toolbar
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>calamus</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <a href="//www.calamus.xyz" target="_blank">主站</a>
      </v-btn>
      <v-btn flat>
        <a href="//www.cnblogs.com/calamus" target="_blank">技术博客</a>
      </v-btn>
      <v-btn flat>
        <a href="//calamus.wiki/daily-FE/" target="_blank">每日前端</a>
      </v-btn>
      <v-btn flat>
        <router-link to="/about">关于我</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Toolbar',
    methods: {
      onIconClicked () {
        this.$emit('iconClicked')
      }
    }
  }
</script>
