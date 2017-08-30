<template>
<div id="app" class="app">
  <a :href="githubLink" class="github-corner" aria-label="View source on Github">
    <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
  </a>
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
