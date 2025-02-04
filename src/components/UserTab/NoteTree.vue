<template>
    <div class="box">
      <el-tree :data="Tree" class="tree"
        render-after-expand
        highlight-current
        node-key="id"
        :props="defaultProps" 
        @node-expand="expend"
        @node-contextmenu="menu"
        @node-click="click"
        draggable
      >
      </el-tree>
      <editor-menu :Type="0" id="rightMenu" class="userMenu"></editor-menu>
    </div>
  </template>
  
  <script>
import EditorMenu from '../EditorMenu/EditorMenu.vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex/dist/vuex.cjs.js';
import {Tree} from '../../config/test'
import { toRaw } from 'vue';
 export default{
  components: { EditorMenu },
    name:'NoteTree',
  data(){
    return{
      clickNodeIndex:-1,
      menuNodeIndex:-1,
      Tree,
      defaultProps:{children: 'children',label: 'name'}
    }
  },
  computed: {
    ...mapState(["menuState"]),
  },
  methods:{
    ...mapMutations([
      'setMenuState' 
    ]),
   click(){
    this.$store.commit('setMenuState',-1)
   },
    menu(event){
      this.$store.commit('setMenuState',0)
      let menu = document.querySelector('.userMenu')
      console.log(menu)
      console.log(this.$store.state.currentMenu)
      menu.style.left = event.clientX + 'px'
      menu.style.top = event.clientY + 'px'
    },
  handleDragStart(node,event){
    console.log(node)
  }
}
}
  </script>
  <style scoped lang="scss">
.box{
  // z-index: -1;
  .tree{
    :deep(.el-tree-node__content){
      box-sizing: border-box;
      display: flex;
      overflow: auto;
      margin-bottom: 5px;
      svg{
        height: 15px;
      }
    }
    .node{
      // border: 1px solid red;
      white-space: nowrap;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .menu-icon{
        font-size: 20px;
        margin-right: 10px;
        transition: 0.8s;
        opacity: 0;
      }
    }
  }
}
::v-deep .el-tree-node__content:hover{
  background-color: rgba(228, 215, 215, 0.849) !important;
  .node .menu-icon{
    opacity: 1;
  }
}
::v-deep .el-tree-node:focus > .el-tree-node__content {
  background-color: rgba(228, 215, 215, 0.849) !important;
    color: #409eff; //节点的字体颜色
    svg{
        transform: rotate(90deg);
        transition: 1.5s;
    }
    // font-weight: bold;
    .menu-icon{opacity: 1;}
  }
</style>
  