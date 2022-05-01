import Mock from 'mockjs'
import homeApi from './mockServeData/homeApi'
Mock.mock('/home/getData',homeApi.getStatisticalData());