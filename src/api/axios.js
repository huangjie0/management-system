import axios from "axios";
import config from './config/index'
//判断环境变量
const baseURL = process.env.NODE_ENV==='dev' ? config.baseURL.dev:config.baseURL.pro;
