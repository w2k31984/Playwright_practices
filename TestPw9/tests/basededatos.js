//Conectarme a la base de datos
const mysql = require("mysql2");

//Creando la conexión a la base de datos
const connection = mysql.createConnection({
  host: "cursotesting.com.ar",
  user: "testing",
  password: "cursoperformance",
  database: "productos",
});
//Conectando a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectarse a la base de datos:", err);
    return;
  } else {
    console.log("Conectado a la base de datos de forma exitosa!");
  }
  ///////////////////Busqueda del precio de un producto//////////////////////
  const busqueda =
    "SELECT * FROM ecommerce WHERE nombre  LIKE 'Sauce Labs Bike Light'";
  //////////////////Ejecución de la consulta de busqueda con query//////////////////////
  connection.query(busqueda, (error, results) => {
    if (error) {
      console.error("Error al realizar la consulta:", error);
      return;
    }
    //Imprimiendo el resultado de la consulta
    console.log("Resultado de la consulta:", results);
    //Cerrando la conexión a la base de datos
    connection.end((err) => {
      if (err) {
        console.error("Error al cerrar la conexión:", err);
      } else {
        console.log("Conexión cerrada correctamente.");
      }
    });
  });
});
