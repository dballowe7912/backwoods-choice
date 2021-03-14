import React, { Component } from 'react';
import { seafood } from '../data';

import './SeafoodTable.css';

class SeafoodTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr className='table-head'>
                            <th className='name'>Seafood</th>
                            <th className='quantity'>Quantity</th>
                            <th className='weight'>Net Wt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seafood.map(item => (
                        <tr>
                            <td className='name'>{item.name}</td>
                            <td className='quantity'>{item.quantity}</td>
                            <td className='weight'>{item.weight}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SeafoodTable;