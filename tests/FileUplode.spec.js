const { test, expect } = require("@playwright/test");

test("file uplode", async function ({ page }) {
  await page.goto("https://qa-automation-practice.netlify.app/file-upload");
  await page
    .locator("#file_upload")
    .setInputFiles(
      "/home/prajwalgp/Downloads/mythical-dragon-beast-anime-style-min.jpg",
    );
    await page.getByRole("button", { name: "submit" }).click();

    await expect(page.locator("#file_upload_response")).toHaveText(
      'You have successfully uploaded "mythical-dragon-beast-anime-style-min.jpg"',
    );
});
