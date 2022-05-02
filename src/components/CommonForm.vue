<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
      <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
          
      </el-form-item>
  </el-form>
</template>

<script>
export default {
    name:'CommonForm',
    props:{
        formLabel:Array,
        form:Object,
        inline:Boolean
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>