const PREFIX = "phaser-template:";

export function save<T>(key: string, value: T) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // localStorage may be disabled (privacy mode, quota). Fail silently.
  }
}

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function clear(key: string) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}
