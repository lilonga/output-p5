import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import cleanup from 'rollup-plugin-cleanup';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      compact:true,
      exclude: 'node_modules/**',
      plugins: [ "macros"]
    }),
    resolve(),
    commonjs(),
    terser(),
  ]
}
