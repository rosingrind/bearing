import { RollupOptions } from "rollup";

import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';

const bearing: RollupOptions = {
  input: './src/index.tsx',
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
      exclude: ['./src/easings/**'],
      rootDir: './src',
      declaration: true,
      declarationMap: true,
      declarationDir: './dist',
    }),
  ],
  external: ['react', 'react-dom', 'classnames/bind'],
};

const easings: RollupOptions = {
  input: './src/easings/index.ts',
  output: {
    dir: './easings',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    typescript({
      rootDir: './src/easings',
      declaration: true,
      declarationMap: true,
      declarationDir: './easings',
    }),
  ],
};

const configs: RollupOptions[] = [bearing, easings];

export default configs;
