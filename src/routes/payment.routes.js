import {Router} from "express";

const router = express.Router(); //Creamos una instancia de router para poder usar sus metodos y 

router.get("/crear-orden-compra", (req, res) => (res.send("Crear orden de compra"))); //Creamos una ruta para crear una orden de compra
router.get("/Exitoso", (req, res) => (res.send("Pago exitoso"))); //Creamos una ruta para cuando el pago sea exitoso
router.get("/Error", (req, res) => (res.send("Pago fallido"))); //Creamos una ruta para cuando el pago sea fallido

export default router; //Exportamos el router para poder usarlo en otros archivos