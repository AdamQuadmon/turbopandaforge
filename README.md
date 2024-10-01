<!-- markdownlint-disable MD041 -->
<a id="readme-top"></a>

# 🐼 MugenCraft TurboPandaForge

Welcome to `turbopandaforge`, a robust Turborepo monorepo starter crafted by MugenCraft to forge personal digital gardens.
This starter is meticulously designed to serve as a comprehensive foundation for developers aiming to kickstart their
digital garden projects. Blending the essence of traditional craftsmanship with modern digital artistry, we strive to
create an enriching environment for community-driven development and learning.

![turbopanda banner](./turbopandaforge.png) _DALL·E 2023-10-16 21.08.01 - Steampunk-cyberpunk anime banner_ Amidst the
backdrop of a starry cosmos, a panda donning a retro glass helmet is intently working on an anvil.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>

- [🚀 Packages](#-packages)
- [🚀 Features](#-features)
  - [✅ Completed Features](#-completed-features)
  - [🛠️ Upcoming Features](#️-upcoming-features)
- [🚀 Getting Started](#-getting-started)
- [🛠 Scripts Overview](#-scripts-overview)
  - [� Development](#-development)
  - [✅ Code Quality and Testing](#-code-quality-and-testing)
  - [🎣 Git Hooks triggered by Husky](#-git-hooks-triggered-by-husky)
  - [🚢 Versioning and Release](#-versioning-and-release)
- [📚 Documentation](#-documentation)
- [🤝 Contribution](#-contribution)
- [📜 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

</details>

## 🚀 Packages

- cli: generate app config
- configs: build app config with:
  - Next.js Config
  - Next.js Plugins Config
  - App Providers Config
  - Server Config
  - Generators Config
  - Site Metadata Config
  - Navigation Config
  - Ui Config
- contentLayer:
- seo:
  - JSON-LD Schema helpers.
  - SEO configuration settings.
- types: types for app config

## 🚀 Features

### ✅ Completed Features

- **🛠️ Project Initialization:**

  - 📂 Repository Setup with essential documents like LICENSE, README, and the project banner.
  - 📚 Initial Documentation including a detailed roadmap, contributing guidelines, and a code of conduct.
  - 🔄 Contributor Guidelines with documented commit conventions and workflow.

- **👩‍💻 Development Environment Setup:**
  - 🚀 Turbo & DevTools Setup for an efficient development workflow.
  - 🧹 Linting and Formatting Setup with ESLint and Prettier.
  - 🏷️ Versioning, Change Log & Release Scripts powered by Changesets.
  - 🔄 Continuous Integration Setup with Vercel CI and basic GitHub Actions.
  - 📜 Development Scripts for various project maintenance tasks.
  - 🎣 Git Hooks for pre-commit and pre-push actions ensuring code quality.

### 🛠️ Upcoming Features

- **🖥️ Next.js Setup:**

  - 🔐 Setting up Next.js and implementing NextJs13 appRouter along with security settings.

- **🧠 Core Functionalities:**

  - ⚙️ App Config for managing static and dynamic URLs.
  - 📝 Markdown DB & Database Backend with SQLite setup and Frontmatter integration.

- **🎨 User Interface & Pages:**

  - 🖼️ Implementing PandaCSS & ParkUI for UI framework.
  - 🧩 Creating essential UI components and web pages including basic layout components, OG image generation, MDX components, and more.

- **🔍 SEO & Advanced Features:**

  - 📈 Implementing basic SEO metadata, OpenGraph setup, and JSON-LD integration.
  - 🚀 Working towards achieving a 100 Lighthouse score with bundle analysis.

- **👥 User Engagement & Internationalization:**
  - 💬 Integrating a commenting system and social sharing buttons.
  - 🌐 Setting up an internationalization (i18n) framework for multiple language support.

Feel free to explore the roadmap, contribute, or provide feedback to help us improve. Together, let's create a vibrant and inclusive digital garden for everyone! 🌱

## 🚀 Getting Started

```sh
bunx degit mugencraft/turbopandaforge my-app
cd my-app
bun install
```

To run:

```sh
bun dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Now, you can access the project at `http://localhost:3002/`. The page will reload automatically as you make changes
to the code. Dive in and start exploring the project! 🧑‍💻

## 🛠 Scripts Overview

In order to maintain code quality and consistency, the project utilizes various scripts managed by pnpm:

### 💻 Development

- **`dev`**: Starts the development server using [`turbo dev`](https://turbo.build/repo/docs/handbook/dev) with the flags `--no-cache` and `--continue` to disable cache and continue running other tasks even if one fails.
- **`build`**: Propagates the [`turbo build`](https://turbo.build/repo/docs/handbook/building-your-app) command to build the project.
- **`clean`**: Propagates the `clean` action to all _packages_ and _apps_ in the monorepo to clean the build outputs.

### ✅ Code Quality and Testing

- **`lint:root`**: Runs [`ESLint`](https://eslint.org/) on root-level **JavaScript** and **JSON** files.
- **`lint`**: Runs `pnpm lint:root` and then propagates the `lint` action to all packages and apps within the monorepo.
- **`format:root`**: Checks formatting using [`Prettier`](https://prettier.io/) for root-level JavaScript and JSON files.
- **`format`**: Runs `pnpm format:root` and then propagates the `format` action to all packages and apps within the monorepo.
- **`format:root:write`**: Applies formatting using `Prettier` for root-level JavaScript and JSON files.
- **`format:write`**: Runs `pnpm format:root:write` and then propagates the `format:write` action to all packages and apps within the monorepo.
- **`test:all`**: Echoes a message indicating no tests to run at the moment and propagates the `test` action, it is also run by the `pre-commit` _git hook_.
- **`check:dedupe`**: Runs a check for duplicate dependencies in the project using [`pnpm dedupe`](https://pnpm.io/cli/dedupe), it is also run by the `pre-push` _git hook_.

### 🎣 [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) triggered by [Husky](https://typicode.github.io/husky/)

- **`pre-commit`**: Runs `lint-staged` to lint and format staged files, then propagates the `pre-commit` action to all packages and apps within the monorepo, and executes `pnpm test:all`.
- **`pre-push`**: Runs `pnpm check:dedupe` to check for duplicate dependencies, then propagates the `pre-push` action to all packages and apps within the monorepo.

### 🚢 Versioning and Release

- **`changeset`**: Triggers the [`changeset`](https://github.com/atlassian/changesets) command to manage changesets.
- **`version-packages`**: Executes the [`changeset version`](https://github.com/changesets/changesets/blob/main/docs/command-line-options.md#version) command to version the changed packages.
- **`release`**: Executes the `turbo build` command with a filter for docs, and then executes the [`changeset publish`](https://github.com/changesets/changesets/blob/main/docs/command-line-options.md#publish) command to publish the changes.

For further details on scripts and other configurations, refer to the `package.json` file at the root of the project.

## 📚 Documentation

Dive into TurboPandaForge with our [detailed documentation](./docs/README.md). It's your go-to guide to set up, customize, and deploy your digital garden.

## 🤝 Contribution

Make TurboPandaForge even better with your contributions! Start by reviewing our [contribution guidelines](./docs/contributing.md) and [code of conduct](./docs/code-of-conduct.md) to ensure a friendly and collaborative environment.

Quick links to get on board:

- **🗺 Planning & Progress:**

  - [Roadmap](./docs/roadmap.md): Our journey and major milestones ahead.
  - [Pipeline Roadmap](./docs/pipeline-roadmap.md): Delve into our development pipeline.

- **🛠 Contribution Protocols:**
  - [Commit Conventions](./docs/commit-conventions.md): Our commit message playbook for smooth collaborations.
  - [Workflow](./docs/workflow.md): Understand our code collaboration process.

Ready to contribute? Find an issue in the backlog, stick to our conventions, and dive into coding!

## 📜 License

TurboPandaForge is under the [MIT License](LICENSE), making it open and accessible.

## 🙌 Acknowledgments

- A hearty thanks to all contributors enriching this project.
- Eternity, as envisioned by Emanuele Severino, kindles the philosophical inspiration behind this endeavor.
