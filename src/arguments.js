import { argv as argvArguments} from 'process';
const argumentsCli = {
  config: '',
  input: '',
  output: '',
};
const configArgumentsPossible = ['-c', '--config', '-i', '--input', '-o', '--output'];
const configValuesPossible = ['C1', 'R0', 'A'];

function initArgumentsCli() {
  argvArguments.forEach((element) => {
    
    if (element === '-c' || element === '--config') {
      argumentsCli.config = getArgumentCliConfig(element);
    }

    if (element === '-i' || element === '--input') {
      argumentsCli.input = getArgumentCliConfig(element);
    }

    if (element === '-o' || element === '--output') {
      argumentsCli.output = getArgumentCliConfig(element);
    }
  });
}

function getArgumentCliConfig(element) {
  const indexArgument = argvArguments.indexOf(element);
  if (indexArgument !== -1) {
    return argvArguments[indexArgument + 1];
  }
}

export { initArgumentsCli, argumentsCli, configValuesPossible, argvArguments, configArgumentsPossible};
