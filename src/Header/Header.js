import React, { Component } from 'react';
import logo from '../assets/logo-2.jpg';

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                {/* <div className='logo'>
                    <img src={logo}/>
                </div> */}
                <div className='header'>
                    <h1>Backwoods Choice</h1>
                </div>
            </div>
        )
    }
}

export default Header
