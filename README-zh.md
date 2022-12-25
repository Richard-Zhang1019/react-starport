<p align="center">
  <img height="300" src="./src/assets/img/logo.png" alt="React Starport">
</p>

<p align="center">
  🛰 跨路由组件共享动画
</p>

<p align="center">
  <a href="https://react-starport-eta.vercel.app/" target="_blank">在线演示</a>
</p>

<p align="center">
  <a href="./README.md" target="_blank">English</a> | 简体中文
</p>

## 起源

我们在不同的页面使用同一个组件时可能会由于页面布局不同，UI 设计不同导致相同组件的位置、大小、样式、状态等不同，这时我们可能会希望在进行路由跳转时让两个页面使用的相同的组件有一个过渡动画直接将相同的组件流畅的`传递`过去，但是 DOM 结构以树的形式呈现，在不同路由下的组件有着不同的节点，即使在不同路由下使用相同的组件时也会创建两个组件实例

<p align="center">
  <img height="300" src="./src/assets/img/readme1.png">
</p>

如上图，在 pageA 和 pageB 两个路由下都使用了 ComponentA 组件，那么就会在两个页面创建两次组件实例，当我们从 pageA 路由跳转到 pageB 路由后会不可避免的经历组件的卸载和重新挂载，执行组建的生命周期，而跳转前组件内的状态也会丢失。

尽管我们可以通过 context 或者一些全局状态管理工具(mobx/redux)来存储组件里的一些状态，并且也可以通过[FLIP](https://github.com/googlearchive/flipjs)来模拟不同组件之间的动画，但是这种实现还是不够`优雅`，因为同一个组件还是会渲染两次，还是要经历组件卸载和重新挂载的生命周期

## 思路

设计一个漂浮于根节点的代理组件，来表示该组件预期的位置、样式等，当切换路由后代理组件把位置、样式等信息传递给真实的组件，并让它以补间动画的形式`飞`到代理组件的位置

<p align="center">
  <img height="350" src="./src/assets/img/readme2.png">
</p>

当动画结束后，通过 `createPortal` 将真正的组件传送到对应的代理组件中，降落到新路由中的节点对应的位置

<p align="center">
  <img height="350" src="./src/assets/img/readme3.png">
</p>

有了这种“起飞”与“降落”的机制，在不同的路由中通过代理组件去占位，得以保留原始的 DOM 结构，当路由跳转时，真正的组件“起飞”以补间动画的形式“飞”到新路由中对应的节点位置再“降落”

- 开发中
- 特别感谢女朋友帮忙 P 的 logo 图片
- Inspired by [Anthony Fu](https://github.com/antfu)

TODO-List

- [x] 平滑动画
- [x] keepalive
- [x] 把使用的 any 类型去掉
- [x] 返回到首页时动画会先飘到上面动画结束再恢复位置(图片没渲染时高度没撑开)
- [x] home 页的 size 状态保存
- [x] 添加一个图片，点击后翻转，然后保存住状态
- [ ] 点击翻转时添加动画
