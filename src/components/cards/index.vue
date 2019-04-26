<template>
    <div class="anime_cards">
        <img :src="imgList[img]" alt="">
        <div class="content">
                <slot />
        </div>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.anime_cards{
    position: relative;
    transition: all 0.5s ease 0 ;
    img{
        width:100%;
        opacity:0.5;
        filter:alpha(opacity=50);
        border-radius:15px;
    }
    .content{
        position: absolute;
        padding:0.5rem;
        top:50px;
        left:50px;
        background-color: #ffffff47;
        border-radius:20px;
    }
    &:hover{
        .content{
            background-color: #ffffffad;
        }
    }
}
</style>


