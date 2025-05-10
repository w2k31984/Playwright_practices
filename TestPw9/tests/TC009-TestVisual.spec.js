import { test, expect } from "@playwright/test";

test("Test visual con playwright", async ({ page }) => {
  await page.goto("https://www.institutoweb.com.ar/test/login.html");
  //await page.waitForTimeout(3000);
  
  expect(await page.screenshot()).toMatchSnapshot("test-image.png")
 



});
//Ejecutar el test por primera vez para obtener las imagenes de referencia maestras.
//npx playwright test TC009-TestVisual.spec.js --headed --update-snapshots
//Para validar las imagenes y comparar las actuales con las de referencia maestras.
//npx playwright test TC009-TestVisual.spec.js --headed
