import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
	// dev: {
	//   // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
	//   assetPrefix: 'http://localhost:3001',
	// },
	plugins: [
		pluginModuleFederation({
			dts: {
				generateTypes: {
					compilerInstance: "vue-tsc",
				},
			},
			name: "producer",
			exposes: {
				"./date": "./src/Date.vue",
			},
			shared: ["vue"],
		}),
		pluginVue(),
	],
	server: {
		port: 3001,
	},
	// These are the default values
	// tools: {
	// 	rspack: {
	// 		output: {
	// 			publicPath: "auto",
	// 			uniqueName: "producer",
	// 		},
	// 	},
	// },
});
