<template>
  <div class="menu">
    <!-- 常规菜单 -->
    <div class="container" v-if="$store.state.currentMenu==Type&&Type!=5">
      <div v-for="menu_item in MenuConfig[MenuType[Type]]" class="item" :key="menu_item.label">
        
        <div class="content" id="flex" @click="menu_item.function(paramer)">
          <span class="label">{{ menu_item.label }}</span>
          <font-icon :Type="menu_item.Icon" Size="12"></font-icon>
        </div>
        <div class="subitem container" v-if="menu_item.children" id="contentFit" >
          <div class="item content" v-for="subitem in menu_item.children" :key="subitem.label" @click="subitem.function(paramer)">
            <span class="label">{{ subitem.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索栏菜单 -->
    <div class="container" v-if="$store.state.currentMenu==Type&&Type==5">
      <div class="item-content" id="flex" style="justify-content: space-between;">
        <span class="title">最近搜索:</span>
        <font-icon Type="share" Text="分享" Size="25"></font-icon>
      </div>
      <!-- 历史记录 -->
      <div class="item-content">
        <span class="history-item" v-for="(item,index) in $store.state.searchRecord" :key="index">{{item}}</span>
      </div>
      <!-- 搜索范围 -->
      <div class="item-content">
        <span class="title">搜索范围:</span>
        <el-radio-group v-model="range">
          <el-radio  :value=0>{{$store.state.currentfile.name}}</el-radio>
          <el-radio  :value=1>全部笔记</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
import {MenuType,MenuConfig} from '../../config/MenuConfig/Menu'
import { mapState } from 'vuex/dist/vuex.cjs.js';
export default {
  props:{
    Type:{
      type:String
    },
    paramer:{
      type:Object
    }
  },
    data(){
        return{
            MenuConfig,
            MenuType,
            range:""
        }
    },
    computed:{
      ...mapState(["currentMenu","searchRecord"]),
    },
    methods:{
        
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
#flex-row{
  display: flex;
  align-items: center;

}
.menu{
  z-index: 1;
}
.container{
  background-color:var(--bg-color);
  border-radius: 5px;
  border:var(--border);
  box-shadow: 1px 1px var(--border-color);
  .item-content{
    margin: var(--margin);
    // padding: var(--padding);
    .title{
      display: block;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .history-item{
    font-size: 15px;
    display: inline-block;
    border-radius:50px ;
    background-color: var(--hover-bg-color);
    white-space: nowrap;
    padding: var(--padding);
    margin-top: 5px;
    margin-right: 10px;
  }
  .item{
      position: relative;
      width: 100%;
        .subitem{
          min-width:max-content;
          visibility: hidden;
          top: 0%;
          position: absolute;
          left: 100%;
        }
    }
}
.content {
  margin: var(--margin);
  padding: var(--padding);
  width: max-content;
  .label{
    padding-right: 10px;
    font-size: 15px;
    color: var(--font-color);
  }
}
.item:hover{
    background-color: rgba(228, 215, 215, 1);
  }
.item:hover .subitem{
  visibility: visible;
}
</style>
