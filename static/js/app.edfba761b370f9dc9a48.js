webpackJsonp([0],[,function(t,a,e){function s(t){e(6)}var n=e(0)(e(4),e(9),s,null,null);t.exports=n.exports},,function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=e(2),v=s(n),i=e(1),_=s(i);v.default.config.productionTip=!1,new v.default({el:"#app",render:function t(a){return a(_.default)}})},function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var n=e(8),v=s(n);a.default={components:{VueMark:v.default},data:function t(){return{githubLink:"https://github.com/excaliburhan/vue-mark",val1:3,val2:108,code1:'<vue-mark :value="12">\n  <button>评论</button>\n</vue-mark>\n\n<vue-mark v-model="val1">\n  <button>回复</button>\n</vue-mark>\n',code2:'<vue-mark :value="12" :max="10">\n  <button>评论</button>\n</vue-mark>\n\n<vue-mark v-model="val2" :max="99">\n  <button>回复</button>\n</vue-mark>\n',code3:"<vue-mark :value=\"'new'\">\n  <button>评论</button>\n</vue-mark>\n\n<vue-mark :value=\"'hot'\">\n  <button>回复</button>\n</vue-mark>",code4:'<vue-mark :value="12" :is-dot="true">\n  <button>评论</button>\n</vue-mark>\n\n<vue-mark :value="108">\n  <i></i>\n</vue-mark>'}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"vue-mark",props:{value:"",max:Number,isDot:Boolean,hidden:Boolean},computed:{content:function t(){if(!this.isDot){var a=this.value,e=this.max;return"number"==typeof a&&"number"==typeof e&&e<a?e+"+":a}}}}},function(t,a){},function(t,a){},function(t,a,e){function s(t){e(7)}var n=e(0)(e(5),e(10),s,"data-v-ca9bd748",null);t.exports=n.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("a",{staticClass:"github-corner",attrs:{href:t.githubLink,"aria-label":"View source on Github"}},[e("svg",{staticStyle:{fill:"#70B7FD",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),t._v(" "),e("h1",[t._v("Vue Mark")]),t._v(" "),e("div",{staticClass:"app-wrap"},[e("div",{staticClass:"app-item"},[e("h2",[t._v("基础用法")]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{value:12}},[e("span",{staticClass:"app-item__btn"},[t._v("评论")])]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",model:{value:t.val1,callback:function(a){t.val1=a},expression:"val1"}},[e("span",{staticClass:"app-item__btn"},[t._v("回复")])]),t._v(" "),e("pre",{staticClass:"app-item__code"},[e("code",{staticClass:"html"},[t._v(t._s(t.code1))])])],1),t._v(" "),e("div",{staticClass:"app-item"},[e("h2",[t._v("最大值")]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{value:12,max:10}},[e("span",{staticClass:"app-item__btn"},[t._v("评论")])]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{max:99},model:{value:t.val2,callback:function(a){t.val2=a},expression:"val2"}},[e("span",{staticClass:"app-item__btn"},[t._v("回复")])]),t._v(" "),e("pre",{staticClass:"app-item__code"},[e("code",{staticClass:"html"},[t._v(t._s(t.code2))])])],1),t._v(" "),e("div",{staticClass:"app-item"},[e("h2",[t._v("自定义文本")]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{value:"new"}},[e("span",{staticClass:"app-item__btn"},[t._v("评论")])]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{value:"hot"}},[e("span",{staticClass:"app-item__btn"},[t._v("回复")])]),t._v(" "),e("pre",{staticClass:"app-item__code"},[e("code",{staticClass:"html"},[t._v(t._s(t.code3))])])],1),t._v(" "),e("div",{staticClass:"app-item"},[e("h2",[t._v("小红点")]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{value:"12","is-dot":!0}},[e("span",{staticClass:"app-item__btn"},[t._v("评论")])]),t._v(" "),e("vue-mark",{staticClass:"app-item__eg1",attrs:{value:"12","is-dot":!0}},[e("span",{staticClass:"app-item__btn"},[t._v("☛")])]),t._v(" "),e("pre",{staticClass:"app-item__code"},[e("code",{staticClass:"html"},[t._v(t._s(t.code4))])])],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-item"},[e("h2",[t._v("参数")]),t._v(" "),e("table",{attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("显示值")]),t._v(" "),e("td",[t._v("string, number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("max")]),t._v(" "),e("td",[t._v("最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("is-dot")]),t._v(" "),e("td",[t._v("小圆点")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("hidden")]),t._v(" "),e("td",[t._v("隐藏标识")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("false")])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vue-mark"},[t._t("default"),t._v(" "),e("sup",{directives:[{name:"show",rawName:"v-show",value:!t.hidden&&(t.content||t.isDot),expression:"!hidden && (content || isDot)"}],staticClass:"vue-mark__content",class:{"is-dot":t.isDot}},[t._v(t._s(t.content))])],2)},staticRenderFns:[]}}],[3]);
//# sourceMappingURL=app.edfba761b370f9dc9a48.js.map