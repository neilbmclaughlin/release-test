# Demo repo to show release creation

## Pre-requisites

* [ git ](https://git-scm.com/)
* [ gh ](https://cli.github.com/)
* [ jq ](https://jqlang.github.io/jq/)

## Create a draft release
```
./scripts/create-cff-release minor 22/03/2024 16838
```

## Publish release
```
# list releases as a sense check - the list should just have a single release with tag 8.1.0
gh release list

./scripts/merge-cff-release 8.1.0
```

## Tidy up so you can retry

There will be errors if you don't clean up the branches and release before running the above scripts again

```
./scripts/cleanup
```
