import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind from 'stencil-tailwind';

export const config: Config = {
  namespace: 'shared',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/shared/dist',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/shared/dist',
    },
  ],
  plugins: [
    sass(),
    tailwind(),
  ],
};
