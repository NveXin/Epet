
import {
  reqCategorys,
  reqAllbrands,
  reqBrand,
  reqHomepage
} from '../api'

import {
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECEIVE_HOMEPAGE,
  RECEIVE_ALLBRANDS
} from './mutation-types.js'


export default {
  async getCategorys({commit}){
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
  async getAllbrands({commit}){
    const result = await reqAllbrands()
    commit(RECEIVE_ALLBRANDS, {allbrands: result.data})
  },
  async getBrand({commit}){
    const result = await reqBrand()
    commit(RECEIVE_BRAND, {brand: result.data})
  },
  async getHomepage({commit},cb){
    const result = await reqHomepage()
    commit(RECEIVE_HOMEPAGE, {homepage: result.data})
    cb&&cb();
  },
}
