module.exports = {
  extends: ["./tslint.json", "@commitlint/config-conventional"],
  rules: {
    "ordered-imports": true,
    "no-unused-declaration": true
  }
};
