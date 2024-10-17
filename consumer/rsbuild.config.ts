import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
	// dev: {
	//   // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
	//   assetPrefix: 'http://localhost:3000',
	// },
	html: {
		template: "./src/index.html",
	},
	plugins: [
		pluginModuleFederation({
			dts: {
				generateTypes: {
					compilerInstance: "vue-tsc",
				},
			},
			name: "consumer",
			shared: ["vue"],
		}),
		pluginVue(),
	],
	server: {
		port: 3000,
	},
});
