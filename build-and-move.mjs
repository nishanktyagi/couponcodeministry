import pkg from 'fs-extra';
const { emptyDirSync, ensureDirSync, copySync, removeSync, readdirSync } = pkg;
import { resolve, dirname } from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tempBuildDir = resolve(__dirname, 'temp-build');
const destDir = resolve('C:/Users/HP/Documents/ccm-build');
const gitDir = resolve(destDir, '.git');

// Function to copy files excluding the .git directory
const copyFilesExcludingGit = (sourceDir, targetDir) => {
  const items = readdirSync(sourceDir, { withFileTypes: true });

  items.forEach(item => {
    const srcPath = resolve(sourceDir, item.name);
    const destPath = resolve(targetDir, item.name);

    if (item.isDirectory()) {
      if (item.name !== '.git') { // Skip copying the .git directory
        ensureDirSync(destPath);
        copyFilesExcludingGit(srcPath, destPath);
      }
    } else {
      pkg.copyFileSync(srcPath, destPath);
    }
  });
};

emptyDirSync(tempBuildDir);

exec('vite build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build failed: ${error}`);
    return;
  }
  
  console.log(stdout);
  console.error(stderr);

  ensureDirSync(destDir);
  
  // Ensure .git directory is preserved
  if (!pkg.existsSync(gitDir)) {
    copyFilesExcludingGit(tempBuildDir, destDir);
  } else {
    copyFilesExcludingGit(tempBuildDir, destDir);
    // Remove temp build dir after copying
    removeSync(tempBuildDir);
  }

  console.log(`Build moved to ${destDir}`);
});
