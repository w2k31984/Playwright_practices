import { test, expect } from "@playwright/test";
import fs from "fs/promises";

test.describe("Test de validacion de ingreso de usuarios con credenciales", () => {
  var usuarios; //creando la variable sin datos para todos los test.

  //Antes del todo el test
  test.beforeAll(
    "Conexion del archivo json de datos de usuarios",
    async ({}) => {
      var datos = await fs.readFile("./data/datosTest.json"); //relacion con el archivo de datos.
      usuarios = JSON.parse(datos); //datos de la muestra vienen en formato json
    }
  );

  test.beforeEach(
    "Conexion a la web con credenciales de usuario",
    async ({ page }) => {
      await page.goto("https://www.institutoweb.com.ar/test/login.html");
      await page.waitForLoadState("load"); // Esperar a que cargue completamente
      await page.screenshot({
        path: "./screeenshots/test1_conexion.png",
        fullPage: true,
      });
    }
  );
  test("Test Principal", async ({ page }) => {
    for (const { usuario, clave, email } of usuarios) {
      //separar los tres datos de usuario, credencial y de email

      await page.locator("#tuusuario").fill(usuario);
      await page.locator("#tuclave").fill(clave);
      await page.locator("#tumail").fill(email);
      await page.waitForTimeout(2000);
      await page.getByRole("button", { name: "Ingresar" }).click();
      await page.screenshot({
        path: "./screeenshots/test2_validacion.png",
        fullPage: true,
      });
      //asercion de validacion de elemento visible
      await expect(
        page.getByRole("link", { name: "Cerrar Sesión" })
      ).toBeVisible();
      await page.getByRole("link", { name: "Cerrar Sesión" }).click();
    }
  });

  /**test.afterEach(
    "Finalizar el navegador y salir de la prueba",
    async ({ page }) => {
      await page.close();
    }
  );
  **/
});
