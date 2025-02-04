<template>
    <div class="search-tab">
        <div class="serach"  id="flex">
            <el-input @click.stop="menu(5)" class="input" :prefix-icon="Search" clearable  v-model="serachContent" placeholder="搜索笔记 Ctrl+Shift+F">
            </el-input>
            <editor-menu Type="5" style="left: 5%;top: 100%;width: 80%;" id="clickMenu"></editor-menu>           
            <font-icon @click.stop="menu(1)" Type="share" Text="分享" Size="20">
                <editor-menu Type="1" id="clickMenu" style="top: 120%;left: -200%;"></editor-menu>
            </font-icon>
        </div>
        
    </div>
</template>
<script>
import { Calendar, Search } from '@element-plus/icons-vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex/dist/vuex.cjs.js';
import EditorMenu from '../../EditorMenu/EditorMenu.vue'
import { reactive } from 'vue';
export default{
  components: { EditorMenu },
    // setup(){
    //     const Search=reactive({})
    //     return {Search}
    // },
    data(){
        return{
            serachRecord:this.$store.state.serachRecord,
            serachContent:"",
            range:0,
            Search
        }
    },
    computed:{
        ...mapState(["currentMenu"]),
    },
    methods:{
        ...mapMutations([
      'setMenuState' 
    ]),
        menu(index){
            console.log(index)
            this.$store.commit('setMenuState',index)
            // console.log()
            console.log(this.$store.state.currentMenu)

        }
    }
}
</script>



<style lang="scss" scoped>
#flex{
    display: flex;
    align-items: center;
}
.search-tab {
    height: fit-content;
    .serach{
        position: relative;
        padding: 0 5px 0 5px;
        .input{
            margin-right: 10px;
            width: 100%;
            // height:40px;
            :deep(.el-input__wrapper){
                margin-left: 10px;
                overflow: hidden;
                display: flex;
                border-radius:50px ;
                height: 30px;
                background-color:rgba(244,246,247,0.8);
            }
            :deep(.el-input__inner){
                width: 80%;
                outline: none;
                border: none;
                font-size: 85%;
                background-color:rgba(244,246,247,0.8);
                }
            }
        }
    :deep(svg){
        width: 60%;
        height: 60%;
        margin:5px 5px 0px 10px;
    }
}
</style>>