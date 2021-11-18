import { stdin, stdout } from 'process';
import { pipeline } from 'stream';
import { initArgumentsCli, argumentsCli } from './src/argumentsApp.js';
import { checkArgumentsCli } from './src/validation.js';
import { getpathSegments } from './src/fileSystem.js';
import {
  getReadStream,
  getWriteStream,
  getTransformStreamCaesarCipher,
} from './src/streams.js';

let readableStream;
let writeableStream;

initArgumentsCli();
checkArgumentsCli();

if (argumentsCli.input) {
  const pathToFile = getpathSegments(argumentsCli.input);
  readableStream = getReadStream(pathToFile);
} else {
  readableStream = stdin;
}

if (argumentsCli.output) {
  const getpathSegments = getpathSegments(argumentsCli.output);
  writeableStream = getWriteStream(getpathSegments);
} else {
  writeableStream = stdout;
}

const transform = getTransformStreamCaesarCipher();

pipeline(readableStream, transform, writeableStream, (err) => {
  console.log(`Error: ${err}`);
});
