import React, { Component } from 'react';
import { pork } from '../data';

import './PorkTable.css';

class PorkTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr className='table-head'>
                            <th className='name'>Pork</th>
                            <th className='quantity'>Quantity</th>
                            <th className='weight'>Net Wt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pork.map(item => (
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

export default PorkTable;