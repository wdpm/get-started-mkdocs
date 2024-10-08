# 主题

默认主题有 mkdocs 和 readthedocs。

## mkdocs
```yml
theme:
    name: mkdocs
    highlightjs: true
    hljs_style: github
    hljs_languages:
        - yaml
        - rust
    analytics:
        gtag: G-ABC123
    shortcuts:
        help: 191    # ?
        next: 78     # n
        previous: 80 # p
        search: 83   # s
    navigation_depth: 2
    nav_style: primary
    locale: zh_CN
```

- highlightjs 启用代码块高亮
- hljs_style：代码块的高亮风格，默认是 github
- hljs_languages：额外的高亮语言，默认高亮只有 23 种语言。
- analytics：分析服务。例如 Google 分析
- shortcuts：键盘快捷键配置。参阅 [keycode](https://keycode.info/)
- navigation_depth: 导航深度，默认 2
- nav_style: 导航的样式。primary（默认）、light、、dark。
- locale：本地化语言。默认是 en 英文。

## readthedocs

参阅 [mkdocs 的 readthedocs 主题配置](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs)

## 第三方主题

参阅 MkDocs [community wiki](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes).

### mkdocs-material
这里推荐这个主题 [mkdocs-material](https://github.com/squidfunk/mkdocs-material)。

1.安装：
```bash
pip install mkdocs-material
```

2.启用
```yml
theme:
  name: material
```

3.配置

参阅 [mkdocs-material/setup](https://squidfunk.github.io/mkdocs-material/setup)
