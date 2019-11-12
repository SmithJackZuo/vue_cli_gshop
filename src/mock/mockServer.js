/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/api/ares-mobile-gateway/safe/finProductInfoQry.do', data.moneyManage)
Mock.mock('/api/ares-mobile-gateway/lsDeposit/depositProdInfo.do', data.deposit)

/*
//备注 解开main中的引入
http: //localhost:8080/?id=254#/moneyManage   //理财接口加id 理财产品编号
http: //localhost:8080/?id=301&type=1#/depositShare  //存款接口加id和类型 id:产品编号 类型:0 : 1  大额存单和乐惠存
 */