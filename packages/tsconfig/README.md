# `@turbopandaforge/tsconfig` 🐼🔧

This package provides a set of base TypeScript configuration files to be used across different projects within the TurboPandaForge ecosystem.

## Configurations

- **Base Config**: The main configuration that other configs extend from.
- **React based**: A configuration tailored for React-based projects.

## Implementation Example

  In each app or package directory, a `tsconfig.json` file extends one of the specific configurations from
  `@turbopandaforge/tsconfig` according to the nature of the package (e.g., `base`, `nextjs`, `react-library`).

Base example:

 ```json
{
  "extends": "@turbopandaforge/tsconfig/base.json",
  "include": ["src"],
  "exclude": ["node_modules"]
}
 ```

 Next.Js App example:

 ```json
{
  "extends": "@turbopandaforge/tsconfig/react-library.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"],
      "#generated/content": ["./.velite"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", ".next/types/**/*.ts", "*.ts", "*.tsx", "*.mjs", "src"],
  "exclude": ["node_modules"]
}

 ```
