<template>
    <div class="box">
        <div class="name">
            <font-icon :Type="Type" Size="24" class="icon"></font-icon>
            <slot name="name"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="date">
            <slot name="date"></slot>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        Type:{
            type:String
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.box {
    display: flex;
    height: 120px;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    font-size: 15px;
    .name {
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        align-items: center;
        .icon{
            margin-right: 10px;
        }
    }
    .content, .date {
        color: rgb(1, 2, 2,0.5);
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content{
        display: -webkit-box;
        -webkit-line-clamp: 3; //多行在这里修改数字即可
        overflow:hidden;
        /* autoprefixer: ignore next */
        font-size: 12px;
        -webkit-box-orient: vertical;
        
    }

}
.box:hover{
    transition: 0.8s;
    background-color:rgba(244,246,247,0.8);
}
</style>