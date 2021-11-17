import { exit } from 'process';
import { constants } from 'fs';
import { checkIsFileExist } from './fileSystem.js';
import {
  argumentsCli,
  configValuesPossible,
  argvArguments,
} from './arguments.js';

function checkArgumentsCli() {
  let ckeckResult = true;

  if (argvArguments.length === 2) {
    console.error('Invalid option config value: argumets is empty\n');
    exit(1);
  }

  if (!checkArgumentsDuplicates()) {
    console.error('Invalid option config value: some argumets duplicates\n');
    exit(1);
  }

  if (!argumentsCli.config) {
    console.error('Invalid option config value: config is empty\n');
    exit(1);
  }

  if (!checkConfig()) {
    console.error("Invalid option config value: config isn't correct\n");
    exit(1);
  }

  if (!checkFileInputOutput()) {
    console.error("Invalid option input/output: config isn't correct\n");
    exit(1);
  }

  return ckeckResult;
}

function checkArgumentsDuplicates() {
  let ckeckResult = true;

  argumentsCli.forEach((element) => {
    console.log(element);
  });

  return ckeckResult;
}

function checkFileInputOutput() {
  let ckeckResult = true;
  if (
    argumentsCli.input &&
    !checkIsFileExist(argumentsCli.input, constants.R_OK)
  ) {
    console.error("Path input isn't correct\n");
    ckeckResult = false;
  }

  if (
    argumentsCli.input &&
    !checkIsFileExist(argumentsCli.output, constants.W_OK)
  ) {
    console.error("Path output isn't correct\n");
    ckeckResult = false;
  }
  return ckeckResult;
}

function checkConfig() {
  let ckeckResult = true;
  const arrConfig = argumentsCli.config.split('-');
  arrConfig.forEach((element) => {
    if (!configValuesPossible.includes(element)) {
      ckeckResult = false;
      console.error(`Option value of config: '${element}' isn't correct`);
    }
  });
  return ckeckResult;
}

export { checkArgumentsCli };
