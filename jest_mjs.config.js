// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: "node",
  testRegex: ".*_test2\\.mjs$",
  transform: {
    ".*\\.mjs$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "json", "jsx", "node", "mjs"]
};
