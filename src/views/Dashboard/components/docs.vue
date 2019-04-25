<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card
      dark
      flat
    >
      <v-btn
        absolute
        bottom
        color="yellow  lighten-5"
        right
        fab
      >
        <v-avatar>
                <v-img
                  src="https://cdn.calamus.xyz/leimu.jpeg"
                ></v-img>
        </v-avatar>
      </v-btn>
      <v-img
        src="https://cdn.calamus.xyz/44873217_p0_master1200.jpg"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container fill-height>
            <v-layout column justify-end>
              <div class="headline font-weight-light">{{today}}</div>
              <div class="text-uppercase font-weight-light">{{moto}}</div>
            </v-layout>
        </v-container>
      </v-img>
    </v-card>
    <v-card-text class="py-0">
      <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          v-for="(article,index) in articleList"
          :key="index"
          :color="index % 2 == 0 ? 'lime  lighten-2' : 'lime  darken-3'"
          small
        >
          <v-layout wrap pt-3>
            <v-flex>
              <a :href="article.src" target="_blank"><strong>{{article.title}}</strong></a>
              <div class="caption mb-2">{{article.des}}</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
    components:{},
    name:'project',
    data: () => ({
      moto:'冬天从这里夺去的，春天会交还与你',
      articleList:[{
        title:'vue从入门到女装',
        src:'http://calamus.wiki/docs/vue/introduce/#/',
        des:'Vue+element从零开始搭建管理后台 👻'
      },{
        title:'Taro从入门到女装',
        src:'http://calamus.wiki/docs/Taro/introduce/#/',
        des:'三端统一框架 💯 Taro学习笔记 🙌'
      },{
        title:'233次元介绍',
        src:'http://calamus.wiki/docs/233point/introduce/#/',
        des:'来打破次元壁吧 😪'
      },{
        title:'小程序开发经验分享',
        src:'http://calamus.wiki/calamus-wechat/#/',
        des:'小程序开发填坑记录 😪'
      }]
    }),
    computed:{
      today(){
        return moment().format("ddd, MMMM Do YYYY")
      },
      week(){
        return '日'
      }
    },
  }
</script>

<style>

</style>