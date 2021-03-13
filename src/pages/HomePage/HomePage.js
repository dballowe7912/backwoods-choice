import React, { Component } from 'react';
import SlidesContainer from '../../SlidesContainer/SlidesContainer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';

import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className='HomePage'>
                <Header className='Header'/>
                <Navbar className='Navbar'/>
                <SlidesContainer/>
            </div>
        )
    }
}

export default HomePage;
