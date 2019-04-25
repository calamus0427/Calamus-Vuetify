<template>
  <div>
      <v-footer
        height="auto"
        color="white"
        light
        >
        <v-layout
          space-between
          row
          wrap>
          <!-- <v-layout  row wrap class="links">
            <div v-for="(item,index) in links" :key="index" style="width:20%">
                <p><strong>{{item.title}}</strong></p>
                <div>
                    <p
                        v-for="(link,index2) in item.items"
                        :key="index2"
                        color="white"
                        flat
                        round
                        style="display:block"
                    >
                        {{ link }}
                    </p>
                </div>
            </div>
          </v-layout> -->
          <v-flex
              class="copyright"
              py-3
              text-xs-center
              xs12
            >
                  Copyright &copy; 2015-2019 <a href="//www.calamus.xyz">Calamus</a>
          </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
    name:'okr-footer',
    data(){
        return {
            links:[
                {title:'产品',items:['功能','价格','下载','应用与插件','更新']},
                {title:'资源',items:['帮助中心','解决方案','案例中心','活动']},
                {title:'开发者',items:['自助检测','系统状态']},
                {title:'公司',items:['关于我们','新闻','合作伙伴']},
                {title:'其他',items:['support@okr.xhzp.com','+96 400-232-323']}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.try{
  position: relative;
  text-align:center;
  padding:5rem 0;
  background-color: #F9F9F9;
  >p{
    font-size:18px;
    color:rgba(136,136,136,1);
    padding:1.2rem 0;
  }
  img{
    width:100%;
  }
  
}
.copyright{
  background-color: white;
  border-top:1px solid #D8D8D8;
  font-size:14px;
  color:rgba(136,136,136,1);
}
.links{
    width: 80%;
    margin: 0 auto;
    padding: 5rem 10rem;
}
.triangle{
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 40px solid white;
    position: absolute;
    top: 0px;
    left: calc(50% - 50px);
}
</style>


