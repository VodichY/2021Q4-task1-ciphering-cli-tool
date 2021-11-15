import { argumentsCli, configValuesPossible } from "./arguments.js";

function checkArgumentsCli() {
  if (!argumentsCli.config) {
    console.error("Invalid option config value: config is empty");
    process.exit(1);
  }

  if (!isСorrectConfig(argumentsCli.config)) {
  }
  
}

function isСorrectConfig(config) {
  const arrConfig = config.split("-");
  arrConfig.forEach((element) => {
    if (!configValuesPossible.includes(element)) {
      return false;
    }
  });
  return true;
}

export { checkArgumentsCli };
