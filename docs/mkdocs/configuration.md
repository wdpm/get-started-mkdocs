# 配置

## hooks

先尝试创建一个单文件的简单 hook。

配置文件：

```yaml
hooks:
  - my_hooks.py
```

`my_hooks.py` 文件放于根目录下：

```py
import logging, re
import mkdocs.plugins

log = logging.getLogger("mkdocs")


@mkdocs.plugins.event_priority(-50)
def on_page_markdown(markdown, page, **kwargs):
    path = page.file.src_uri
    for m in re.finditer(r'\bhttp://[^) ]+', markdown):
        log.warning(f"Documentation file'{path}'contains a non-HTTPS link: {m[0]}")
```

执行 mkdocs serve 之后，打印 log：

```
WARNING  -  Documentation file 'mkdocs/get-started.md' contains a non-HTTPS link: http://127.0.0.1:8000/
            -
WARNING  -  Documentation file 'mkdocs/get-started.md' contains a non-HTTPS link: http://127.0.0.1:8000/about/

            ##
WARNING  -  Documentation file 'mkdocs-material/reference.md' contains a non-HTTPS link: http://www.w3.org/2000/svg"viewBox="0
```

这个功能也可以使用 plugin 来实现，依旧不需要创建 python package，因此也比较简单。
参阅 [mkdocs-simple-hooks plugin](https://github.com/aklajnert/mkdocs-simple-hooks)

## plugin

A subclass of `mkdocs.plugins.BasePlugin` should define the behavior of the plugin.

### config_scheme

例子模版：

```py
class MyPluginConfig(mkdocs.config.base.Config):
    foo = mkdocs.config.config_options.Type(str, default='a default value')
    bar = mkdocs.config.config_options.Type(int, default=0)
    baz = mkdocs.config.config_options.Type(bool, default=True)


class MyPlugin(mkdocs.plugins.BasePlugin[MyPluginConfig]):
    ...
```

具体例子：

```py
from mkdocs.config import base, config_options as c


class _ValidationOptions(base.Config):
    enable = c.Type(bool, default=True)
    verbose = c.Type(bool, default=False)
    skip_checks = c.ListOfItems(c.Choice(('foo', 'bar', 'baz')), default=[])


class MyPluginConfig(base.Config):
    definition_file = c.File(exists=True)  # required
    checksum_file = c.Optional(c.File(exists=True))  # can be None but must exist if specified
    validation = c.SubConfig(_ValidationOptions)
```

config 例子：

```yaml
my_plugin:
  definition_file: configs/test.ini  # relative to mkdocs.yml
  validation:
    enable: !ENV [ CI, false ]
    verbose: true
    skip_checks:
      - foo
      - baz
```

### events

参阅 [Events](https://www.mkdocs.org/dev-guide/plugins/#events)

### entry point

```py
entry_points = {
    'mkdocs.plugins': [
        'pluginname = path.to.some_plugin:SomePluginClass',
    ]
}
```

`path.to.some_plugin:SomePluginClass` 对应这种形式 `from path.to.some_plugin import SomePluginClass`

此外，多个插件类可以存在于同一个模块中：

```py
entry_points = {
    'mkdocs.plugins': [
        'featureA = path.to.my_plugins:PluginA',
        'featureB = path.to.my_plugins:PluginB'
    ]
}
```