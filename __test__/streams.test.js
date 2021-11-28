import { initArgumentsCli } from '../src/argumentsApp.js';
import * as streams from '../src/streams.js';

jest.mock('../src/streams.js', () => {
  const original = jest.requireActual('../src/streams.js');
  return {
    ...original,
    getArrayTransform: jest.fn(),
  };
});

test('should do a partial mock', () => {
  const resultArrayTransform = { getTransformStreamCaesarCipher: true };

  process.argv.push('-c');
  process.argv.push('C1');
  process.argv.push('-i');
  process.argv.push('./input.txt');
  process.argv.push('-o');
  process.argv.push('./output.txt');
  initArgumentsCli();

  streams.getArrayTransform.mockImplementation(() => ({
    getTransformStreamCaesarCipher: true,
  }));

  //   jest
  //     .spyOn(streams, 'getTransformStreamCaesarCipher')
  //     .mockReturnValue({ someObjectProperty: 42 });
  expect(streams.getArrayTransform()).toEqual(resultArrayTransform);
  expect(streams.getArrayTransform).toHaveBeenCalled();
 
});
