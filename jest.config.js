const ignoredPaths = [
  "<rootDir>/node_modules",
  "<rootDir>/dist",
  "<rootDir>/coverage",
  "<rootDir>/src/setup-jest.ts",
  "<rootDir>/src/polyfills.ts",
];

module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  moduleNameMapper: {},
  collectCoverage: true,
  coverageReporters: ["html"],
  coverageDirectory: "coverage/",
  testPathIgnorePatterns: ignoredPaths,
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
  coveragePathIgnorePatterns: ignoredPaths,
  modulePathIgnorePatterns: ignoredPaths,
  resetModules: false,
};
