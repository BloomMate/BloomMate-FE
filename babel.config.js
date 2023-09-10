module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@/atoms': './src/atoms',
          '@/utils': './src/utils',
          '@/layouts': './src/layouts',
          '@/providers': './src/providers',
          '@/hooks': './src/hooks',
        },
      },
    ],
  ],
};
