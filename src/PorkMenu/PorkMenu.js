import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import PorkTable from '../PorkTable/PorkTable';

import './PorkMenu.css';

class PorkMenu extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header/>
                <Navbar/>
                <div className='pork-menu-container'>
                    <h3>Gourmet Pork</h3>
                    <hr/>
                    <div className='menu-content'>
                        <PorkTable pork={this.props.pork}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PorkMenu;