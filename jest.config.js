module.exports = {
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**', '!**/src/pages/*.tsx'],
    coveragePathIgnorePatterns: ['/src/@types'],
    coverageDirectory: '<rootDir>/src/__tests__/coverage',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec|tests))(\\.ts?$|\\.tsx?$)',
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom'
};
