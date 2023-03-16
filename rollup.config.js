import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      dir: 'dist',
    },
    external: ['readline'],
    plugins: [typescript({
      target: 'es6',
    }), resolve()],
  },
];
