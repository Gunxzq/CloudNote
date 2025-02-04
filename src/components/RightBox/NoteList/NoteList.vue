<template>
    <div class="container">
        <div class="left-box">
            <div class="resize"></div>
            <div class="content">
                <search-bar class="search" id="item"></search-bar>
                <div class="tab">
                    <font-icon Type="jiantou2" class="back" Size="25"></font-icon>
                    <span class="path">{{ notelist.name }}</span>
                </div>
                <div id="item" class="list-box">
                    <el-scrollbar @click.right.prevent.stop="menu" class="item-box">
                        <div class="item" v-for="(item,index) in notelist.children" :key="item.id" 
                            @click="detail(item.id,item.Type,index)"  
                            >
                            <NoteItem :Type="item.Type" :class="currentNote==index ? 'activeClass' : null">
                                <template v-slot:name>{{item.name}}</template>
                                <template v-slot:content>{{ item.content }}</template>
                                <template v-slot:date>{{ item.date }}</template>
                            </NoteItem>
                            <hr width="95%" size="1px"></hr>
                        </div>
                    </el-scrollbar>
                </div>
                <editor-menu Type="2" class="Notemenu" id="rightMenu"></editor-menu>
            </div>
            <div class="stats">总共</div>
        </div>
        
        <router-view class="right"></router-view>
    </div>
</template>
<script>
import NoteItem from './NoteItem.vue'
import EditorMenu from '../../EditorMenu/EditorMenu.vue'
import SearchBar from '../SearhBar/SearchBar.vue'
import {notelist} from '../../../config/test'       //请求数据
export default{
    components:{
        NoteItem,EditorMenu,SearchBar
    },
    data(){
        return{
            currentNote:0,
            notelist,
        }
    },
    methods:{

        detail(id,type,index){
            this.currentNote=index
            if(type=='share')   // 文件夹
                this.$router.push({path:`/file/${this.notelist.id}/note/${id}`})
            else
                this.$router.push({path:`/file/${this.notelist.id}/default/${id}`})   
        },
        menu(event){
            this.$store.commit('setMenuState',2)
            let menu = document.querySelector('.Notemenu')
            console.log(menu)
            console.log(this.$store.state.currentMenu)
            menu.style.left = event.clientX + 'px'
            menu.style.top = event.clientY + 'px'
        }
    }
}
</script>

<style lang="scss" scoped>
#item{
    margin:10px 0 10px 0;
}
.container {
    border-radius: 10px;
    background-color: white;
    display: flex;
    width: auto;
    .left-box{
        position: relative;
        // overflow: hidden;
        border-right:1px solid var(--border-color);
        .resize{
            max-width: 400px;
            // 最小宽度
            min-width: 300px;
            height: 100vh;
            overflow: scroll;
            resize: horizontal;
            cursor: e-resize;
            opacity: 0;
        }
        .resize::-webkit-scrollbar {
        width: 5px;
        height: 92vh;
      }
        .content{
            // border: 1px solid red;
            top: 0%;
            left: 0%;
            width: 99%;
            height: 100%;
            position: absolute;
            // overflow: hidden;
            display: flex;
            flex-direction: column;
            .tab{
                text-align: center;
                position: relative;
                .back{
                    position: absolute;
                    left: 5%;
                }
                .path{
                    font-size: 18px;
                    font-weight: bold;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .list-box {
                flex: 1; 
                overflow: hidden;
                .item-box{
                    height: 100%;
                    overflow-x: hidden;
                    .item{
                        margin: 10px;
                    }
                    .activeClass{
                        background-color: rgba(209, 217, 221, 0.5);
                        border-radius: 10px;
                    }
                }
            }
        }
        .stats{
            width: 100%;
                position: absolute;
                bottom: 0px;
                border-top:1px;
                border-bottom:1px;
                border-style: solid;
                background-color: white;
                border-color: rgb(65, 47, 47,0.3);
                z-index: 1;
                padding: 5px;
                font-size: 90%;
            }
    }
    .right{
        flex: 1;
        width: auto;
    }
}
.item-box::-webkit-scrollbar{
    width: 0px;
}
.item-box:hover::-webkit-scrollbar{
    width: 5px;
}
.item-box::-webkit-scrollbar-thumb{
    background: rgba(24, 47, 58, 0.3);
    border-radius:50px ;
}
</style>