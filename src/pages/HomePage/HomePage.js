import React, { Component } from 'react';
import SlidesContainer from '../../SlidesContainer/SlidesContainer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';

import image4 from '../../assets/photos/image-2.jpg';
import image5 from '../../assets/photos/image-3.jpg';
import image6 from '../../assets/photos/image-4.jpg';

import './HomePage.css';
import Footer from '../../Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Header />
                <Navbar />
                <div className='homePage-slideContainer'>
                    <SlidesContainer 
                        interval={3000}
                        images={[
                            image4,
                            image5,
                            image6,
                        ]}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;
