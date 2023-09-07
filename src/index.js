import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from "./config.js";

const app = express(); //Creaamos una instancia de express para poder usar sus metodos y propiedades

app.use(express.json()); //Para que express pueda entender los datos que le enviamos en formato json

app.use(paymentRoutes)//Usamos el router que creamos en el archivo payment.routes.js

app.listen(PORT, () => console.log("Server running on port", PORT)); //Levantamos el servidor en el puerto 3000
