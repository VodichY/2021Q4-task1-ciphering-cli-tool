import {
  getArgumentCliConfig,
  initArgumentsCli,
} from '../src/argumentsApp.js';

describe('arguments app', () => {
  test('check getArgumentCliConfig', () => {
    const argCli = '-c';
    const paramConf = 'C1-C1-R0-A';
    process.argv.push(argCli);
    process.argv.push(paramConf);
    expect(getArgumentCliConfig(argCli)).toEqual(paramConf);
  });

  test('check initArgumentsCli', () => {
    process.argv.push('-c');
    process.argv.push('C1-C1-R0-A');
    process.argv.push('-i');
    process.argv.push('./input.txt');
    process.argv.push('-o');
    process.argv.push('./output.txt');
    const argumens = {
      config: 'C1-C1-R0-A',
      input: './input.txt',
      output: './output.txt',
    };
    expect(initArgumentsCli()).toEqual(argumens);
  });
});
