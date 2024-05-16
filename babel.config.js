module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ".",
        alias: {
          '@components': './src/components',
        },
      },
    ],
    'react-native-classname-to-style',
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['scss', 'sass'],
      },
    ],
  ],
}
