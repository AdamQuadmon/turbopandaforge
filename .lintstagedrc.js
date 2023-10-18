module.exports = {
  '!{apps,packages}/**/*.{js,json}': [
    'pnpm lint:root',
    'pnpm format:root',
    // lint-staged will automatically do git add for the files processed
  ],
};
