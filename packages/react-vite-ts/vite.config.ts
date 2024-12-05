import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "vite-remote",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: ["react", "react-dom"]
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })]
});
