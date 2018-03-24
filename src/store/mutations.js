
  import {
    RECEIVE_CATEGORYS,
    RECEIVE_ALLBRANDS,
    RECEIVE_BRAND,
    RECEIVE_HOMEPAGE,
  } from "./mutation-types";


  export default {
    [RECEIVE_CATEGORYS](state,{categorys}){
      state.categorys = categorys
    },
    [RECEIVE_ALLBRANDS](state,{allbrands}){
      state.allbrands = allbrands
    },
    [RECEIVE_BRAND](state,{brand}){
      state.brand = brand
    },
    [RECEIVE_HOMEPAGE](state,{homepage}){
      state.homepage = homepage
    },
  }
