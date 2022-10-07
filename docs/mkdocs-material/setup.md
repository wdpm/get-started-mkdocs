# mkdocs-material 主题设置

## color

```yml
palette:
  # Palette toggle for automatic mode
  - media: "(prefers-color-scheme)"
    toggle:
      icon: material/brightness-auto
      name: Switch to light mode

  # Palette toggle for light mode
  - media: "(prefers-color-scheme: light)"
    scheme: default
    toggle:
      icon: material/brightness-7
      name: Switch to dark mode

  # Palette toggle for dark mode
  - media: "(prefers-color-scheme: dark)"
    scheme: slate
    toggle:
      icon: material/brightness-4
      name: Switch to light mode
```

- AUTO 模式。不需要重载页面，自动根据系统变动重载主题。
- media 查询模式。light -> default；dark -> slate。

自定义颜色 palette：

```yml
extra_css:
  - stylesheets/extra.css
```

---
`docs/stylesheets/extra.css`

```css
:root > * {
  --md-primary-fg-color: #EE0F0F;
  --md-primary-fg-color--light: #ECB7B7;
  --md-primary-fg-color--dark: #90030C;
}
```

## font

使用 google 字体

```yml
theme:
  font:
    text: Roboto # Roboto Mono
```

拒绝使用 google 字体

```yml
theme:
  font: false
```

自定义字体，在 docs/stylesheets/extra.css 中定义。 模式：

```css
@font-face {
  font-family: "<font>";
  src: "...";
}

:root {
  --md-text-font: "<font>";
  --md-code-font: "<font>";
}
```

示例：

```css
/* refer docs: https://github.com/chawyehsu/lxgw-wenkai-webfont */
@font-face {
  font-family: "LXGW WenKai";
  src: url("https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css");
}

:root {
  --md-text-font: "LXGW WenKai";
  --md-code-font: "<font>"; /* custom code font */
}
```

## language

多语言示例。

```yml
extra:
  alternate:
    - name: English
      link: /en/
      lang: en
    - name: Deutsch
      link: /de/
      lang: de
```

阅读方向。

```yml
theme:
  direction: ltr
```

## logo and icons

以文件形式引入：

logo:

```yml
theme:
  logo: assets/logo.png
```

favicon

```yml
theme:
  favicon: images/favicon.png
```

---
Additional icons。

1. 文件组织

```
.
├─ overrides/
│  └─ .icons/
│     └─ bootstrap/
│        └─ *.svg
└─ mkdocs.yml
```

2. 更新 mkdocs.yml 配置：配置 icons 路径

```yml
markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:materialx.emoji.twemoji
      emoji_generator: !!python/name:materialx.emoji.to_svg
      options:
        custom_icons:
          - overrides/.icons
```

3. 更新 mkdocs.yml 配置：使用 icons

```yml
theme:
  icon:
    logo: bootstrap/3-circle-fill
```

注意这里不要文件名后缀，即去掉 `.svg` 后缀。

4. 在 markdown 中使用

```markdown
:bootstrap-3-circle-fill:
```

注意将 `bootstrap/3-circle-fill` 改成 `bootstrap-3-circle-fill` 这种形式，即将 `/` 换成 `-`。

显示效果：:bootstrap-3-circle-fill:

此外，可以使用其他内置的 icon：
:fontawesome-regular-face-laugh-wink: :four_leaf_clover:

## data privacy

cookie consent

```yml
extra:
  consent:
    title: Cookie consent
    description: >-
      We use cookies to recognize your repeated visits and preferences, as well
      as to measure the effectiveness of our documentation and whether users
      find what they're searching for. With your consent, you're helping us to
      make our documentation better.
```

此外，可以自定义初始化的 cookie 和联动 google 分析

```yml
extra:
  consent:
    cookies:
      analytics: Google Analytics
      custom: Custom cookie
```

最后，定义用户操作。

```yml
extra:
  consent:
    actions:
      - accept
      - manage
      - reject
```

> 这里没有说明 actions 之后的回调处理。

为了让用户可以随时更改 cookie 设置，可以在页脚添加 copyright，将更新设置入口放在这里。

```yml
copyright: >
  Copyright &copy; 2016 - 2022 Martin Donath –
  <a href="#__consent">Change cookie settings</a>
```

## navigation

### instant

立即加载：将整个页面重载换成 XHR 部分加载。

```yml
theme:
  features:
    - navigation.instant
```

现在，有点类似 SPA 应用了。

### anchor tracking

地址栏锚点跟踪：当页面往下滚动时，地址栏可以及时反映滑动到了哪个 section。

```yml
theme:
  features:
    - navigation.tracking
```

注意，对于中文标题。锚点 ID 为 #_1、#_2 形式，而且有 BUG，偶尔会发生无法跟踪，或者跟踪失败。因此，这个特性请谨慎开启。

### tabs

在大屏幕设备上，导航 tabs 位于页面头部。

```yml
theme:
  features:
    - navigation.tabs
#    - navigation.tabs.sticky
```

如果想要在页面滑动时固定 tabs，需要启用 sticky 特性。

### nav sections

```yml
theme:
  features:
    - navigation.sections
```

这个特性跟顶级的 sections 导航行为有关，如果：

- 没有开启，左侧导航栏的顶级 sections 会出现箭头，表示可折叠。
- 开启，左侧导航栏的顶级 sections 的显示会被打扁。

### nav expansion

定义 nav sections 的展开行为，如果定义，那么初始化为全部展开状态。这样使用者就不需要逐个展开了。

```yml
theme:
  features:
    - navigation.expand
```

### nav prune

氪金大佬专属装备，赞助商的专用特性。

```yml
theme:
  features:
    - navigation.prune
```

导航修剪将 ** 用指向该 section 第一页（或部分索引页）的链接替换所有可扩展部分 **。 因此，这个特性不能和 expand 同时用，相当矛盾。

### Section index pages

section 的主页。适用于需要对 section 做概要描述。

```yml
theme:
  features:
    - navigation.indexes
```

默认情况下，section 文本在左侧导航显示时是不可点击的。 启用该特性以及配置 mkdocs.yml 后，点击 section 文本就能跳转到 section index 页面。

nav 配置参考例子：

```yml
nav:
  - Section:
      - section/index.md
      - Page 1: section/page-1.md
    ...
    - Page n: section/page-n.md
```

### anchor following

这个选项启用的是：当为目录启用锚点跟踪时，侧边栏会自动滚动，以便活动锚点始终可见。

因此，它指的是当 TOC 项目很多时，正文滚动时，右侧边栏会自动滚动，并高亮当前部分。

### navigation integration

```ymltheme:
  features:
    - toc.integrate 
```

这个功能将一个页面的 toc 集成到 nav 显示中，个人不推荐这种做法。会引起 nav 和 toc 项的混乱，同时 nav 显示层级会变得非常深。

### back to top

```yml
theme:
  features:
    - navigation.top
```

### hide nav or toc

特定文件中，可以自定义 nav 与 toc 是否显示。

```markdown
---
hide:

- navigation
- toc

---

# Document title

...
```

### shortcuts

```yml
extra_javascript:
  - javascripts/shortcuts.js
```

`docs/javascripts/shortcuts.js`

```js
keyboard$.subscribe(function (key) {
    if (key.mode === "global" && key.type === "x") {
        /* Add custom keyboard handler here */
        key.claim()
    }
})
```

### Content area width

`docs/stylesheets/extra.css`

```css
.md-grid {
  max-width: 1440px;
}
```

## search

配置示例。

```yml
plugins:
  - search:
      lang:
        - ja
        - en
```

遗憾的是，免费版并不支持中文语言搜索。换言之，这又是一个需要氪金买的功能。

但是，依旧有其他更加自由的解决方案。

- 使用 ja 语言作为替代，这是因为日文分词和中文很类似，可以获得比较一般的搜索体验。实测没有效果。
- 自定义中文搜索的插件支持。
  参阅 [自定义 MkDocs 中文搜索](https://cloud-atlas.readthedocs.io/zh_CN/latest/devops/docs/mkdocs/mkdocs_chinese_search.html)

### suggest

搜索建议，输入文本时会给出自动补全的建议，按下键盘 -> 方向键进行补全。

```yml
theme:
  features:
    - search.suggest
```

### highlight

在搜索结果列表中高亮搜索关键字。

```yml
theme:
  features:
    - search.highlight
```

### share link

在搜索框右侧显示一个分享按钮，可以获取该次搜索的固定地址。

```yml
theme:
  features:
    - search.share
```

### Customization

这里说明 mkdocs
搜索机制的原理。参阅 [query-transformation](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-search/#query-transformation)

## site analytics

参阅 [site analytics](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-analytics/)

## social cards

```yml
plugins:
  - social:
      cards: !ENV [ CARDS, false ]
      cards_color:
        fill: "#0FF1CE"
        text: "#FFFFFF"
      cards_font: Noto Sans SC
```

根据环境变量 CARDS 的值判定 CARD 是否启用，以及 CARD 颜色、字体。

如果想要在页面添加丰富的 META
信息，参阅 [Meta tags](https://squidfunk.github.io/mkdocs-material/setup/setting-up-social-cards/#meta-tags)

## tags

```yml
plugins:
  - tags:
      enabled: true
      tags_file: tags.md
      #      insider version only
      #      tags_slugify: !!python/object/apply:pymdownx.slugs.slugify
      #        kwds:
      #          case: lower
      #      tags_slugify_separator: "-"
      tags_extra_files:
        compatibility.md:
          - compat
        web.md:
          - html
          - js
          - css
```

Tag icons

```yml
theme:
  icon:
    tag:
      html: fontawesome/brands/html5
      js: fontawesome/brands/js
      css: fontawesome/brands/css3
extra:
  tags:
    HTML5: html
    JavaScript: js
    CSS: css
```

Hiding tags on a page

```markdown
---
hide:

- tags

---

# Document title

...
```

## versioning

```yml
extra:
  version:
    provider: mike
```

更多配置细节，参阅 [version-warning](https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/#version-warning)

## header

### Announcement bar

扩展 base.html 模版

```ejs
{% extends "base.html" %}

{% block announce %}
  <!-- Add announcement here, including arbitrary HTML -->
{% endblock %}
```

mark as read

```yml
theme:
  features:
    - announce.dismiss
```

## footer

social link

```yml
extra:
  social:
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/squidfunk
      name: squidfunk on Twitter
```

copyright

```yml
copyright: Copyright &copy; 2016 - 2020 Martin Donath
```

如果想要自定义 footer，参阅 [扩展主题](https://squidfunk.github.io/mkdocs-material/customization/#extending-the-theme)

## git repo

### repo

```yml
repo_url: https://github.com/squidfunk/mkdocs-material
repo_name: squidfunk/mkdocs-material
edit_uri: edit/main/docs/

theme:
  icon:
    repo: fontawesome/brands/git-alt
    edit: material/pencil 
```

### Revisioning

```bash
pip install mkdocs-git-revision-date-localized-plugin
```

edit `mkdocs.yml`

```yml
plugins:
  - git-revision-date-localized:
      enabled: !ENV [ CI, false ]
      enable_creation_date: true
      type: date
      fallback_to_build_date: true
```

## comment system

终于可以摆脱基于 github issues 原理的评论系统了（goodbye gitalk），现在是薅 github discussion 的羊毛。

### Giscus integration

1)安装 [Giscus GitHub App](https://github.com/apps/giscus)；

2)访问 [Giscus](https://giscus.app/) 并生成代码配置片段。格式如下：

```js
<script
    src="https://giscus.app/client.js"
    data-repo="<username>/<repository>"
    data-repo-id="..."
    data-category="..."
    data-category-id="..."
    data-mapping="pathname"
    data-reactions-enabled="1"
    data-emit-metadata="1"
    data-theme="light"
    data-lang="en"
    crossorigin="anonymous"
    async
>
</script>
```

具体的例子：

```js
<script src="https://giscus.app/client.js"
        data-repo="wdpm/get-started-mkdocs"
        data-repo-id="R_kgDOIJ-OIw"
        data-category="Announcements"
        data-category-id="DIC_kwDOIJ-OI84CR2cR"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
```

可以在嵌入的页面中使用 .giscus 和 .giscus-frame 选择器来自定义容器布局。

高级用法:

- 你可以依照高级用法指南添加额外配置（例如允许特定来源）。
- 要在 React、Vue 和 Svelte 中使用 giscus，请查看 [giscus 组件库](https://github.com/giscus/giscus-component) 。


3) 新建一个 `comments.html` 来扩展主题，位于 `overrides/partials` 子目录下

```html
{% if page.meta.comments %}
  <h2 id="__comments">{{lang.t("meta.comments") }}</h2>
  <!-- Insert generated snippet here -->

  <!-- Synchronize Giscus theme with palette -->
  <script>
    var giscus = document.querySelector("script[src*=giscus]")

    /* Set palette on initial load */
    var palette = __md_get("__palette")
    if (palette && typeof palette.color === "object") {
      var theme = palette.color.scheme === "slate" ? "dark" : "light"
      giscus.setAttribute("data-theme", theme) 
    }

    /* Register event handlers after documented loaded */
    document.addEventListener("DOMContentLoaded", function() {
      var ref = document.querySelector("[data-md-component=palette]")
      ref.addEventListener("change", function() {
        var palette = __md_get("__palette")
        if (palette && typeof palette.color === "object") {
          var theme = palette.color.scheme === "slate" ? "dark" : "light"

          /* Instruct Giscus to change theme */
          var frame = document.querySelector(".giscus-frame")
          frame.contentWindow.postMessage(
            {giscus: { setConfig: { theme} } },
            "https://giscus.app"
          )
        }
      })
    })
  </script>
{% endif %}
```
将第二步生成的代码配置放入第三步的`<!-- Insert generated snippet here -->`位置。

4) 在特定页面启用评论功能。
```markdown
---
comments: true
---

# Document title
...
```
注意：此时上面这个页面并没有出现评论元素。