module.exports = {
  displayName: 'frontend',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/frontend',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/frontend/tsconfig.spec.json',
      babelConfig: 'apps/frontend/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/frontend/tsconfig.spec.json',
      babelConfig: 'apps/frontend/babel.config.js',
    },
  },
};
