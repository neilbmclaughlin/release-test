# Demo repo to show release creation

## Create a draft release
```
./scripts/create-cff-release 8.1.0 "Friday 15th March 2024" 16838
```

## Publish release
```
./scripts/merge-cff-release 8.1.0
```

## Tidy up so you can retry

There will be errors if you don't clean up the branches and release before running the above scripts again

```
./scripts/cleanup
```
