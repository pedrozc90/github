# Git

## Tags

```bash
# create tag
# git tag <name>
git tag v1.0.0

# delete tag from local repository
# git tag --delete <name>
git tag --delete v1.0.0

# delete tag from remote repository
# git push --delete origin v1.0.0
git push --delete origin v1.0.0

# list all tags from local repository
git tag --list

# list reverse order
git tag --list | sort --reserve

# get the last tag
git tag --list | sort --reverse | head -n 1
```