import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { steaks } from '../data';

import './SteakMenu.css';

const SteakMenu = (props) => {
    return (
        <div className='main-container'>
            <Header/>
            <Navbar/>
            <div className='menu-container'>
                <h3>Gourmet Steaks</h3>
                <hr/>
                <div className='menu-content'>
                    <table>
                        <thead>
                            <tr className='table-head'>
                                <th className='name'>Cut</th>
                                <th className='quantity'>Qty</th>
                                <th className='weight'>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steaks.map(item => (
                            <tr>
                                <td className='name'>{item.name}</td>
                                <td className='quantity'>{item.quantity}</td>
                                <td className='weight'>{item.weight}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SteakMenu;