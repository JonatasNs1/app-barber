/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 * 
 * @format
 */

module.exports = {
    transformer:{
        getTransFormOptions: async () =>({
            transform:{
                experimentalImportSupport:false,
                inlineRequires:false,
            },
        }),
    },
};

const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    getTransFormOptions: async () =>({
        transform:{
            experimentalImportSupport:false,
            inlineRequires:false,
        },
    }),
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();