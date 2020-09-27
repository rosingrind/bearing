import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    postcss({
      plugins: [autoprefixer],
      extract: false,
      writeDefinitions: false,
    }),
    typescript(),
  ],
  external: ['react', 'react-dom', 'classnames/bind'],
};
