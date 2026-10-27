export function checkProfileHealth(profile) {
  const checks = [
    {
      label: "Profile data",
      passed: Boolean(profile?.name && profile?.role && profile?.location),
    },
    {
      label: "Contact link",
      passed: typeof profile?.email === "string" && profile.email.includes("@"),
    },
    {
      label: "Featured work",
      passed: Array.isArray(profile?.projects) && profile.projects.length > 0,
    },
  ];

  return {
    healthy: checks.every((check) => check.passed),
    checks,
    checkedAt: new Date().toISOString(),
  };
}
