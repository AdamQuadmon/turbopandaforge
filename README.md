<a id="readme-top"></a>

# 🐼 MugenCraft TurboPandaForge

Welcome to `turbopandaforge`, a robust Turborepo monorepo starter crafted by MugenCraft to forge personal digital gardens.
This starter is meticulously designed to serve as a comprehensive foundation for developers aiming to kickstart their
digital garden projects. Blending the essence of traditional craftsmanship with modern digital artistry, we strive to
create an enriching environment for community-driven development and learning.

![turbo panda banner](./turbopandaforge.png) _DALL·E 2023-10-16 21.08.01 - Steampunk-cyberpunk anime banner_ Amidst the
backdrop of a starry cosmos, a panda donning a retro glass helmet is intently working on an anvil.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>

- [📦 Packages](#-packages)
- [🤯 Features](#-features)
  - [✅ Completed Features](#-completed-features)
  - [🛠️ Upcoming Features](#️-upcoming-features)
- [🚀 Getting Started](#-getting-started)
- [📜 Scripts Overview](#-scripts-overview)
  - [💻 Development](#-development)
  - [✅ Code Quality and Testing](#-code-quality-and-testing)
- [⚙️ Workflow](#️-workflow)
  - [🎣 Git Hooks triggered by LeftHook](#-git-hooks-triggered-by-lefthook)
  - [🎠 GitHub Actions](#-github-actions)
  - [🚢 Versioning and Release](#-versioning-and-release)
  - [📰 Publishing to npm](#-publishing-to-npm)
  - [🗞️ GitHub Package Registry](#️-github-package-registry)
- [📚 Documentation](#-documentation)
- [🤝 Contribution](#-contribution)
- [📜 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

</details>

## 📦 Packages

- tsconfig: common typescript configuration
- types: common types
- utils: random stuff

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤯 Features

### ✅ Completed Features

- **🛠️ Project Initialization:**

  - 📂 Repository Setup with essential documents like LICENSE, README, and the project banner.
  - 📚 Initial Documentation including a detailed roadmap, contributing guidelines, and a code of conduct.
  - 🔄 Contributor Guidelines with documented commit conventions and workflow.

- **👩‍💻 Development Environment Setup:**
  - 🚀 Turbo & DevTools Setup for an efficient development workflow.
  - 🧹 Linting and Formatting Setup with Biome.
  - 🏷️ Versioning, Change Log & Release Scripts powered by Changesets.
  - 🔄 Continuous Integration Setup with Vercel CI.
  - 📜 Development Scripts for various project maintenance tasks.
  - 🎣 Git Hooks for pre-commit actions ensuring code quality.

### 🛠️ Upcoming Features

- **🖥️ Next.js Setup:**

  - 🔐 Setting up Next.js and implementing Next.Js 14 appRouter along with security settings.

- **🧠 Core Functionalities:**

  - ⚙️ App Config for managing static and dynamic URLs.
  - 📝 Markdown  and Frontmatter integration.

- **🎨 User Interface & Pages:**

  - 🖼️ Implementing PandaCSS & ParkUI for UI framework.
  - 🧩 Creating essential UI components and web pages including basic layout components, OG image generation, MDX components, and more.

- **🔍 SEO & Advanced Features:**

  - 📈 Implementing basic SEO metadata, OpenGraph setup, and JSON-LD integration.
  - 🚀 Working towards achieving a 100 Lighthouse score with bundle analysis.

- **👥 User Engagement & Internationalization:**
  - 💬 Integrating a commenting system and social sharing buttons.
  - 🌐 Setting up an internationalization (i18n) framework for multiple language support.

Feel free to explore the roadmap, contribute, or provide feedback to help us improve.
Together, let's create a vibrant and inclusive digital garden for everyone! 🌱

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

Now, you can access the project at `http://localhost:3002/`. The page will reload automatically as you make changes
to the code. Dive in and start exploring the project! 🧑‍💻

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📜 Scripts Overview

In order to maintain code quality and consistency, the project utilizes various scripts managed by bun.

Using [--filter][bun-filter], you can run the dev script in all packages in parallel:

- `bun --filter '*' dev`
- `bun --filter './apps/**' dev`
- `bun --filter './packages/**'`
- `bun --filter './packages/foo'`

**Bun CLI Docs**:

- [bunx][bunx]
- [bun run][bun-run]
- [bun install][bun-install]
  - [bun add][bun-add]
  - [bun remove][bun-remove]
  - [bun update][bun-update]
  - [bun update][bun-update]

To see the available actions run:

```sh
bun run
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 💻 Development

- **`dev`**: Starts the development server using `bun  --filter '*' dev`
- **`dev:turbo`**: Starts the development server using [`turbo dev`](https://turbo.build/repo/docs/crafting-your-repository/developing-applications) with the flags `--no-cache` and `--continue` to disable cache and continue running other tasks even if one fails.
- **`build`**: Propagates the [`turbo build`](https://turbo.build/repo/docs/handbook/building-your-app) command to build the project.
- **`clean`**: Propagates the `clean` action to all _packages_ and _apps_ in the monorepo to clean the build outputs.

### ✅ Code Quality and Testing

- **`check`**: Runs all the checks.
- **`check:case`**: Check word case
- **`check:knip`**: Check unused files
- **`check:updates`**: Check packages updates
- **`format-and-lint`**: Run Biome check
- **`format-and-lint:fix`**: Fix Biome issues
- **`typecheck`**: Check types
- **`prepare`**: Propagate prepare action

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⚙️ Workflow

### 🎣 [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) triggered by [LeftHook](https://github.com/evilmartians/lefthook)

You are free to install the **Git Hooks** to enforce standards, it's not mandatory.
Some coders don't like it and a wrong configuring will slow you down.

You can run checkers and linters.

If a check fails your commit fails.

If a linter change something automatically you can have unwanted behaviors.

To install, run:

```sh
lefthook install
```

To enforce hooks installation add this to `packages.json`:

```json
{
  "scripts": {
    "postinstall": "lefthook install"
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🎠 GitHub Actions

`CHANGELOG`, _versioning_ and _publishing_ is managed by **Changesets**

CI/CD and deploy will be managed by **Vercel**.

There is no need for **GitHub Actions**

### 🚢 Versioning and Release

When it's time to release, run:

```sh
bun changeset version
```

This command will bump the versions of the affected packages and update the
changelogs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 📰 Publishing to npm

To publish the packages to npm, run:

```sh
bun changeset publish
```

If you want to publish package to the public npm registry and make them publicly
available, this is already setup.

To publish packages to a private npm organization scope, **remove** the
following from each of the `package.json`'s

```diff
- "publishConfig": {
- "access": "public"
- },
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🗞️ GitHub Package Registry

See [Working with the npm registry][github-registry]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📚 Documentation

Dive into TurboPandaForge with our [detailed documentation](./docs/README.md). It's your go-to guide to set up,
customize, and deploy your digital garden.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contribution

Make TurboPandaForge even better with your contributions!
Start by reviewing our [contribution guidelines](./docs/contributing.md) and
[code of conduct](./docs/code-of-conduct.md) to ensure a friendly and collaborative environment.

Quick links to get on board:

- **🗺️ Planning & Progress:**

  - [Roadmap](./docs/roadmap.md): Our journey and major milestones ahead.

- **🛠️ Contribution Protocols:**
  - [Commit Conventions](./docs/commit-conventions.md): Our commit message playbook for smooth collaborations.
  - [Workflow](./docs/workflow.md): Understand our code collaboration process.

Ready to contribute? Find an issue in the backlog, stick to our conventions, and dive into coding!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📜 License

TurboPandaForge is under the [MIT License](LICENSE), making it open and accessible.

## 🙌 Acknowledgments

- A hearty thanks to all contributors enriching this project.
- Eternity, as envisioned by Emanuele Severino, kindles the philosophical inspiration behind this endeavor.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[bun-filter]: https://bun.sh/docs/cli/filter
[bunx]: https://bun.sh/docs/cli/bunx
[bun-run]: https://bun.sh/docs/cli/run
[bun-install]: https://bun.sh/docs/cli/install
[bun-add]: https://bun.sh/docs/cli/add
[bun-remove]: https://bun.sh/docs/cli/remove
[bun-update]: https://bun.sh/docs/cli/update

[github-registry]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file
