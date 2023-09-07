import Stripe from "stripe"

//Configuramos stripe antes de usarlo

const stripe = new Stripe('sk_test_51Nn1oCLvwEnXJnI5PG6P8OF8CXbq6UFCaWASHtDMsvW4KmBpo32Tze31fU8qMiSjXVwOpzpSB3db3fNJLhgUm0YP00ifjJ0MQr')

export const crearSesionDePago = async (req, res) => {
   const sesionPago = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], //Metodo de pago
        line_items: [
            {
                dato_precio: {
                    divisa: 'usd',
                    precio_unidad: 20000,
                dato_producto: {
                    nomnbre: 'Torre de computadora',
                    descripcion: 'Torre de computadora gamer con luces RGB',
                },
                cantidad: 1,
            },
                dato_precio: {
                    divisa: 'usd',
                    precio_unidad: 3000,
                dato_producto: {
                    nomnbre: 'Monitor',
                    descripcion: 'Monitor de 24 pulgadas',
                    
                },
                cantidad: 1,
            },
        },
    ], 

        mode: 'payment', //Modo de pago
        compra_exitosa_url: 'http://localhost:3000/compra_exitosa', //URL de redireccionamiento cuando el pago sea exitoso
        compra_fallida_url: 'http://localhost:3000/compra_fallida', //URL de redireccionamiento cuando el pago sea fallido
    })

    return res.json(sesionPago)
}