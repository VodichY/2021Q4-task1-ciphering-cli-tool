import { createReadStream, createWriteStream } from 'fs';
import { Transform } from 'stream';
import { encryptСhunckCaesarCipher, encryptСhunckRot8, encryptСhunckAtbashСipher } from './encryption.js';
import { argumentsCli } from './argumentsApp.js';

function getReadStream(pathToFile) {
  return createReadStream(pathToFile, 'utf8');
}

function getWriteStream(pathToFile) {
  return createWriteStream(pathToFile, {
    flags: 'r+'
  });
}

function getTransformStreamCaesarCipher(shift, action) {
  return new Transform({
    transform(chunck, enc, cb) {
      const chunckStringified = chunck.toString().trim();
      const encryptedchunck = encryptСhunckCaesarCipher(
        shift,
        action,
        chunckStringified
      );
      cb(null, encryptedchunck + '\n');
    },
  });
}

function getTransformStreamRot8(shift, action) {
  return new Transform({
    transform(chunck, enc, cb) {
      const chunckStringified = chunck.toString().trim();
      const encryptedchunck = encryptСhunckRot8(
        shift,
        action,
        chunckStringified
      );
      cb(null, encryptedchunck + '\n');
    },
  });
}

function getTransformStreamAtbashСipher() {
  return new Transform({
    transform(chunck, enc, cb) {
      const chunckStringified = chunck.toString().trim();
      const encryptedchunck = encryptСhunckAtbashСipher(chunckStringified);
      cb(null, encryptedchunck + '\n');
    },
  });
}

function getArrayTransform() {
  let arrayTransform = [];
  const configValueArray = argumentsCli.config.split('-');
  configValueArray.forEach((element) => {
    if (element === 'C1') {
      arrayTransform.push(getTransformStreamCaesarCipher(1, 'encode'));
    } else if (element === 'C0') {
      arrayTransform.push(getTransformStreamCaesarCipher(1, 'decode'));
    } else if (element === 'R1') {
      arrayTransform.push(getTransformStreamRot8(8, 'encode'));
    } else if (element === 'R0') {
      arrayTransform.push(getTransformStreamRot8(8, 'decode'));
    } else if (element === 'A') {
      arrayTransform.push(getTransformStreamAtbashСipher());
    }
  });
  return arrayTransform;
}

export {
  getReadStream,
  getWriteStream,
  getTransformStreamCaesarCipher,
  getTransformStreamRot8,
  getArrayTransform,
};
