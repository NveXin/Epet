/*
与后台交互模块
 */
import ajax from './ajax'

export const reqHomepage = () => ajax('/homepage')
export const reqCategorys = () => ajax('/categorys')
export const reqBrand = () => ajax('/brand')
export const reqAllbrands = () => ajax('/allbrands')
