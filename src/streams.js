import { createReadStream, createWriteStream } from 'fs';
import { Transform } from 'stream';
import { encryptСhunckCaesarCipher, encryptСhunckRot8 } from './encryption.js';

function getReadStream(pathToFile) {
  return createReadStream(pathToFile, 'utf8');
}

function getWriteStream(pathToFile) {
  return createWriteStream(pathToFile, {
    encoding: 'utf8',
    flags: 'a+',
  });
}

function getTransformStreamCaesarCipher() {
  return new Transform({
    transform(chunck, enc, cb) {
      const chunckStringified = chunck.toString().trim();
      const encryptedchunck = encryptСhunckCaesarCipher(chunckStringified);
      cb(null, encryptedchunck + '\n');
    },
  });
}

function getTransformStreamRot8() {
  return new Transform({
    trasform(chunck, enc, cb) {
      const chunckStringified = chunck.toString().trim();
      const encryptedchunck = encryptСhunckRot8(chunckStringified);
      cb(null, encryptedchunck + '\n');
    },
  });
}

export {
  getReadStream,
  getWriteStream,
  getTransformStreamCaesarCipher,
  getTransformStreamRot8,
};
