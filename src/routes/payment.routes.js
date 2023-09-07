import {Router} from "express";
import { crearSesionDePago } from "../controllers/payment.controller.js";

const router = Router(); //Creamos una instancia de router para poder usar sus metodos y 

router.post("/crear-orden-compra", crearSesionDePago); //Creamos una ruta para crear una orden de compra

router.get("/compra_exitosa", (req, res) => (res.redirect('/compraExitosa.html'))); //Creamos una ruta para cuando el pago sea exitoso

router.get("/compra_fallida", (req, res) => (res.redirect('/'))); //Creamos una ruta para cuando el pago sea fallido

export default router; //Exportamos el router para poder usarlo en otros archivos