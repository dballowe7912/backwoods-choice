import React, { Component } from 'react';
import SlidesContainer from '../../SlidesContainer/SlidesContainer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';

import './HomePage.css';
import Footer from '../../Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Header />
                <Navbar />
                <div className='slideshow-container'>
                    <SlidesContainer />
                </div>
                <div>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default HomePage;
