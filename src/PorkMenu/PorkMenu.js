import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './PorkMenu.css';

class PorkMenu extends Component {
    render() {
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
                                    <th className='weight'>Net Wt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data.map(item => (
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