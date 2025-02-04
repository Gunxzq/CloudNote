const toolbarConfig={

    toolbarKeys:[
        'redo', //重做
        'undo', //撤销
        'clearStyle', //清除格式
        '|',
        {
            key:"group-insert",
            title:"插入",
            menuKeys:[
                'insertImage',      //插入图片
                'insertTable', //插入表格
                'emotion', //表情
                'insertLink',// 插入链接
                'codeBlock', //代码块
                'blockquote', //引用
            ]
        },
        '|',
        'headerSelect', //正文
        'fontFamily',//字体
        'fontSize', //字号
        'bold',     //加粗
        'italic',   //斜体
        'underline',//下划线
        'through',  //删除线
        'color',    //颜色
        'bulletedList',//无序列表 
        'numberedList', //有序列表
        {
            key:"group-justify",
            title:"对齐",
            menuKeys:[
               'justifyLeft',  //左对齐
               'justifyCenter',    //居中对齐
                'justifyRight', //右对齐
            'justifyJustify',   //两端对齐
            ]
        },
        {
            key:"group-indent",
            title:"缩进",
            menuKeys:[
                'indent',  //增加缩进
                'delIndent',    //减少缩进
            ]
        },


        // 'bgColor',  //背景色
        // 'code',     //行内代码
        // 'codeSelectLang',//选择语言
        // 'sub',      //下标
        // 'sup',      //上标

       
        // 'lineHeight',       //行高
        // 'deleteImage',      //删除图片
        // 'editImage',    //编辑图片
        // 'viewImageLink',    //查看图片
        // 'imageWidth30',     //比例缩放
        // 'imageWidth50', 
        // 'imageWidth100', 
        // 'divider', //分割线
        // 'editLink', //修改链接
        // 'unLink',//取消链接
        // 'viewLink',// 查看链接
        // 'header1', //标题
        // 'header2', //
        // 'header3', //
        // 'header4', //
        // 'header5',//
        'todo', //待办
        // 'fullScreen',// 全屏 
        // 'enter', //回车

        // 'deleteTable',//删除表格
        // 'insertTableRow',// 插入行
        // 'deleteTableRow', //删除行
        // 'insertTableCol', //插入列
        // 'deleteTableCol', //删除列
        // 'tableHeader', //标头
        // 'tableFullWidth',//宽度自适应
        // 'insertVideo', //插入视频
        // 'uploadVideo', //上传视频
        // 'editVideoSize', //修改尺寸
        // 'uploadImage', //上传图片
        
    ]
}
const editorConfig={
    placeholder:'请输入内容',
    // autoFocus:true,
    // scroll:true，
    MENU_CONF:{
        // codeSelectLang
    }
}
// user功能
const UserTabconfig=[
    {
        name:"最新",
        type:"share"
    },
    {
        name:"我的文件夹",
        type:"share"
    },
    {
        name:"与我分享",
        type:"share"
    },
    {
        name:"加星",
        type:"share"
    },
    {
        name:"回收站",
        type:"share"
    },
    {
        name:"云协作",
        type:"share"
    }
]

// const MenuDefaultProps={children: 'children',label: 'label',function:"function",hrState:'hrState',isLeaf:"isLeaf"}

export {
    toolbarConfig,
    editorConfig,
    UserTabconfig,
    // MenuDefaultProps,
}