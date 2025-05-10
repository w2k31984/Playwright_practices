import { test, expect } from "@playwright/test";

test("SauceDemo test de usuario con credenciales invalidas", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  //Test de credenciales incorrectas
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("stan");
  await page.locator('[data-test="password"]').fill("secret");
  await page.locator('[data-test="login-button"]').click();

  //Mensaje de error de credenciales incorrectas
  var texto_error = await page.locator('[data-test="error"]').textContent();

  //Revision del texto obtenido
  expect(texto_error).toBe(
    "Epic sadface: Username and password do not match any user in this service"
  );
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "./screenshots/credencialesIncorrectas.png" });

  await page.locator('[data-test="error-button"]').click();
  await page.close();
});
