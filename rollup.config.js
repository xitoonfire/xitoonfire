import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.tsx", // Entry point
  output: [
    {
      file: "dist/index.js", // CommonJS output
      format: "cjs",
      sourcemap: true,
      exports: "named", // Ensure named exports
    },
    {
      file: "dist/index.esm.js", // ESM output
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically externalize peer dependencies
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"], // Include .tsx files
    }),
    commonjs(), // Convert CommonJS modules to ES6
    typescript({
      tsconfig: "tsconfig.app.json", // Use the appropriate tsconfig
      useTsconfigDeclarationDir: true, // Output .d.ts files in the declarationDir specified in tsconfig
      clean: true, // Clean previous build artifacts
      declaration: true, // Generate .d.ts files
      declarationDir: "dist/types", // Specify the output directory for .d.ts files
    }),
  ],
  external: ["react", "react-dom"], // Prevent bundling React
};