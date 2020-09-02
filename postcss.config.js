import autoprefixer from 'autoprefixer';
import normalize from 'postcss-normalize';

export const plugins = [autoprefixer(), normalize({ forceImport: true })];
