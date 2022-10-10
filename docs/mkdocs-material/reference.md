# mkdocs reference

## Admonitions

### basic blocks

```yml
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences

theme:
  icon:
    admonition:
      #      github icons
      note: octicons/tag-16
      abstract: octicons/checklist-16
      info: octicons/info-16
      tip: octicons/squirrel-16
      success: octicons/check-16
      question: octicons/question-16
      warning: octicons/alert-16
      failure: octicons/x-circle-16
      danger: octicons/zap-16
      bug: octicons/bug-16
      example: octicons/beaker-16
      quote: octicons/quote-16
```

usage:

```markdown
!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

---
如果想要可折叠的 block，并且初始化时为折叠状态，那么应该使用 `???` 代替 `!!!`

```markdown
??? note "My Title"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

??? note "My Title"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

---
如果想要可折叠的 block，并且初始化时为展开状态，那么应该使用 `???+` 代替 `???`

```markdown
???+ note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

???+ note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

### Inline blocks

```markdown
!!! info inline

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.
```

!!! info inline

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.

`info inline` 可以替换为 `info inline end`。

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

可以看到，可以制作一种类似图文环绕的效果。

支持的类型有：

- note 笔记
- abstract 抽象
- info 信息
- tip 提示
- success 成功
- warning 警告
- failure 失败
- danger 危险
- bug BUG
- example 例子
- quote 引用

### Custom admonitions

```css
:root {
  --md-admonition-icon--pied-piper: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 576 512"><path d="M244 246c-3.2-2-6.3-2.9-10.1-2.9-6.6 0-12.6 3.2-19.3 3.7l1.7 4.9zm135.9 197.9c-19 0-64.1 9.5-79.9 19.8l6.9 45.1c35.7 6.1 70.1 3.6 106-9.8-4.8-10-23.5-55.1-33-55.1zM340.8 177c6.6 2.8 11.5 9.2 22.7 22.1 2-1.4 7.5-5.2 7.5-8.6 0-4.9-11.8-13.2-13.2-23 11.2-5.7 25.2-6 37.6-8.9 68.1-16.4 116.3-52.9 146.8-116.7C548.3 29.3 554 16.1 554.6 2l-2 2.6c-28.4 50-33 63.2-81.3 100-31.9 24.4-69.2 40.2-106.6 54.6l-6.3-.3v-21.8c-19.6 1.6-19.7-14.6-31.6-23-18.7 20.6-31.6 40.8-58.9 51.1-12.7 4.8-19.6 10-25.9 21.8 34.9-16.4 91.2-13.5 98.8-10zM555.5 0l-.6 1.1-.3.9.6-.6zm-59.2 382.1c-33.9-56.9-75.3-118.4-150-115.5l-.3-6c-1.1-13.5 32.8 3.2 35.1-31l-14.4 7.2c-19.8-45.7-8.6-54.3-65.5-54.3-14.7 0-26.7 1.7-41.4 4.6 2.9 18.6 2.2 36.7-10.9 50.3l19.5 5.5c-1.7 3.2-2.9 6.3-2.9 9.8 0 21 42.8 2.9 42.8 33.6 0 18.4-36.8 60.1-54.9 60.1-8 0-53.7-50-53.4-60.1l.3-4.6 52.3-11.5c13-2.6 12.3-22.7-2.9-22.7-3.7 0-43.1 9.2-49.4 10.6-2-5.2-7.5-14.1-13.8-14.1-3.2 0-6.3 3.2-9.5 4-9.2 2.6-31 2.9-21.5 20.1L15.9 298.5c-5.5 1.1-8.9 6.3-8.9 11.8 0 6 5.5 10.9 11.5 10.9 8 0 131.3-28.4 147.4-32.2 2.6 3.2 4.6 6.3 7.8 8.6 20.1 14.4 59.8 85.9 76.4 85.9 24.1 0 58-22.4 71.3-41.9 3.2-4.3 6.9-7.5 12.4-6.9.6 13.8-31.6 34.2-33 43.7-1.4 10.2-1 35.2-.3 41.1 26.7 8.1 52-3.6 77.9-2.9 4.3-21 10.6-41.9 9.8-63.5l-.3-9.5c-1.4-34.2-10.9-38.5-34.8-58.6-1.1-1.1-2.6-2.6-3.7-4 2.2-1.4 1.1-1 4.6-1.7 88.5 0 56.3 183.6 111.5 229.9 33.1-15 72.5-27.9 103.5-47.2-29-25.6-52.6-45.7-72.7-79.9zm-196.2 46.1v27.2l11.8-3.4-2.9-23.8zm-68.7-150.4l24.1 61.2 21-13.8-31.3-50.9zm84.4 154.9l2 12.4c9-1.5 58.4-6.6 58.4-14.1 0-1.4-.6-3.2-.9-4.6-26.8 0-36.9 3.8-59.5 6.3z"/></svg>')
}

.md-typeset .admonition.pied-piper,
.md-typeset details.pied-piper {
  border-color: rgb(43, 155, 70);
}

.md-typeset .pied-piper > .admonition-title,
.md-typeset .pied-piper > summary {
  background-color: rgba(43, 155, 70, 0.1);
}

.md-typeset .pied-piper > .admonition-title::before,
.md-typeset .pied-piper > summary::before {
  background-color: rgb(43, 155, 70);
  -webkit-mask-image: var(--md-admonition-icon--pied-piper);
  mask-image: var(--md-admonition-icon--pied-piper);
}
```

```markdown
!!! pied-piper "Pied Piper"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.
```

!!! pied-piper "Pied Piper"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

## Annotations

注释功能。这个功能很棒，能够在任意位置进行悬浮式注释说明。但是，这是一个付费功能。

## Buttons

按钮样式。

```yml
markdown_extensions:
  - attr_list
```

```markdown
[Subscribe to our newsletter](#){.md-button}
```

[Subscribe to our newsletter](#){.md-button}

## Code blocks

```yml
markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.superfences
```

常规

```py
# everything is tf(
import pytorch as tf
import tensorflow as tf
```

添加标题

``` py title="bubble_sort.py"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

代码行号

``` py linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

高亮特定范围的行

``` py hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

高亮行内代码

```markdown
The `#!python range()` function is used to generate a sequence of numbers.
```

The `#!python range()` function is used to generate a sequence of numbers.

内嵌外部文档

``` title=".browserslistrc"
--8<-- ".browserslistrc"
```

这个文件 `.browserslistrc` 位于根目录下。

### Custom syntax theme

例如自定义 string 的高亮颜色

```css
:root > * {
  --md-code-hl-string-color: #0FF1CE;
}
```

## content tabs

```yml
markdown_extensions:
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
```

### Linked content tabs

点击一个 tab 标签后，其余 content tabs 区域都切换为同一个 tab。

```yml
theme:
  features:
    - content.tabs.link
```

下面是一个例子。

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

## data tables

```yml
markdown_extensions:
  - tables
```

```markdown
| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |
```

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

## diagrams

```yml
markdown_extensions:
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
```

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

``` mermaid
sequenceDiagram
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```

``` mermaid
stateDiagram-v2
  state fork_state <<fork>>
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3

    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```

``` mermaid
classDiagram
  Person <|-- Student
  Person <|-- Professor
  Person : +String name
  Person : +String phoneNumber
  Person : +String emailAddress
  Person: +purchaseParkingPass()
  Address "1" <-- "0..1" Person:lives at
  class Student{
    +int studentNumber
    +int averageMark
    +isEligibleToEnrol()
    +getSeminarsTaken()
  }
  class Professor{
    +int salary
  }
  class Address{
    +String street
    +String city
    +String state
    +int postalCode
    +String country
    -validate()
    +outputAsLabel()  
  }
```

``` mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

更多语法，参阅 [diagrams](https://squidfunk.github.io/mkdocs-material/reference/diagrams/)

## footnotes

```yml
markdown_extensions:
  - footnotes
```

```markdown
Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
[^2]:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.
```

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
[^2]:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

## formatting

```yaml
markdown_extensions:
  - pymdownx.critic
  - pymdownx.caret
  - pymdownx.keys
  - pymdownx.mark
  - pymdownx.tilde
```

### Highlighting changes

```markdown
Text can be {--deleted--} and replacement text {++added++}. This can also be combined into {~~one~>a single~~}
operation. {==Highlighting==} is also possible {>>and comments can be added inline<<}.

{== Formatting can also be applied to blocks by putting the opening and closing tags on separate lines and adding new
lines between the tags and the content. ==}
```

上面这个代码块显示不了原生的文本，请查看源文件。

Text can be {--deleted--} and replacement text {++added++}. This can also be combined into {~~one~>a single~~}
operation. {==Highlighting==} is also possible {>>and comments can be added inline<<}.

{==

Formatting can also be applied to blocks by putting the opening and closing tags on separate lines and adding new lines
between the tags and the content.

==}

### Highlighting text

```
- ==This was marked==
- ^^This was inserted^^
- ~~This was deleted~~
```

- ==This was marked==
- ^^This was inserted^^
- ~~This was deleted~~

### sub and superscripts

```markdown
- H~2~O
- A^T^A
```

- H~2~O
- A^T^A

### keyboard keys

```markdown
++ctrl+alt+del++
```

++ctrl+alt+del++

## grids

网格元素。

## icons and emoji

```yaml
markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:materialx.emoji.twemoji
      emoji_generator: !!python/name:materialx.emoji.to_svg
```

```markdown
:smile:
:fontawesome-regular-face-laugh-wink:
```

:smile:
:fontawesome-regular-face-laugh-wink:

## images

```yaml
markdown_extensions:
  - attr_list
  - md_in_html
```

### lightbox

```bash
pip install mkdocs-glightbox
```

```yaml
plugins:
  - glightbox
```

```markdown
![Image title](https://dummyimage.com/400x250/eee/aaa){align=left}
```

![Image title](https://dummyimage.com/400x250/eee/aaa){align=left}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat
finibus, justo purus auctor massa, nec semper lorem quam in massa.

---

image caption 例子如下：

```markdown
<figure markdown>
  ![Image title](https://dummyimage.com/600x400/){width="300"}
  <figcaption>Image caption</figcaption>
</figure>
```

<figure markdown>
  ![Image title](https://dummyimage.com/600x400/){width="300"}
  <figcaption>Image caption</figcaption>
</figure>

---

lazy loading

```markdown
![Image title](https://dummyimage.com/600x400/){loading=lazy}
```

light and dark mode

```markdown
![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa#only-light)
![Image title](https://dummyimage.com/600x400/21222c/d5d7e2#only-dark)
```

![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa#only-light)
![Image title](https://dummyimage.com/600x400/21222c/d5d7e2#only-dark)

## lists

```yaml
markdown_extensions:
  - def_list
  - pymdownx.tasklist:
      custom_checkbox: true
```

```markdown
- Nulla et rhoncus turpis. Mauris ultricies elementum leo. Duis efficitur accumsan nibh eu mattis. Vivamus tempus velit
  eros, porttitor placerat nibh lacinia sed. Aenean in finibus diam.

    * Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    * Nam vulputate tincidunt fringilla.
    * Nullam dignissim ultrices urna non auctor.
```

- Nulla et rhoncus turpis. Mauris ultricies elementum leo. Duis efficitur accumsan nibh eu mattis. Vivamus tempus velit
  eros, porttitor placerat nibh lacinia sed. Aenean in finibus diam.

    * Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    * Nam vulputate tincidunt fringilla.
    * Nullam dignissim ultrices urna non auctor.

```markdown
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
```

- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

## MathJax

```yaml
markdown_extensions:
  - pymdownx.arithmatex:
      generic: true

extra_javascript:
  - javascripts/mathjax.js
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```

创建一个 js 文件用于定义 mathjax

``` js
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
```

示例：

```markdown
$$ \operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}} $$
```

$$ \operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}} $$

inline block

```markdown
The homomorphism $f$ is injective if and only if its kernel is only the singleton set $e_G$, because otherwise $\exists
a,b\in G$ with $a\neq b$ such that $f(a)=f(b)$.
```

The homomorphism $f$ is injective if and only if its kernel is only the singleton set $e_G$, because otherwise $\exists
a,b\in G$ with $a\neq b$ such that $f(a)=f(b)$.

注意，在 LXGW 字体情况下，默认公式渲染字体是 12px 太小，需要重写 CSS 样式，设置为更大的字体，例如 20px。

## Abbreviations

缩写术语的 tooltip 弹出提示。这是付费功能。

## toc
```yaml
markdown_extensions:
  - toc:
      permalink: true
```
在文章的标题后生成一个 ¶ 标记，方便点击。