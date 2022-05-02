<template>
  <div class="tabs">
      <el-tag size="small" v-for="(item,index) in tags" 
      :key="item.name" :closable="item.name!=='home'" 
      :effect="$route.name==item.name?'dark':'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item,index)"
      >
        {{item.label}}
      </el-tag>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name:'CommonTag',
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabList
        })
    },
    methods:{
        changeMenu(item){
            this.$router.push({
                name:item.name,  
            })
        },
        handleClose(){
            
        }
    }
}
</script>

<style lang="less" scoped>
    .tabs{
        padding: 20px;
        .el-tag{
            margin-right: 15px;
            cursor: pointer;
        }
    }

</style>