import test from 'node:test';
import nodeAssert from 'node:assert/strict';

export const describe = test.describe;
export const it = test.it;
export const withSubmit = true;

export const assert = {
  strictEqual: (actual, expected) => nodeAssert.strictEqual(actual, expected),
  deepStrictEqual: (actual, expected) => nodeAssert.deepStrictEqual(actual, expected),
  equal: (actual, expected) => nodeAssert.equal(actual, expected),
  deepEqual: (actual, expected) => nodeAssert.deepEqual(actual, expected),
};
