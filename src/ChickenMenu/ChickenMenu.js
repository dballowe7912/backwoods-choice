import React, { Component } from 'react'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { chicken } from '../data';
class ChickenMenu extends Component {
    render() {
        return (
            <div>
                <div className='main-container'>
                <Header/>
                <Navbar/>
                <div className='menu-container'>
                    <h3>Gourmet Chicken</h3>
                    <hr/>
                    <div className='menu-content'>
                        <table>
                            <thead>
                                <tr className='table-head'>
                                    <th className='name'>Chicken</th>
                                    <th className='weight'>Net Wt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chicken.map(item => (
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
            </div>
        )
    }
}

export default ChickenMenu;