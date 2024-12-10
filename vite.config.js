import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginGenerateOpensearch from "./scripts/vite-plugin-generate-opensearch";

export default ({ mode, command, ssrBuild, isSsrBuild }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };
  // console.log('process.env', mode, process.env)
  // https://vitejs.dev/config/
  return defineConfig({
    // base: process.env.VITE_BASE_URL,
    plugins: [vue(), vitePluginGenerateOpensearch()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
