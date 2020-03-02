module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src/"],
          ["@libs", "./src/libs/"],
          ["@build", "./build/Release/"]
        ],
        extensions: [".ts", ".json"]
      }
    }
  }
};
