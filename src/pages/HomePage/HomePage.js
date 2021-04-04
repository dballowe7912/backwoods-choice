import React, { Component } from 'react';
import SlidesContainer from '../../SlidesContainer/SlidesContainer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import imageFour from '../../assets/photos/image-4.jpg';

import './HomePage.css';
import Footer from '../../Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Header />
                <Navbar />
                <div className='main-content-homepage'>
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
