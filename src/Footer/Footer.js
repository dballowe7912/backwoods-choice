import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='icon-container'>
                    <Link 
                        className='instagram' 
                        to='https://www.instagram.com'
                    >
                    <InstagramIcon/>    
                    </Link>
                    <Link 
                        className='facebook'
                        to='https://www.facebook.com'
                    >
                        <FacebookIcon/>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Footer;