import React, { Component } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './MenuContainer.css';

class MenuContainer extends Component {
    render() {
        return (
        <div className="menu-page">
            <Header/>
            <Navbar/>
            <div className='menu-container'>
                <h3>{this.props.title}</h3>
                <div className='menu-content'>
                    <table>
                        <thead className='thead-tr'>
                            <tr className='table-head'>
                                <th className='name'>Portion</th>
                                <th className='quantity'>Qty</th>
                                <th className='weight'>Wt</th>
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
                            <div className='price-container'>
                                <h4 className='total-title'>Your Price:</h4>
                                <h4 className='price'>${this.props.price.toFixed(2)}</h4>
                            </div>
                        </div>
                </div>
                <div className="paypal-container">
                    <PayPalButton
                        style={{color: 'silver'}}
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
            <Footer/>
        </div>
        )
    }
}

export default MenuContainer
