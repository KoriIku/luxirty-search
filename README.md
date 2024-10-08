# Luxirty Search

[search.luxirty.com](https://search.luxirty.com)

一个搜索引擎，基于 Google，屏蔽内容农场，无广告，无跟踪，干净，简洁，快。

如果想添加到浏览器中，搜索语法是 `search.luxirty.com/search?q=`

## 特性&功能
1. 内置内容农场屏蔽，包括csdn、华x云、百度云智能、腾讯云开发者等seo网站，以及一些 stackoverflow 中文翻译站。

2. 点击`For Program`一键拉高 GitHub、Stackoverflow、v2ex、cnblog 权重，免去手打 site: 的麻烦。

3. 一键搜索 v2ex 、 Raddit

4. 内置广告屏蔽、跟踪链接移除。

## 与 uBlackList, Hit by Hidden 等工具的区别

这些工具在前端屏蔽搜索结果，也就是等到内容农场已经出现在搜索结果中，再将其删除或隐藏。

而 Luxirty Search 通过配置 Annotations 让 Google 直接屏蔽垃圾网站，服务器在执行搜索时就已经将网站排除，可以理解为内置多条 '-site:domain.com' 。

## Contribute
欢迎 pr 和 issue。

本项目并不复杂，只需要基础的前端知识 (css + js) 即可看懂本项目。

下面是两个较简单的切入点，可以尝试从这里入手。

### 优化样式
本项目最大的作用其实是美化 cse 那个上古默认样式，我进行了基础的调整、暗黑适配、移动端适配，但肉眼可见的还有很多问题 Orz。

### 分享黑名单或优化名单
理论上而言，利用 GitHub Action 来自动生成 Annotations 文件是最好的做法，但我还没写(逃，所以目前直接写在 issue 里。

你可以分享这些域名：
1. 黑名单域名：这些域名会直接被屏蔽
2. 代码相关的高质量来源：这些域名被视作优质来源，当点击“For Program”标签时优先级会被提高。
3. 当然，如果你认为有必要添加新的标签也可以提出来。

### 当前的缺陷
1. 对不同尺寸的屏幕适配不完整

2. 暗黑模式下还有部分元素过亮或者过暗

### 未来计划

1. 根据标题进行二次拦截

2. 加入自动翻页（这个还不知道怎么实现）


## 原理

Luxirty Search 基于 Google 的可编程自定义搜索引擎(Google cse)，允许通过 Annotations 自定义屏蔽网站及搜索范围等，同时使用 Refinement Labels 提高 Github 等优质来源的权重。

用人话来说，就是内置了屏蔽哪些网站、优先搜索哪些网站。

# 部署

本质上而言，这是一个简单的 vue3 + vite 项目，因此你应该可以方便地将它部署到任何你喜欢的托管网站，例如 GitHub Pages、netfliy、Cloudflare Pages、vercel之类的。

当然你也可以将其部署在自己的服务器上。

无论你喜欢哪种方式，都只需要查看 vite 部署教程: https://cn.vitejs.dev/guide/static-deploy

(可选)如果你想使用自己的cse，只需设置环境变量 `VITE_GOOGLE_CSE_CX` ，从这里创建你的 cse 并获取 cx： https://programmablesearchengine.google.com/about/

## 一键部署(推荐)
### Deploy with Vercel
(搜索页404的问题已修复)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKoriIku%2Fluxiry-search&project-name=luxirty-search&repository-name=luxirty-search)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KoriIku/luxirty-search)

### Docker 运行 (WIP)
`docker run --rm  -p 80:80  ghcr.io/shadowofmoo/luxirty-search`

# 开发

## 参考资料
唯一要看的参考资料：[https://developers.google.com/custom-search/docs/element](https://developers.google.com/custom-search/docs/element)

## 在本地调试

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```


# 更新记录
- 加快了启动速度 - 现在超级快
- 添加了移除搜索结果中的跟踪链接 data-ct*
- 移除了文字阴影