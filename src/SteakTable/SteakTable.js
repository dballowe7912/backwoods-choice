import React, { Component } from 'react';
import { steaks } from '../data';

import './SteakTable.css';

class SteakTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr className='table-head'>
                            <th className='name'>Steak</th>
                            <th className='quantity'>Quantity</th>
                            <th className='weight'>Net Wt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tbody>
                            {steaks.map(item => (
                            <tr>
                                <td className='name'>{item.name}</td>
                                <td className='quantity'>{item.quantity}</td>
                                <td className='weight'>{item.weight}</td>
                            </tr>
                            ))}
                        </tbody>>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SteakTable;
