import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/meats'>Meats</Link></li>
                    <li><Link className='link' to='/about'>About</Link></li>
                    <li><Link className='link' to='/contact'>Contact</Link></li>                
                </ul>
            </div>
        )
    }
}

export default Navbar
