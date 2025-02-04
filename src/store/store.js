import { createStore } from "vuex"
const store=createStore({
    state:{
        // 边栏的状态
        // 用户边栏和列表边栏
        tabState:0B11,
        // 有五种菜单
        currentMenu:-1,
        // 当前文件夹
        currentfile:{
            name:"文件夹"
        },
     
            searchRecord:["历史记录1","记录2","历史记录2","历史记录2","历史记录2"]
        
    },
    mutations:{
        setMenuState(state,newState){
            state.currentMenu=newState
        }
    }
})
export default store