# GIT Workflow

## GIT Setup

- One member will setup the repo and add contributors
- In the project folder
  - `npm init`
  - `git remote add origin https://github.com/repo/repo_name`

## Workflow

1. On main, pull from origin main
2. Create a feature branch (feature/feature_name)
3. Update your branch with the latest changes from main

- `git checkout main`
- `git pull origin main`
- `git checkout feature/feature_name` (use git branch as needed)
- `git merge main` (merge main into the feature branch)
- resolve conflicts and commit changes

4.  Push the feature branch to github

- `git push -u origin feature/feature_name`
  (-u adds an upstream branch so the next time you can type only git push from that branch)

5. Create a pull request on GitHub

- you should not merge your own pull request

6. checkout to main and pull again from origin main
