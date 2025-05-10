import { test, expect } from "@playwright/test"; //Indicar playwright que es un test

test("Ingresar a la web de Mercado Libre Argentina", async ({ page }) => {
  //Ir a la web de Mercado Libre Argentina y abrir dicha pagina
  await page.goto("https://www.mercadolibre.com.ar/");

  //Ingresar a la seccion de busqueda de productos y buscando un producto.
  await page.locator("#cb1-edit").fill("Linternas");

  //Hacer click en la seccion de busqueda
  await page.locator("#cb1-edit").press("Enter");

  //Colocando espera de 6 segundos no se recomienda utilizar en produccion
  //await page.waitForTimeout(6000);

  //Tomar una captura de pantalla
  await page.screenshot({ path: "./screenshots/screenshot.png" });

  //cerrar el navegador
  await page.close();
});
