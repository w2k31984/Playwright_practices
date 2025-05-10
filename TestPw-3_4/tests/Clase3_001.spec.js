import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Formulario de ingreso con credenciales", async ({ page }) => {
  await page.goto("https://institutoweb.com.ar/test/login.html");
  await page.locator("#tuusuario ").fill(faker.person.firstName());
  await page.locator("#tuclave").fill(faker.internet.password());
  await page.locator("#tumail").fill(faker.internet.email());
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./screenshots/test_001.png" });
  //await page.locator("//button[normalize-space()='Ingresar']").click();
  await page.getByRole("button", { name: "Ingresar" }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./screenshots/test_002.png" });
  await page.waitForTimeout(3000);

  //Obteniendo el texto del encabezado de la pagina
  var encabezado = await page.locator("body > h3").textContent();
  //Mostrar el valor de la variable en la terminal
  console.log(encabezado);
  //Comparacion del texto obtenido con el texto esperado CON control de mayusculas y minusculas
  //expect(encabezado).toEqual("Acceso correcto!");
  //Comparacion del texto obtenido con el texto esperado SIN control de mayusculas y minusculas
  expect(encabezado).toMatch(/Acceso CORRECTO!/i);

  await page.waitForTimeout(3000);
  await page.locator("#volver").click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./screenshots/test_003.png" });
  await page.close();
});
