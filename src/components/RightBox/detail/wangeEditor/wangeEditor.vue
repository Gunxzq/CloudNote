<template>
    <div class="editor">
        <div class="title-container">
            <el-input class="inputstyle" v-model="data.title" placeholder="无标题笔记" :maxlength="79">
                <template v-slot:prefix>{{ data.title }}</template>
            </el-input>
           <div class="title-right" id="flex">
                <el-button class="el-button" @click="saveData">{{saveState}}</el-button>
                <div class="icon">
                    <font-icon Type="share" Text="分享"></font-icon>
                    <font-icon Type="sousuo" Text="笔记内搜索"></font-icon>
                    <font-icon Type="shenglvehao" Text="更多" @click.stop="menu">
                        <editor-menu Type="3" id="clickMenu" style="top:100%;right:-100%"></editor-menu>
                    </font-icon>
                </div>
           </div>
        </div>
        <editor class="edior-container" :content="html"></editor>
    </div>
</template>

<script>
import axios from 'axios';
import editor from './editor.vue';
import { mapMutations } from 'vuex'
import { mapState } from 'vuex/dist/vuex.cjs.js';
import EditorMenu from '../../../EditorMenu/EditorMenu.vue';
export default{
    components:{
        editor,EditorMenu
    },
    data() {
        return {
            saveState:"已保存",
            text:"保存",
            html: '<p></p>',
            data:{
                title:''
            }
        }
    },
    methods:{
        // axios请求
        saveData(){ 

        },
        ...mapMutations([
        'setMenuState' 
        ]),
        menu(){
            this.$store.commit('setMenuState',3)
            console.log(this.$store.state.currentMenu)
        }
    },
    created(){
        this.$watch(
        () => this.$route.params,
            (toParams, previousParams) => {
                // 对路由变化重新请求文件内容
                console.log(this.$route.params)
                axios.get('http://localhost:8000/file/note').then(
                    res=>this.data=res.data.data
                ).catch(error => {
            console.log(error);
          })

            }
        )
    }
}
</script>
<style lang="scss" scoped>
.editor{
    padding: 10px 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    .title-container{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
            .inputstyle{
                max-width:70%;
                margin: 10px;
            }
            :deep(.el-input__inner){
                outline: none;
                border: none;
                width: 100%;
                font-size: 25px;
            }
            :deep(.el-input__prefix){
                display: block;
                font-size: 20px;
                height: 0px;
                position: relative;
                visibility: hidden;
            }
            .title-right {
                .icon{
                    display: flex;
                    justify-content: space-between;
                    width: 80px;
                }
                .el-button{
                    border: none;
                    height: 30px;
                    width: 70px;
                    font-size: 15px;
                    margin-right: 20px;
                }
            }
    }
    .edior-container {
        // width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>