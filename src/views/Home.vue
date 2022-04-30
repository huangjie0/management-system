<template>
  <el-container style="height:100%">
    <el-aside width="auto">
        <commonAside/>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import commonAside from '../components/CommonAside.vue'
export default {
    components:{
        commonAside
    },
    name: "Home",
    data() {
        return {

        };
    },
};
</script>

<style lang='less' scoped>
    .el-header{
        background-color: #333;
    }
    .el-main{
        padding-top: 0;

    }
    
</style>