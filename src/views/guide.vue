<!--
 @author: Hobo
 @mail:lllomh@qq.com
 @time:2018
 @tool:phpstorm
-->
<template>
  <div>
      <div class="content guide with-sidebar index-guide">
          <h1>介绍</h1>
          <h2 id="Vue-js-是什么"><a href="#Vue-js-是什么" class="headerlink" title="Vue.js 是什么" data-scroll="">Vue.js 是什么</a></h2>
          <p>Vue (读音 /vjuː/，类似于 <strong>view</strong>) 是一套用于构建用户界面的<strong>渐进式框架</strong>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与<a href="single-file-components.html">现代化的工具链</a>以及各种<a href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank" rel="noopener">支持类库</a>结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
          <p>如果你想在深入学习 Vue 之前对它有更多了解，我们<a id="modal-player" href="#">制作了一个视频</a>，带您了解其核心概念和一个示例工程。</p>
          <p>如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看<a href="comparison.html">对比其它框架</a>。</p>
          <h2 id="起步"><a href="#起步" class="headerlink" title="起步" data-scroll="">起步</a></h2>
          <p class="tip">官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。</p>
          <p>尝试 Vue.js 最简单的方法是使用 <a href="https://jsfiddle.net/chrisvfritz/50wL7mdz/" target="_blank" rel="noopener">JSFiddle 上的 Hello World 例子</a>。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。或者你也可以<a href="https://gist.githubusercontent.com/chrisvfritz/7f8d7d63000b48493c336e48b3db3e52/raw/ed60c4e5d5c6fec48b0921edaed0cb60be30e87c/index.html" target="_blank" download="index.html">创建一个 <code>.html</code> 文件</a><a>，然后通过如下方式引入 Vue：</a></p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="comment">&lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;</span></span><br /><span class="line"><span class="tag">&lt;<span class="name">script</span> <span class="attr">src</span>=<span class="string">&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span>&gt;</span><span class="undefined"></span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <p>或者：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="comment">&lt;!-- 生产环境版本，优化了尺寸和速度 --&gt;</span></span><br /><span class="line"><span class="tag">&lt;<span class="name">script</span> <span class="attr">src</span>=<span class="string">&quot;https://cdn.jsdelivr.net/npm/vue&quot;</span>&gt;</span><span class="undefined"></span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <p><a href="/guide/installation.html">安装教程</a>给出了更多安装 Vue 的方式。请注意我们<strong>不推荐</strong>新手直接使用 <code>vue-cli</code>，尤其是在你还不熟悉基于 Node.js 的构建工具时。</p>
          <p>如果你喜欢交互式的东西，你也可以查阅<a href="https://scrimba.com/playlist/pXKqta" target="_blank" rel="noopener">这个 Scrimba 上的系列教程</a>，它揉合了录屏和代码试验田，并允许你随时暂停和播放。</p>
          <h2 id="声明式渲染"><a href="#声明式渲染" class="headerlink" title="声明式渲染" data-scroll="">声明式渲染</a></h2>
          <div class="scrimba">
              <a href="https://scrimba.com/p/pXKqta/cQ3QVcr" target="_blank">在 Scrimba 上尝试这节课</a>
          </div>
          <p>Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app&quot;</span>&gt;</span></span><br /><span class="line" v-html="'{{ message }}'"></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="keyword">var</span> app = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    message: <span class="string">'Hello Vue!'</span></span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app" class="demo">
              Hello Vue!
          </div>
          <p>我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是<strong>响应式的</strong>。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 <code>app.message</code> 的值，你将看到上例相应地更新。</p>
          <p>除了文本插值，我们还可以像这样来绑定元素特性：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app-2&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">span</span> <span class="attr">v-bind:title</span>=<span class="string">&quot;message&quot;</span>&gt;</span></span><br /><span class="line">    鼠标悬停几秒钟查看此处动态绑定的提示信息！</span><br /><span class="line">  <span class="tag">&lt;/<span class="name">span</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="keyword">var</span> app2 = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app-2'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    message: <span class="string">'页面加载于 '</span> + <span class="keyword">new</span> <span class="built_in">Date</span>().toLocaleString()</span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app-2" class="demo">
              <span title="页面加载于 2018/9/29 下午3:45:14"> 鼠标悬停几秒钟查看此处动态绑定的提示信息！ </span>
          </div>
          <p>这里我们遇到了一点新东西。你看到的 <code>v-bind</code> 特性被称为<strong>指令</strong>。指令带有前缀 <code>v-</code>，以表示它们是 Vue 提供的特殊特性。可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的 <code>title</code> 特性和 Vue 实例的 <code>message</code> 属性保持一致”。</p>
          <p>如果你再次打开浏览器的 JavaScript 控制台，输入 <code>app2.message = '新消息'</code>，就会再一次看到这个绑定了 <code>title</code> 特性的 HTML 已经进行了更新。</p>
          <h2 id="条件与循环"><a href="#条件与循环" class="headerlink" title="条件与循环" data-scroll="">条件与循环</a></h2>
          <div class="scrimba">
              <a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank">在 Scrimba 上尝试这节课</a>
          </div>
          <p>控制切换一个元素是否显示也相当简单：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app-3&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">p</span> <span class="attr">v-if</span>=<span class="string">&quot;seen&quot;</span>&gt;</span>现在你看到我了<span class="tag">&lt;/<span class="name">p</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="keyword">var</span> app3 = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app-3'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    seen: <span class="literal">true</span></span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app-3" class="demo">
              <span>现在你看到我了</span>
          </div>
          <p>继续在控制台输入 <code>app3.seen = false</code>，你会发现之前显示的消息消失了。</p>
          <p>这个例子演示了我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM <strong>结构</strong>。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用<a href="transitions.html">过渡效果</a>。</p>
          <p>还有其它很多指令，每个都有特殊的功能。例如，<code>v-for</code> 指令可以绑定数组的数据来渲染一个项目列表：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app-4&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">ol</span>&gt;</span></span><br /><span class="line">    <span class="tag">&lt;<span class="name">li</span> <span class="attr">v-for</span>=<span class="string">&quot;todo in todos&quot;</span>&gt;</span></span><br /><span class="line" v-html="'{{ todo.text }}'">     </span><br /><span class="line">    <span class="tag">&lt;/<span class="name">li</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;/<span class="name">ol</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="keyword">var</span> app4 = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app-4'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    todos: [</span><br /><span class="line">      { <span class="attr">text</span>: <span class="string">'学习 JavaScript'</span> },</span><br /><span class="line">      { <span class="attr">text</span>: <span class="string">'学习 Vue'</span> },</span><br /><span class="line">      { <span class="attr">text</span>: <span class="string">'整个牛项目'</span> }</span><br /><span class="line">    ]</span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app-4" class="demo">
              <ol>
                  <li> 学习 JavaScript </li>
                  <li> 学习 Vue </li>
                  <li> 整个牛项目 </li>
              </ol>
          </div>
          <p>在控制台里，输入 <code>app4.todos.push({ text: '新项目' })</code>，你会发现列表最后添加了一个新项目。</p>
          <h2 id="处理用户输入"><a href="#处理用户输入" class="headerlink" title="处理用户输入" data-scroll="">处理用户输入</a></h2>
          <div class="scrimba">
              <a href="https://scrimba.com/p/pXKqta/czPNaUr" target="_blank">在 Scrimba 上尝试这节课</a>
          </div>
          <p>为了让用户和你的应用进行交互，我们可以用 <code>v-on</code> 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app-5&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">p</span>&gt;</span><span v-html="'{{ message }}'"></span><span class="tag">&lt;/<span class="name">p</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">button</span> <span class="attr">v-on:click</span>=<span class="string">&quot;reverseMessage&quot;</span>&gt;</span>逆转消息<span class="tag">&lt;/<span class="name">button</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="keyword">var</span> app5 = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app-5'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    message: <span class="string">'Hello Vue.js!'</span></span><br /><span class="line">  },</span><br /><span class="line">  methods: {</span><br /><span class="line">    reverseMessage: <span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</span><br /><span class="line">      <span class="keyword">this</span>.message = <span class="keyword">this</span>.message.split(<span class="string">''</span>).reverse().join(<span class="string">''</span>)</span><br /><span class="line">    }</span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app-5" class="demo">
              <p>Hello Vue.js!</p>
              <button>逆转消息</button>
          </div>
          <p>注意在 <code>reverseMessage</code> 方法中，我们更新了应用的状态，但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。</p>
          <p>Vue 还提供了 <code>v-model</code> 指令，它能轻松实现表单输入和应用状态之间的双向绑定。</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app-6&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">p</span>&gt;</span><span v-html="'{{ message }}'"><span class="tag">&lt;/<span class="name">p</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">input</span> <span class="attr">v-model</span>=<span class="string">&quot;message&quot;</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></span></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="keyword">var</span> app6 = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app-6'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    message: <span class="string">'Hello Vue!'</span></span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app-6" class="demo">
              <p>Hello Vue!</p>
              <input />
          </div>
          <h2 id="组件化应用构建"><a href="#组件化应用构建" class="headerlink" title="组件化应用构建" data-scroll="">组件化应用构建</a></h2>
          <div class="scrimba">
              <a href="https://scrimba.com/p/pXKqta/cEQVkA3" target="_blank">在 Scrimba 上尝试这节课</a>
          </div>
          <p>组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：</p>
          <p><img src="../assets/images/components.png" alt="Component Tree" /></p>
          <p>在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。在 Vue 中注册组件很简单：</p>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="comment">// 定义名为 todo-item 的新组件</span></span><br /><span class="line">Vue.component(<span class="string">'todo-item'</span>, {</span><br /><span class="line">  template: <span class="string">'&lt;li&gt;这是个待办项&lt;/li&gt;'</span></span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <p>现在你可以用它构建另一个组件模板：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">ol</span>&gt;</span></span><br /><span class="line">  <span class="comment">&lt;!-- 创建一个 todo-item 组件的实例 --&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">todo-item</span>&gt;</span><span class="tag">&lt;/<span class="name">todo-item</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">ol</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <p>但是这样会为每个待办项渲染同样的文本，这看起来并不炫酷。我们应该能从父作用域将数据传到子组件才对。让我们来修改一下组件的定义，使之能够接受一个 <a href="components.html#Props">prop</a>：</p>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line">Vue.component(<span class="string">'todo-item'</span>, {</span><br /><span class="line">  <span class="comment">// todo-item 组件现在接受一个</span></span><br /><span class="line">  <span class="comment">// &quot;prop&quot;，类似于一个自定义特性。</span></span><br /><span class="line">  <span class="comment">// 这个 prop 名为 todo。</span></span><br /><span class="line">  props: [<span class="string">'todo'</span>],</span><br /><span class="line">  template: <span class="string">'&lt;li&gt;<span v-html="'{{ todo.text }}'">&lt;/li&gt;'</span></span><br /><span class="line">})</span><br /></span></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <p>现在，我们可以使用 <code>v-bind</code> 指令将待办项传到循环输出的每个组件中：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app-7&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">ol</span>&gt;</span></span><br /><span class="line">    <span class="comment">&lt;!--</span></span><br /><span class="line"><span class="comment">      现在我们为每个 todo-item 提供 todo 对象</span></span><br /><span class="line"><span class="comment">      todo 对象是变量，即其内容可以是动态的。</span></span><br /><span class="line"><span class="comment">      我们也需要为每个组件提供一个“key”，稍后再</span></span><br /><span class="line"><span class="comment">      作详细解释。</span></span><br /><span class="line"><span class="comment">    --&gt;</span></span><br /><span class="line">    <span class="tag">&lt;<span class="name">todo-item</span></span></span><br /><span class="line"><span class="tag">      <span class="attr">v-for</span>=<span class="string">&quot;item in groceryList&quot;</span></span></span><br /><span class="line"><span class="tag">      <span class="attr">v-bind:todo</span>=<span class="string">&quot;item&quot;</span></span></span><br /><span class="line"><span class="tag">      <span class="attr">v-bind:key</span>=<span class="string">&quot;item.id&quot;</span>&gt;</span></span><br /><span class="line">    <span class="tag">&lt;/<span class="name">todo-item</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;/<span class="name">ol</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <figure class="highlight js">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line">Vue.component(<span class="string">'todo-item'</span>, {</span><br /><span class="line">  props: [<span class="string">'todo'</span>],</span><br /><span class="line">  template: <span class="string">'&lt;li&gt;<span v-html="'{{ todo.text }}'"></span>&lt;/li&gt;'</span></span><br /><span class="line">})</span><br /><span class="line"></span><br /><span class="line"><span class="keyword">var</span> app7 = <span class="keyword">new</span> Vue({</span><br /><span class="line">  el: <span class="string">'#app-7'</span>,</span><br /><span class="line">  data: {</span><br /><span class="line">    groceryList: [</span><br /><span class="line">      { <span class="attr">id</span>: <span class="number">0</span>, <span class="attr">text</span>: <span class="string">'蔬菜'</span> },</span><br /><span class="line">      { <span class="attr">id</span>: <span class="number">1</span>, <span class="attr">text</span>: <span class="string">'奶酪'</span> },</span><br /><span class="line">      { <span class="attr">id</span>: <span class="number">2</span>, <span class="attr">text</span>: <span class="string">'随便其它什么人吃的东西'</span> }</span><br /><span class="line">    ]</span><br /><span class="line">  }</span><br /><span class="line">})</span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <div id="app-7" class="demo">
              <ol>
                  <li>蔬菜</li>
                  <li>奶酪</li>
                  <li>随便其它什么人吃的东西</li>
              </ol>
          </div>
          <p>尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元。子单元通过 prop 接口与父单元进行了良好的解耦。我们现在可以进一步改进 <code>&lt;todo-item&gt;</code> 组件，提供更为复杂的模板和逻辑，而不会影响到父单元。</p>
          <p>在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理。在<a href="components.html">后续教程</a>中我们将详述组件，不过这里有一个 (假想的) 例子，以展示使用了组件的应用模板是什么样的：</p>
          <figure class="highlight html">
              <table>
                  <tbody>
                  <tr>
                      <td class="code"><pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">&quot;app&quot;</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">app-nav</span>&gt;</span><span class="tag">&lt;/<span class="name">app-nav</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;<span class="name">app-view</span>&gt;</span></span><br /><span class="line">    <span class="tag">&lt;<span class="name">app-sidebar</span>&gt;</span><span class="tag">&lt;/<span class="name">app-sidebar</span>&gt;</span></span><br /><span class="line">    <span class="tag">&lt;<span class="name">app-content</span>&gt;</span><span class="tag">&lt;/<span class="name">app-content</span>&gt;</span></span><br /><span class="line">  <span class="tag">&lt;/<span class="name">app-view</span>&gt;</span></span><br /><span class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></span><br /></pre></td>
                  </tr>
                  </tbody>
              </table>
          </figure>
          <h3 id="与自定义元素的关系"><a href="#与自定义元素的关系" class="headerlink" title="与自定义元素的关系" data-scroll="">与自定义元素的关系</a></h3>
          <p>你可能已经注意到 Vue 组件非常类似于<strong>自定义元素</strong>——它是 <a href="https://www.w3.org/wiki/WebComponents/" target="_blank" rel="noopener">Web 组件规范</a>的一部分，这是因为 Vue 的组件语法部分参考了该规范。例如 Vue 组件实现了 <a href="https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md" target="_blank" rel="noopener">Slot API</a> 与 <code>is</code> 特性。但是，还是有几个关键差别：</p>
          <ol>
              <li><p>Web 组件规范仍然处于草案阶段，并且未被所有浏览器原生实现。相比之下，Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。必要时，Vue 组件也可以包装于原生自定义元素之内。</p> </li>
              <li><p>Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。</p> </li>
          </ol>
          <h2 id="准备好了吗？"><a href="#准备好了吗？" class="headerlink" title="准备好了吗？" data-scroll="">准备好了吗？</a></h2>
          <p>我们刚才简单介绍了 Vue 核心最基本的功能——本教程的其余部分将涵盖这些功能以及其它高级功能更详细的细节，所以请务必读完整个教程！</p>
          <div id="video-modal" class="modal">
              <div class="video-space" style="padding: 56.25% 0 0 0; position: relative;"></div>
          </div>
          <div class="guide-links">
              <span>← <a href="/v2/guide/installation.html">安装</a></span>
              <span style="float: right;"><a href="/v2/guide/instance.html">Vue 实例</a> →</span>
          </div>
          <div class="footer">
              <div class="bsa-cpc"></div> 发现错误？想参与编辑？
              <a href="https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/index.md" target="_blank"> 在 GitHub 上编辑此页！ </a>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "guide"
    }
</script>

<style>

</style>
