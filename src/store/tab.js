export default {
    state:{
        isCollapse:false,
        tabList:[{
            path:'/',
            name:'home',
            label:'首页',
            icon:'home'
        }],
        currentMenu:null
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== "home"){
                state.currentMenu = val
                const result = state.tabList.findIndex(item=>item.name===val.name)
                if(result===-1){
                    state.tabList.push(val)
                }else{
                   state.currentMenu=null
                }
            }
        }
    }
}




































