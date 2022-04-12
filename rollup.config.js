import { babel } from "@rollup/plugin-babel";

const config = {
  input: "src/lib/index.js",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
  },
  external: [/@babel\/runtime/, "react", "react-dom"],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
};

export default config;
