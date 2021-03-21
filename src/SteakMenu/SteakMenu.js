import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './SteakMenu.css';
import PayPal from '../PayPal/PayPal';

class SteakMenu extends Component {
    render(){
        return (
            <div className='main-container'>
            <Header/>
            <Navbar/>
                <div className='menu-container'>
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
                                <tr>
                                    <td className='name'>{item.name}</td>
                                    <td className='quantity'>{item.quantity}</td>
                                    <td className='weight'>{item.weight}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                            <div className='table-footer'>
                                <div className='price'>
                                    <h4>Package Price $449.00</h4>
                                </div>
                            </div>
                    </div>
                </div>
            <div className='paypal-container'>
                <PayPal/>
            </div>
            </div>
        )
    }
}

export default SteakMenu;