module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix ${filenames.map((fn) => JSON.stringify(fn)).join(" ")}`,
    `yarn prettier --write ${filenames.map((fn) => JSON.stringify(fn)).join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.map((fn) => JSON.stringify(fn)).join(" ")}`,
};
