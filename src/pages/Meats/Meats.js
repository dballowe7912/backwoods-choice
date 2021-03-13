import React, { Component } from 'react';
import Header from '../../Header/Header';
import MeatCard from '../../MeatCard/MeatCard';
import Navbar from '../../Navbar/Navbar';
import './Meats.css';

class Meats extends Component {
    render() {
        return (
            <div className='meat-page-container'>
                <Header/>
                <Navbar/>
                <div className='meats'>
                    <MeatCard/>
                </div>
            </div>
        )
    }
}

export default Meats;
