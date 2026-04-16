const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.button = page.locator("#submitLoginBtn");
    this.logout = page.locator("#logout");
  }

  async logininfo(emil, pass) {
    await this.email.fill(emil);
    await this.password.fill(pass);
    await this.button.click();

    // Ensures the network is quiet and the redirect is happening
    await this.page.waitForLoadState("networkidle");

    // Corrected assertion: await + correct spelling
    await expect(this.logout).toBeVisible();
  }
}

module.exports = LoginPage;
