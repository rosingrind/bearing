import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';

const bearing = {
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
      declarationDir: './dist',
    }),
  ],
  external: ['react', 'react-dom', 'classnames/bind'],
};

const easings = {
  input: './src/easings/index.ts',
  output: {
    dir: './easings',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    typescript({
      include: ['./src/easings/**'],
      rootDir: './src/easings',
      declarationDir: './easings',
    }),
  ],
};

const configs = [bearing, easings];

export default configs;
