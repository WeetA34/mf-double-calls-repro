import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  // dev: {
  //   // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
  //   assetPrefix: 'http://localhost:3000',
  // },
  html: {
    template: './src/index.html',
  },
  plugins: [pluginVue()],
  server: {
    port: 3000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      config.output!.uniqueName = 'consumer';
      appendPlugins([
        new ModuleFederationPlugin({
          dts: {
            generateTypes: {
              compilerInstance: 'vue-tsc',
            },
          },
          name: 'consumer',
          shared: ['vue'],
        }),
      ]);
    },
  },
});
