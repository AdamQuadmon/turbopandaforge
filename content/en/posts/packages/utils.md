# @turbopandaforge/utils

A simple package for random stuff

## Content

### String

For basic string manipulation use [string-ts][string-ts]

- `fullPathToTitleCase` - Converts a full file path into a title-case string.
- `titleCaseUrl` - Title case a website URL and adds the locale label if needed.

### Env

- `isProduction` - Checks `NODE_ENV`
- `getEnv()` - Return `development` `preview` or `production`

[string-ts]: https://github.com/gustavoguichard/string-ts
