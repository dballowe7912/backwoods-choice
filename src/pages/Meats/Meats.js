import React, { Component } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import MeatCard from '../../MeatCard/MeatCard';
import Navbar from '../../Navbar/Navbar';
import './Meats.css';

class Meats extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className='meat-page-container'>
                <Header/>
                <Navbar/>
                <div className='meats'>
                    <MeatCard/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Meats;
