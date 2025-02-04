<script>
import UserTab from './components/UserTab/UserTab.vue'
import test from './components/test.vue'
import { mapMutations } from 'vuex'
export default{
  components: { UserTab,'test_a':test },
  mounted(){
  },
 methods:{
  ...mapMutations([
      'setMenuState' 
    ]),
  menustate(){
    if(this.$store.state.currentMenu>=0)
    this.$store.commit('setMenuState',-1)
  },
 } 
}
</script>

<template>
  <div class="home" @click.left="menustate">
    <user-tab></user-tab>
    <router-view class="right"></router-view>
  </div>
</template>

<style lang="scss" scoped>
.home{
  height: 100vh;
  width: 100vw;
  display: flex;
  border-radius:10px ;
  .right{
    flex: 1;
  }
}
</style>
