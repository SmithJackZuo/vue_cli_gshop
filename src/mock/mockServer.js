/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/api/index_category', { code: 0, data: data.shopList })