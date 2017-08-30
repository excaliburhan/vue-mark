/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 04:06:39
 * @modify date 2017-08-24 04:06:39
 * @desc [入口文件]
*/

import VueMark from './vue-mark.vue'

const install = (Vue) => {
  Vue.component('vue-mark', VueMark)
}

export default {
  install,
}
export {
  VueMark,
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
