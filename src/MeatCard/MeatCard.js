import React, { Component } from 'react';
import './MeatCard.css';

class MeatCard extends Component {
    render() {
        return (
            <>
                <div className='steak-card card'>
                    Gourmet Steaks
                </div>
                <div className='seafood-card card'>
                    Gourmet Seafood
                </div>
                <div className='chicken-card card'>
                    Gourmet Chicken
                </div>
                <div className='pork-card card'>
                    Gourmet Pork
                </div>
            </>
        )
    }
}

export default MeatCard
