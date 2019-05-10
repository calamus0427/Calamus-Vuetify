<template>
    <!-- <div class="anime_cards">
        <img :src="imgList[img]" alt="">
        <div class="content">
                <slot />
        </div>
    </div> -->

    <div class="box11">   
        <img  :src="imgList[img]">
        <p class="content">
                <slot />
        </p>
        <!-- <div class="box11_ribbon">{{Number(img) +1}}</div>                 -->
        <div class="box11_ribbon">{{title}}</div>                
    </div>
</template>

<script>
export default {
    name:'cards',
    data: () => ({
      imgList:[
        require('../../assets/card/A1.jpg'),
        require('../../assets/card/A2.jpg'),
        require('../../assets/card/A3.jpg'),
        require('../../assets/card/A4.jpg'),
        require('../../assets/card/Q.jpg'),
        require('../../assets/card/Joker.jpg')]
    }),
    props:{
        img:{
            type:Number,
            default:0
        },
        title:{
            type:String,
            default:'Calamus'
        }
    }
}
</script>

<style lang="scss" scoped>

.box11{
    margin: 20px auto;
    position:relative;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#f3f3f3), to(#fff), color-stop(.1,#f3f3f3));
    -webkit-border-bottom-right-radius: 60px 60px;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
    p{ 
        position:absolute;
        width:100%;
        padding:1rem;
        top:50px;
        left:0px;
        background-color: #ffffff47;
        border-radius:20px;
    }
    &:hover{
        p{
            background-color: #ffffffad;
        }
        img{
            animation: rotate3dTurnOutX 1000ms both;
            opacity:1;
            filter:alpha(opacity=100);
        }
    }
    
}
.box11:before{
    content:'';    
    width: 25px;
    height: 20px;
    background: white;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 50% 40%, from(#fff), to( #eee), color-stop(.1,#fff));
    -webkit-border-bottom-right-radius: 30px;
    border-bottom-right-radius: 30px;
    -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    -webkit-transform: rotate(-20deg)
                        skew(-40deg,-3deg)
                        translate(-13px,-13px);
                        transform: rotate(-20deg)
                        skew(-40deg,-3deg)
                        translate(-13px,-13px);
}

.box11:after{
    content: '';
    z-index: -1;
    width: 100px;
    height: 100px;
    position:absolute;
    bottom:0;
    right:0;
    background: rgba(0, 0, 0, 0.2);
    display: inline-block;
    -webkit-box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(0deg)
                        translate(-45px,-20px)
                           skew(20deg);
}


.box11_ribbon{
    position:absolute;
    top:-20px; 
    left: calc(50% - 50px);
    width: 100px;
    height: 40px;
    background: -webkit-gradient(linear, 555% 20%, 0% 92%, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.0)), color-stop(.1,rgba(0, 0, 0, 0.2)));
    border-left: 1px dashed rgba(0, 0, 0, 0.1);
    border-right: 1px dashed rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    text-align:center;
    line-height:40px;
    font-size:1rem;
    font-weight:500;
    color:$base-darkbrown-color;
    cursor:pointer;
    &:hover{
        animation: textConcatIn 1000ms both
    }
}

.box11 img {
    width: 100%;
    opacity:0.5;
    filter:alpha(opacity=50);
    border-radius:50px;
}


</style>


