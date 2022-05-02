<template>
    <div class="manage">
        <el-dialog :title="operateType==='add'?'新增用户':'更新用户'" :visible.sync='isShow'> 
            <CommonForm :formLabel="operateFormLabel" 
            :form="operateForm" :inline="true"
            ref="form"
            />
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow=false">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary">新增</el-button>
        </div>
    </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
export default {
    name:'User',
    components:{
       CommonForm
    },
    methods:{
        confirm(){

        }
    },
    data() {
        return {
            operateType:'add',
            isShow:false,
            operateFormLabel:[
                    {
                        model: 'name',
                        label: '姓名',
                        type: 'input'
                    },
                    {
                        model: 'age',
                        label: '年龄',
                        type: 'input'
                    },
                    {
                        model: 'sex',
                        label: '性别',
                        type: 'select',
                        opts: [
                            {
                                label: '男',
                                value: 1
                            },
                            {
                                label: '女',
                                value: 0
                            }
                        ]
                    },
                    {
                        model: 'birth',
                        label: '出生日期',
                        type: 'date'
                    },
                    {
                        model: 'addr',
                        label: '地址',
                        type: 'input'
                    }
            ],
            operateForm:{
                name:'',
                addr:'',
                age:'',
                birth:'',
                sex:'',
            }
        }
    },

}
</script>

<style>

</style>