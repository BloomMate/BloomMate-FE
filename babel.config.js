module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
			'module:react-native-dotenv',
			{
				"envName": "APP_ENV",
				"moduleName": "@env",
				"path": ".env",
				"blocklist": null,
				"allowlist": null,
				"safe": false,
				"allowUndefined": false,
				"verbose": false
			},
		],
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
          '@/dummy-data': './src/dummy-data',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
