import { checkProfileHealth } from "./healthCheck.js";

const profile = {
  name: "Alex Morgan",
  role: "Product designer & creative developer",
  location: "Brooklyn, New York",
  email: "hello@alexmorgan.design",
  projects: ["Northstar", "Sonder", "Arc"],
};

const status = document.querySelector("[data-health-status]");
const checkList = document.querySelector("[data-health-list]");
const checkedAt = document.querySelector("[data-health-time]");
const runButton = document.querySelector("[data-run-health]");

function renderHealthCheck() {
  const result = checkProfileHealth(profile);
  status.textContent = result.healthy ? "All systems healthy" : "Attention needed";
  status.classList.toggle("is-warning", !result.healthy);
  checkList.innerHTML = result.checks
    .map(
      (check) => `
        <li class="${check.passed ? "is-passed" : "is-failed"}">
          <span class="check-icon" aria-hidden="true">${check.passed ? "✓" : "!"}</span>
          <span>${check.label}</span>
          <span class="check-result">${check.passed ? "Pass" : "Review"}</span>
        </li>
      `,
    )
    .join("");
  checkedAt.textContent = `Last checked ${new Date(result.checkedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

runButton.addEventListener("click", renderHealthCheck);
renderHealthCheck();
