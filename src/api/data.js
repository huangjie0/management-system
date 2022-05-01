import axios from "./axios";
// 暴露接口
export const getMenu=(param)=>{
    return axios.request({
        url:'/permission/getMenu',
        methods: "post",
        data:param
    });
}