import { cwd } from 'process';
import { resolve } from 'path';
import { accessSync } from 'fs';

function checkIsFileExist(fileName, mode) {
  try {
    let fileNamen = resolve(cwd(), fileName);
    accessSync(fileNamen, mode);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

export { checkIsFileExist };
