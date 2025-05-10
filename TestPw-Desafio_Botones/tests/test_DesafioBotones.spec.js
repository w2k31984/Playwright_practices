//npx Playwright codegen https://institutoweb.com.ar/test/Login2.html 

test('test botones duplicados', async ({ page }) => {
  await page.goto('https://institutoweb.com.ar/test/Login2.html');
  await page.locator('#tuusuario').click();
  await page.locator('#tuusuario').fill('w2k31984');
  await page.locator('input[name="tuclave"]').click();
  await page.locator('input[name="tuclave"]').fill('%Nostromo20');
  await page.locator('#tumail').click();
  await page.locator('#tumail').fill('test@prueba123.com');
  await page.getByRole('button', { name: 'Ingresar' }).first().click(); //Primer botón Ingresar
  await page.getByRole('button', { name: 'Ingresar' }).nth(1).click(); //Segundo botón Ingresar
  await page.getByRole('button', { name: 'Cancelar' }).first().click(); //Primer Boton de Cancelar
  await page.locator('#btningresar').click();//Tercer botón Ingresar
  await page.getByRole('button', { name: 'Cancelar' }).nth(1).click(); //Segundo botón de Cancelar
});