<template>
    <span class="IconContainer">
        <span class="iconfont icon" :class="'icon-'+Type" :title="Text" :style="{fontSize:Size+'px',color:Color}"></span>
        <slot name="default"></slot>
    </span>
</template>
<script>
export default{
    props:{
        Type:{
            type:String,
            default:CSS.iconType
        },
        Color:{
            type:String,
            default:CSS.Color
        },
        // 悬停文本
        Text:{
            type:String
        },
        Size:{
            type:String,
            default:CSS.iconSize,
        }
    },
    data(){
        return{
        }
    }
}
</script>
<style lang="scss" scoped>
.IconContainer{
    position: relative;
    // display: grid;
    // grid-template-columns: auto auto;
    // grid-template-rows: auto auto ;
    .icon{
        cursor: pointer;
        :hover {
            transition: 0.8s;
            background-color:var(--hover-bg-color);
        }
    }
   .content{
   }
}
</style>>