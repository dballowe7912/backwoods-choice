import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import ScrollBanner from '../../ScrollBanner/ScrollBanner';
import SlidesContainer from '../../SlidesContainer/SlidesContainer';
import Footer from '../../Footer/Footer';

import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Header />
                <Navbar />
                <div className='main-content-homepage'>
                    <ScrollBanner/>
                    <div className='slideshow-container'>
                        <SlidesContainer />
                    </div>
                    <p>Your East Texas meat supplier, where quality meets value and delivered with a side of southern hospitality</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;
