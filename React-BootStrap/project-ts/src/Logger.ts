export function isConsole(method: string): boolean {
  const consoleAvailable = window.hasOwnProperty('console') ? console.hasOwnProperty(method) : false;
  return process.env.NODE_ENV === 'development' ? consoleAvailable : false;
}

export class Logger {
  static error = isConsole('error') ? console.error.bind(console) : () => {};
  static debug = isConsole('debug') ? console.debug.bind(console) : () => {};
  static info = isConsole('info') ? console.info.bind(console) : () => {};
  static log = isConsole('log') ? console.log.bind(console) : () => {};
  static warn = isConsole('warn') ? console.warn.bind(console) : () => {};
}
