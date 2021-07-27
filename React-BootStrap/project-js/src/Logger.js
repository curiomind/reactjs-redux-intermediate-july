/* eslint-disable prefer-spread */
/* eslint-disable no-console */

export const Logger = {
  log: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  error: (...arg) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(...arg);
    }
  },
  warn: (...arg) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...arg);
    }
  },
};
