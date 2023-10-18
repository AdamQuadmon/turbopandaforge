# Workflow, Git Hooks and Branching Strategy for TurboPandaForge Contributors

Welcome to the TurboPandaForge project! This document outlines our branching
strategy, which plays a pivotal role in managing contributions and ensuring a
streamlined workflow within the project. Before delving into the branching
strategy, let’s have a quick recap of the workflow.

## Workflow Recap

1. **Fork the Repository:**

   - Kickstart by forking the TurboPandaForge repository to your personal GitHub
     account.

2. **Clone Your Fork:**

   Clone your fork locally to start working on the project.

3. **Create a New Branch:**

   - Always create a new branch for each feature, bugfix, or enhancement.

4. **Work Locally:**

   - Make your changes, ensuring to adhere to the project's coding standards.
     Our pipeline has Git hooks in place to enforce these standards
     automatically.

5. **Push to Your Fork:**

   - Push your changes to your fork on GitHub.

6. **Create a Pull Request:**

   - Create a pull request from your fork to the main TurboPandaForge
     repository. Ensure to provide a clear description of the changes you've
     made.

7. **Code Review:**

   - Maintainers or other contributors will review your pull request, providing
     feedback or requesting changes if necessary.

8. **Vercel Staging Deployment:**

   - Once your pull request is approved, it will be deployed to a staging
     environment on Vercel for further review and testing.

9. **Merge:**

   - Once approved, your pull request will be merged into the main repository by
     the maintainers.

10. **Vercel Production Deployment:**
    - Following the merge, the changes will be deployed to production via
      Vercel.

## Git Hooks for Code Quality

In the TurboPandaForge project, we leverage Git hooks to automatically enforce
code quality standards. These hooks trigger various actions at different points
in the Git workflow to ensure that the codebase remains clean and consistent.

In the root:

```json
// ./package.json
{
  "scripts": {
    "pre-commit": "turbo run pre-commit",
    "pre-push": "turbo run pre-push"
  },
  "husky": {
    "hooks": {
      "pre-commit": "pnpm pre-commit && pnpm test",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-push": "pnpm pre-push"
    }
  }
}
```

In an app or package:

```json
// ./apps/my-app/package.json
{
  "scripts": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,md}": ["eslint --fix", "prettier --write"],
    "*.{css,scss,md}": ["prettier --write"]
  }
}
```

Here are the hooks used:

### 1. **Pre-Commit Hook:**

- Automatically invokes the pre-commit Turbo task in each app and package that
  defines it. This task typically runs linters and formatters like ESLint and
  Prettier on the staged files before a commit is made.
- If any issues are detected that can't be automatically fixed, the commit will
  be aborted, allowing you to make the necessary corrections.

### 2. **Commit-Msg Hook:**

- Ensures that commit messages adhere to the required format.
- This helps in maintaining a readable and consistent commit history, which is
  crucial for project management and version tracking.

### 3. **Pre-Push Hook:**

- Before pushing to the remote repository, this hook triggers any defined
  pre-push Turbo tasks in each app and package.
- This helps in catching issues early and reducing the chances of broken code
  being shared with others.

Adhering to these hooks will streamline your contribution process and ensure
that the code remains clean and consistent. This, in turn, expedites the review
process and enhances the overall quality of the TurboPandaForge project.

## Branching Strategy

We follow a simplified version of the Gitflow workflow for managing branches in
the TurboPandaForge project. Here’s how it works:

### 1. **`main` Branch:**

- The `main` branch contains the official release history.
- All commits in the `main` branch are tagged with a version number.

### 2. **`develop` Branch:**

- The `develop` branch serves as an integration branch for features.
- It contains the complete history of the project but holds the latest
  development changes for the next release.

### 3. **Feature Branches:**

- Create a new branch off `develop` for each new feature or bug fix.
- Name your branch descriptively, e.g., `feature/new-widget` or
  `bugfix/widget-resizing`.

### 4. **Release Branches:**

- When `develop` reflects the desired state of the new release, a release branch
  is forked off `develop`.
- Any necessary tweaks for the release are done in this branch, leaving
  `develop` free for continued work on features for the next release.

### 5. **Hotfix Branches:**

- These branches are used to quickly patch production releases.
- Hotfix branches are a lot like release branches except they're based on `main`
  instead of `develop`.

### 6. **Support Branches:**

- They are used to support older, still-maintained versions.
- Support branches allow you to make fixes on older versions.

### Naming Convention

- `feature/` - For new features (e.g., `feature/new-login`).
- `bugfix/` - For bug fixes (e.g., `bugfix/login-error`).
- `hotfix/` - For hot fixes on the `main` branch (e.g.,
  `hotfix/urgent-login-fix`).
- `release/` - For release branches (e.g., `release/v1.2.0`).

By adhering to this branching strategy, we can ensure a structured and efficient
workflow for managing the TurboPandaForge project. Your cooperation with this
strategy is highly appreciated and will significantly contribute to the
project’s success.

Thank you for contributing to TurboPandaForge!
