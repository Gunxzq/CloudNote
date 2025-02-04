const notelist={
    father:"dsaddsd",   //id号
    name:"文件夹",
    id:"001",
    children:[
        {
            id:"3333",
            Type:"share",
            name:"1大苏打倒萨",
            content:"啊啊啊ddd1dddd1dddd1ddd1dddd啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaa",
            date:"1223444444444444434",
        },
        {
            id:"1111",
            Type:"share",
            name:"1",
            content:"1",
            date:"1",
        },
        {
            id:"4444",
            Type:"share",
            name:"1",
            content:"1dasd",
            date:"1",
        },
        {
            id:"2222",
            Type:"share",
            name:"1dsad",
            content:"1asdasd",
            date:"1",
        }
    ]
}
const file={
    name:"当前文件",
    data:"dasd",
    content:""
}
// 唯一文件夹树
const Tree=[
    {
        id:"",
        name:"我的资源"
    }
  ]
export {notelist,Tree}


//editor请求具体note，伴随点击改变
//notelist请求一个列表，以一个文件夹组织
//noteTree请求一个嵌套数组树
{
    data:[
        {
            "id":"",
            "name":"文件夹名字",
            // 文件夹，笔记，其他文件
            "children":[
                {
                    "id":"",
                    "name":"",
                    // 0代表笔记，
                    "type":0,
                    "size":"",
                    // 文件内容的一小部分，几十个字符
                    "body":"",
                    "creteTime":"",
                    "updateTime":""
                }
            ]
        }
    ]
}

{
    data:[
        {
            "id":"",
            "name":"",
            // 文件的完整内容
            "body":"",
            "size":"",
            "creteTime":"",
            "updateTime":""
        }
    ]
}

{
    data:[
        {
            "id":"",
            "name":"我的文件夹",
            "children":[
                {
                    "id":"",
                    "name":"我的资源",
                    "children":[]
                }
            ]
        }
    ]
}