import { createApp } from 'vue'
import store from './store/store.js';
import router from './router/router.js'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// 全局组件
import FontIcon from './components/FontIcon/FontIcon.vue';
import EditorMenu from './components/EditorMenu/EditorMenu.vue';
// 全局样式
import './assets/iconfont/iconfont.css'
import './main.css'
import './config/CSS.js'

import App from './App.vue'

import { Mock } from 'mockjs';
import './mock/index.js'

const app=createApp(App);

app.use(router).use(store).use(ElementPlus);
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

app.component('font-icon',FontIcon);
app.component('editor-menu',EditorMenu)

app.mount('#app')

