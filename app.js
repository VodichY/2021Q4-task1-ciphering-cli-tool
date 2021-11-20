import { stdin, stdout } from 'process';
import { pipeline } from 'stream';
import { initArgumentsCli, argumentsCli } from './src/argumentsApp.js';
import { checkArgumentsCli } from './src/validation.js';
import { getpathSegments } from './src/fileSystem.js';
import {
  getReadStream,
  getWriteStream,
  getArrayTransform,
} from './src/streams.js';

let readableStream;
let writeableStream;

initArgumentsCli();
checkArgumentsCli();

if (argumentsCli.input) {
  const pathToFileInput = getpathSegments(argumentsCli.input);
  readableStream = getReadStream(pathToFileInput);
} else {
  readableStream = stdin;
}

if (argumentsCli.output) {
  const pathToFileOutput = getpathSegments(argumentsCli.output);
  writeableStream = getWriteStream(pathToFileOutput);
} else {
  writeableStream = stdout;
}

const arrayTransform = getArrayTransform();

pipeline(readableStream, ...arrayTransform, writeableStream, (err) => {
  console.log(`Error: ${err}`);
});
