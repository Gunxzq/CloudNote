<template>
    <div class="container">
        <div class="user-resize" ref="userTab"></div>
        <div class="content" v-if="!miniActive">
            <div class="avatar-container">
                <div class="avater"></div>
                <el-button class="create">新建</el-button>
            </div>
            <div class="list">
                <div v-for="(item,index) in UserTabconfig" class='list-item' :key="index">
                    <font-icon :Type="item.type"></font-icon>
                    <span>{{item.name}}</span>
                    <!-- <note-tree v-if="index==1"></note-tree> -->
                </div>
            </div>
        </div>
        <div v-else class="content" id="flex-row">
            <div class="avater-active"></div>
            <button class="create-active">+</button>
            <font-icon class="icon-active" v-for="(item,index) in UserTabconfig" :Type="item.type" Size="25" :title="item.name" :key="index"></font-icon>
        </div>
        <div class="bootm-container">
            <font-icon Size="30" Type="share" v-for="(item,index) in [0,2,3]" @click="showMode(index)" :key="index"></font-icon>
        </div>
    </div>
</template>

<script>
import { UserTabconfig} from'../../config/config.js'
import {debounce} from '../../config/utils.js'
import FontIcon from '../FontIcon/FontIcon.vue';
import NoteTree from './NoteTree.vue';
export default {
  components: {NoteTree, FontIcon},
    data(){
        return{
            UserTabconfig,
            // 左栏宽度，最小时改变样式
            UserTabWidth:null,
            miniActive:false,
        }
    },
    methods:{
        showMode(index){
            
        }
    },
    mounted(){
        // 获取上次登录左栏的宽度
        // let debounceFunc = debounce(entries=>{
        //     let width=entries[0].borderBoxSize[0].inlineSize
        //     if(width<=85){
        //         this.miniActive=true
        //     }
        //     else{
        //         this.miniActive=false
        //     }
        // }, 500);
        // const resizeObserver = new ResizeObserver(entries => {
        //     debounceFunc(entries)
        // });
        // //监听对应的dom
        // resizeObserver.observe(this.$refs.userTab);
    }
}
</script>
<style scoped lang="scss">
#flex-row{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.user-resize{
    max-width: 1100px;
    // 最小宽度
    min-width: 85px;
    height: 100vh;
    overflow: scroll;
    resize: horizontal;
    cursor: e-resize;
    // background-color: red;
    opacity: 0;
}
.user-resize::-webkit-scrollbar {
        width: 85px;
        height: 85vh;
      }
.content{
    width: 98%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    padding: var(--padding);
    // background: white;
}

.container {
    position: relative;
    overflow: hidden;
    color: rgba(134, 113, 113, 0.842);
    height: 100%;
    background-color: rgba(223, 230, 233, 0.63);
    .avatar-container {
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        .avater {
            background: blue;
            height: 60px;
            width: 60px;
            border-radius:50% ;
        }
        .create {
            margin-top: 10px;
            height: 40px;
            width: 120px;
            border: 1px solid ;
            border-radius: 5px;
            background: blue; 
            color: white;
            font-size: 15px;
            font-weight: bold;
        }
    }
    .list {
        box-sizing: border-box;
        width: 100%;
        margin-top: 10px;
        min-height: 200px;
        // border:10px solid yellow ;
        .list-item{
            display: flex;
            padding: var(--padding);
        }
        .tree{
            height: 200px;
        }
        .list-item:hover{
                background-color: rgba(228, 215, 215, 0.849) !important;
            }
    }
    .bootm-container {
        position: absolute;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        z-index: 1;
    }
}
</style>
