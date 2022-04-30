<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top 20px;">
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
        </el-col>
        <el-card style="margin-top:20px;height:460px;">
            <el-table>

            </el-table>
        </el-card>
    </el-row>
</template>

<script>
export default {
    name:'Home',
    data() {
        return {
            userImg:require('../../assets/images/user.png'),
            tableData: [
            {
                name: 'oppo',
                todayBuy: 500,
                monthBuy: 3500,
                totalBuy: 22000
            },
            {
                name: 'vivo',
                todayBuy: 300,
                monthBuy: 2200,
                totalBuy: 24000
            },
            {
                name: '苹果',
                todayBuy: 800,
                monthBuy: 4500,
                totalBuy: 65000
            },
            {
                name: '小米',
                todayBuy: 1200,
                monthBuy: 6500,
                totalBuy: 45000
            },
            {
                name: '三星',
                todayBuy: 300,
                monthBuy: 2000,
                totalBuy: 34000
            },
            {
                name: '魅族',
                todayBuy: 350,
                monthBuy: 3000,
                totalBuy: 22000
            }
            ]
        }
    },

}
</script>

<style>

</style>