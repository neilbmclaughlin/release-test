# Demo repo to show release creation

## Create a release
```
./scripts/create-cff-release 8.1.0 "Friday 15th March 2024" 16838
```

## Tidy up so you can retry

There will be errors if you don't clean up the branches and release before running the above script again

```
git push -d origin release/8.1.0
git branch -D release/8.1.0
gh release delete 8.1.0 --yes
```
