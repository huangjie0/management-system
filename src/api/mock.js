import Mock from 'mockjs'
import homeApi from './mockServeData/homeApi'
import userApi from './mockServeData/user'
Mock.mock('/home/getData',homeApi.getStatisticalData());
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/add/,'post',userApi.updateUser)