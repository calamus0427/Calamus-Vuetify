<template>
<v-toolbar
      absolute
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>OKR管理系统</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="/product">产品</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/teach">讲师培训</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/solution">解决方案</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/customer">客户案例</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/customer">更多服务</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/customer">免费试用</router-link>
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
