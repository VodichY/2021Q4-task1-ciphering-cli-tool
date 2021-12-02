import { initArgumentsCli } from '../src/argumentsApp.js';
import {
  checkArgumentsCli,
  checkConfig,
  checkArgumentsDuplicates,
  checkFileInputOutput,
} from '../src/validation.js';
import { open, unlink } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

afterEach(() => {
  process.argv.length = 0;
});

describe('validation group', () => {
  test('check function checkArgumentsDuplicates', () => {
    process.argv.push('-c');
    process.argv.push('C1-R0-C0-A');
    initArgumentsCli();
    expect(checkArgumentsDuplicates()).toEqual(true);
  });

  test('check function checkConfig', () => {
    process.argv.push('-c');
    process.argv.push('C1-R0-C0-A');
    initArgumentsCli();
    expect(checkConfig()).toEqual(true);
  });

  test('check function checkArgumentsCli', () => {
    process.argv.push('-c');
    process.argv.push('C1-R0-C0-A');
    process.argv.push('-i');
    process.argv.push('./input.txt');
    initArgumentsCli();
    open(resolve(cwd(), './input.txt'), 'w', () => {});
    expect(checkArgumentsCli()).toEqual(true);
    unlink(resolve(cwd(), './input.txt'), () => {});
  });

  test('check function checkFileInputOutput', () => {
    process.argv.push('-c');
    process.argv.push('C1-R0-C0-A');
    process.argv.push('-i');
    process.argv.push('./input.txt');
    process.argv.push('-o');
    process.argv.push('./output.txt');
    initArgumentsCli();
    open(resolve(cwd(), './input.txt'), 'w', () => {});
    open(resolve(cwd(), './output.txt'), 'w', () => {});
    expect(checkFileInputOutput()).not.toBeNull();
    unlink(resolve(cwd(), './input.txt'), () => {});
    unlink(resolve(cwd(), './output.txt'), () => {});
  });
});
