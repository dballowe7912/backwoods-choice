import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { seafood } from '../data';

import './SeafoodMenu.css';

class SeafoodMenu extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header/>
                <Navbar/>
                <div className='menu-container'>
                    <h3>Gourmet Seafood</h3>
                    <hr/>
                    <div className='menu-content'>
                        <table>
                            <thead>
                                <tr className='table-head'>
                                    <th className='name'>Seafood</th>
                                    <th className='weight'>Net Wt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seafood.map(item => (
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

export default SeafoodMenu;