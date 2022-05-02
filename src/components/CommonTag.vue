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
        changeMenu(){

        },
        handleClose(){

        }
    }
}
</script>

<style>

</style>