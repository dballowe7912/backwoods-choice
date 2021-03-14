import React, { Component } from 'react'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ChickenTable from '../ChickenTable/ChickenTable';

class ChickenMenu extends Component {
    render() {
        return (
            <div>
                <div className='main-container'>
                <Header/>
                <Navbar/>
                <div className='steak-menu-container'>
                    <h3>Gourmet Chicken</h3>
                    <hr/>
                    <div className='menu-content'>
                        <ChickenTable/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ChickenMenu;