import { checkIsFileExist } from '../src/fileSystem.js';
import { constants } from 'fs';

describe('fileSystem  group', () => {
  console.error = jest.fn();
  //expect(console.error).toHaveBeenCalled();
  test('check checkIsFileExist', () => {
    const pathToFile = './input.txt';
    expect(checkIsFileExist(pathToFile, constants.R_OK)).toEqual(false);
  });
});
