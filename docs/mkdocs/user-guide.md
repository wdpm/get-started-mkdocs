# 用户指南

## 文件组织
```bash
docs/
    index.md
    user-guide/getting-started.md
    user-guide/configuration-options.md
    license.md
```
将生成以下的链接：
```bash
/
/user-guide/getting-started/
/user-guide/configuration-options/
/license/
```
文档目录中未标识为 Markdown 文件（通过其文件扩展名）的任何文件都由 MkDocs 复制到未更改的构建站点。

## 主页 index
可以使用 index.md 或者 README.md。当 index.md 和 READEM.md 同时提供时，使用 index.md 并且抛弃 README.md。

## nav
导航配置示例如下：`'User Guide'` 这种形式是标题。
```yml
nav:
    - Home: 'index.md'
    - 'User Guide':
        - 'Writing your docs': 'writing-your-docs.md'
        - 'Styling your docs': 'styling-your-docs.md'
    - About:
        - 'License': 'license.md'
        - 'Release Notes': 'release-notes.md'
```
导航配置中未列出的任何页面仍将呈现并包含在构建的站点中，但是它们不会在全局导航链接中出现，也不会包含在上一个和下一个链接中。
也就是，此类页面将被“隐藏”。


## the Python-Markdown
mkdocs 使用 Python-Markdown 来进行 md 文件的渲染。此外，还提供了 Python-Markdown extensions。

### The toc extension
```markdown
Please see the [project license](about.md#license) for further details.
```
可以链接到内部文件的特定标题 ID。

配置示例：
```yml
markdown_extensions:
    - toc:
        permalink: "#"
        baselevel: 2
        separator: "_"
```
- Base level for headers. Default: 1。如果想要设置页面的最高标题级别是 2，那么设置 baselevel: 2。

## 页面图片
```markdown
Cupcake indexer is a snazzy new project for indexing small cakes.

![Screenshot](img/screenshot.png)

*Above: Cupcake indexer in progress*
```

## 支持原生 HTML
默认支持，但是请注意内部 links 格式是否正确。

## Meta-Data
- template: 可以指定特定页面使用的主题
- title：搜索顺序如下
    - mkdocs.yml 中 nav 中定义的标题
    - 文档 meta-data 中的 title 关键字
    - 文档中第一行的 header 1 文本
    - 文档的文件名
  
    一旦搜索到目标，就停止后续的搜索。

### YAML Style Meta-Data
```markdown
---
title: My Document
summary: A brief description of my document.
authors:
    - Waylan Limberg
    - Tom Christie
date: 2018-07-10
some_url: https://example.com
---
This is the first paragraph of the document.
```

### MultiMarkdown Style Meta-Data
```markdown
Title:   My Document
Summary: A brief description of my document.
Authors: Waylan Limberg
         Tom Christie
Date:    January 23, 2018
blank-value:
some_url: https://example.com

This is the first paragraph of the document.
```

## code block
```python
def fn():
    pass
```
注意代码块不能缩进，因此代码块不能成为 list-item 这类元素。