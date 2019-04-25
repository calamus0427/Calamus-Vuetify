<template>
<div class="home">
    <div v-show="toolbar" ref="container" class="toolbar_container">
      <div class="calamus">
        <a href="//www.calamus.xyz" target="_blank">Calamus</a>
      </div>
      <div class="moto">
        这世界上一定有另一个我，
        <br/>
        做着我不敢做的事，
        <br/>
        过着我想过的生活。
      </div>
      <div class="filt"></div>
      <div ref="inner" class="inner"  @mousemove.native="onMouseMoveHandler"></div>
    </div>
    <v-toolbar
        class="cl_toolbar"
        scroll-off-screen
        scroll-target="#scrolling-techniques">
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items class="hidden-sm-and-down">
          <v-layout align-center justify-space-around>
            <router-link to="/">首页</router-link>
            <a href="//www.calamus.xyz" target="_blank">主站</a>
            <a href="//github.com/calamus0427" target="_blank">github</a>
            <a href="//www.cnblogs.com/calamus" target="_blank">技术博客</a>
            <a href="//calamus.wiki/daily-FE/" target="_blank">每日前端</a>
            <router-link to="/about">关于我</router-link>
          </v-layout>
      </v-toolbar-items>
    </v-toolbar> 
  </div>
    
</template>

<script>
  export default {
    name: 'Toolbar',
    data(){
      return {
            x: 0,
            y: 0,
            ox: 0,
            oy: 0,
            container: null,
            inner: null,
            counter: 0,
            updateRate: 2,
            content: "",
            loading: false,
            toolbar:''
      }
    },
    mounted(){
        this.container = this.$refs.container;
        this.inner = this.$refs.inner;
        this.container.onmousemove = this.onMouseMoveHandler;
        this.setOrigin(this.container);
        this.toolbar = this.$route.meta.toolbar
        console.log("this.toolbar",this.$route,this.toolbar,)
    },
    watch:{
      $route(to,from){
        console.log(to,"from",from);
        this.toolbar = to.meta.toolbar
      }
    },
    methods: {
      onIconClicked () {
        this.$emit('iconClicked')
      },
      updatePosition(event){
        let e = event || Window.event;
        this.x = (e.clientX - this.ox) / 30;
        this.y = (e.clientY - this.oy) / 30;
      },
      setOrigin(e){
        this.ox = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this.oy = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show (){
        return "(" + this.x + ", " + this.y + ")";
      },
      onMouseMoveHandler(event) {
        if (this.isTimeToUpdate()) {
          this.update(event);
        }
      },
      isTimeToUpdate() {
        return this.counter++ % this.updateRate === 0;
      },
      update(event) {
        this.updatePosition(event);
        this.updateTransformStyle(this.x.toFixed(5), this.y.toFixed(5));
      },
      updateTransformStyle(x, y) {
        let style = "translate(" + -x + "px," + -y + "px)";
        this.inner.style.transform = style;
        this.inner.style.webkitTransform = style;
        this.inner.style.mozTransform = style;
        this.inner.style.msTransform = style;
        this.inner.style.oTransform = style;
      },
      /**
       * 设置图片显示范围
       */
      setImgPosition() {
        let innerImg = this.$refs.innerImg;
        let width = document.body.clientWidth;
        let height = document.body.clientHeight;
        let imgHeight = innerImg.offsetHeight;
        let marginLeft = -width / 55 + "px";
        let marginTop = -(imgHeight - height) / 2 / 55 + "px";
        this.inner.style.margin = marginTop + " 0 0 " + marginLeft;
      }
    }
  }
</script>

<style lang="scss" scoped>
.toolbar_container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position:relative;
  .calamus{
    position:absolute;
    font-size:3rem;
    top:40vh;
    left:6rem;
    z-index:1001;
    opacity:0.9;
  }
  .moto{
    position:absolute;
    font-size:1.2rem;
    top:55vh;
    left:6rem;
    z-index:1001;
    color:$base-brown-color;
    opacity:0.8;
  }
  .filt{
    position:absolute;
    top:-100px;
    width:0;
    height:0;
    border-width:0 0 30px 30px;
    border-bottom: calc(100vh + 100px) solid #ecb12b52;
    border-right:70vw solid transparent;
    z-index:1000;
  } 
  .inner {
    position:absolute;
    width: 110%;
    margin-left: -5%;
    height: 110%;
    margin-top: -2%;
    overflow: hidden;
    background: url("../../../assets/banner/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom right;
    opacity: 1;
    img {
      width: 100%;
    }
}
}

.cl_toolbar{
  background-color: white;
  border-radius: 0% 0% 50% 50%;
  a{
    text-decoration: none;
    padding:0 2rem;
    font-size:16px;
    font-weight:400;
  }
}
</style>

