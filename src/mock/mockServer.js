import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/homepage',{code: 0, data: data.homepage})
Mock.mock('/categorys',{code: 0, data: data.categorys})
Mock.mock('/brand',{code: 0, data: data.brand})
Mock.mock('/allbrands',{code: 0, data: data.allbrands})
