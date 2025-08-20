import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const entryFile = resolve('src', 'main.ts');
const outFile = resolve('assets', 'build', 'main.js');

await mkdir(dirname(outFile), { recursive: true });

await build({
  entryPoints: [entryFile],
  bundle: true,
  outfile: outFile,
  format: 'esm',
  sourcemap: true,
  minify: true,
  target: ['es2019'],
});

