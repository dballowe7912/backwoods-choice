import React, { Component } from 'react'
import slideOne from '../assets/photos/slideOne.jpg';

import './PhotoSlide.css';

class PhotoSlide extends Component {
    render() {
        return (
            <div className='photoSlide'>
                <img src={slideOne} />
                <h5>Choice Beef Cuts</h5>
            </div>
        )
    }
}

export default PhotoSlide
