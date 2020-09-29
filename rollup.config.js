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
      outDir: './dist',
      declaration: true,
      declarationDir: './dist',
    }),
  ],
  external: ['react', 'react-dom', 'classnames/bind'],
};

const easings = {
  input: './src/easings/index.ts',
  output: {
    dir: './dist/easings',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [typescript({ outDir: './dist/easings' })],
};

const configs = [bearing, easings];

export default configs;
