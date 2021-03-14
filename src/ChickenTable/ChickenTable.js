import React, { Component } from 'react';
import { chicken } from '../data';

class ChickenTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr className='table-head'>
                            <th className='name'>Chicken</th>
                            <th className='quantity'>Quantity</th>
                            <th className='weight'>Net Wt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chicken.map(item => (
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

export default ChickenTable;
