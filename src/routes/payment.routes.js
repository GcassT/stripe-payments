import {Router} from "express";
import { crearSesionDePago } from "../controllers/payment.controller.js";

const router = Router(); //Creamos una instancia de router para poder usar sus metodos y 

router.get("/crear-orden-compra", crearSesionDePago); //Creamos una ruta para crear una orden de compra
router.get("/compra_exitosa", (req, res) => (res.send("Pago exitoso"))); //Creamos una ruta para cuando el pago sea exitoso
router.get("/compra_fallida", (req, res) => (res.send("Pago fallido"))); //Creamos una ruta para cuando el pago sea fallido

export default router; //Exportamos el router para poder usarlo en otros archivos