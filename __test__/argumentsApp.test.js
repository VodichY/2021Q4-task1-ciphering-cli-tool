
import { argumentsCli } from '../src/argumentsApp.js';

describe('Name of the group', () => {
    
    const b = {
        config: '',
        input: '',
        output: '',
      };

    test('adds 1 + 2 to equal 3', () => {
        expect(argumentsCli).toEqual(b);
      }); 
});

