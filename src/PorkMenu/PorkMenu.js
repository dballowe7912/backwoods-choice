import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { pork } from '../data';

import './PorkMenu.css';

class PorkMenu extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header/>
                <Navbar/>
                <div className='menu-container'>
                    <h3>Gourmet Pork</h3>
                    <hr/>
                    <div className='menu-content'>
                        <table>
                            <thead>
                                <tr className='table-head'>
                                    <th className='name'>Pork</th>
                                    <th className='weight'>Net Wt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pork.map(item => (
                                <tr>
                                    <td className='name'>{item.name}</td>
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
}

export default PorkMenu;