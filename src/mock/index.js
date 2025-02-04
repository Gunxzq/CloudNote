import Mock from 'mockjs';

const note=Mock.mock(
    'http://localhost:8000/file/note','get',
    {
        code:200,
        data:{
            father:'@id',
            id:'@id',
            title:'@name',
            content:'121',
            date:'@date',
        }
    }
)
export {note}