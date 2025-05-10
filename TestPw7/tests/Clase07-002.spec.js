import { test, expect } from "@playwright/test";

test("Test de ingreso a la landing page", async ({ page }) => {
  await page.goto("https://example.com");

  try {
    //Validando el test
    //Damos click a un boton inexistente
    //await page.locator("button-inexistente").click(timeout = 5000);
    //Otra forma de dar click a un boton
    await page.click("button-inexistente", { timeout: 1000 });
    console.log("click realizado con exito");
  } catch (error) {
    //codigo a ejecutar en caso de error
    console.log("no se pudo realizar el click");
    console.log(error);
  }
  console.log("Continua con el test");
});
