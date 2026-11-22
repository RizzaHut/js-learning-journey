import { describe, it, assert, withSubmit } from "./unit_test.js";
import { User } from "./main.js";

describe("User", () => {
  const runCases = [
    {
      name: "Patrick",
      username: "starpat64",
      expectedUsername: "@starpat64",
      updatedUsername: "PinkStar",
      expectedUpdated: "@pinkstar",
    },
    {
      name: "Sandy",
      username: "texassquirrel",
      expectedUsername: "@texassquirrel",
      updatedUsername: "KarateSandy",
      expectedUpdated: "@karatesandy",
    },
  ];

  const submitCases = runCases.concat([
    {
      name: "Plankton",
      username: "chumbucketceo",
      expectedUsername: "@chumbucketceo",
      updatedUsername: "Plan_K_Ton1",
      expectedUpdated: "@plan_k_ton1",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  testCases.forEach(
    ({
      name,
      username,
      expectedUsername,
      updatedUsername,
      expectedUpdated,
    }) => {
      it(`Should return ${expectedUsername} for ${username}`, () => {
        const user = new User(name, username);
        assert.strictEqual(user.username, expectedUsername);

        user.username = updatedUsername;
        assert.strictEqual(user.username, expectedUpdated);
      });
    },
  );

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
