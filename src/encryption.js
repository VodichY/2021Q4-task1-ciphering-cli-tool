const upperCaseAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function encryptСhunckCaesarCipher(shift, action, chunckStringified) {
  return codingRot8CaesarCipher(shift, action, chunckStringified);
}

function encryptСhunckRot8(shift, action, chunckStringified) {
  return codingRot8CaesarCipher(shift, action, chunckStringified);
}

function encryptСhunckAtbashСipher(chunckStringified) {
  return codingAtbashСipher(chunckStringified);
}

function codingRot8CaesarCipher(shift, action, chunckStringified) {
  let codingText = [];
  chunckStringified
    .toString()
    .split('')
    .forEach((letter) => {
      let letterIndex = upperCaseAlphabet.indexOf(letter.toUpperCase());
      if (letterIndex < 0) {
        codingText.push(letter);
      } else {
        let newLetter = getCodingLetterRot8CaesarCipher(shift, action, letterIndex);
        codingText.push(
          letter == letter.toUpperCase() ? newLetter : newLetter.toLowerCase()
        );
      }
    });
  return codingText.join('');
}

function getCodingLetterRot8CaesarCipher(shift, action, letterIndex) {
  let newLetterIndex = 0;
  if (action == 'decode') {
    newLetterIndex = (letterIndex - +shift) % upperCaseAlphabet.length;
  } else if (action == 'encode') {
    newLetterIndex = (letterIndex + +shift) % upperCaseAlphabet.length;
  }
  if (newLetterIndex < 0) {
    newLetterIndex = upperCaseAlphabet.length + newLetterIndex;
  }
  const newLetter = upperCaseAlphabet[newLetterIndex];
  return newLetter;
}

function codingAtbashСipher(chunckStringified) {
  let codingText = [];
  chunckStringified
    .toString()
    .split('')
    .forEach((letter) => {
      let letterIndex = upperCaseAlphabet.indexOf(letter.toUpperCase());
      if (letterIndex < 0) {
        codingText.push(letter);
      } else {
        let newLetter = getCodingLetterAtbashСipher(letterIndex);
        codingText.push(
          letter == letter.toUpperCase() ? newLetter : newLetter.toLowerCase()
        );
      }
    });
  return codingText.join('');
}

function getCodingLetterAtbashСipher(letterIndex) {
  const newLetterIndex = (upperCaseAlphabet.length - letterIndex -1);
  const newLetter = upperCaseAlphabet[newLetterIndex];
  return newLetter;
}

export {
  encryptСhunckCaesarCipher,
  encryptСhunckRot8,
  encryptСhunckAtbashСipher,
  getCodingLetterAtbashСipher,
  codingAtbashСipher,
  getCodingLetterRot8CaesarCipher,
  codingRot8CaesarCipher,
};
