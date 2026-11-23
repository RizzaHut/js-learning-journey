export const withSubmit = true;

export function describe(suiteName, fn) {
  console.log(`\n\x1b[1m=== ${suiteName} ===\x1b[0m`);
  fn();
}

export function it(testName, fn) {
  try {
    fn();
    console.log(`\x1b[32m✔ PASS:\x1b[0m ${testName}`);
  } catch (err) {
    console.log(`\x1b[31m✖ FAIL:\x1b[0m ${testName}`);
    console.log(err.message);
  }
}

export const assert = {
  strictEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(
        `  Expected : \x1b[32m${JSON.stringify(expected)}\x1b[0m\n` +
        `  Actual   : \x1b[31m${JSON.stringify(actual)}\x1b[0m` +
        (message ? `\n  Note     : ${message}` : "")
      );
    }
  },
  deepEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        `  Expected : \x1b[32m${JSON.stringify(expected)}\x1b[0m\n` +
        `  Actual   : \x1b[31m${JSON.stringify(actual)}\x1b[0m` +
        (message ? `\n  Note     : ${message}` : "")
      );
    }
  },
  isTrue(value, message) {
    if (value !== true) {
      throw new Error(`  Expected: true, Actual: ${value}`);
    }
  },
  isFalse(value, message) {
    if (value !== false) {
      throw new Error(`  Expected: false, Actual: ${value}`);
    }
  }
};
