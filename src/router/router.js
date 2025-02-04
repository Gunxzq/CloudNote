
import { createWebHashHistory,createRouter } from "vue-router"

import editor from "../components/RightBox/detail/wangeEditor/wangeEditor.vue"
import List from "../components/RightBox/NoteList/NoteList.vue"
import FileDefault from "../components/RightBox/detail/FileDefault.vue"
import test from '../components/test.vue'
const routes=[
    {path:'/',
        component:test,
    },
    {path:'/file/:files',component:List,
        children:[
            {path:'note/:note',component:editor},
            {path:'default/:file',component:FileDefault}
        ]
    },
    // {path:'/hello',component:EditorMenu}
]


const router =createRouter({
    history:createWebHashHistory(),
    routes
})

export default router