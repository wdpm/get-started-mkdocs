# mkdocs 入门指南

> markdown 中英文自动添加空格，使用 Pangu Format 插件。

## 安装

```bash
pip install mkdocs
```

## 新建项目

```bash
mkdocs new my-project
cd new my-project
```

## 先跑起来

```bash
mkdocs serve
```

## 配置

配置文件位于：`mkdocs.yml`

## 填充假数据

```bash
curl https://jaspervdj.be/lorem-markdownum/markdown.txt > docs/about.md
```

## 建立 nav 导航

编辑 mkdocs.yml

```yml
nav:
  - Home: index.md
  - About: about.md
```

对应访问地址：

- Home: http://127.0.0.1:8000/
- About: http://127.0.0.1:8000/about/

## 改变主题

编辑 mkdocs.yml

```yml
theme: readthedocs
```

## 网站图标 favicon

创建一个 ico 格式的图标，这里是 48 x 48 的尺寸。放于 docs/img 下，名称为 favicon.ico。

## 构建 website
```bash
mkdocs build
```

## 更多命令
```bash
> mkdocs -h
Usage: mkdocs [OPTIONS] COMMAND [ARGS]...

  MkDocs - Project documentation with Markdown.

Options:
  -V, --version  Show the version and exit.
  -q, --quiet    Silence warnings
  -v, --verbose  Enable verbose output
  -h, --help     Show this message and exit.

Commands:
  build      Build the MkDocs documentation
  gh-deploy  Deploy your documentation to GitHub Pages
  new        Create a new MkDocs project
  serve      Run the builtin development server
```
其中 gh-deploy 值得注意。