import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SeafoodTable from '../SeafoodTable/SeafoodTable';

import './SeafoodMenu.css';

class SeafoodMenu extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header/>
                <Navbar/>
                <div className='seafood-menu-container'>
                    <h3>Gourmet Seafood</h3>
                    <hr/>
                    <div className='menu-content'>
                        <SeafoodTable seafood={this.props.seafood}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SeafoodMenu;