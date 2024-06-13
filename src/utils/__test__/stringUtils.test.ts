import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should have the first letter of each word is capitalized. ', () => {
      const name = stringUtils.capitalizeFirstLetter('John doe');

      expect(name).toBe('John Doe');
      expect(stringUtils.capitalizeFirstLetter('john doe')).toBe('John Doe');
      expect(stringUtils.capitalizeFirstLetter('jOHn dOe')).toBe('John Doe');
      expect(stringUtils.capitalizeFirstLetter('Matheus DINIZ')).toBe(
        'Matheus Diniz',
      );
    });

    it('should remove extra spaces after and before words', () => {
      expect(stringUtils.capitalizeFirstLetter(' John doe')).toBe('John Doe');
      expect(stringUtils.capitalizeFirstLetter('john doe ')).toBe('John Doe');
    });
  });
});
