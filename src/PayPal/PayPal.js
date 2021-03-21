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
                                value: 499.00
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

// import React from "react";
// import ReactDOM from "react-dom"

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

// class PayPal extends React.Component {
//   createOrder(data, actions) {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: "0.01",
//           },
//         },
//       ],
//     });
//   }

//   onApprove(data, actions) {
//     return actions.order.capture();
//   }

//   render() {
//     return (
//       <PayPalButton
//         createOrder={(data, actions) => this.createOrder(data, actions)}
//         onApprove={(data, actions) => this.onApprove(data, actions)}
//       />
//     );
//   }
// }

// export default PayPal;