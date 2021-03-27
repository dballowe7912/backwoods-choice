import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';

import './ContactPage.css';

class ContactPage extends Component {
    render() {
        return (
            <div className='contact-page'>
                <Header/>
                <Navbar/>
                <div className='contact-info'>
                    <div>Terry Wayne</div>
                    <div>903-259-8466</div>
                </div>
            </div>
        )
    }
}

export default ContactPage;
