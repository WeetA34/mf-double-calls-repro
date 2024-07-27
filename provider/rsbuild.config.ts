import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  // dev: {
  //   // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
  //   assetPrefix: 'http://localhost:3001',
  // },
  plugins: [pluginVue()],
  server: {
    port: 3001,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      config.output!.uniqueName = 'provider';
      appendPlugins([
        new ModuleFederationPlugin({
          dts: {
            generateTypes: {
              compilerInstance: 'vue-tsc',
            },
          },
          getPublicPath: 'function() {return window.__PROVIDER_PUBLIC_PATH__}',
          name: 'provider',
          exposes: {
            './date': './src/Date.vue',
          },
          shared: ['vue'],
        }),
      ]);
    },
  },
});
