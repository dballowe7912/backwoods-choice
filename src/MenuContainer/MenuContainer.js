import React, { Component } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './MenuContainer.css';

class MenuContainer extends Component {
    render() {
        return (
            <div className='menu-container'>
                <Header/>
                <Navbar/>
                <h3>{this.props.title}</h3>
                <hr/>
                <div className='menu-content'>
                    <table>
                        <thead>
                            <tr className='table-head'>
                                <th className='name'>Portion</th>
                                <th className='quantity'>Qty</th>
                                <th className='weight'>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(item => (
                            <tr key={item.name}>
                                <td className='name'>{item.name}</td>
                                <td className='quantity'>{item.quantity}</td>
                                <td className='weight'>{item.weight}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                        <div className='table-footer'>
                            <div className='price'>
                                <h4>${this.props.price.toFixed(2)}</h4>
                            </div>
                        </div>
                </div>
                <div className="paypal-container">
                    <PayPalButton
                        amount={this.props.price}
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                            orderId: data.orderID
                            })
                        });
                        }}
                        options={{
                        clientId: "PRODUCTION_CLIENT_ID"
                        }}
                    />
                </div>                
            </div>
        )
    }
}

export default MenuContainer
