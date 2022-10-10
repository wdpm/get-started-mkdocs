# deploy

## github actions

create workflow file named `.github/workflows/ci.yml`

```yaml
name: ci
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: 3.x
      #      do better: setup cache
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force
```

## mkdocs

```bash
mkdocs gh-deploy --force
```

注意配置文件的 remote_branch 和 remote_name 字段。