// This file runs before any page is rendered — safe place to patch globals.
// Fixes: "localStorage.getItem is not a function" caused by broken Node.js
// localStorage polyfill injected by some system-level tools.
export async function register() {
  if (typeof globalThis.localStorage === "undefined" ||
      typeof (globalThis as any).localStorage?.getItem !== "function") {
    (globalThis as any).localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0,
      key: () => null,
    };
  }
}
