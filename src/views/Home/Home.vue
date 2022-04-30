<template>
    <el-row class="home" gutter="20">
        <el-row :span="8" style="margin-top 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg">
                    <div class="userInfo">
                        <p class="name">Huangjie</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录的时间：<span>2021.7.19</span></p>
                    <p>上次登录的地点：<span>南京</span></p>
                </div>
            </el-card>
        </el-row>
    </el-row>
  
</template>

<script>
export default {
    name:'Home',
    data() {
        return {
            userImg:require('../../assets/images/user.png')
        }
    },

}
</script>

<style>

</style>