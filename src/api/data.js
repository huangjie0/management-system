import axios from "axios";
// 暴露接口
export const getMenu=(param)=>{
    return axios.request({
        url:'/permission/getMenu',
        method: "post",
        data:param
    });
}
export const getData=()=>{
    return axios.request({
        url:'/home/getData'
    })
}