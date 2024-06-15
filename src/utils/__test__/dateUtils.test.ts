import {dateUtils} from '@utils';
import {formatISO, sub} from 'date-fns';

const MOCKED_NOW = 1718301141;

describe('dateUtils', () => {
  describe('formateRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should return the difference in seconds', () => {
      const date = sub(Date.now(), {seconds: 30});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('30 sec');
    });

    it('should return the difference in minutes', () => {
      const date = sub(Date.now(), {minutes: 30});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('30 mim');
    });

    it('should return the difference in hours', () => {
      const date = sub(Date.now(), {hours: 3});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('3 h');
    });

    it('should return the difference in days', () => {
      const date = sub(Date.now(), {days: 5});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('5 d');
    });

    it('should return the difference in weeks', () => {
      const date = sub(Date.now(), {weeks: 3, hours: 5});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('3 w');
    });

    it('should return the difference in months', () => {
      const date = sub(Date.now(), {months: 10});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('10 mon');
    });

    it('should return the difference in years', () => {
      const date = sub(Date.now(), {months: 13});
      const dateISO = formatISO(date);

      expect(dateUtils.formateRelative(dateISO)).toBe('20/12/1968');
    });
  });
});
