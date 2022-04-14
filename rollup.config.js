import { readdirSync } from "fs";
import path from "path";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";
// export default [
//   {
//     input: "./src/lib/index.js",
//     output: [
//       {
//         file: "dist/index.js",
//         format: "cjs",
//       },
//       {
//         file: "dist/index.es.js",
//         format: "es",
//         exports: "named",
//       },
//     ],
//     plugins: [
//       babel({
//         exclude: "node_modules/**",
//         presets: ["@babel/preset-react"],
//       }),
//       external(),
//       resolve(),
//       terser(),
//     ],
//   },
// ];

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".json"];
const CODES = [
  "THIS_IS_UNDEFINED",
  "MISSING_GLOBAL_NAME",
  "CIRCULAR_DEPENDENCY",
];

const getChunks = (URI) =>
  readdirSync(path.resolve(URI))
    .filter((x) => x.includes(".js"))
    .reduce((a, c) => ({ ...a, [c.replace(".js", "")]: `src/lib/${c}` }), {});

const discardWarning = (warning) => {
  if (CODES.includes(warning.code)) {
    return;
  }

  console.error(warning);
};

const env = process.env.NODE_ENV;

const commonPlugins = () => [
  external({
    includeDependencies: true,
  }),
  postcss({
    plugins: [],
    minimize: true,
  }),
  babel({
    babelrc: false,
    presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
    extensions: EXTENSIONS,
    exclude: "node_modules/**",
  }),
  commonjs({
    include: /node_modules/,
  }),
  replace({ "process.env.NODE_ENV": JSON.stringify(env) }),
  resolve({
    extensions: EXTENSIONS,
    preferBuiltins: false,
  }),
];

export default [
  {
    onwarn: discardWarning,
    input: "src/lib/index.js",
    output: {
      esModule: false,
      file: "dist/index.js",
      format: "es",
      // name: "silkyCharts",
      exports: "named",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "styled-components": "styled",
      },
    },
    plugins: [...commonPlugins(), env === "production" && terser()],
  },
  {
    onwarn: discardWarning,
    input: "src/lib/index.js", //getChunks("src/lib/index.js"),
    output: [
      { dir: "esm", format: "esm", sourcemap: true },
      { dir: "cjs", format: "cjs", exports: "named", sourcemap: true },
    ],
    plugins: commonPlugins(),
  },
];
