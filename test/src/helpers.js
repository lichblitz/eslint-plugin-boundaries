const path = require("path");
const RuleTester = require("eslint").RuleTester;

const settingsFilePath = (relativePath) => {
  return ["test", "fixtures", relativePath].join("/");
};

const relativeFilePath = (relativePath) => {
  return path.join("test", "fixtures", relativePath);
};

const absoluteFilePath = (relativePath) => {
  return path.resolve(process.cwd(), relativeFilePath(relativePath));
};

const settings = {
  "boundaries/types": ["components", "modules", "helpers"],
  "boundaries/alias": {
    helpers: settingsFilePath("src/helpers"),
    components: settingsFilePath("src/components"),
    modules: settingsFilePath("src/modules"),
  },
};

const createRuleTester = (extendSettings) => {
  const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 2015, sourceType: "module" },
    settings: {
      ...settings,
      ...extendSettings,
    },
  });

  return ruleTester;
};

module.exports = {
  createRuleTester,
  absoluteFilePath,
  relativeFilePath,
  settingsFilePath,
};
