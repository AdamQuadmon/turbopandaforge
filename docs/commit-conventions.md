# Commit Message Conventions for TurboPandaForge Contributors

At TurboPandaForge, we enforce a standardized commit message format to ensure a clean, readable commit history. This standardization also paves the way for automated semantic versioning and changelog generation. We use `commitlint` alongside Husky's `commit-msg` hook to enforce this convention. Here’s a guide on how you should structure your commit messages when contributing to TurboPandaForge.

## Commit Message Structure

Our commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/). Here's the general structure of a commit message:

```plaintext
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

1. **Type:**
   The type of change you're making. Common types include:

   - `feat`: A new feature
   - `fix`: A bug fix
   - `chore`: Routine tasks or maintenance
   - `docs`: Documentation changes
   - `style`: Code style changes (e.g., formatting, missing semi-colons, etc.)
   - `refactor`: Code refactoring
   - `perf`: Performance improvements
   - `test`: Adding or modifying tests

2. **Scope:**
   The scope of the change, e.g., component or file name. This is optional but encouraged as it provides more context.

3. **Subject:**
   A brief description of the change, written in the imperative, present tense.

4. **Body (Optional):**
   A detailed description of the change. Explain the rationale for the change and contrast with previous behavior.

5. **Footer (Optional):**
   Any additional metadata such as breaking change notes, issue references, etc.

## Breaking Changes

Indicate breaking changes in the footer with `BREAKING CHANGE:` followed by a description of the change.

```plaintext
feat(user-model): change the default admin role

BREAKING CHANGE: alters generateAdminRole() API.

```

## Issue References

Reference related issues or tickets in the footer of the commit message.

```plaintext
fix(button): correct alignment issue

Resolves: #123, #456
```

## Examples

Here are some examples of well-formatted commit messages:

```plaintext
feat(button): add a new "submit" button component

Created a new button component for form submissions. This will standardize the look and behavior of our submit buttons across the application.

```

```plaintext
fix(input): resolve issue with text input on iOS devices

Resolved an issue where text input fields were unresponsive on iOS devices. This fix improves our app's accessibility on mobile platforms.
```

```plaintext
docs(readme): update installation instructions

Updated the installation instructions to reflect the new steps required for setting up the project locally.
```

## Reverts

For reverts, format the commit message as below:

```plaintext
revert: type(scope): subject

This reverts commit abcdef.
```

## Additional Resources

To enhance your understanding and adherence to our commit conventions, we recommend exploring the following resources:

- [Conventional Commits specification](https://www.conventionalcommits.org/): This specification provides the foundation for our commit message structure.
- [`commitlint` documentation](https://commitlint.js.org/): Learn more about how `commitlint` enforces commit message conventions.

By familiarizing yourself with these resources, you'll be better prepared to contribute to TurboPandaForge in a manner that aligns with our established practices.
