import {
    stickup
}from '../utils'



const User=[
    {
        label:"新建",
        function:"",
        Icon:"triangle-right",
        children:[
            {
                label:"空白文档",
                function:"",
            },
            {
                label:"从模板中创建",
                function:"",
            },
            {
                label:"协同表格",
                function:"",
            },
            {
                label:"Markdwon",
                function:"",
            },
            {
                label:"脑图",
                function:"",
            },
            {
                label:"流程图",
                function:"",
            },
            {
                label:"白板",
                function:"",
            },
            {
                label:"Word转笔记",
                function:"",
            },
            {
                label:"文件夹",
                function:"",
            },
            {
                label:"上传文件",
                function:"",
            }
        ]  
    },
    {
        label:"删除",
        function:"",
       
    },
    {
        label:"重命名",
        function:"",
       
    },
    {
        label:"移动到",
        function:"",
        
    },
    {
        label:"复制",
        function:"",
        
    },
    {
        label:"更多",
        function:"",
        Icon:"triangle-right",
        children:[
            {
                label:"分享",
                function:"",
               
            },
            {
                label:"加星",
                function:"",
               
            },
            {
                label:"阅读密码",
                function:"",
                
            },
        ]  
    }
]

const Search=[

]

const SearchRight=[
    {
        label:"列表展示",
        function:'',
        Icon:"triangle-right",
        children:[
            {
                label:"摘要",
               function:''
           },
           {
            label:"列表",
           function:''
       }
        ]
    },
    {
         label:"排序方式",
        function:'',
        Icon:"triangle-right",
        children:[
            {
                label:"创建时间",
               function:''
           },
           {
            label:"修改时间",
           function:''
            },
            {
                label:"文件名称",
               function:''
           },
           {
            label:"文件大小",
           function:''
       }]
    }
]

const Note=User

const Editortab=[
    {
        label:"设定为自定义模板",
       function:''
   },
   {
    label:"标签",
   function:''
    },
    {
        label:"转为在线笔记",
    function:''
    },
    {
        label:"历史版本",
    function:''
    },
    {
        label:"阅读密码",
    function:''
    },
    {
        label:"移动到",
    function:''
    },
    {
        label:"置顶",
    function:''
    },
    {
        label:"加星",
    function:''
    },
    {
        label:"演示模式",
    function:''
    },
    {
        label:"文件信息",
        function:''
    },
    {
        label:"文本校对",
        function:''
    },
    {
        label:"导出为Word",
        function:''
    },
    {
        label:"翻译",
        function:''
    },
    {
        label:"打印",
        function:''
    },
    {
        label:"删除",
        function:''
    },
]

const EditorInner=[
    {
        label:"黏贴",
        function:stickup
    },
    {
        label:"纯文本黏贴",
        function:''
    },
    {
        label:"全选",
        function:''
    },
    {
        label:"插入当前时间",
        function:''
    },
    {
        label:"字数统计",
        function:''
    },
]

export  {
    User,
    Search,
    SearchRight,
    Note,
    Editortab,
    EditorInner
}