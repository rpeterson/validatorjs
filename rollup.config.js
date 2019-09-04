import { uglify } from 'rollup-plugin-uglify';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import brfs from 'brfs';

export default {
  input: './src/validator.js',
  plugins: [uglify(), browserifyPlugin(brfs)],
  output: {
    file: './dist/validator.js',
    format: 'iife'
  }
};
