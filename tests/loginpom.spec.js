const { test, expect } = require("@playwright/test");
const loginpage = require("../pages/login");

test("loginpage pom", async ({ page }) => {
  await page.goto(
    "https://qa-automation-practice.netlify.app/auth_ecommerce.html",
  );

  const logininfo1 = new loginpage(page);

  await logininfo1.logininfo("admin@admin.com", "admin123");
});

test("loginpage pom 2", async ({ page }) => {
  await page.goto(
    "https://qa-automation-practice.netlify.app/auth_ecommerce.html",
  );

  const logininfo1 = new loginpage(page);

  await logininfo1.logininfo("admin@admin2.com", "admin123");
});
