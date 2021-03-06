import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MeatCard.css';

class MeatCard extends Component {
    render() {
        return (
            <>
                
                <Link
                    className='steak-card card'
                    to='/steak-menu' 
                >
                    <h3>Steaks</h3>
                </Link>
                
                <Link 
                    className='seafood-card card' 
                    to='/seafood-menu' 
                >
                    <h3>Seafood</h3>
                </Link>
                <Link 
                    className='chicken-card card' 
                    to='/chicken-menu'
                >
                    <h3>Chicken</h3>
                </Link>
                <Link 
                    className='pork-card card' 
                    to='/pork-menu' 
                >
                    <h3>Pork</h3>
                </Link>
            </>
        )
    }
}

export default MeatCard
