import {format, parseISO, differenceInSeconds} from 'date-fns';

const formateRelative = (dateISO: string): string => {
  const date = parseISO(dateISO);
  const now = Date.now();

  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 0) {
    return format(date, 'dd/MM/yyyy');
  }

  if (diffInSeconds < 60) {
    return `${diffInSeconds} sec`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} mim`;
  }

  const diffInHours = Math.round(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.round(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} d`;
  }

  const diffInWeeks = Math.round(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} w`;
  }

  const diffInMonths = Math.round(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} mon`;
  }

  return format(date, 'dd/MM/yyyy');
};

export const dateUtils = {formateRelative};
