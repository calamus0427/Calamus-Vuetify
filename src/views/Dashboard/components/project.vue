<template>
    <div class="project_card">
      <cl-cards  v-for="(item,index) in projectList" :key="index" :img="index" :title="item.title" class="project_card_item">
              <ul v-if="item.children">
                <li v-for="(cItem,index2) in item.children" :key="index2">
                    <a :href="cItem.src" target="_blank">{{cItem.title}}</a>
                </li>
              </ul>
      </cl-cards>
    </div>
</template>

<script>
import ClCards from '@/components/cards'
  export default {
    components:{ClCards},
    name:'project',
    data: () => ({

      projectList:[
        {
          title:'vue项目',
          src:'javascript:;',
          des:'',
          img:'',
          children:[
            {
              title:'vue-element后台项目',
              src:'//calamus.wiki/vue-element-admin-calamus/#/login',
              des:'',
              img:'',
            },
            {
              title:'vue博客',
              src:'//calamus.wiki/my-blog/#',
              des:'',
              img:'',
            },
            {
              title:'vue cli v3 + d3.js',
              src:'//calamus.wiki/vue-d3/#/',
              des:'',
              img:'',
            }
          ]
        },{
          title:'Vue组件',
          src:'//github.com/calamus0427/vue-components',
          des:'',
          img:'',
          children:[
            {
              title:'MeowUI 组件库',
              src:'//calamus.wiki/MeowMeowUI/',
              des:'',
              img:'',
            },
            {
              title:'基于vue和svg实现的树形图ui',
              src:'//github.com/calamus0427/vue-svg-tree',
              des:'',
              img:'',
            }
          ]
        },{
          title:'小游戏',
          src:'javascript:;',
          des:'',
          img:'',
          children:[
            {
              title:'五子棋游戏',
              src:'https://calamus0427.github.io/calamus_game/Backgammon',
              des:'',
              img:'',
            },
            {
              title:'2048游戏',
              src:'https://calamus0427.github.io/calamus_game/2048',
              des:'',
              img:'',
            },
            {
              title:'俄罗斯方块游戏',
              src:'https://calamus0427.github.io/calamus_game/canvas/guaguale/demo1/',
              des:'',
              img:'',
            },
            {
              title:'贪吃蛇游戏',
              src:'https://calamus0427.github.io/calamus_game/eatSnake',
              des:'',
              img:'',
            },
            {
              title:'canvas写字',
              src:'https://calamus0427.github.io/calamus_game/canvas/word',
              des:'',
              img:'',
            },
            {
              title:'东边的山坡上有两头牛',
              src:'https://calamus0427.github.io/calamus_game/canvas/guaguale/demo1/',
              des:'',
              img:'',
            }
          ]
        },{
          title:'小程序',
          src:'javascript:;',
          des:'',
          img:'',
          children:[
            {
              title:'233次元',
              src:'//github.com/233point',
              des:'',
              img:'',
            },
            {
              title:'订餐小程序',
              src:'//www.cnblogs.com/calamus/p/9675213.html',
              des:'',
              img:'',
            }
          ]
        },{
          title:'其他',
          src:'javascript:;',
          des:'',
          img:'',
          children:[
            {
              title:'CSS3动画演示',
              src:'//calamus.wiki/css3-transition/css3-transition/',
              des:'',
              img:'',
            },
            {
              title:'live2d网页看板娘',
              src:'javascript:;',
              des:'',
              img:'',
            },
            {
              title:'live2d网页看板娘',
              src:'//calamus.wiki/calamus-live2d/demo/',
              des:'',
              img:'',
            },
            {
              title:'常用js代码',
              src:'//github.com/calamus0427/commonJS',
              des:'',
              img:'',
            },
            {
              title:'angular尝试',
              src:'//github.com/calamus0427/launchPad',
              des:'',
              img:'',
            },
            {
              title:'live2d网页看板娘',
              src:'//github.com/calamus0427/page404',
              des:'',
              img:'',
            },
          ]
        }
      ]
      
    })
  }
</script>

<style lang="scss" scoped>   
.project_card{
  // border:1px solid #ddd;
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
.project_card{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .project_card_item{
    width:30%;
    margin-bottom:2rem;
  }
}
</style>