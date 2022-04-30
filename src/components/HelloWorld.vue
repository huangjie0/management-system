<template>
  <div>
    <el-button>按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style>
</style>