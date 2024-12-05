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
  plugins: [react(), withZephyr({ mfConfig })],
  build: {
    target: "chrome89",
    modulePreload: {
      resolveDependencies: (_, deps: string[]) => {
        // Only preload React packages and non-federated modules
        return deps.filter((dep) => {
          const isReactPackage =
            dep.includes("react") || dep.includes("react-dom");
          const isNotRemoteEntry = !dep.includes("remoteEntry.js");

          return isReactPackage && isNotRemoteEntry;
        });
      }
    }
  }
});
