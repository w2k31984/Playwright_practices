import { test, expect } from "@playwright/test";

test("Test visual con playwright", async ({ page }) => {
  await page.goto("https://www.institutoweb.com.ar/test/test2024/checkout/");
  //await page.waitForTimeout(5000);

  expect(await page.screenshot({fullPage:true})).toMatchSnapshot("test-image.png")




});
//Ejecutar el test por primera vez para obtener las imagenes de referencia maestras.
//npx playwright test TC009-TestVisual.spec.js --headed --update-snapshots
//Para validar las imagenes y comparar las actuales con las de referencia maestras.
//npx playwright test TC009-TestVisual.spec.js --headed
//npx playwright test TC009-TestVisual.spec.js
//URL de pruebas: https://www.institutoweb.com.ar/test/test2024/checkout/
