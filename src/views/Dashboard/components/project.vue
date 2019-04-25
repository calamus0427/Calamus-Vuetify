<template>
    <div class="project_card">
      <ul>
            <li><a href="http://calamus0427.github.io/css3-transition/css3-transition/" target="_blank">CSS3动画演示</a></li>
            <li><a href="https://calamus0427.github.io/calamus-live2d/demo/" target="_blank">live2d网页看板娘</a></li>
            <li>
                <a href="javascript:;"  class="menu_1">Vue项目</a>
                <ul>
                    <li><a href="https://calamus0427.github.io/vue-element-admin-calamus/#/login" target="_blank">vue-element后台项目</a></li>
                    <li><a href="./vue-ppt/index.html" target="_blank">vue走马灯</a></li>
                    <li><a href="./vue-blog/index.html" target="_blank">vue博客</a></li>
                </ul>
            </li>
            <li>
                <a href="javascript:;"  class="menu_1">小游戏</a>
                <ul>
                    <li><a href="https://calamus0427.github.io/calamus_game/Backgammon" target="_blank">五子棋游戏</a></li>
                    <li><a href="https://calamus0427.github.io/calamus_game/2048" target="_blank">2048游戏</a></li>
                    <li><a href="https://calamus0427.github.io/calamus_game/canvas/guaguale/demo1/" target="_blank">俄罗斯方块游戏</a></li>
                    <li><a href="https://calamus0427.github.io/calamus_game/eatSnake" target="_blank">贪吃蛇游戏</a></li>
                    <li><a href="https://calamus0427.github.io/calamus_game/canvas/word" target="_blank">canvas写字</a></li>
                    <li><a href="https://calamus0427.github.io/calamus_game/canvas/guaguale/demo1/" target="_blank">东边的山坡上有两头牛</a></li>
                </ul>
            </li>
            <li>
                <a href="javascript:;"  class="menu_1">小程序</a>
                <ul>
                    <li><a href="https://calamus0427.github.io/calamus-wechat/#/" target="_blank">小程序分享会</a></li>
                    <li><a onclick="showImg()">小程序项目：233次元</a></li>
                </ul>
            </li>
            <li><a href="./my-angular/demo1/index.html">angular项目</a></li>
        </ul>
    </div>
</template>

<script>
import ClCards from '@/components/cards'
  export default {
    components:{ClCards},
    name:'project',
    data: () => ({
      
    })
  }
</script>

<style lang="scss" scoped>   
.project_card{
  border:1px solid #ddd;
  ul {
      list-style: none;
      li{
        ul{
          margin-left:2rem;
        }
        a{
            text-shadow: 5px 5px 5px #80808087;
            &:hover{
              color: #504D4D;
              font-weight: bold;
              text-decoration: none;
              text-shadow: 5px 5px 5px gray;
            }
        }
      }
  }
}  

</style>