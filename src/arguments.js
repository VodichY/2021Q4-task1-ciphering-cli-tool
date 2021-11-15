import { argv } from 'process';
const argumentsCli = {
  nodePath: '',
  appPath: '',
  config: '',
  input: '',
  output: ''
};
const configValuesPossible = ['C1','R0','A'];

function initArgumentsCli() {
  argumentsCli.nodePath = argv[0];
  argumentsCli.appPath = argv[1];

  argv.forEach((element) => {
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
  let argumentCli = "";
  const indexArgument = argv.indexOf(element);

  if (indexArgument !== -1) {
    argumentCli = argv[indexArgument + 1];
  }

  return argumentCli;
}

export { initArgumentsCli, argumentsCli, configValuesPossible};
