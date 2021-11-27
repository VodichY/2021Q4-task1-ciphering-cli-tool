import {
  getCodingLetterAtbashСipher,
  codingAtbashСipher,
  getCodingLetterRot8CaesarCipher,
  codingRot8CaesarCipher,
} from '../src/encryption.js';

describe('encryption group', () => {
  test('check getCodingLetterAtbashСipher', () => {
    expect(getCodingLetterAtbashСipher(0)).toEqual('Z');
  });

  test('check codingAtbashСipher', () => {
    const valueDecode = 'This is secret. Message about "_" symbol!';
    const valueEncode = 'Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!';
    expect(codingAtbashСipher(valueDecode)).toEqual(valueEncode);
  });

  test('check getCodingLetterRot8CaesarCipher', () => {
    const letterDecode = 'B';
    const shift = '1';
    const action = 'encode';
    const letterIndex = 0;
    expect(getCodingLetterRot8CaesarCipher(shift, action, letterIndex)).toEqual(
      letterDecode
    );
  });

  test('check codingRot8CaesarCipher', () => {
    const valueDecode = 'This is secret. Message about "_" symbol!';
    const valueEncode = 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!';
    const shift = '1';
    const action = 'encode';
    expect(codingRot8CaesarCipher(shift, action, valueDecode)).toEqual(
      valueEncode
    );
  });
});
