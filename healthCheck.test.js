import test from "node:test";
import assert from "node:assert/strict";
import { checkProfileHealth } from "./healthCheck.js";

const healthyProfile = {
  name: "Alex Morgan",
  role: "Product designer",
  location: "Brooklyn",
  email: "hello@example.com",
  projects: ["Northstar"],
};

test("reports a healthy profile when required content is present", () => {
  const result = checkProfileHealth(healthyProfile);
  assert.equal(result.healthy, true);
  assert.deepEqual(result.checks.map((check) => check.passed), [true, true, true]);
  assert.match(result.checkedAt, /^\d{4}-\d{2}-\d{2}T/);
});

test("reports failed checks for incomplete profile data", () => {
  const result = checkProfileHealth({ ...healthyProfile, email: "not-an-email", projects: [] });
  assert.equal(result.healthy, false);
  assert.deepEqual(result.checks.map((check) => check.passed), [true, false, false]);
});
