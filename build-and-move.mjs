import pkg from 'fs-extra';
const { emptyDirSync, ensureDirSync, copySync, removeSync } = pkg;
import { resolve, dirname } from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tempBuildDir = resolve(__dirname, 'temp-build');
const destDir = resolve('C:/Users/HP/Documents/ccm-build');

emptyDirSync(tempBuildDir);

exec('vite build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build failed: ${error}`);
    return;
  }
  
  console.log(stdout);
  console.error(stderr);

  ensureDirSync(destDir);
  emptyDirSync(destDir);
  copySync(tempBuildDir, destDir);
  removeSync(tempBuildDir);

  console.log(`Build moved to ${destDir}`);
});