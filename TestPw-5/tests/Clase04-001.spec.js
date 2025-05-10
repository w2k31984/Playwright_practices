const fs = require("fs"); // File system para leer y escribir archivos
const { DateTime } = require("luxon"); // Para trabajar con fechas
const { test, expect } = require("@playwright/test"); // Se cambia a require para mantener coherencia

// Función de escritura en el archivo .log
function escribeLog(mensaje) {
  const timestamp = DateTime.now()
    .setZone("America/El_Salvador")
    .toFormat("yyyy-MM-dd HH:mm:ss");

  fs.appendFileSync("tests.log", `${timestamp} - ${mensaje}\n`);
}

test("Grabación de datos en un archivo", async ({ page }) => {
  escribeLog("Inicio del test");

  await page.goto("https://www.saucedemo.com/");
  await page.waitForLoadState("load"); // Esperar a que cargue completamente
  escribeLog("Página cargada correctamente");

  // Verificando el título de la página
  const titulo = await page.title();
  expect(titulo).toBe("Swag Labs");
  escribeLog("Título de la página verificado");

  await page.screenshot({
    path: "screenshots/testTitulo.png",
    fullPage: true,
  });
  escribeLog("Captura de pantalla guardada");

  await page.close();
  escribeLog("Test finalizado");
  escribeLog(
    "-------------------------------------------------------------------------------------------"
  );
});
