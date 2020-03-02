module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  moduleNameMapper: {
    "^@src/(.*)": "<rootDir>/src/$1",
    "^@libs/(.*)": "<rootDir>/src/libs/$1",
    "^@build/(.*)": "<rootDir>/build/Release/$1"
  }
};
