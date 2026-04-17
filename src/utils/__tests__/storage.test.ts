import { describe, it, expect, beforeEach, vi } from "vitest";
import { save, load, clear } from "../storage";

beforeEach(() => {
  const store = new Map<string, string>();
  vi.stubGlobal("localStorage", {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  });
});

describe("storage", () => {
  it("round-trips a value", () => {
    save("score", 42);
    expect(load("score", 0)).toBe(42);
  });

  it("returns fallback when key is missing", () => {
    expect(load("missing", "default")).toBe("default");
  });

  it("clear removes the value", () => {
    save("tmp", { a: 1 });
    clear("tmp");
    expect(load("tmp", null)).toBeNull();
  });

  it("returns fallback on JSON parse failure", () => {
    localStorage.setItem("phaser-template:bad", "{not json");
    expect(load("bad", 99)).toBe(99);
  });
});
