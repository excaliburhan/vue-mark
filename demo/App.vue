<template>
<div id="app" class="app">
  <a class="github-fork-ribbon" :href="githubLink" title="Fork me on GitHub">Fork me on GitHub</a>
  <h1>Vue Mark</h1>
  <div class="app-wrap">
    <div class="app-item">
      <h2>基础用法</h2>
      <vue-mark class="app-item__eg1" :value="12">
        <span class="app-item__btn">评论</span>
      </vue-mark>
      <vue-mark class="app-item__eg1" v-model="val1">
        <span class="app-item__btn">回复</span>
      </vue-mark>
      <pre class="app-item__code"><code class="html">{{ code1 }}</code></pre>
    </div>
    <div class="app-item">
      <h2>最大值</h2>
      <vue-mark class="app-item__eg1" :value="12" :max="10">
        <span class="app-item__btn">评论</span>
      </vue-mark>
      <vue-mark class="app-item__eg1" v-model="val2" :max="99">
        <span class="app-item__btn">回复</span>
      </vue-mark>
      <pre class="app-item__code"><code class="html">{{ code2 }}</code></pre>
    </div>
    <div class="app-item">
      <h2>自定义文本</h2>
      <vue-mark class="app-item__eg1" :value="'new'">
        <span class="app-item__btn">评论</span>
      </vue-mark>
      <vue-mark class="app-item__eg1" :value="'hot'">
        <span class="app-item__btn">回复</span>
      </vue-mark>
      <pre class="app-item__code"><code class="html">{{ code3 }}</code></pre>
    </div>
    <div class="app-item">
      <h2>小红点</h2>
      <vue-mark class="app-item__eg1" :value="'12'" :is-dot="true">
        <span class="app-item__btn">评论</span>
      </vue-mark>
      <vue-mark class="app-item__eg1" :value="'12'" :is-dot="true">
        <span class="app-item__btn">☛</span>
      </vue-mark>
      <pre class="app-item__code"><code class="html">{{ code4 }}</code></pre>
    </div>
    <div class="app-item">
      <h2>参数</h2>
      <table cellspacing="0">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>显示值</td>
            <td>string, number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>max</td>
            <td>最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>is-dot</td>
            <td>小圆点</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>hidden</td>
            <td>隐藏标识</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import VueMark from '@/vue-mark'

export default {
  components: { VueMark },
  data () {
    return {
      githubLink: 'https://github.com/excaliburhan/vue-mark',
      val1: 3,
      val2: 108,
      code1: `<vue-mark :value="12">
  <button>评论</button>
</vue-mark>

<vue-mark v-model="val1">
  <button>回复</button>
</vue-mark>
`,
      code2: `<vue-mark :value="12" :max="10">
  <button>评论</button>
</vue-mark>

<vue-mark v-model="val2" :max="99">
  <button>回复</button>
</vue-mark>
`,
      code3: `<vue-mark :value="'new'">
  <button>评论</button>
</vue-mark>

<vue-mark :value="'hot'">
  <button>回复</button>
</vue-mark>`,
      code4: `<vue-mark :value="12" :is-dot="true">
  <button>评论</button>
</vue-mark>

<vue-mark :value="108">
  <i></i>
</vue-mark>`,
    }
  }
}
</script>

<style lang="scss">
@import 'base.css';
* {
  margin: 0;
  padding: 0;
}
body {
  color: #fff;
  background-color: #2d3a4b;
}
.app {
  h1 {
    margin: 50px auto 0;
    text-align: center;
    font-size: 50px;
  }
  &-wrap {
    width: 800px;
    margin: 0 auto;
    padding: 50px 200px;
  }
  &-item {
    margin-bottom: 30px;
    &__code {
      margin-top: 30px;
    }
    &__eg1 {
      margin-top: 30px;
      margin-right: 30px;
    }
    &__btn {
      display: inline-block;
      box-sizing: border-box;
      line-height: 1;
      cursor: pointer;
      text-align: center;
      margin: 0;
      padding: 7px 9px;
      font-size: 12px;
      border-radius: 4px;
      color: #fff;
      background-color: #20a0ff;
      border: 1px solid #20a0ff;
    }
  }
  table {
    width: 800px;
    margin-top: 20px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  table th, table td {
    border-collapse: collapse;
    padding: 3px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
  }
}
</style>
