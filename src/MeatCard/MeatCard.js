import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MeatCard.css';

class MeatCard extends Component {
    render() {
        return (
            <>
                
                <Link
                    className='steak-card card'
                    exact 
                    to='/steak-menu' 
                >
                    <h3>Steaks</h3>
                </Link>
                
                <div className='seafood-card card'>
                    <h3>Seafood</h3>
                </div>
                <div className='chicken-card card'>
                    <h3>Chicken</h3>
                </div>
                <div className='pork-card card'>
                    <h3>Pork</h3>
                </div>
            </>
        )
    }
}

export default MeatCard
