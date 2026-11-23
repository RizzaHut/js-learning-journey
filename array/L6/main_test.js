import { describe, it, assert, withSubmit } from "./unit_test.js";
import { getLogViews } from "./main.js";

describe("getLogViews returns preview, remaining, and recent logs", () => {
  const runCases = [
    {
      logs: [
        "error at line 10",
        "warning at line 15",
        "the dev who wrote line 21 should be fired",
        "debug info",
        "error at line 20",
        "user login",
      ],
      expected: {
        preview: [
          "error at line 10",
          "warning at line 15",
          "the dev who wrote line 21 should be fired",
        ],
        remaining: ["debug info", "error at line 20", "user login"],
        recent: ["error at line 20", "user login"],
      },
    },
    {
      logs: ["error: bug found", "warning: bug promoted to feature"],
      expected: {
        preview: ["error: bug found", "warning: bug promoted to feature"],
        remaining: [],
        recent: ["error: bug found", "warning: bug promoted to feature"],
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      logs: [],
      expected: {
        preview: [],
        remaining: [],
        recent: [],
      },
    },
    {
      logs: ["server started", "request received", "request completed"],
      expected: {
        preview: ["server started", "request received", "request completed"],
        remaining: [],
        recent: ["request received", "request completed"],
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  testCases.forEach(({ logs, expected }, i) => {
    it(`Test #${i}: ${logs.length} logs`, () => {
      const originalLogs = [...logs];
      const result = getLogViews(logs);
      assert.deepEqual(result, expected);
      assert.deepEqual(logs, originalLogs, "The input logs must not change");
    });
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
