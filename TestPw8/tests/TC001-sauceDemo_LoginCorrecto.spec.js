import { test, expect } from "@playwright/test";

test("SauceDemo test de usuario con credenciales validas", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  /////////////////////////// test de usuario válido
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.screenshot({ path: "./screenshots/CredencialesCorrectas.png" });

  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
