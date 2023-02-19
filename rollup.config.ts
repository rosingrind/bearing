import { RollupOptions } from "rollup";

import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';

const bearing: RollupOptions = {
  input: './src/bearing/index.tsx',
  output: {
    dir: './dist',
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
    typescript({
      rootDir: './src/bearing',
      declaration: true,
      declarationMap: true,
      declarationDir: './dist',
    }),
  ],
  external: ['react', 'react-dom', 'classnames/bind'],
};

const easing: RollupOptions = {
  input: './src/easing/index.ts',
  output: {
    dir: './easing',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    typescript({
      rootDir: './src/easing',
      declaration: true,
      declarationMap: true,
      declarationDir: './easing',
    }),
  ],
};

const configs: RollupOptions[] = [bearing, easing];

export default configs;
