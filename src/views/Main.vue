<template>
  <el-container style="height:100%">
    <el-aside width="auto">
        <commonAside/>
    </el-aside>
    <el-container>
      <el-header>
          <CommonHeader/>
      </el-header>
      <CommonTag/>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import commonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
    components:{
        commonAside,
        CommonHeader,
       CommonTag
    },
    name: "Main",
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