import {dateUtils} from '@utils';
import {Duration, add, formatISO, sub} from 'date-fns';

const MOCKED_NOW = 1718301141;

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formateRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formateRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should return the difference in seconds', () => {
      expect(getDateISO({seconds: 30})).toBe('30 sec');
    });

    it('should return the difference in minutes', () => {
      expect(getDateISO({minutes: 30})).toBe('30 mim');
    });

    it('should return the difference in hours', () => {
      expect(getDateISO({hours: 3})).toBe('3 h');
    });

    it('should return the difference in days', () => {
      expect(getDateISO({days: 5})).toBe('5 d');
    });

    it('should return the difference in weeks', () => {
      expect(getDateISO({weeks: 3})).toBe('3 w');
    });

    it('should return the difference in months', () => {
      expect(getDateISO({months: 10})).toBe('10 mon');
    });

    it('should return the difference in years', () => {
      expect(getDateISO({months: 13})).toBe('20/12/1968');
    });
    it('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('22/01/1970');
    });
  });
});
