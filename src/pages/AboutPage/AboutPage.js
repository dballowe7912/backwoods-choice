import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import steakPlate from '../../assets/photos/steak-plate.jpg';

import './AboutPage.css';
import Footer from '../../Footer/Footer';

class AboutPage extends Component {
    render() {
        return (
            <div className='about-page'>
               <Header/>
               <Navbar/>
               <div className='about-container'>
                    <img 
                        className='about-img'
                        src={steakPlate}
                        alt='about-img' 
                    />
                    <div className='mission'>
                        <h3 className='mission-title'>Our Mission</h3>
                    <p className='about-text'>Forging through to bring our customers a quality product at a third of the market value, satisfaction is guaranteed. 
                        Our steaks are USDA inspected to insure quality, and all of our product is guarenteed for flavor and tenderness, 
                        and vacuum sealed to prevent freezer burn.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutPage;

