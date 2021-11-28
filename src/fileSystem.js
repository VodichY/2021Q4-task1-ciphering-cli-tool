import { cwd } from 'process';
import { resolve } from 'path';
import { accessSync } from 'fs';

function checkIsFileExist(fileName, mode) {
  try {
    let pathSegments = getpathSegments(fileName);
    accessSync(pathSegments, mode);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

function getpathSegments(fileName) {
  return resolve(cwd(), fileName);
}

export { checkIsFileExist, getpathSegments};
