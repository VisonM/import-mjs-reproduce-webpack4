module.exports = {
  chainWebpack: (config) => {
    // config.resolve.alias["@vue/composition-api$"] =
    //   "@vue/composition-api/dist/vue-composition-api.mjs";
    config.plugin("custom").use({
      apply(compiler) {
        compiler.plugin("compilation", (compilation) => {
          compilation.plugin("succeed-module", (m) => {
            if (
              m.userRequest &&
              m.userRequest.indexOf("@vue/composition-api") > -1
            ) {
              console.log("succeed-module", m.userRequest);
            }
          });
        });
      },
    });
  },
};
