import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MeatCard.css';

class MeatCard extends Component {
    render() {
        return (
            <>
                
                <Link 
                    exact 
                    to='/steak-menu' 
                    className='steak-card card'
                >
                    <h3>Gourmet Steaks</h3>
                </Link>
                
                <div className='seafood-card card'>
                    <h3>Gourmet Seafood</h3>
                </div>
                <div className='chicken-card card'>
                    <h3>Gourmet Chicken</h3>
                </div>
                <div className='pork-card card'>
                    <h3>Gourmet Pork</h3>
                </div>
            </>
        )
    }
}

export default MeatCard
