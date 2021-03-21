import React, { useEffect, useRef } from 'react';

function PayPal() {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: 'Steaks',
                            amount: {
                                currency_code: 'USD',
                                value: 449.00
                            },
                            invoice_id: '1'
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, []);

    return (
        <div className='paypal'>
            <div style={{width: '100%'}}ref={paypal}></div>
        </div>
    )
}
export default PayPal;