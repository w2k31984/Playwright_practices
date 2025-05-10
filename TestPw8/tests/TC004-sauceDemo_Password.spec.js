import { test, expect } from "@playwright/test";

test("SauceDemo test de campo usuario sin dato en blanco.", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("");
  await page.locator('[data-test="login-button"]').click();
  await page.screenshot({ path: "./screenshots/sinUsuario.png" });

  //Mensaje de error de credenciales incorrectas
  var texto_error = await page.locator('[data-test="error"]').textContent();

  //Revision del texto obtenido
  expect(texto_error).toBe("Epic sadface: Password is required");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "./screenshots/mensajeErrorPassword.png" });

  await page.locator('[data-test="error-button"]').click();
  await page.close();
});
