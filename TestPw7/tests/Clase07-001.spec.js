import { test, expect } from "@playwright/test";
import { time } from "console";
import fs from "fs/promises";

test.describe("Test de validacion de ingreso de usuarios con credenciales", () => {
  let usuarios = []; //creando la variable sin datos para todos los test.

  //Antes de todo el test
  test.beforeAll(
    "Conexion del archivo json de datos de usuarios",
    async ({}) => {
      var datos = await fs.readFile("./data/datosTest.csv"); //relacion con el archivo de datos.
      usuarios = datos.toString().split(/\r?\n/); //datos de la muestra vienen en formato csv
      usuarios = usuarios.slice(1); //se elimina el encabezado del archivo
      console.log(usuarios); //Ver los datos en consola.
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
    for (var linea of usuarios) {
      //separar los tres datos de usuario, credencial y de email
      var [usuario, clave, email] = linea.split(",");

      await page.locator("#tuusuario").fill(usuario);
      await page.locator("#tuclave").fill(clave);
      await page.locator("#tumail").fill(email);
      //await page.waitForTimeout(5000);
      await page.getByRole("button", { name: "Ingresar" }).click(timeout = 5000);
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
});
