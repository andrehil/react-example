import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "transform": {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  // moduleNameMapper: {
  //   // "^.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  //   '^.+\\.(svg|css|less|sass|scss)$': 'identity-obj-proxy',
  // }
};

export default config;