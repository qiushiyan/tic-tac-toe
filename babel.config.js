module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@types": "./src/types",
            "@config": "./src/config",
            "@assets": "./assets",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
