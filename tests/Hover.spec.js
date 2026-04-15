const { test, expect } = require("@playwright/test");

test("hover the link", async function ({ page }) {
  await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
  await page.locator("#menu-item-7128").hover();
  await page.waitForTimeout(3000);
  await page.locator("#menu-item-7132").click();
  const heading = await page.getByRole("heading", {
    name: "Free Machine Learning Ebooks",
  });
  await page.waitForTimeout(3000);
  await expect(heading).toBeVisible();
  await page.waitForTimeout(3000);
});
