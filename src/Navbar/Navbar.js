import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Meats</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
