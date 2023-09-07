import Stripe from "stripe"

//Configuramos stripe antes de usarlo

const stripe = new Stripe('sk_test_51Nn1oCLvwEnXJnI5PG6P8OF8CXbq6UFCaWASHtDMsvW4KmBpo32Tze31fU8qMiSjXVwOpzpSB3db3fNJLhgUm0YP00ifjJ0MQr')

export const crearSesionDePago = async (req, res) => {
   const sesionPago = await stripe.checkout.sessions.create({
        line_items: [
            {
            price_data: {
                product_data: {
                    name: 'Torre de computadora',
                    description: 'Torre de computadora gamer con luces RGB',
                },
                currency: 'usd',
                unit_amount: 20000, //200.00 dlls
            },
            quantity: 1, //Cantidad de productos
        },
        {
            price_data: {
                product_data: {
                    name: 'Monitor',
                    description: 'Monitor de 24 pulgadas',
                },
                currency: 'usd',
                unit_amount: 3000, //30.00 dlls
            },
            quantity: 2, //Cantidad de productos
        },
        ], 

        mode: 'payment', //Modo de pago
        success_url: 'http://localhost:3000/compra_exitosa', //URL de redireccionamiento cuando el pago sea exitoso
        cancel_url: 'http://localhost:3000/compra_fallida', //URL de redireccionamiento cuando el pago sea fallido
    })

    return res.json(sesionPago);
}