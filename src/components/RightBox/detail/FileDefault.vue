<template>
    <div class="editor">
        <div class="title-container">
            <el-input class="inputstyle" v-model="title" placeholder="新建文件夹" :maxlength="79">
                <template v-slot:prefix>{{ title }}</template>
            </el-input>
           <div class="title-right">
                <font-icon Type="share" Text="分享"></font-icon>
                <font-icon Type="shenglvehao" Text="更多"></font-icon>
           </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            title:"",
        }
    },
}
</script>
<style lang="scss" scoped>
.editor{
    margin: 10px 10px;
    min-height:100vh;
    max-width:100vw;
    // background: white;
    border-radius: 15px;
    .title-container{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .inputstyle{
                max-width:70%;
                margin: 10px;
            }
            :deep(.el-input__inner){
                border: none;
                width: 100%;
                font-size: 25px;
            }
            :deep(.el-input__prefix){
                display: block;
                font-size: 20px;
                height: 0px;
                position: relative;
                visibility: hidden;
            }
            .title-right {
                display: flex;
                justify-content: center;
                align-items: center;
                // margin-right:20px ;
            }
        }
    }
</style>