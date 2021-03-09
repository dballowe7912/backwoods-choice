import React, { Component } from 'react';
import MeatCard from '../MeatCard/MeatCard';

class Meats extends Component {
    render() {
        return (
            <div className='meats' 
                style={{
                    height: '100vh',
                    display: 'grid',
                    gridColumn: 'repeat(2, 1fr',
                    gap: '10px',
                    gridAutoRows: 'minmax(100px, auto)',
                }}
            >
                <MeatCard/>
            </div>
        )
    }
}

export default Meats;
