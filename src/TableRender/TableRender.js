import React, { Component } from 'react'

class TableRender extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {steaks} = this.props;
        return (
            <div>
                <tbody>
                    {steaks.map(item => (
                    <tr>
                        <td className='name'>{item.name}</td>
                        <td className='quantity'>{item.quantity}</td>
                        <td className='weight'>{item.weight}</td>
                    </tr>
                    ))}
                </tbody>
            </div>
        )
    }
}

export default TableRender
