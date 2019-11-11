module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@libs/(.*)$": "<rootDir>/src/libs/$1",
    "^@build/(.*)$": "<rootDir>/build/Release/$1"
  }
};
