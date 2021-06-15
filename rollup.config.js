import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/js/main.js',
  output: {
    dir: 'public/assets/js/',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    terser({
      module: true,
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  },
};
