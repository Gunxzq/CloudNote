<template>
    <div>
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :mode="mode"/>
        <div class="editor">
            <div class="directory">
                <font-icon Type="share" class="icon" Size="25" v-show="false"></font-icon>
                <div class="content">
                    <div class="title">
                        <span>目录</span>
                        <font-icon Type="share" @click="directory"></font-icon>
                    </div>
                    <details v-for="(item, index) in tableOfContents" :key="item.id" >
                        <summary>{{ item.text }}</summary>
                        <span v-for="(subitm) in item.children" :key="subitm.id" :style="{ paddingLeft: item.level * 10 + 'px' }" >{{ subitm.text }}
                            <br>
                        </span>
                    </details>
                </div>
            </div>
            <Editor class="content-editor" style="height: auto;" v-model="obj.editorContent" :mode="mode" @onCreated="onCreated" @click.right.stop.prevent="menu"/>    
            <editor-menu Type="4" class="editormenu" id="rightMenu" :paramer="obj">{{ html() }}</editor-menu>      
        </div>
        
    </div>
</template>
<script>
import { Editor, Toolbar} from '@wangeditor/editor-for-vue'
import {toolbarConfig,editorConfig} from '../../../../config/config'
import EditorMenu from '../../../EditorMenu/EditorMenu.vue'
import FontIcon from '../../../FontIcon/FontIcon.vue'
export default{
    components: { Editor, Toolbar,EditorMenu, FontIcon},
    props:{
        content:{
            type:String
        }
    },
    data() {
        return {
            obj:{
                editorContent:this.content,
            },
            editor: null,
            toolbarConfig,
            editorConfig,
            mode: 'default', // or 'simple',
            tableOfContents:[],
            activeIndex:0
        }
    },
    watch:{
        // 监听obj对象
        obj:{
            handler(){
            this.obj.editorContent
            console.log(this.editor.children)
            },
            deep:true
        }
    },
    methods: {
        directory(){
            this.tableOfContents=this.generateTableOfContents()
            // this.addAchorLinks();
        },
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
            console.log(this.editor.children[0])
        },
        menu(event){
            this.$store.commit('setMenuState',4)
            let menu = document.querySelector('.editormenu')
            menu.style.left = event.clientX + 'px'
            menu.style.top = event.clientY + 'px'
        },
        // 添加锚点
        addAchorLinks(){
            const headings=document.querySelectorAll(".content-editor h1, .content-editor h2, .content-editor h3, .content-editor h4")
            headings.forEach((heading,index)=>{
                const anchorLink = document.createElement("a");
                anchorLink.setAttribute("href", `#file/001/note/1111/section-${index + 1}`);
                anchorLink.textContent = heading.textContent; 
                // 设置锚点文本为标题文本
                anchorLink.style.pointerEvents = "none"; // 设置 pointer-events 为 none，使链接不可点击

                // 设置标题的id属性
                heading.setAttribute("id", `section-${index + 1}`);
                // 将锚点链接插入到标题内
                heading.innerHTML = anchorLink.outerHTML + heading.innerHTML;
            })
        },
        handleItemClick(index){
            this.activeIndex= index;

            // 获取目标目录项的锚点链接 href 属性值
            const targetItem = document.querySelector(`.table-of-contents a[href="#section-${index + 1}"]`);

            // 滚动目录以确保当前点击的目录项可见
            if (targetItem) {
                const container = document.querySelector(".table-of-contents");
                const containerRect = container.getBoundingClientRect();
                const scrollTop = targetItem.offsetTop - containerRect.height / 2;
                container.scrollTop = scrollTop;
            }
        },
        generateTableOfContents(){
            const headings = document.querySelectorAll(".editor h1, .editor h2, .editor h3, .editor h4, .editor h5");
            const toc = [];
            let h1_index=-1;
            headings.forEach((heading, index) => {
                const id = `section-${index + 1}`;
                const level = heading.tagName === "H1" ? 1 : heading.tagName === "H2" ? 2 : 3; // 根据标题等级设置目录项的缩进
                heading.setAttribute("id", id); // 设置标题的id属性
                if(level==1){
                    toc.push({id: id, text: heading.textContent, level: level, index: index,children:[]});    
                    h1_index++
                } 
                else if(h1_index<0){
                    // 起始是非h1标题
                    toc.push({id: id, text: heading.textContent, level: level, index: index})
                }
                else{
                    // 非h1标题加入H1的子代
                    toc[h1_index].children.push({id: id, text: heading.textContent, level: level, index: index})
                }
            });
            console.log(toc)
            return toc;
        },
        handleScroll(){
            requestAnimationFrame(() => {
                const sections = document.querySelectorAll(".editor h1, .editor h2, .editor h3");
                const scrollY = window.scrollY || window.pageYOffset;
                let currentIndex = 0;
                for (let i = 0; i < sections.length; i++) {
                    const sectionTop = (sections[i]).offsetTop;
                    if (scrollY >= sectionTop) {
                        currentIndex = i;
                    }
                }
                // 检查当前视图中是否有标题元素，如果有，将其索引赋给 currentIndex
                const visibleSections = Array.from(sections).filter((section) => {
                    const sectionTop = (section).offsetTop;
                    const sectionBottom = sectionTop + (section).offsetHeight;
                    return scrollY >= sectionTop && scrollY <= sectionBottom;
                });
                if (visibleSections.length > 0) {
                    currentIndex = Array.from(sections).indexOf(visibleSections[visibleSections.length - 1]);
                }
                this.activeIndex = currentIndex;

                // 滚动目录以确保当前高亮的目录项可见
                const activeItem = document.querySelector(".table-of-contents .active");
                if (activeItem) {
                    const container = document.querySelector(".table-of-contents");
                    const containerRect = container.getBoundingClientRect();
                    const activeRect = activeItem.getBoundingClientRect();
                    const scrollTop = activeItem.offsetTop - containerRect.height / 2 + activeRect.height / 2;
                    container.scrollTop = scrollTop;
                }
            })
        },  
    },
    mounted() {
       
        window.addEventListener("scroll", this.handleScroll());
        // 模拟 ajax 请求，异步渲染编辑器
        // setTimeout(() => {
        //     this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
        // }, 1500)
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css" lang="scss">
</style>
<style lang="scss" scoped>
.editor{
    flex: 1;
    display: flex;
    // border: 1px solid blue;
    height: 100%;
    .directory{
        border: 1px solid red;
        // min-width: 30px;
        position: relative;
        .icon{
            position: absolute;
            z-index: 1;
            top: 3%;
        }
        .content{
            width: 200px;
            flex-direction: column;
            align-items: flex-start;
            display: flex;
            .title{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 10px 0 10px;
            }
        }
    }
    .content-editor{
        flex: 1;
        width: 100%;
        :deep(.w-e-text-container){
        // border: 10px solid blue;
    }
    }
}
</style>