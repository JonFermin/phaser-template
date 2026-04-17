export const log = import.meta.env.DEV
  ? console.log.bind(console, "[game]")
  : (..._args: unknown[]) => {};

export const warn = import.meta.env.DEV
  ? console.warn.bind(console, "[game]")
  : (..._args: unknown[]) => {};

export const error = console.error.bind(console, "[game]");
