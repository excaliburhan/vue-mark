# vue-mark
一个vue角标组件，和element-ui的badge一样的功能

## 安装

> npm install vue-mark --save

## 使用

### 全局组件

```
import VueMark from 'vue-pop-colorpicker'
Vue.use(VueMark)
```

### 局部组件

```
import { VueMark } from 'vue-pop-colorpicker'

new Vue({
  components: {
    'vue-mark': VueMark
  },
  data () {
    return {
      number: 12,
    }
  }
})

<vue-mark :value="number">
  <button>评论</button>
</vue-mark>
```
