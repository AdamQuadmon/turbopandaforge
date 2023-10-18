# TurboPandaForge Development Roadmap

## Milestone 1: Project Initialization

### Epic: Setup `@turbopandaforge/tsconfig` Package

#### 1. **Initialize `@turbopandaforge/tsconfig` Package**

- :ballot_box_with_check: **Task:** Create a new package directory for `@turbopandaforge/tsconfig`.

  - :memo: **Commit Message:** "Init: Create @turbopandaforge/tsconfig package directory."

- :ballot_box_with_check: **Task:** Setup initial `package.json` file in the `@turbopandaforge/tsconfig` package directory.
  - :memo: **Commit Message:** "Setup: Initialize package.json for @turbopandaforge/tsconfig."

#### 2. **Develop Base Configuration**

- :ballot_box_with_check: **Task:** Create `tsconfig.base.json` with general settings.

  - :memo: **Commit Message:** "Feat: Create tsconfig.base.json with general settings."

- :ballot_box_with_check: **Task:** Document `tsconfig.base.json` settings in README.
  - :memo: **Commit Message:** "Doc: Describe tsconfig.base.json settings in README."

#### 3. **Develop Extended Configurations**

- :ballot_box_with_check: **Task:** Create extended configuration files like `tsconfig.next.json`, `tsconfig.node.json`, etc.

  - :memo: **Commit Message:** "Feat: Create extended tsconfig files."

- :ballot_box_with_check: **Task:** Document extended configuration settings in README.
  - :memo: **Commit Message:** "Doc: Describe extended tsconfig settings in README."

#### 4. **Testing and Validation**

- :black_square_button: **Task:** Validate the tsconfig settings with different project setups.

  - :memo: **Commit Message:** "Test: Validate tsconfig settings."

- :black_square_button: **Task:** Make necessary adjustments based on testing feedback.
  - :memo: **Commit Message:** "Fix: Adjust tsconfig settings based on feedback."

#### 5. **Documentation and Release**

- :black_square_button: **Task:** Finalize README documentation.

  - :memo: **Commit Message:** "Doc: Finalize README documentation."

- :black_square_button: **Task:** Release `@turbopandaforge/tsconfig` package.
  - :memo: **Commit Message:** "Release: Publish @turbopandaforge/tsconfig v1.0.0."

### Epic: Core Setup

#### 1. **Setup NextJs**

- [ ] :package: **Task:** Install the necessary Next.js dependencies using pnpm.

  - **Commit Message:** "Setup: Install Next.js dependencies."

- [ ] :file_folder: **Task:** Set up the `pages` directory with a basic `index.js` file.

  - **Commit Message:** "Setup: Initialize pages directory with index.js."

- [ ] :computer: **Task:** Test the setup by running `pnpm dev` and visiting `localhost:3000`.
  - **Commit Message:** "Setup: Test initial NextJs setup."

#### 2. **Implement NextJs13 appRouter**

- [ ] :file_folder: **Task:** Create a `routes.js` file to hold your application's routes.

  - **Commit Message:** "Setup: Initialize appRouter with routes.js."

- [ ] :link: **Task:** Set up a basic routing structure in your application.

  - **Commit Message:** "Setup: Implement basic routing structure."

- [ ] :mag: **Task:** Test the routing setup by navigating to different pages.
  - **Commit Message:** "Setup: Test basic routing functionality."

#### 3. **Configure base security settings**

- [ ] :closed_lock_with_key: **Task:** Configure Content Security Policy (CSP) headers.

  - **Commit Message:** "Setup: Configure Content Security Policy."

- [ ] :shield: **Task:** Set up basic security headers like X-Content-Type-Options, X-Frame-Options, etc.
  - **Commit Message:** "Setup: Implement basic security headers."

#### 4. **Directory Structure Setup (pages, components, public, styles, etc.)**

- [ ] :file_folder: **Task:** Set up the `components`, `public`, and `styles` directories.

  - **Commit Message:** "Setup: Initialize core directory structure."

- [ ] :art: **Task:** Create some basic components and styles to test the directory setup.

  - **Commit Message:** "Setup: Create basic components and styles."

- [ ] :mag: **Task:** Test the directory setup by importing and using components and styles in your pages.
  - **Commit Message:** "Setup: Test directory structure setup."
